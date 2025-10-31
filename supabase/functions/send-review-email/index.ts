import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Input validation schema
const reviewSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  positives: z.string().trim().max(500, "Positives must be less than 500 characters").optional(),
  rating: z.number().int().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Simple rate limiting using in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReviewEmailRequest {
  name: string;
  email: string;
  phone?: string;
  positives?: string;
  rating: number;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    // Check rate limit
    const rateCheck = checkRateLimit(`review:${clientIp}`);
    if (!rateCheck.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          error: "Too many requests. Please try again later.",
          retryAfter: rateCheck.retryAfter 
        }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": String(rateCheck.retryAfter),
            ...corsHeaders 
          },
        }
      );
    }

    const rawData = await req.json();
    
    // Validate and sanitize input
    const validatedData = reviewSchema.parse(rawData);
    const { name, email, phone, positives, rating, message } = validatedData;

    console.log("Processing review email for:", email);

    const stars = "⭐".repeat(rating);

    // Escape HTML to prevent XSS in emails
    const safeName = escapeHtml(name);
    const safePositives = positives ? escapeHtml(positives) : undefined;
    const safeMessage = escapeHtml(message);
    const safePhone = phone ? escapeHtml(phone) : undefined;

    // Send thank you email to customer
    const customerEmail = await resend.emails.send({
      from: "Total Construction and Remodeling <noreply@totalconstructionandremodeling.com>",
      to: [email],
      subject: "Thank You for Your Review!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">Thank You for Your Review!</h1>
          <p>Hi ${safeName},</p>
          <p>We truly appreciate you taking the time to share your experience with us. Your feedback helps us continue to provide excellent service.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Your Review:</h2>
            <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            ${safePositives ? `<p><strong>What you loved:</strong> ${safePositives}</p>` : ''}
            <p><strong>Your feedback:</strong><br/>${safeMessage.replace(/\n/g, '<br/>')}</p>
          </div>
          
          <p>If you'd like to discuss your experience further, please feel free to call us at <a href="tel:+14043866849">(404) 386-6849</a>.</p>
          
          <p>Best regards,<br/>
          <strong>Total Construction and Remodeling Team</strong></p>
        </div>
      `,
    });

    // Send notification to business
    const businessEmail = await resend.emails.send({
      from: "Total Construction Reviews <noreply@totalconstructionandremodeling.com>",
      to: ["info@totalconstructionandremodeling.com", "paul@piszko.com", "patrick.vinces@gmail.com"],
      subject: `New ${rating}-Star Review from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">New Customer Review Received</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Customer Information:</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${safePhone ? `<p><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>` : ''}
            <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            ${safePositives ? `<p><strong>Positives:</strong> ${safePositives}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Review Message:</h3>
            <p>${safeMessage.replace(/\n/g, '<br/>')}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Remember to approve this review in your backend to make it visible on your website.
          </p>
        </div>
      `,
    });

    console.log("Review emails sent successfully:", { customerEmail, businessEmail });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-review-email function:", error);
    
    // Return generic error message to client, log details server-side
    const isValidationError = error.name === "ZodError";
    const errorMessage = isValidationError 
      ? "Invalid form data. Please check your input and try again."
      : "Failed to send email. Please try again later.";
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: isValidationError ? 400 : 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

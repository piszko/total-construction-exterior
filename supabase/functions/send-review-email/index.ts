import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    const { name, email, phone, positives, rating, message }: ReviewEmailRequest = await req.json();

    console.log("Processing review email for:", email);

    const stars = "⭐".repeat(rating);

    // Send thank you email to customer
    const customerEmail = await resend.emails.send({
      from: "Total Construction and Remodeling <onboarding@resend.dev>",
      to: [email],
      subject: "Thank You for Your Review!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">Thank You for Your Review!</h1>
          <p>Hi ${name},</p>
          <p>We truly appreciate you taking the time to share your experience with us. Your feedback helps us continue to provide excellent service.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Your Review:</h2>
            <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            ${positives ? `<p><strong>What you loved:</strong> ${positives}</p>` : ''}
            <p><strong>Your feedback:</strong><br/>${message}</p>
          </div>
          
          <p>If you'd like to discuss your experience further, please feel free to call us at <a href="tel:+14043866849">(404) 386-6849</a>.</p>
          
          <p>Best regards,<br/>
          <strong>Total Construction and Remodeling Team</strong></p>
        </div>
      `,
    });

    // Send notification to business
    const businessEmail = await resend.emails.send({
      from: "Total Construction Reviews <onboarding@resend.dev>",
      to: ["info@totalconstructionandremodeling.com"],
      subject: `New ${rating}-Star Review from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">New Customer Review Received</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Customer Information:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            ${positives ? `<p><strong>Positives:</strong> ${positives}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Review Message:</h3>
            <p>${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Remember to approve this review in your backend to make it visible on your website.
          </p>
        </div>
      `,
    });

    console.log("Review emails sent successfully:", { customerEmail, businessEmail });

    return new Response(
      JSON.stringify({ success: true, customerEmail, businessEmail }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-review-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

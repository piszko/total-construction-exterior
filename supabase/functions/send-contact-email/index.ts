import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, subject, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact email for:", email);

    // Send email to customer
    const customerEmail = await resend.emails.send({
      from: "Total Construction and Remodeling <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">Thank You for Contacting Us!</h1>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Your Message Details:</h2>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
          
          <p>If you need immediate assistance, please call us at <a href="tel:+14043866849">(404) 386-6849</a>.</p>
          
          <p>Best regards,<br/>
          <strong>Total Construction and Remodeling Team</strong></p>
        </div>
      `,
    });

    // Send notification to business
    const businessEmail = await resend.emails.send({
      from: "Total Construction Contact Form <onboarding@resend.dev>",
      to: ["info@totalconstructionandremodeling.com"],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">New Contact Form Submission</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Contact Information:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { customerEmail, businessEmail });

    return new Response(
      JSON.stringify({ success: true, customerEmail, businessEmail }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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

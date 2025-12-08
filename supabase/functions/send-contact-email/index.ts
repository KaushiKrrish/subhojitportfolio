import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact notification email for:", name, email);

    // Send notification email to the portfolio owner
    const ownerEmailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["123id0903@nitrkl.ac.in"],
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <h3 style="margin-top: 0; color: #475569;">Message:</h3>
            <p style="white-space: pre-wrap; color: #334155;">${message}</p>
          </div>
          
          <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log("Owner notification email sent:", ownerEmailResponse);

    // Send confirmation email to the sender
    const confirmationEmailResponse = await resend.emails.send({
      from: "Subhojit Mohanty <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px;">
          <div style="background: white; padding: 30px; border-radius: 12px;">
            <h1 style="color: #6366f1; margin-bottom: 20px;">Hi ${name}! 👋</h1>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;">
              <h3 style="margin-top: 0; color: #475569; font-size: 14px;">Your message:</h3>
              <p style="white-space: pre-wrap; color: #64748b; font-style: italic;">${message}</p>
            </div>
            
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to check out my work or connect with me on social media.
            </p>
            
            <p style="color: #6366f1; font-weight: 600; margin-top: 30px;">
              Best regards,<br>
              Subhojit Mohanty
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(JSON.stringify({ success: true, data: { owner: ownerEmailResponse, confirmation: confirmationEmailResponse } }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
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

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function invoked");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactRequest = await req.json();
    
    console.log("Processing contact request from:", email);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["oceanblueyes658@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="color: #555; line-height: 1.6;">${message}</p>
            </div>
            <p style="color: #888; font-size: 12px; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const emailData = await resendResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);

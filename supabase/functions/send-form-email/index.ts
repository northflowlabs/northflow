import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const RESEND_API_KEY = Deno?.env?.get('RESEND_API_KEY');

serve(async (req) => {
  // ✅ CORS preflight
  if (req?.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }

  try {
    // Validate Resend API key
    if (!RESEND_API_KEY || RESEND_API_KEY === 'your-resend-api-key-here') {
      console.error('RESEND_API_KEY is missing or not configured');
      return new Response(JSON.stringify({
        success: false,
        error: 'Email service configuration error. Please contact support.'
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    const { formType, ...data } = await req?.json();
    
    // Format email content based on form type
    let emailSubject = '';
    let emailBody = '';
    
    if (formType === 'institutional-contact') {
      emailSubject = `New Institutional Contact Form Submission - ${data?.organizationName}`;
      emailBody = `
New Institutional Contact Form Submission
==========================================

Organization Information:
- Organization Name: ${data?.organizationName}
- Organization Type: ${data?.organizationType}
- Country: ${data?.country}

Contact Information:
- Name: ${data?.contactName}
- Title: ${data?.contactTitle}
- Email: ${data?.email}
- Phone: ${data?.phone || 'Not provided'}

Inquiry Details:
- Inquiry Focus: ${data?.inquiryFocus?.join(', ') || 'Not specified'}
- Dialogue Intent:
${data?.dialogueIntent}

Consent:
- Data Processing Consent: ${data?.dataProcessingConsent ? 'Yes' : 'No'}
- Privacy Policy Accepted: ${data?.privacyPolicyAccepted ? 'Yes' : 'No'}

Submitted: ${new Date()?.toISOString()}
      `;
    } else if (formType === 'access-request') {
      emailSubject = `New Access Request - ${data?.organizationName}`;
      emailBody = `
New Access Request Submission
==============================

Organization Information:
- Organization Name: ${data?.organizationName}
- Organization Type: ${data?.organizationType}
- Country/Jurisdiction: ${data?.country}

Contact Information:
- Name: ${data?.contactName}
- Role/Title: ${data?.contactTitle}
- Email: ${data?.email}
- Phone: ${data?.phone || 'Not provided'}

Request Details:
- Inquiry Type: ${data?.inquiryType}
- Intended Use: ${data?.intendedUse}
- Request Source: ${data?.requestSource || 'Direct'}
- Document Title: ${data?.documentTitle || 'Not specified'}

Project Context:
${data?.projectContext || 'Not provided'}

Consent:
- Data Processing Consent: ${data?.dataProcessingConsent ? 'Yes' : 'No'}
- Privacy Policy Accepted: ${data?.privacyPolicyAccepted ? 'Yes' : 'No'}

Submitted: ${new Date()?.toISOString()}
      `;
    }

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'tdp@northflow.no', // 🔄 Temporary: Changed from hello@northflow.no until domain verification
        subject: emailSubject,
        text: emailBody
      })
    });

    const resendData = await resendResponse?.json();

    if (!resendResponse?.ok) {
      console.error('Resend API error:', {
        status: resendResponse?.status,
        error: resendData
      });
      throw new Error(resendData.message || 'Failed to send email via Resend API');
    }

    console.log('Email sent successfully:', {
      emailId: resendData?.id,
      formType
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Form submission received and email sent successfully',
      emailId: resendData.id
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error('Edge Function error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'An unexpected error occurred while processing your request'
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
});
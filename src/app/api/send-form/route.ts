import { NextRequest, NextResponse } from 'next/server';

/**
 * Form Submission API Route
 * 
 * This endpoint receives form submissions and forwards them to the Supabase Edge Function
 * which handles email sending via Resend.
 * 
 * 🔄 Temporary: Sends all form submissions to tdp@northflow.no until domain verification
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate environment variables
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('Missing Supabase configuration');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact support at tdp@northflow.no' 
        },
        { status: 500 }
      );
    }

    // Call Supabase Edge Function to send email
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/send-form-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Edge Function error:', {
        status: response.status,
        error: result.error || result.message,
        formType: formData.formType
      });

      return NextResponse.json(
        { 
          success: false, 
          message: result.error || result.message || 'Failed to send form submission. Please try again or contact us directly at tdp@northflow.no' 
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submission sent successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while submitting your inquiry. Please try again or contact us directly at tdp@northflow.no' 
      },
      { status: 500 }
    );
  }
}
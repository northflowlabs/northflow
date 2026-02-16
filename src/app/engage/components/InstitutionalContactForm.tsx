'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { trackFormStart, trackFormSubmit, trackQualifiedInbound } from '@/lib/analytics-events';

interface FormData {
  organizationName: string;
  organizationType: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  country: string;
  inquiryFocus: string[];
  dialogueIntent: string;
  dataProcessingConsent: boolean;
  privacyPolicyAccepted: boolean;
}

interface InstitutionalContactFormProps {
  className?: string;
}

const InstitutionalContactForm = ({ className = '' }: InstitutionalContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    organizationType: '',
    contactName: '',
    contactTitle: '',
    email: '',
    phone: '',
    country: '',
    inquiryFocus: [],
    dialogueIntent: '',
    dataProcessingConsent: false,
    privacyPolicyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [hasTrackedFormStart, setHasTrackedFormStart] = useState(false);

  const organizationTypes = [
    'Government entity',
    'Public authority or agency',
    'Research institution',
    'Infrastructure operator',
    'Financial or institutional stakeholder',
    'Other institutional organisation',
  ];

  const inquiryFocusOptions = [
    'Strategic infrastructure dialogue',
    'Framework and governance discussion',
    'Technical or architectural review',
    'Research or knowledge exchange',
    'Institutional briefing',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Track form start on first interaction
    if (!hasTrackedFormStart) {
      trackFormStart('institutional_contact_form', 'institution');
      setHasTrackedFormStart(true);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    if (!hasTrackedFormStart) {
      trackFormStart('institutional_contact_form', 'institution');
      setHasTrackedFormStart(true);
    }

    setFormData((prev) => ({
      ...prev,
      inquiryFocus: prev.inquiryFocus.includes(option)
        ? prev.inquiryFocus.filter((item) => item !== option)
        : [...prev.inquiryFocus, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error state
    setErrorMessage('');
    setSubmitStatus('idle');

    // Comprehensive form validation
    if (!formData.organizationName.trim()) {
      setErrorMessage('Please enter your organisation name.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.organizationType) {
      setErrorMessage('Please select your organisation type.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.country.trim()) {
      setErrorMessage('Please enter your country of operation.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.contactName.trim()) {
      setErrorMessage('Please enter your full name.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.contactTitle.trim()) {
      setErrorMessage('Please enter your title or position.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid institutional email address.');
      setSubmitStatus('error');
      return;
    }

    if (formData.inquiryFocus.length === 0) {
      setErrorMessage('Please select at least one engagement focus area.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.dialogueIntent.trim()) {
      setErrorMessage('Please describe your dialogue intent.');
      setSubmitStatus('error');
      return;
    }

    // Enhanced GDPR consent validation with specific messaging
    if (!formData.dataProcessingConsent && !formData.privacyPolicyAccepted) {
      setErrorMessage(
        'Please accept both the data processing consent and privacy policy to submit your inquiry.'
      );
      setSubmitStatus('error');
      return;
    }

    if (!formData.dataProcessingConsent) {
      setErrorMessage('Please accept the data processing consent (GDPR) to submit your inquiry.');
      setSubmitStatus('error');
      return;
    }

    if (!formData.privacyPolicyAccepted) {
      setErrorMessage(
        'Please accept the Privacy Policy and Data Protection Notice to submit your inquiry.'
      );
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to API endpoint
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'institutional-contact',
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setErrorMessage('');

        // Track successful form submission
        trackFormSubmit({
          form_id: 'institutional_contact_form',
          form_name: 'Institutional Contact Form',
          form_type: 'contact',
          organization_type: formData.organizationType,
          audience_type: 'institution',
        });

        // Track as qualified inbound conversation
        trackQualifiedInbound({
          source: 'institutional_contact_form',
          organizationType: formData.organizationType,
          inquiryFocus: formData.inquiryFocus,
          audienceType: 'institution',
        });

        // Reset form after successful submission
        setFormData({
          organizationName: '',
          organizationType: '',
          contactName: '',
          contactTitle: '',
          email: '',
          phone: '',
          country: '',
          inquiryFocus: [],
          dialogueIntent: '',
          dataProcessingConsent: false,
          privacyPolicyAccepted: false,
        });
        setHasTrackedFormStart(false);
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          result.message ||
            'An error occurred while submitting your inquiry. Please try again or contact us directly at hello@northflow.no'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'A network error occurred. Please check your connection and try again, or contact us directly at hello@northflow.no'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`bg-card py-20 ${className}`} aria-labelledby="contact-form-heading">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="mb-12 text-center">
          <h2
            id="contact-form-heading"
            className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4"
          >
            Initiate formal dialogue
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
            Use the form below to initiate a structured engagement inquiry. Submissions are reviewed
            to determine relevance, scope, and appropriate next steps. All inquiries are handled
            with institutional confidentiality.
          </p>
        </div>

        {/* What to Include Guidance */}
        <div className="mb-10 p-6 bg-background border border-border rounded-sm">
          <h3 className="text-lg font-headline font-semibold text-foreground mb-4 flex items-center">
            <Icon
              name="information-circle"
              size={20}
              variant="outline"
              className="text-primary mr-2"
              aria-hidden="true"
            />
            What to include
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Your organization and role:</strong> Include
                your institutional affiliation, position, and relevant context for your inquiry.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-0.5">•</span>
              <span>
                <strong className="text-foreground">What you want to explore:</strong> Specify
                whether you are interested in research collaboration, institutional deployment,
                funding discussions, or governance frameworks.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Desired timeline (optional):</strong> If you
                have specific timeframes or milestones, include them to help us prioritize and
                structure the dialogue.
              </span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background p-8 md:p-12 rounded-sm border border-border shadow-institutional"
          noValidate
        >
          {/* Organization Information */}
          <fieldset className="mb-10">
            <legend className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center">
              <Icon
                name="building-office-2"
                size={24}
                variant="outline"
                className="text-primary mr-3"
                aria-hidden="true"
              />
              Organisation information
            </legend>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-cta font-medium text-foreground mb-2"
                >
                  Organisation name{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                  placeholder="Enter your organisation name"
                />
              </div>

              <div>
                <label
                  htmlFor="organizationType"
                  className="block text-sm font-cta font-medium text-foreground mb-2"
                >
                  Organisation type{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select organisation type</option>
                  {organizationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-cta font-medium text-foreground mb-2"
                >
                  Country of operation{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                  placeholder="Country of operation"
                />
              </div>
            </div>
          </fieldset>

          {/* Contact Information */}
          <fieldset className="mb-10">
            <legend className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center">
              <Icon
                name="user"
                size={24}
                variant="outline"
                className="text-primary mr-3"
                aria-hidden="true"
              />
              Contact information
            </legend>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Full name{' '}
                    <span className="text-error" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactTitle"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Title / position{' '}
                    <span className="text-error" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="contactTitle"
                    name="contactTitle"
                    value={formData.contactTitle}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    placeholder="Your title or position"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Institutional email address{' '}
                    <span className="text-error" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-describedby="email-description"
                    className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    placeholder="your.email@organisation.com"
                  />
                  <p id="email-description" className="sr-only">
                    Please use your official institutional email address
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Phone number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    placeholder="+XX XXX XXX XXXX"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Inquiry Details */}
          <fieldset className="mb-10">
            <legend className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center">
              <Icon
                name="document-text"
                size={24}
                variant="outline"
                className="text-primary mr-3"
                aria-hidden="true"
              />
              Engagement focus
            </legend>

            <div className="space-y-6">
              <div>
                <label
                  id="inquiry-focus-label"
                  className="block text-sm font-cta font-medium text-foreground mb-3"
                >
                  Select all that apply{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
                <div
                  className="space-y-3"
                  role="group"
                  aria-labelledby="inquiry-focus-label"
                  aria-required="true"
                >
                  {inquiryFocusOptions.map((option) => (
                    <label key={option} className="flex items-start space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.inquiryFocus.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-0 cursor-pointer"
                        aria-label={option}
                      />
                      <span className="text-sm text-muted-foreground font-body group-hover:text-foreground transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="dialogueIntent"
                  className="block text-sm font-cta font-medium text-foreground mb-2"
                >
                  Dialogue intent{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
                <textarea
                  id="dialogueIntent"
                  name="dialogueIntent"
                  value={formData.dialogueIntent}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-describedby="dialogue-intent-description"
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please describe the context and purpose of your inquiry. This may include policy considerations, infrastructure challenges, research interests, or evaluation objectives. Do not submit confidential or classified information at this stage."
                />
                <p id="dialogue-intent-description" className="sr-only">
                  Describe your engagement objectives without including confidential information
                </p>
              </div>
            </div>
          </fieldset>

          {/* Confidentiality Notice */}
          <div
            className="mb-8 p-6 bg-card border border-border rounded-sm"
            role="note"
            aria-label="Confidentiality notice"
          >
            <h4 className="text-sm font-cta font-semibold text-foreground mb-2 flex items-center">
              <Icon
                name="lock-closed"
                size={18}
                variant="outline"
                className="text-primary mr-2"
                aria-hidden="true"
              />
              Confidentiality notice
            </h4>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Information submitted through this form is treated as confidential and used solely to
              evaluate the relevance of potential institutional engagement. Submission does not
              constitute a contractual offer, commitment, or partnership. Further confidentiality
              arrangements may be discussed where appropriate.
            </p>
          </div>

          {/* GDPR Data Processing Consent */}
          <fieldset className="mb-8 p-6 bg-muted/30 border border-border rounded-sm">
            <legend className="text-base font-cta font-semibold text-foreground mb-4 flex items-center">
              <Icon
                name="shield-check"
                size={20}
                variant="outline"
                className="text-primary mr-2"
                aria-hidden="true"
              />
              Data processing consent (GDPR)
            </legend>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="dataProcessingConsent"
                  checked={formData.dataProcessingConsent}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, dataProcessingConsent: e.target.checked }))
                  }
                  required
                  aria-required="true"
                  className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-0 cursor-pointer"
                />
                <label
                  htmlFor="dataProcessingConsent"
                  className="text-sm text-foreground font-body leading-relaxed cursor-pointer"
                >
                  I consent to the processing of the personal data provided in this form for the
                  purpose of institutional engagement evaluation and correspondence. I understand
                  that this data will be processed in accordance with the General Data Protection
                  Regulation (GDPR) and applicable European data protection laws.{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyPolicyAccepted"
                  checked={formData.privacyPolicyAccepted}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, privacyPolicyAccepted: e.target.checked }))
                  }
                  required
                  aria-required="true"
                  className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-0 cursor-pointer"
                />
                <label
                  htmlFor="privacyPolicyAccepted"
                  className="text-sm text-foreground font-body leading-relaxed cursor-pointer"
                >
                  I have read and accept the{' '}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline font-medium focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="/data-protection-notice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline font-medium focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  >
                    Data Protection Notice
                  </a>
                  .{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
              </div>

              <div className="mt-4 p-4 bg-card border-l-4 border-primary rounded-sm">
                <h5 className="text-xs font-cta font-semibold text-foreground mb-2">
                  Your data protection rights:
                </h5>
                <ul className="text-xs text-muted-foreground font-body space-y-1 ml-4 list-disc">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure under applicable conditions</li>
                  <li>Right to withdraw consent at any time</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="text-xs text-muted-foreground font-body mt-3">
                  To exercise these rights, contact:{' '}
                  <a
                    href="mailto:hello@northflow.no"
                    className="text-primary hover:text-accent underline font-medium"
                  >
                    hello@northflow.no
                  </a>
                </p>
              </div>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-sm rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit institutional inquiry'}
            </button>

            {submitStatus === 'success' && (
              <div
                className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-sm"
                role="status"
                aria-live="polite"
              >
                <p className="text-sm text-primary font-body text-center">
                  Your inquiry has been submitted successfully. We will review and respond
                  accordingly.
                </p>
              </div>
            )}

            {submitStatus === 'error' && errorMessage && (
              <div
                className="mt-4 p-4 bg-error/10 border border-error/20 rounded-sm"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-sm text-error font-body text-center">{errorMessage}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default InstitutionalContactForm;

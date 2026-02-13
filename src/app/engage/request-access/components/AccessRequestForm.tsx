'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useSearchParams } from 'next/navigation';

interface FormData {
  organizationName: string;
  organizationType: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  country: string;
  intendedUse: string;
  projectContext: string;
  inquiryType: string;
  requestSource: string;
  documentTitle: string;
  dataProcessingConsent: boolean;
  privacyPolicyAccepted: boolean;
}

interface AccessRequestFormProps {
  className?: string;
}

const AccessRequestForm = ({ className = '' }: AccessRequestFormProps) => {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    organizationType: '',
    contactName: '',
    contactTitle: '',
    email: '',
    phone: '',
    country: '',
    intendedUse: '',
    projectContext: '',
    inquiryType: 'Access request',
    requestSource: '',
    documentTitle: '',
    dataProcessingConsent: false,
    privacyPolicyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Pre-populate form based on URL parameters
    const source = searchParams.get('source') || '';
    const title = searchParams.get('title') || '';

    setFormData((prev) => ({
      ...prev,
      requestSource: source,
      documentTitle: title,
    }));
  }, [searchParams]);

  const organizationTypes = [
    'Government entity',
    'Regulator',
    'University or research institution',
    'Infrastructure operator',
    'Financial institution',
    'Public authority or agency',
    'Other institutional organisation',
  ];

  const intendedUseOptions = [
    'Policy analysis',
    'Research',
    'Procurement evaluation',
    'Regulatory assessment',
    'Strategic review',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error state
    setSubmitStatus('idle');
    setErrorMessage('');

    // Comprehensive field validation
    const missingFields: string[] = [];

    if (!formData.organizationName.trim()) missingFields.push('Organisation name');
    if (!formData.organizationType) missingFields.push('Organisation type');
    if (!formData.country.trim()) missingFields.push('Country/jurisdiction');
    if (!formData.contactName.trim()) missingFields.push('Full name');
    if (!formData.contactTitle.trim()) missingFields.push('Role/title');
    if (!formData.email.trim()) missingFields.push('Email address');
    if (!formData.intendedUse) missingFields.push('Intended use');

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid institutional email address.');
      setSubmitStatus('error');
      return;
    }

    // Check for missing required fields
    if (missingFields.length > 0) {
      setErrorMessage(
        `Please complete the following required fields: ${missingFields.join(', ')}.`
      );
      setSubmitStatus('error');
      return;
    }

    // Validate GDPR consent only after all fields are filled
    if (!formData.dataProcessingConsent || !formData.privacyPolicyAccepted) {
      setErrorMessage(
        'Please accept the required data processing consent and privacy policy to submit your access request.'
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
          formType: 'access-request',
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setErrorMessage('');
        // Reset form after successful submission
        setFormData({
          organizationName: '',
          organizationType: '',
          contactName: '',
          contactTitle: '',
          email: '',
          phone: '',
          country: '',
          intendedUse: '',
          projectContext: '',
          inquiryType: 'Access request',
          requestSource: '',
          documentTitle: '',
          dataProcessingConsent: false,
          privacyPolicyAccepted: false,
        });
      } else {
        setErrorMessage(result.error || 'Failed to submit access request. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`bg-card py-20 ${className}`} aria-labelledby="access-form-heading">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="mb-12 text-center">
          <h2
            id="access-form-heading"
            className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4"
          >
            Initiate access request
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
            Complete the form below to request access to institutional materials. All requests are
            reviewed based on institutional context and intended use.
          </p>
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
                name="BuildingOffice2Icon"
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
                  Country / jurisdiction{' '}
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
                  placeholder="Country or jurisdiction"
                />
              </div>
            </div>
          </fieldset>

          {/* Contact Information */}
          <fieldset className="mb-10">
            <legend className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center">
              <Icon
                name="UserIcon"
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
                    Role / title{' '}
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
                    placeholder="Your role or title"
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
                    Phone number <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    placeholder="+47 123 45 678"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Request Details */}
          <fieldset className="mb-10">
            <legend className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center">
              <Icon
                name="DocumentTextIcon"
                size={24}
                variant="outline"
                className="text-primary mr-3"
                aria-hidden="true"
              />
              Request details
            </legend>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="intendedUse"
                  className="block text-sm font-cta font-medium text-foreground mb-2"
                >
                  Intended use{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
                <select
                  id="intendedUse"
                  name="intendedUse"
                  value={formData.intendedUse}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select intended use</option>
                  {intendedUseOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="projectContext"
                  className="block text-sm font-cta font-medium text-foreground mb-2"
                >
                  Project, mandate, or context description{' '}
                  <span className="text-muted-foreground text-xs">(optional but recommended)</span>
                </label>
                <textarea
                  id="projectContext"
                  name="projectContext"
                  value={formData.projectContext}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-input rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Provide context about your project, mandate, or how you intend to use the materials..."
                />
              </div>
            </div>
          </fieldset>

          {/* GDPR Consent */}
          <fieldset className="mb-10">
            <legend className="text-xl font-headline font-semibold text-foreground mb-6 flex items-center">
              <Icon
                name="ShieldCheckIcon"
                size={24}
                variant="outline"
                className="text-primary mr-3"
                aria-hidden="true"
              />
              Data processing and consent
            </legend>

            <div className="space-y-4 bg-card p-6 rounded-sm border border-border">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="dataProcessingConsent"
                  name="dataProcessingConsent"
                  checked={formData.dataProcessingConsent}
                  onChange={() => handleCheckboxChange('dataProcessingConsent')}
                  required
                  aria-required="true"
                  className="mt-1 h-4 w-4 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-0"
                />
                <label
                  htmlFor="dataProcessingConsent"
                  className="ml-3 text-sm text-foreground font-body"
                >
                  I consent to the processing of my personal data for the purpose of reviewing this
                  access request and facilitating institutional engagement.{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyPolicyAccepted"
                  name="privacyPolicyAccepted"
                  checked={formData.privacyPolicyAccepted}
                  onChange={() => handleCheckboxChange('privacyPolicyAccepted')}
                  required
                  aria-required="true"
                  className="mt-1 h-4 w-4 text-primary border-input rounded focus:ring-2 focus:ring-ring focus:ring-offset-0"
                />
                <label
                  htmlFor="privacyPolicyAccepted"
                  className="ml-3 text-sm text-foreground font-body"
                >
                  I have read and accept the{' '}
                  <a
                    href="/privacy-policy"
                    className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="/data-protection-notice"
                    className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                  >
                    Data Protection Notice
                  </a>
                  .{' '}
                  <span className="text-error" aria-label="required">
                    *
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3.5 bg-primary text-primary-foreground text-base font-cta font-medium rounded-sm transition-all duration-200 ease-institutional hover:-translate-y-0.5 hover:shadow-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Submitting request...' : 'Submit access request'}
            </button>

            {submitStatus === 'success' && (
              <div
                className="flex items-center gap-2 text-success text-sm font-body"
                role="status"
                aria-live="polite"
              >
                <Icon name="CheckCircleIcon" size={20} variant="solid" aria-hidden="true" />
                <span>
                  Access request submitted successfully. We will review your request and respond
                  within 5–7 business days.
                </span>
              </div>
            )}

            {submitStatus === 'error' && errorMessage && (
              <div
                className="flex items-center gap-2 text-error text-sm font-body"
                role="alert"
                aria-live="assertive"
              >
                <Icon name="XCircleIcon" size={20} variant="solid" aria-hidden="true" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccessRequestForm;

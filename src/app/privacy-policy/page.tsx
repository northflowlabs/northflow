import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy | Northflow',
  description:
    'Privacy policy describing how Northflow handles personal data, cookies, and user rights in connection with the website and communications.',
  path: '/privacy-policy',
  ogType: 'website',
});

export default function PrivacyPolicyPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Privacy Policy | Northflow',
    description:
      'Privacy policy describing how Northflow handles personal data, cookies, and user rights in connection with the website and communications.',
    path: '/privacy-policy',
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <div className="min-h-screen bg-background">
        <div className="max-w-[900px] mx-auto px-8 py-16">
          <h1 className="text-4xl font-headline font-bold text-foreground mb-4">Privacy policy</h1>
          <p className="text-sm text-muted-foreground font-body mb-12">
            Last updated: December 2025
          </p>

          <div className="space-y-8 text-foreground font-body">
            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Data controller</h2>
              <p className="text-base leading-relaxed mb-4">
                Northflow Technologies / northflow.no, acts as the data controller for personal data
                collected through this website and related institutional engagement activities.
              </p>
              <p className="text-base leading-relaxed">Contact: hello@northflow.no</p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Scope of data collection
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Personal data collection is limited to information submitted through contact forms
                and institutional inquiry mechanisms. This typically includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and professional title</li>
                <li>Institutional affiliation</li>
                <li>Email address and contact details</li>
                <li>Inquiry content and related correspondence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Cookie usage</h2>
              <p className="text-base leading-relaxed mb-4">
                This website uses cookies to ensure proper functionality and, with your consent, to
                improve user experience. Cookies are categorized as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Necessary cookies:</strong> Essential for site operation, security, and
                  form submission. These cannot be disabled.
                </li>
                <li>
                  <strong>Functional cookies:</strong> Enable enhanced features and user
                  preferences. Require explicit consent.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand site usage through
                  anonymized data. Require explicit consent.
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                You can manage your cookie preferences at any time through the cookie consent banner
                or by clearing your browser data. Withdrawing consent does not affect the lawfulness
                of processing based on consent before withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Purpose and legal basis</h2>
              <p className="text-base leading-relaxed mb-4">
                Personal data is processed for the purpose of institutional dialogue, inquiry
                handling, and engagement coordination. Processing is based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Legitimate interest in responding to institutional inquiries</li>
                <li>Consent provided through form submission</li>
                <li>Contractual necessity for engagement activities</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Personal data is not used for marketing, profiling, or automated decision-making.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Data handling and storage
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Personal data is handled in accordance with data minimisation principles. Storage
                and processing are designed to align with European data protection standards.
              </p>
              <p className="text-base leading-relaxed">
                Data is retained only for the duration necessary to fulfil the stated purpose or as
                required by applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Data subject rights</h2>
              <p className="text-base leading-relaxed mb-4">
                Under the General Data Protection Regulation (GDPR), individuals have the following
                rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right of access to personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure under applicable conditions</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Requests may be submitted to hello@northflow.no. Responses will be provided within
                the timeframes established by applicable regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Third-party disclosure</h2>
              <p className="text-base leading-relaxed">
                Personal data is not shared with third parties except where necessary for the
                provision of requested services or as required by legal obligation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                International data transfers
              </h2>
              <p className="text-base leading-relaxed">
                Data processing is conducted within the European Economic Area or in jurisdictions
                providing equivalent data protection standards. Transfers outside these regions, if
                necessary, are conducted in accordance with applicable safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Changes to this policy</h2>
              <p className="text-base leading-relaxed">
                This privacy policy may be updated to reflect changes in data processing practices
                or regulatory requirements. Material changes will be communicated through
                appropriate channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">Supervisory authority</h2>
              <p className="text-base leading-relaxed">
                Individuals have the right to lodge a complaint with the relevant data protection
                supervisory authority in their jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

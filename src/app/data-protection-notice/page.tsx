import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Data Protection Notice | Northflow',
  description: 'Data protection notice outlining processing purposes, legal bases, retention, and rights under applicable data protection regulations.',
  path: '/data-protection-notice',
  ogType: 'website',
});

export default function DataProtectionNoticePage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Data Protection Notice | Northflow',
    description: 'Data protection notice outlining processing purposes, legal bases, retention, and rights under applicable data protection regulations.',
    path: '/data-protection-notice'
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <div className="min-h-screen bg-background">
        <div className="max-w-[900px] mx-auto px-8 py-16">
          <h1 className="text-4xl font-headline font-bold text-foreground mb-4">
            Data protection notice
          </h1>
          <p className="text-sm text-muted-foreground font-body mb-12">
            Last updated: December 2025
          </p>

          <div className="space-y-8 text-foreground font-body">
            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Scope and application
              </h2>
              <p className="text-base leading-relaxed mb-4">
                This notice applies to personal data submitted through institutional inquiry forms, engagement requests, and confidential dialogue mechanisms provided by Northflow Technologies.
              </p>
              <p className="text-base leading-relaxed">
                It supplements the general privacy policy and addresses specific considerations for institutional engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Information collected
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Institutional inquiries may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Professional contact information</li>
                <li>Institutional affiliation and role</li>
                <li>Subject matter and context of inquiry</li>
                <li>Technical requirements or specifications</li>
                <li>Correspondence and related documentation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Confidential handling
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Submitted information is treated as confidential and handled in accordance with institutional engagement protocols. Access is restricted to personnel directly involved in inquiry response and engagement coordination.
              </p>
              <p className="text-base leading-relaxed">
                Confidentiality measures are designed to align with expectations appropriate for government and institutional dialogue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Purpose limitation
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Personal data is processed exclusively for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to institutional inquiries</li>
                <li>Coordinating engagement activities</li>
                <li>Providing requested information or documentation</li>
                <li>Maintaining records of institutional dialogue</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Data is not used for marketing, commercial solicitation, or purposes unrelated to the original inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Data minimisation
              </h2>
              <p className="text-base leading-relaxed">
                Only information necessary for inquiry handling and engagement coordination is collected and retained. Unnecessary or excessive data is not requested or stored.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Processing location
              </h2>
              <p className="text-base leading-relaxed">
                Data processing is conducted within the European Economic Area or in jurisdictions providing equivalent data protection standards. Infrastructure and service providers are selected based on their alignment with European data protection requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Third-party sharing
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Personal data is not shared with third parties except:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Where necessary to fulfil the stated purpose of the inquiry</li>
                <li>With explicit consent from the data subject</li>
                <li>As required by legal obligation or regulatory authority</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Third-party processors, if engaged, are subject to contractual data protection obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Retention period
              </h2>
              <p className="text-base leading-relaxed">
                Personal data is retained for the duration necessary to fulfil the purpose of the inquiry or as required by applicable legal or regulatory obligations. Retention periods are reviewed periodically and data is deleted when no longer necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Security measures
              </h2>
              <p className="text-base leading-relaxed">
                Technical and organisational measures are implemented to protect personal data against unauthorised access, disclosure, alteration, or destruction. These measures are designed to align with the sensitivity of institutional engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Individual rights
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Data subjects retain all rights established under applicable data protection regulation, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access to personal data</li>
                <li>Rectification of inaccurate information</li>
                <li>Erasure under applicable conditions</li>
                <li>Restriction or objection to processing</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Requests may be submitted to hello@northflow.no.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline font-semibold mb-4">
                Contact
              </h2>
              <p className="text-base leading-relaxed">
                Questions regarding data protection practices may be directed to hello@northflow.no. Responses will be provided in accordance with applicable regulatory timeframes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
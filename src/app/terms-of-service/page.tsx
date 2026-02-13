import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service | Northflow',
  description:
    'Terms governing use of the Northflow website, including acceptable use, limitations, and general conditions.',
  path: '/terms-of-service',
  ogType: 'website',
});

export default function TermsOfServicePage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Terms of Service | Northflow',
    description:
      'Terms governing use of the Northflow website, including acceptable use, limitations, and general conditions.',
    path: '/terms-of-service',
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <div className="min-h-screen bg-background">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-headline font-bold text-foreground">Terms of service</h1>
              <p className="text-sm text-muted-foreground font-body">Last updated: December 2025</p>
            </div>

            <div className="space-y-8 text-foreground font-body">
              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Scope and purpose
                </h2>
                <p className="text-base leading-relaxed">
                  These terms govern access to and use of the Northflow Technologies website and
                  associated informational materials. The website provides information about
                  research activities, systems design, and institutional engagement opportunities.
                </p>
                <p className="text-base leading-relaxed">
                  Use of this website does not create any contractual relationship, partnership, or
                  formal engagement between the user and Northflow Technologies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Informational use only
                </h2>
                <p className="text-base leading-relaxed">
                  Content provided on this website is for informational purposes only. It does not
                  constitute:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Legal advice or legal opinion</li>
                  <li>Regulatory guidance or compliance certification</li>
                  <li>Procurement recommendations or tender specifications</li>
                  <li>Technical specifications for implementation</li>
                  <li>Contractual commitments or service guarantees</li>
                </ul>
                <p className="text-base leading-relaxed">
                  Users should seek appropriate professional advice before making decisions based on
                  information presented on this website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Intellectual property
                </h2>
                <p className="text-base leading-relaxed">
                  All content, materials, research outputs, and documentation published on this
                  website remain the intellectual property of Northflow Technologies unless
                  otherwise stated.
                </p>
                <p className="text-base leading-relaxed">
                  Users may reference or cite published materials for institutional, research, or
                  policy purposes, provided appropriate attribution is given. Commercial use or
                  reproduction requires prior written consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Accuracy and updates
                </h2>
                <p className="text-base leading-relaxed">
                  While reasonable efforts are made to ensure accuracy, Northflow Technologies does
                  not guarantee that all information on this website is complete, current, or
                  error-free.
                </p>
                <p className="text-base leading-relaxed">
                  Content may be updated, modified, or removed without prior notice. Users are
                  responsible for verifying information before relying on it for institutional or
                  operational purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Limitation of liability
                </h2>
                <p className="text-base leading-relaxed">
                  Northflow Technologies provides this website and its content on an "as is" basis.
                  To the fullest extent permitted by Norwegian law:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    No warranties are provided regarding accuracy, completeness, or fitness for
                    purpose
                  </li>
                  <li>No liability is accepted for decisions made based on website content</li>
                  <li>
                    No responsibility is assumed for technical errors, interruptions, or data loss
                  </li>
                  <li>No liability is accepted for third-party content or external links</li>
                </ul>
                <p className="text-base leading-relaxed">
                  Users access and use this website at their own risk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  External links
                </h2>
                <p className="text-base leading-relaxed">
                  This website may contain links to external resources, publications, or
                  institutional websites. Northflow Technologies does not endorse, control, or
                  assume responsibility for the content, accuracy, or availability of external
                  sites.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Acceptable use
                </h2>
                <p className="text-base leading-relaxed">Users agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Attempt unauthorised access to website systems or infrastructure</li>
                  <li>Interfere with website functionality or security measures</li>
                  <li>Use automated systems to extract or reproduce content without permission</li>
                  <li>Misrepresent affiliation with or endorsement by Northflow Technologies</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Governing law and jurisdiction
                </h2>
                <p className="text-base leading-relaxed">
                  These terms are governed by Norwegian law. Any disputes arising from use of this
                  website shall be subject to the exclusive jurisdiction of Norwegian courts.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Changes to terms
                </h2>
                <p className="text-base leading-relaxed">
                  Northflow Technologies reserves the right to modify these terms at any time.
                  Continued use of the website following changes constitutes acceptance of updated
                  terms.
                </p>
                <p className="text-base leading-relaxed">
                  Users are encouraged to review these terms periodically.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">Contact</h2>
                <p className="text-base leading-relaxed">
                  For questions regarding these terms, contact:
                </p>
                <p className="text-base leading-relaxed">
                  <a href="mailto:hello@northflow.no" className="text-primary hover:underline">
                    hello@northflow.no
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

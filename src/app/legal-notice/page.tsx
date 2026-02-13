import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Legal Notice | Northflow',
  description:
    'Legal notice for Northflow Technologies. Company information and formal disclosures related to the use of this website.',
  path: '/legal-notice',
  ogType: 'website',
});

export default function LegalNoticePage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Legal Notice | Northflow',
    description:
      'Legal notice for Northflow Technologies. Company information and formal disclosures related to the use of this website.',
    path: '/legal-notice',
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <div className="min-h-screen bg-background">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-headline font-bold text-foreground">Legal notice</h1>
            </div>

            <div className="space-y-8 text-foreground font-body">
              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Company identification
                </h2>
                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Company name:</span> Northflow Technologies
                  </p>
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Country of registration:</span> Norway
                  </p>
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold">Contact email:</span>{' '}
                    <a href="mailto:hello@northflow.no" className="text-primary hover:underline">
                      hello@northflow.no
                    </a>
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">Purpose</h2>
                <p className="text-base leading-relaxed">
                  This website provides information about Northflow Technologies' research
                  activities, systems design capabilities, and institutional engagement
                  opportunities.
                </p>
                <p className="text-base leading-relaxed">
                  Content is intended for government entities, regulatory bodies, institutional
                  stakeholders, and research organisations operating within European jurisdictions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">Scope</h2>
                <p className="text-base leading-relaxed">
                  Information provided on this website is for informational purposes only. It does
                  not constitute legal advice, regulatory guidance, or contractual commitment.
                </p>
                <p className="text-base leading-relaxed">
                  Formal engagement, procurement discussions, or institutional partnerships require
                  separate agreements and are subject to appropriate due diligence processes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">
                  Jurisdiction
                </h2>
                <p className="text-base leading-relaxed">
                  Northflow Technologies operates under Norwegian law. This website and its content
                  are governed by Norwegian legal frameworks and European regulatory standards where
                  applicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground">Contact</h2>
                <p className="text-base leading-relaxed">
                  For institutional inquiries, research collaboration, or formal engagement
                  discussions:
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

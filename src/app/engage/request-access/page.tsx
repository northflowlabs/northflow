import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import { Suspense } from 'react';
import AccessRequestHero from './components/AccessRequestHero';
import AccessPrinciples from './components/AccessPrinciples';
import AccessEngagementProcess from './components/AccessEngagementProcess';
import AccessRequestForm from './components/AccessRequestForm';

export const metadata: Metadata = generateMetadata({
  title: 'Access Request & Institutional Dialogue | Northflow',
  description:
    'Request structured engagement with Northflow for institutional infrastructure, research collaboration, or governance alignment. Non-commercial dialogue for qualified stakeholders.',
  path: '/engage/request-access',
  ogType: 'website',
  ogImage: 'https://northflow.no/assets/images/Northflow%20-%20Earth%20Sat.jpg',
  keywords: [
    'institutional access request',
    'research publication access',
    'framework documentation',
    'EFOS access',
    'institutional materials',
    'government documentation access',
  ],
});

export default function RequestAccessPage() {
  return (
    <>
      <AccessRequestHero />
      <AccessPrinciples />
      <AccessEngagementProcess />
      <Suspense
        fallback={
          <div className="bg-card py-20">
            <div className="max-w-[900px] mx-auto px-8 text-center">Loading form...</div>
          </div>
        }
      >
        <AccessRequestForm />
      </Suspense>
    </>
  );
}

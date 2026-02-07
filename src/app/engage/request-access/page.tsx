import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import { Suspense } from 'react';
import AccessRequestHero from './components/AccessRequestHero';
import AccessPrinciples from './components/AccessPrinciples';
import AccessEngagementProcess from './components/AccessEngagementProcess';
import AccessRequestForm from './components/AccessRequestForm';

export const metadata: Metadata = generateMetadata({
  title: 'Request Access to Institutional Materials | Northflow',
  description: 'Formal access pathway for institutional stakeholders requesting research publications, governance frameworks, and controlled Northflow materials.',
  path: '/engage/request-access',
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
      <Suspense fallback={<div className="bg-card py-20"><div className="max-w-[900px] mx-auto px-8 text-center">Loading form...</div></div>}>
        <AccessRequestForm />
      </Suspense>
    </>
  );
}
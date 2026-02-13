import React from 'react';
import type { Metadata } from 'next';
import EngageHero from './components/EngageHero';
import InstitutionalContactForm from './components/InstitutionalContactForm';
import EngagementProcess from './components/EngagementProcess';
import AdditionalContactPathways from './components/AdditionalContactPathways';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Institutional Engagement & Dialogue | Northflow',
  description:
    'Request a structured, non-commercial dialogue with Northflow regarding institutional infrastructure, governance alignment, or research collaboration.',
  path: '/engage',
  ogType: 'website',
});

export default function EngagePage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Institutional Engagement & Dialogue | Northflow',
    description:
      'Request a structured, non-commercial dialogue with Northflow regarding institutional infrastructure, governance alignment, or research collaboration.',
    path: '/engage',
  });

  return (
    <>
      <StructuredData data={[webPageSchema]} />
      <EngageHero />
      <InstitutionalContactForm />
      <EngagementProcess />
      <AdditionalContactPathways />
    </>
  );
}

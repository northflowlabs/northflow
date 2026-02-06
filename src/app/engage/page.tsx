import React from 'react';
import type { Metadata } from 'next';
import EngageHero from './components/EngageHero';
import InstitutionalContactForm from './components/InstitutionalContactForm';
import EngagementProcess from './components/EngagementProcess';
import AdditionalContactPathways from './components/AdditionalContactPathways';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Engage — request a briefing or collaboration dialogue',
  description: 'Request a structured, non-commercial dialogue with Northflow for institutional alignment, research collaboration, or long-horizon infrastructure discussions.',
  path: '/engage',
  ogType: 'website',
});

export default function EngagePage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Engage — request a briefing or collaboration dialogue',
    description: 'Request a structured, non-commercial dialogue with Northflow for institutional alignment, research collaboration, or long-horizon infrastructure discussions.',
    path: '/engage'
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
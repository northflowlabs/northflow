import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

import InitiativesContent from './components/InitiativesContent';

export const metadata: Metadata = generateMetadata({
  title: 'Research & Validation Programmes | Northflow Initiatives',
  description:
    'Active programmes validating the Hypothesis Generation Engine across operational domains. Current focus: space-enabled climate resilience and evidence infrastructure methodology.',
  path: '/initiatives',
  ogType: 'website',
});

export default function InitiativesPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Research & Validation Programmes | Northflow Initiatives',
    description:
      'Active programmes validating the Hypothesis Generation Engine across operational domains. Current focus: space-enabled climate resilience and evidence infrastructure methodology.',
    path: '/initiatives',
  });

  return (
    <main id="main-content">
      <StructuredData data={[webPageSchema]} />
      <InitiativesContent />
    </main>
  );
}

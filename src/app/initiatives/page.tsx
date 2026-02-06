import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

import InitiativesContent from './components/InitiativesContent';

export const metadata: Metadata = generateMetadata({
  title: 'Initiatives — programs, pilots, and institutional collaboration',
  description: 'Northflow initiatives connect research and delivery: structured programs, pilots, and institutional collaboration around digital infrastructure and governance.',
  path: '/initiatives',
  ogType: 'website',
});

export default function InitiativesPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Initiatives — programs, pilots, and institutional collaboration',
    description: 'Northflow initiatives connect research and delivery: structured programs, pilots, and institutional collaboration around digital infrastructure and governance.',
    path: '/initiatives'
  });

  return (
    <main id="main-content">
      <StructuredData data={[webPageSchema]} />
      <InitiativesContent />
    </main>
  );
}
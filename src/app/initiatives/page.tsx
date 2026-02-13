import type { Metadata } from 'next';
import { generateMetadata, generateWebPageSchema } from '@/lib/seo';
import StructuredData from '@/components/common/StructuredData';

import InitiativesContent from './components/InitiativesContent';

export const metadata: Metadata = generateMetadata({
  title: 'Institutional Initiatives & Structured Programs | Northflow',
  description:
    'Northflow initiatives connect research and systems through structured programs, pilots, and institutional collaboration without commercial pressure.',
  path: '/initiatives',
  ogType: 'website',
});

export default function InitiativesPage() {
  const webPageSchema = generateWebPageSchema({
    title: 'Institutional Initiatives & Structured Programs | Northflow',
    description:
      'Northflow initiatives connect research and systems through structured programs, pilots, and institutional collaboration without commercial pressure.',
    path: '/initiatives',
  });

  return (
    <main id="main-content">
      <StructuredData data={[webPageSchema]} />
      <InitiativesContent />
    </main>
  );
}

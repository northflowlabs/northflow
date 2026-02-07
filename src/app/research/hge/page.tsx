import React from 'react';
import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import HGEHero from './components/HGEHero';
import HGEMethodology from './components/HGEMethodology';
import HGEValidation from './components/HGEValidation';
import HGEApplications from './components/HGEApplications';
import HGELinks from './components/HGELinks';
import HGEContact from './components/HGEContact';

export const metadata: Metadata = generateMetadata({
  title: 'Project HGE — Hypothesis Generation Infrastructure | Northflow',
  description: 'Project HGE is a reference architecture for automated hypothesis generation, testing, and belief updates across real instruments and constrained research environments.',
  path: '/research/hge',
  keywords: [
    'hypothesis generation engine',
    'automated scientific discovery',
    'scientific methodology',
    'quantum computing validation',
    'experiment design',
    'physics research',
    'astronomy research',
    'biology applications',
    'provenance tracking',
    'uncertainty quantification',
  ],
});

export default function ProjectHGEPage() {
  return (
    <>
      <HGEHero />
      <HGEMethodology />
      <HGEValidation />
      <HGEApplications />
      <HGELinks />
      <HGEContact />
    </>
  );
}
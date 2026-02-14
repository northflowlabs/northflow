import React from 'react';
import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import HGEHero from './components/HGEHero';
import HGEMethodology from './components/HGEMethodology';
import HGEValidation from './components/HGEValidation';
import HGEApplications from './components/HGEApplications';
import HGEDomainArchitecture from './components/HGEDomainArchitecture';
import HGETechnicalSpecifications from './components/HGETechnicalSpecifications';
import HGEPipelineVisualization from './components/HGEPipelineVisualization';
import HGELinks from './components/HGELinks';
import HGEContact from './components/HGEContact';

export const metadata: Metadata = generateMetadata({
  title: 'Hypothesis Generation Engine (HGE) | Northflow Research',
  description:
    'Project HGE: Structured scientific discovery infrastructure converting observational data into verifiable evidence. Deterministic execution, signed evidence bundles, audit-grade provenance tracking.',
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
      <HGEApplications />
      <HGEMethodology />
      <HGEPipelineVisualization />
      <HGEValidation />
      <HGEDomainArchitecture />
      <HGETechnicalSpecifications />
      <HGELinks />
      <HGEContact />
    </>
  );
}

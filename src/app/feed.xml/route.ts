import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://northflow.tech';
  const buildDate = new Date().toUTCString();

  // Research publications and updates
  const feedItems = [
    {
      title: 'EFOS: European Flexibility Operating System - Technical Framework',
      link: `${baseUrl}/efos-framework-details`,
      description: 'Comprehensive technical framework for operational sovereignty and flexibility in European digital infrastructure. Addresses governance, compliance, and operational continuity for government and regulatory institutions.',
      category: 'EFOS Development',
      pubDate: new Date('2024-01-15').toUTCString(),
      guid: `${baseUrl}/efos-framework-details`,
    },
    {
      title: 'Operational Sovereignty in European Digital Infrastructure',
      link: `${baseUrl}/research`,
      description: 'Research publication examining operational sovereignty frameworks for European institutions. Covers governance models, compliance requirements, and technical implementation strategies for maintaining institutional control.',
      category: 'Research Publication',
      pubDate: new Date('2024-02-20').toUTCString(),
      guid: `${baseUrl}/research/operational-sovereignty-2024`,
    },
    {
      title: 'Compliance Framework for Cross-Border Digital Operations',
      link: `${baseUrl}/compliance`,
      description: 'Technical resource detailing compliance frameworks for cross-border digital operations within European regulatory environments. Includes GDPR, NIS2, and sector-specific regulatory considerations.',
      category: 'Compliance Framework',
      pubDate: new Date('2024-03-10').toUTCString(),
      guid: `${baseUrl}/compliance/cross-border-operations`,
    },
    {
      title: 'System Architecture for Institutional Digital Infrastructure',
      link: `${baseUrl}/systems`,
      description: 'Technical documentation of system architecture patterns for institutional digital infrastructure. Covers sovereignty-preserving design, operational continuity, and governance integration.',
      category: 'Technical Resource',
      pubDate: new Date('2024-04-05').toUTCString(),
      guid: `${baseUrl}/systems/architecture-overview`,
    },
    {
      title: 'Nordic-European Digital Infrastructure Initiatives',
      link: `${baseUrl}/initiatives`,
      description: 'Overview of ongoing initiatives in Nordic-European digital infrastructure development. Includes collaboration opportunities, strategic timelines, and participation frameworks for institutional stakeholders.',
      category: 'Initiative Update',
      pubDate: new Date('2024-05-12').toUTCString(),
      guid: `${baseUrl}/initiatives/nordic-european-2024`,
    },
    {
      title: 'Data Protection and Privacy in Institutional Systems',
      link: `${baseUrl}/data-protection-notice`,
      description: 'Technical paper on data protection implementation for institutional systems. Addresses GDPR compliance, data sovereignty, and privacy-preserving architectures for government and regulatory use cases.',
      category: 'Technical Resource',
      pubDate: new Date('2024-06-18').toUTCString(),
      guid: `${baseUrl}/resources/data-protection-institutional`,
    },
    {
      title: 'Security Standards for European Digital Infrastructure',
      link: `${baseUrl}/security`,
      description: 'Comprehensive security standards documentation for European digital infrastructure. Covers threat modeling, security architecture, and compliance with European cybersecurity regulations.',
      category: 'Technical Resource',
      pubDate: new Date('2024-07-22').toUTCString(),
      guid: `${baseUrl}/security/standards-overview`,
    },
    {
      title: 'Technical Documentation: Implementation Guides',
      link: `${baseUrl}/documentation`,
      description: 'Technical implementation guides for institutional digital infrastructure projects. Includes best practices, reference architectures, and integration patterns for European regulatory environments.',
      category: 'Technical Resource',
      pubDate: new Date('2024-08-30').toUTCString(),
      guid: `${baseUrl}/documentation/implementation-guides`,
    },
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Northflow Technologies - Research Publications and Updates</title>
    <link>${baseUrl}</link>
    <description>Research publications, EFOS developments, compliance frameworks, and technical resources for European institutional digital infrastructure. Focused on operational sovereignty, governance, and regulatory compliance.</description>
    <language>en-eu</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <managingEditor>research@northflow.tech (Northflow Research Team)</managingEditor>
    <webMaster>technical@northflow.tech (Northflow Technical Team)</webMaster>
    <category>Digital Infrastructure</category>
    <category>Operational Sovereignty</category>
    <category>European Compliance</category>
    <category>Government Technology</category>
    <ttl>1440</ttl>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>Northflow Technologies</title>
      <link>${baseUrl}</link>
    </image>
${feedItems
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.guid}</guid>
      &lt;dc:creator&gt;Northflow Technologies&lt;/dc:creator&gt;
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
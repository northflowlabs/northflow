import { Metadata } from 'next';

export const siteConfig = {
  name: 'Northflow Technologies',
  description: 'Sovereign digital infrastructure for European government entities and institutional stakeholders. Resilient, auditable systems designed for operational continuity and regulatory compliance.',
  url: 'https://northflow.no',
  ogImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3cec599-1767132942397.png",
  links: {
    twitter: 'https://twitter.com/northflowtech',
    linkedin: 'https://linkedin.com/company/northflow-technologies'
  }
};

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authors
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title.includes('Northflow') ? title : `${title} | ${siteConfig.name}`;

  const defaultKeywords = [
  'digital sovereignty',
  'European digital infrastructure',
  'government technology',
  'institutional infrastructure',
  'operational continuity',
  'regulatory compliance',
  'mission-critical systems',
  'sovereign technology',
  'digital resilience',
  'European technology'];


  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: authors ? authors.map((name) => ({ name })) : [{ name: 'Northflow Technologies' }],
    creator: 'Northflow Technologies',
    publisher: 'Northflow Technologies',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      type: ogType,
      locale: 'en_EU',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${title}`
      }],

      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
      creator: '@northflowtech'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: 'Northflow Technologies',
    alternateName: 'Northflow',
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: [
    {
      '@type': 'Place',
      name: 'Europe'
    },
    {
      '@type': 'Place',
      name: 'Nordic Countries'
    }],

    sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin],

    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Institutional Engagement',
      url: `${siteConfig.url}/engage`
    }
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`
    }
  };
}

export function generateBreadcrumbSchema(items: {name: string;url: string;}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  };
}

export function generateArticleSchema({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  authors = ['Northflow Research Lab']







}: {title: string;description: string;path: string;publishedTime: string;modifiedTime?: string;authors?: string[];}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${siteConfig.url}${path}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authors.map((name) => ({
      '@type': 'Person',
      name
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Northflow Technologies',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    }
  };
}

export function generateResearchSchema({
  title,
  description,
  path,
  publishedTime
}: {title: string;description: string;path: string;publishedTime: string;}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: title,
    description,
    url: `${siteConfig.url}${path}`,
    datePublished: publishedTime,
    author: {
      '@type': 'Organization',
      name: 'Northflow Research Lab'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Northflow Technologies'
    }
  };
}

export function generateWebPageSchema({
  title,
  description,
  path




}: {title: string;description: string;path: string;}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}${path}#webpage`,
    url: `${siteConfig.url}${path}`,
    name: title,
    description,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`
    },
    about: {
      '@id': `${siteConfig.url}/#organization`
    },
    inLanguage: 'en'
  };
}
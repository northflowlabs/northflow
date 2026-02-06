import React, { Suspense } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StructuredData from '@/components/common/StructuredData';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://northflow.no'),
  title: 'Northflow Technologies — digital systems for research & operations',
  description: 'Northflow builds sovereign-aligned digital systems for institutional environments—research infrastructure, platforms, and scalable operations built for long-horizon reliability.',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_EU',
    url: 'https://northflow.no/',
    title: 'Northflow Technologies — digital systems for research & operations',
    description: 'Northflow builds sovereign-aligned digital systems for institutional environments—research infrastructure, platforms, and scalable operations built for long-horizon reliability.',
    siteName: 'Northflow Technologies',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8ea0002-1770151958362.png",
      width: 1200,
      height: 630,
      alt: 'Northflow Technologies'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northflow Technologies — digital systems for research & operations',
    description: 'Northflow builds sovereign-aligned digital systems for institutional environments—research infrastructure, platforms, and scalable operations built for long-horizon reliability.',
    images: ['https://northflow.no/assets/images/Sovereign-aligned_digital_infrastructure_for_institutional_environments-1767893683320.jpg'],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children

}: {children: React.ReactNode;}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous" />
</head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>);

}
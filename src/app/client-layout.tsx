'use client';

import React, { useState, useEffect } from 'react';
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import '../styles/index.css';
import '../styles/tailwind.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StructuredData from '@/components/common/StructuredData';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';

// Client component wrapper for deferred analytics
const AnalyticsWrapper = () => {
  const [Analytics, setAnalytics] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import('@/components/GoogleAnalytics').then((module) => {
      setAnalytics(() => module.default);
    });
  }, []);

  return Analytics ? <Analytics /> : null;
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600'],
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  display: 'swap',
  preload: true,
  weight: ['400', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
  weight: ['400', '500'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSansPro.variable} ${jetbrainsMono.variable}`}
    >
      <head></head>
      <body className="antialiased">
        <AnalyticsWrapper />
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

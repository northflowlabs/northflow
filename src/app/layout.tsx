import type { Metadata } from 'next';
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import '../styles/index.css';
import '../styles/tailwind.css';
import ClientLayout from './client-layout';
import StructuredData from '@/components/common/StructuredData';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600']
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  display: 'swap',
  preload: true,
  weight: ['400', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
  weight: ['400', '500']
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
    <html lang="en" className={`${inter.variable} ${sourceSansPro.variable} ${jetbrainsMono.variable}`}>
      <head>
      </head>
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>);
}
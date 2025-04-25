import { Metadata } from 'next';
import { siteConfig } from '@/lib/metadata';

// Default metadata for the entire site
export const metadata: Metadata = {
  title: {
    default: 'How-ToGuides.com | Master AI Tools with Step-by-Step Tutorials',
    template: '%s | How-ToGuides.com'
  },
  description: 'Master AI tools like ChatGPT, Midjourney, DALL-E, and Gemini AI with our comprehensive step-by-step guides designed for beginners in 2025.',
  keywords: ['AI tutorials', 'ChatGPT guide', 'Midjourney tutorial', 'DALL-E guide', 'Gemini AI tutorial', 'AI tools', 'how to use AI', '2025 AI guides'],
  authors: [{ name: 'How-ToGuides.com Team' }],
  creator: 'How-ToGuides.com',
  publisher: 'How-ToGuides.com',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'How-ToGuides.com | Master AI Tools with Step-by-Step Tutorials',
    description: 'Master AI tools like ChatGPT, Midjourney, DALL-E, and Gemini AI with our comprehensive step-by-step guides designed for beginners in 2025.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'How-ToGuides.com - Master AI Tools with Step-by-Step Tutorials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How-ToGuides.com | Master AI Tools with Step-by-Step Tutorials',
    description: 'Master AI tools like ChatGPT, Midjourney, DALL-E, and Gemini AI with our comprehensive step-by-step guides designed for beginners in 2025.',
    images: [`${siteConfig.url}/images/og-image.jpg`],
    creator: siteConfig.twitter.handle,
    site: siteConfig.twitter.site,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Improved for accessibility
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// src/lib/metadata.ts

import { Metadata } from 'next';

// Base metadata for the entire site
export const siteConfig = {
  name: 'How-ToGuides.com',
  description: 'Comprehensive step-by-step guides for popular AI tools including ChatGPT, Midjourney, DALL-E, and Gemini AI.',
  url: 'https://www.how-toguides.com',
  ogImage: 'https://www.how-toguides.com/images/og-image.jpg',
  twitter: {
    handle: '@howtoguides',
    site: '@howtoguides',
    cardType: 'summary_large_image',
  },
};

// Helper function to generate metadata for guide pages
export function generateGuideMetadata({
  title,
  description,
  slug,
  ogImagePath = '/images/og-image.jpg',
  keywords = [],
}: {
  title: string;
  description: string;
  slug: string;
  ogImagePath?: string;
  keywords?: string[];
}): Metadata {
  const ogUrl = `${siteConfig.url}${slug}`;
  const ogImageUrl = ogImagePath.startsWith('http') 
    ? ogImagePath 
    : `${siteConfig.url}${ogImagePath}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.name }],
    openGraph: {
      type: 'article',
      title: title,
      description: description,
      url: ogUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      title: title,
      description: description,
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.handle,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: ogUrl,
    },
  };
}

// Helper function to generate metadata for module pages
export function generateModuleMetadata({
  guideTitle,
  moduleTitle,
  description,
  slug,
  ogImagePath = '/images/og-image.jpg',
  keywords = [],
}: {
  guideTitle: string;
  moduleTitle: string;
  description: string;
  slug: string;
  ogImagePath?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${moduleTitle} - ${guideTitle}`;
  return generateGuideMetadata({
    title: fullTitle,
    description,
    slug,
    ogImagePath,
    keywords,
  });
}

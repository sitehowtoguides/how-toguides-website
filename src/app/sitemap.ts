import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Main pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/free-kits`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
  
  // Guide pages
  const guidePages = [
    {
      url: `${baseUrl}/guides/midjourney-for-beginners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/gemini-ai-for-beginners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/dall-e-for-beginners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
  
  // Module pages for Midjourney
  const midjourneyModules = [
    'introduction',
    'setting-up',
    'discord-interface',
    'first-image',
    'commands',
    'effective-prompts',
    'parameters',
    'advanced-features',
  ].map(slug => ({
    url: `${baseUrl}/guides/midjourney-for-beginners/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Module pages for Gemini AI
  const geminiModules = [
    'introduction',
    'getting-started',
    'capabilities',
    'basic-interactions',
    'prompt-engineering',
    'multimodal-features',
    'practical-applications',
    'advanced-techniques',
  ].map(slug => ({
    url: `${baseUrl}/guides/gemini-ai-for-beginners/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Module pages for DALL-E
  const dalleModules = [
    'introduction',
    'setting-up',
    'interface',
    'first-image',
    'effective-prompts',
    'capabilities',
    'advanced-features',
    'subscription-plans',
  ].map(slug => ({
    url: `${baseUrl}/guides/dall-e-for-beginners/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  return [
    ...staticPages,
    ...guidePages,
    ...midjourneyModules,
    ...geminiModules,
    ...dalleModules,
  ];
}

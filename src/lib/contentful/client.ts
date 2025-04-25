import { createClient } from 'contentful';

// Create Contentful delivery client for published content
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Create Contentful preview client for draft content
export const contentfulPreviewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: 'preview.contentful.com',
});

// Get the appropriate client based on preview mode
export const getClient = (preview: boolean = false) => {
  return preview ? contentfulPreviewClient : contentfulClient;
};

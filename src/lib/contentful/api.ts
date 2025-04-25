import { getClient } from './client';
import { Guide, Module, LeadMagnet } from './types';

// Fetch all guides
export async function getAllGuides(preview: boolean = false) {
  const client = getClient(preview);
  const response = await client.getEntries<Guide>({
    content_type: 'guide',
    include: 2,
    order: ['-fields.lastUpdatedDate'],
  });

  return response.items;
}

// Fetch a specific guide by slug
export async function getGuideBySlug(slug: string, preview: boolean = false) {
  const client = getClient(preview);
  const response = await client.getEntries<Guide>({
    content_type: 'guide',
    'fields.slug': slug,
    include: 2,
  });

  return response.items[0] || null;
}

// Fetch modules for a guide
export async function getModulesForGuide(guideId: string, preview: boolean = false) {
  const client = getClient(preview);
  const response = await client.getEntries<Module>({
    content_type: 'module',
    'fields.parentGuide.sys.id': guideId,
    order: ['fields.order'],
    include: 2,
  });

  return response.items;
}

// Fetch a specific module by ID
export async function getModuleById(moduleId: string, preview: boolean = false) {
  const client = getClient(preview);
  const response = await client.getEntry<Module>(moduleId, {
    include: 2,
  });

  return response;
}

// Fetch a lead magnet by ID
export async function getLeadMagnetById(leadMagnetId: string, preview: boolean = false) {
  const client = getClient(preview);
  const response = await client.getEntry<LeadMagnet>(leadMagnetId, {
    include: 2,
  });

  return response;
}

// Fetch related guides
export async function getRelatedGuides(guideId: string, limit: number = 3, preview: boolean = false) {
  const client = getClient(preview);
  const response = await client.getEntries<Guide>({
    content_type: 'guide',
    'sys.id[ne]': guideId,
    limit,
    order: ['-fields.lastUpdatedDate'],
  });

  return response.items;
}

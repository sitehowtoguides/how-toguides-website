// Types for Contentful content models based on the content model specification

// Guide content type
export interface Guide {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    description: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
      };
    };
    introduction: any; // Rich text
    estimatedReadingTime: number;
    lastUpdatedDate: string;
    author: Author;
    modules: Module[];
    relatedGuides: Guide[];
    leadMagnet: LeadMagnet;
    seoTitle: string;
    seoDescription: string;
    keywords: string[];
    canonicalUrl: string;
  };
}

// Module content type
export interface Module {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    order: number;
    content: any; // Rich text
    isGated: boolean;
    expandableSections: ExpandableSection[];
    knowledgeChecks: KnowledgeCheck[];
    parentGuide: Guide;
    nextModuleCta: string;
  };
}

// Expandable Section content type
export interface ExpandableSection {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    content: any; // Rich text
    order: number;
    parentModule: Module;
  };
}

// Knowledge Check content type
export interface KnowledgeCheck {
  sys: {
    id: string;
  };
  fields: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: any; // Rich text
    order: number;
    parentModule: Module;
  };
}

// Lead Magnet content type
export interface LeadMagnet {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: any; // Rich text
    benefits: string[];
    files: {
      fields: {
        file: {
          url: string;
          fileName: string;
          contentType: string;
        };
        title: string;
      };
    }[];
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    relatedGuides: Guide[];
    emailSequence: EmailSequence;
  };
}

// Email Sequence content type
export interface EmailSequence {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    emails: Email[];
    relatedLeadMagnet: LeadMagnet;
  };
}

// Email content type
export interface Email {
  sys: {
    id: string;
  };
  fields: {
    subjectLine: string;
    delay: number;
    content: any; // Rich text
    ctaText: string;
    ctaLink: string;
    parentSequence: EmailSequence;
  };
}

// Author content type
export interface Author {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    bio: any; // Rich text
    photo: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    socialLinks: string[];
    guides: Guide[];
  };
}

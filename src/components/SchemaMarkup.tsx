import React from 'react';

interface SchemaMarkupProps {
  guide: {
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    author: {
      name: string;
      type: string;
    };
    image: string;
    steps: Array<{
      name: string;
      text: string;
      url: string;
      image?: string;
    }>;
  };
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ guide, faq }) => {
  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": guide.title,
    "description": guide.description,
    "datePublished": guide.datePublished,
    "dateModified": guide.dateModified,
    "author": {
      "@type": guide.author.type,
      "name": guide.author.name
    },
    "image": {
      "@type": "ImageObject",
      "url": guide.image,
      "width": "1200",
      "height": "800"
    },
    "step": guide.steps.map(step => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "url": step.url,
      ...(step.image && {
        "image": {
          "@type": "ImageObject",
          "url": step.image,
          "width": "800",
          "height": "600"
        }
      })
    }))
  };

  // FAQ Schema (if provided)
  const faqSchema = faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};

export default SchemaMarkup;

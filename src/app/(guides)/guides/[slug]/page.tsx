import { generateGuideMetadata } from '@/lib/metadata';

export { generateGuideMetadata as generateMetadata };

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/lead-generation/LeadCaptureForm';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ChevronRight } from 'lucide-react';

// This would normally come from Contentful
const getGuideData = (slug) => {
  const guides = {
    'chatgpt-for-beginners': {
      title: "How to Use ChatGPT for Beginners: Complete 2025 Guide",
      description: "Learn how to use ChatGPT effectively with this comprehensive beginner's guide.",
      formId: "chatgpt-form",
      modules: [
        { id: "1", title: "Introduction to ChatGPT", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Creating Your ChatGPT Account", order: 2, isGated: false, slug: "account-setup" },
        { id: "3", title: "Navigating the ChatGPT Interface", order: 3, isGated: false, slug: "interface" },
        { id: "4", title: "Writing Your First Prompts", order: 4, isGated: true, slug: "first-prompts" },
        { id: "5", title: "Understanding Different ChatGPT Models", order: 5, isGated: true, slug: "models" },
        { id: "6", title: "ChatGPT for Content Creation", order: 6, isGated: true, slug: "content-creation" },
        { id: "7", title: "Troubleshooting Common Issues", order: 7, isGated: true, slug: "troubleshooting" },
        { id: "8", title: "Frequently Asked Questions", order: 8, isGated: true, slug: "faq" }
      ],
      author: {
        name: "Alex Johnson",
        role: "AI Content Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "25 min read",
      lastUpdated: "April 15, 2025",
      featuredImage: "https://images.unsplash.com/photo-1677442135968-6276536b3e02?q=80&w=1932&auto=format&fit=crop"
    },
    'midjourney-for-beginners': {
      title: "How to Use Midjourney: Step-by-Step Beginner's Guide",
      description: "Master Midjourney with this comprehensive guide.",
      formId: "midjourney-form",
      modules: [
        { id: "1", title: "Introduction to Midjourney", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Setting Up Discord & Midjourney", order: 2, isGated: false, slug: "setup" },
        { id: "3", title: "Understanding Midjourney Commands", order: 3, isGated: false, slug: "commands" },
        { id: "4", title: "Writing Effective Prompts", order: 4, isGated: true, slug: "prompts" },
        { id: "5", title: "Using Parameters & Settings", order: 5, isGated: true, slug: "parameters" },
        { id: "6", title: "Advanced Techniques", order: 6, isGated: true, slug: "advanced-techniques" },
        { id: "7", title: "Troubleshooting & FAQs", order: 7, isGated: true, slug: "troubleshooting" }
      ],
      author: {
        name: "Maya Rodriguez",
        role: "Digital Artist & AI Specialist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "30 min read",
      lastUpdated: "April 10, 2025",
      featuredImage: "https://images.unsplash.com/photo-1675426513824-6a4b7d3c1aa0?q=80&w=1932&auto=format&fit=crop"
    },
    'dalle-for-beginners': {
      title: "How to Use DALL-E: Complete Tutorial for Beginners",
      description: "Get started with DALL-E and learn how to create amazing AI-generated images.",
      formId: "dalle-form",
      modules: [
        { id: "1", title: "Introduction to DALL-E", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Creating Your OpenAI Account", order: 2, isGated: false, slug: "account-setup" },
        { id: "3", title: "Navigating the DALL-E Interface", order: 3, isGated: false, slug: "interface" },
        { id: "4", title: "Writing Effective Prompts", order: 4, isGated: true, slug: "prompts" },
        { id: "5", title: "Image Editing with DALL-E", order: 5, isGated: true, slug: "editing" },
        { id: "6", title: "Advanced Techniques", order: 6, isGated: true, slug: "advanced-techniques" },
        { id: "7", title: "Troubleshooting & FAQs", order: 7, isGated: true, slug: "troubleshooting" }
      ],
      author: {
        name: "Jordan Chen",
        role: "AI Art Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "20 min read",
      lastUpdated: "April 5, 2025",
      featuredImage: "https://images.unsplash.com/photo-1675426513824-6a4b7d3c1aa0?q=80&w=1932&auto=format&fit=crop"
    },
    'gemini-ai-for-beginners': {
      title: "How to Use Gemini AI: Beginner's Tutorial",
      description: "Explore Google's Gemini AI with this comprehensive guide.",
      formId: "gemini-form",
      modules: [
        { id: "1", title: "Introduction to Gemini AI", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Setting Up Gemini AI", order: 2, isGated: false, slug: "setup" },
        { id: "3", title: "Understanding Multimodal Capabilities", order: 3, isGated: false, slug: "multimodal" },
        { id: "4", title: "Text Generation with Gemini", order: 4, isGated: true, slug: "text-generation" },
        { id: "5", title: "Image Understanding", order: 5, isGated: true, slug: "image-understanding" },
        { id: "6", title: "Advanced Applications", order: 6, isGated: true, slug: "advanced-applications" },
        { id: "7", title: "Troubleshooting & FAQs", order: 7, isGated: true, slug: "troubleshooting" }
      ],
      author: {
        name: "Priya Sharma",
        role: "Google AI Specialist",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "22 min read",
      lastUpdated: "April 18, 2025",
      featuredImage: "https://images.unsplash.com/photo-1677442135968-6276536b3e02?q=80&w=1932&auto=format&fit=crop"
    }
  };
  
  return guides[slug] || null;
};

// Get related guides
const getRelatedGuides = (currentSlug) => {
  const allGuides = [
    {
      title: "How to Use ChatGPT for Beginners",
      description: "Learn how to use ChatGPT effectively with this comprehensive beginner's guide.",
      slug: "chatgpt-for-beginners",
      image: "https://images.unsplash.com/photo-1677442135968-6276536b3e02?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "How to Use Midjourney for Beginners",
      description: "Master Midjourney with this comprehensive guide.",
      slug: "midjourney-for-beginners",
      image: "https://images.unsplash.com/photo-1675426513824-6a4b7d3c1aa0?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "How to Use DALL-E for Beginners",
      description: "Get started with DALL-E and learn how to create amazing AI-generated images.",
      slug: "dalle-for-beginners",
      image: "https://images.unsplash.com/photo-1675426513824-6a4b7d3c1aa0?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "How to Use Gemini AI for Beginners",
      description: "Explore Google's Gemini AI with this comprehensive guide.",
      slug: "gemini-ai-for-beginners",
      image: "https://images.unsplash.com/photo-1677442135968-6276536b3e02?q=80&w=1932&auto=format&fit=crop"
    }
  ];
  
  return allGuides.filter(guide => guide.slug !== currentSlug).slice(0, 3);
};

export default function GuidePage({ params }) {
  const { slug } = params;
  const guide = getGuideData(slug);
  
  if (!guide) {
    notFound();
  }
  
  const relatedGuides = getRelatedGuides(slug);
  
  // In a real app, this would be determined by checking if the user has subscribed
  const isSubscribed = false;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" itemProp="headline">{guide.title}</h1>
            <p className="text-lg text-slate-300 mb-6" itemProp="description">{guide.description}</p>
            <Button size="lg" asChild>
              <Link href={`/guides/${slug}/${guide.modules[0].slug}`}>
                Start Learning Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Guide Info Bar */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center">
              <span className="mr-2">📚</span>
              <span>{guide.readingTime}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🔄</span>
              <span>Last updated: {guide.lastUpdated}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">👤</span>
              <span>By {guide.author.name}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
            {/* Module Navigation */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h3 className="font-semibold">Guide Contents</h3>
              </div>
              <ModuleNavigation
                modules={guide.modules}
                currentModuleId={null}
                guideSlug={slug}
                isSubscribed={isSubscribed}
              />
            </div>
            
            {/* Author Card */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <img 
                    src={guide.author.image} 
                    alt={guide.author.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{guide.author.name}</h3>
                    <p className="text-sm text-slate-600">{guide.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lead Capture Form */}
            <LeadCaptureForm
              formId={guide.formId || process.env.NEXT_PUBLIC_CONVERTKIT_GENERAL_FORM_ID || ''}
              guideName={guide.title.split(':')[0]}
              signupSource="guide_sidebar"
              title={`Get Your Free ${guide.title.split(':')[0]} Kit`}
              description="Subscribe to receive cheat sheets, templates, and exclusive resources."
              buttonText="Get Free Kit"
            />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={guide.featuredImage} 
                alt={guide.title} 
                className="w-full h-auto rounded-lg"
                itemProp="image"
              />
            </div>
            
            {/* Guide Introduction */}
            <div className="prose max-w-none mb-8">
              <h2>About This Guide</h2>
              <p>Welcome to our comprehensive guide on {guide.title.split(':')[0]}. This step-by-step tutorial is designed to take you from complete beginner to confident user, with practical examples and clear instructions throughout.</p>
              
              <p>In this guide, you'll learn:</p>
              <ul>
                {guide.modules.slice(0, 4).map((module) => (
                  <li key={module.id}>{module.title}</li>
                ))}
                <li>And much more...</li>
              </ul>
              
              <p>Whether you're looking to use {guide.title.split(':')[0].split(' ').pop()} for personal projects, professional work, or just out of curiosity, this guide will provide you with the knowledge and skills you need to get started and advance your capabilities.</p>
              
              <div className="not-prose">
                <Button className="mt-4" asChild>
                  <Link href={`/guides/${slug}/${guide.modules[0].slug}`}>
                    Start with {guide.modules[0].title}
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Module Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.modules.map((module) => (
                  <div key={module.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{module.title}</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {module.isGated ? 'Premium Content' : 'Free Access'}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/guides/${slug}/${module.slug}`}>
                          View Module
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedGuides.map((relatedGuide) => (
                    <div key={relatedGuide.slug} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                      <img 
                        src={relatedGuide.image} 
                        alt={relatedGuide.title} 
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{relatedGuide.title}</h3>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                          {relatedGuide.description}
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/guides/${relatedGuide.slug}`}>
                            View Guide
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": guide.title,
            "description": guide.description,
            "image": guide.featuredImage,
            "author": {
              "@type": "Person",
              "name": guide.author.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "How-To Guides",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.how-toguides.com/logo.png"
              }
            },
            "datePublished": "2025-04-01",
            "dateModified": "2025-04-15"
          })
        }}
      />
    </div>
  );
}

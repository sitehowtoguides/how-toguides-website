import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { ContentUnlockForm } from '@/components/lead-generation/ContentUnlockForm';

export const metadata: Metadata = {
  title: 'Practical Applications of Gemini AI | How-ToGuides.com',
  description: 'Discover real-world applications of Gemini AI across different professions and industries with practical examples and step-by-step guides.',
};

const modules = [
  {
    id: 'introduction',
    title: 'Introduction to Gemini AI',
    description: 'Learn what Gemini AI is and how it can transform your workflow.',
    isGated: false,
    slug: 'introduction',
  },
  {
    id: 'getting-started',
    title: 'Getting Started with Gemini AI',
    description: 'Create your account and set up Gemini AI on different devices.',
    isGated: false,
    slug: 'getting-started',
  },
  {
    id: 'capabilities',
    title: 'Understanding Gemini AI\'s Capabilities',
    description: 'Explore the multimodal features and different versions of Gemini.',
    isGated: false,
    slug: 'capabilities',
  },
  {
    id: 'basic-interactions',
    title: 'Basic Interactions with Gemini AI',
    description: 'Learn how to communicate effectively with Gemini AI.',
    isGated: true,
    slug: 'basic-interactions',
  },
  {
    id: 'prompt-engineering',
    title: 'Crafting Effective Prompts',
    description: 'Master the art of writing prompts that get the best results.',
    isGated: true,
    slug: 'prompt-engineering',
  },
  {
    id: 'multimodal-features',
    title: 'Using Multimodal Features',
    description: 'Work with images, code, and other media types in Gemini.',
    isGated: true,
    slug: 'multimodal-features',
  },
  {
    id: 'practical-applications',
    title: 'Practical Applications',
    description: 'Real-world use cases and examples for different professions.',
    isGated: true,
    slug: 'practical-applications',
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Techniques',
    description: 'Take your Gemini AI skills to the next level with advanced strategies.',
    isGated: true,
    slug: 'advanced-techniques',
  },
];

export default function PracticalApplications() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="practical-applications" 
              guideSlug="gemini-ai-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#unlock-premium" className="text-primary hover:underline">Unlock Premium Content</a></li>
                <li className="text-slate-400">Gemini for Content Creation</li>
                <li className="text-slate-400">Gemini for Education</li>
                <li className="text-slate-400">Gemini for Business</li>
                <li className="text-slate-400">Gemini for Developers</li>
                <li className="text-slate-400">Knowledge Check</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <Link href="/guides/gemini-ai-for-beginners" className="text-primary hover:underline mb-2 inline-block">
              ← Back to Guide Overview
            </Link>
            <h1 className="text-3xl font-bold mb-4">Practical Applications of Gemini AI</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 22 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 7 of 8</span>
              <span className="ml-4 bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/gemini-ai-practical-applications.jpg" 
                alt="Collage showing Gemini AI being used across different professions and industries" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you understand how to use Gemini AI effectively, it's time to explore specific applications across different professions and industries. This module provides practical, real-world examples of how Gemini can be applied to solve problems, enhance productivity, and unlock new possibilities in various fields.
            </p>
            
            <p>
              Whether you're a content creator, educator, business professional, or developer, you'll discover tailored workflows and examples that you can immediately apply to your own work.
            </p>
            
            <div id="unlock-premium" className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-bold mb-4 text-center">Unlock Premium Content</h2>
              <p className="text-center mb-6">
                This module is part of our premium content. Unlock now to access this module and all other premium modules in this guide.
              </p>
              
              <ContentUnlockForm 
                formId="practical-applications-unlock"
                buttonText="Unlock Premium Content"
              />
              
              <div className="mt-6">
                <h3 className="font-bold mb-2">What You'll Learn in This Module:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How content creators can use Gemini for writing, research, and ideation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Educational applications for students, teachers, and lifelong learners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Business use cases for marketing, analysis, and customer service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Developer workflows for coding, debugging, and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Step-by-step examples with prompts and workflows you can adapt</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/gemini-ai-for-beginners/multimodal-features">
                <Button variant="outline">
                  ← Previous: Using Multimodal Features
                </Button>
              </Link>
              <Link href="/guides/gemini-ai-for-beginners/advanced-techniques">
                <Button disabled>
                  Next: Advanced Techniques →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

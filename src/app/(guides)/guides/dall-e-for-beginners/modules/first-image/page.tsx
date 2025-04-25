import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { ContentUnlockForm } from '@/components/lead-generation/ContentUnlockForm';

export const metadata: Metadata = {
  title: 'Creating Your First Image with DALL-E | How-ToGuides.com',
  description: 'Learn how to generate your first AI image with DALL-E through our step-by-step tutorial for beginners.',
};

const modules = [
  {
    id: 'introduction',
    title: 'Introduction to DALL-E',
    description: 'Learn what DALL-E is and how it can transform your creative process.',
    isGated: false,
    slug: 'introduction',
  },
  {
    id: 'setting-up',
    title: 'Setting Up Your DALL-E Account',
    description: 'Create your account and understand the credit system.',
    isGated: false,
    slug: 'setting-up',
  },
  {
    id: 'interface',
    title: 'Navigating the DALL-E Interface',
    description: 'Learn how to use the DALL-E dashboard and tools.',
    isGated: false,
    slug: 'interface',
  },
  {
    id: 'first-image',
    title: 'Creating Your First Image',
    description: 'Generate your first AI image with DALL-E step by step.',
    isGated: true,
    slug: 'first-image',
  },
  {
    id: 'effective-prompts',
    title: 'Crafting Effective Prompts',
    description: 'Master the art of writing prompts that get the results you want.',
    isGated: true,
    slug: 'effective-prompts',
  },
  {
    id: 'capabilities',
    title: 'Understanding DALL-E\'s Capabilities',
    description: 'Explore what DALL-E can and cannot do.',
    isGated: true,
    slug: 'capabilities',
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features',
    description: 'Learn about editing, variations, and other powerful tools.',
    isGated: true,
    slug: 'advanced-features',
  },
  {
    id: 'subscription-plans',
    title: 'DALL-E Subscription Plans',
    description: 'Compare different pricing options and find the best fit for you.',
    isGated: true,
    slug: 'subscription-plans',
  },
];

export default function FirstImage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="first-image" 
              guideSlug="dall-e-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#unlock-premium" className="text-primary hover:underline">Unlock Premium Content</a></li>
                <li className="text-slate-400">Starting a New Generation</li>
                <li className="text-slate-400">Writing Your First Prompt</li>
                <li className="text-slate-400">Selecting Generation Options</li>
                <li className="text-slate-400">Generating Your Image</li>
                <li className="text-slate-400">Understanding the Results</li>
                <li className="text-slate-400">Saving Your Image</li>
                <li className="text-slate-400">Knowledge Check</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <Link href="/guides/dall-e-for-beginners" className="text-primary hover:underline mb-2 inline-block">
              ← Back to Guide Overview
            </Link>
            <h1 className="text-3xl font-bold mb-4">Creating Your First Image with DALL-E</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 15 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 4 of 8</span>
              <span className="ml-4 bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/dalle-first-generation.jpg" 
                alt="Example of a first image generation with the prompt and resulting images" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you understand what DALL-E is, have set up your account, and are familiar with the interface, it's time for the exciting part: creating your first AI-generated image! In this module, we'll walk through the entire process step by step, from writing your first prompt to saving your finished creation.
            </p>
            
            <p>
              By the end of this module, you'll have successfully generated your first DALL-E image and will understand the basic workflow for creating AI art. This hands-on experience will form the foundation for more advanced techniques in later modules.
            </p>
            
            <div id="unlock-premium" className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-bold mb-4 text-center">Unlock Premium Content</h2>
              <p className="text-center mb-6">
                This module is part of our premium content. Unlock now to access this module and all other premium modules in this guide.
              </p>
              
              <ContentUnlockForm 
                formId="first-image-unlock"
                buttonText="Unlock Premium Content"
              />
              
              <div className="mt-6">
                <h3 className="font-bold mb-2">What You'll Learn in This Module:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How to start a new image generation in DALL-E</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Tips for writing your very first prompt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How to select the right generation options for your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding how DALL-E interprets your prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Methods for saving and organizing your generated images</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/dall-e-for-beginners/interface">
                <Button variant="outline">
                  ← Previous: Navigating the DALL-E Interface
                </Button>
              </Link>
              <Link href="/guides/dall-e-for-beginners/effective-prompts">
                <Button>
                  Next: Crafting Effective Prompts →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

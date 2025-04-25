import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { ContentUnlockForm } from '@/components/lead-generation/ContentUnlockForm';

export const metadata: Metadata = {
  title: 'Crafting Effective Prompts for DALL-E | How-ToGuides.com',
  description: 'Learn how to write effective prompts for DALL-E that produce the exact images you want, with expert techniques and examples.',
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

export default function EffectivePrompts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="effective-prompts" 
              guideSlug="dall-e-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#unlock-premium" className="text-primary hover:underline">Unlock Premium Content</a></li>
                <li className="text-slate-400">Prompt Basics</li>
                <li className="text-slate-400">Prompt Structure Techniques</li>
                <li className="text-slate-400">Style and Aesthetic Guidance</li>
                <li className="text-slate-400">Using Reference Artists and Styles</li>
                <li className="text-slate-400">Technical Specifications in Prompts</li>
                <li className="text-slate-400">Common Prompt Mistakes</li>
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
            <h1 className="text-3xl font-bold mb-4">Crafting Effective Prompts for DALL-E</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 20 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 5 of 8</span>
              <span className="ml-4 bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/dalle-prompt-engineering.jpg" 
                alt="Visual comparison of basic vs. detailed prompts with resulting DALL-E images" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              The quality of your DALL-E images depends significantly on how well you craft your prompts. In this module, we'll explore the art and science of writing effective prompts that produce the results you want, with techniques that work specifically for DALL-E's latest models.
            </p>
            
            <p>
              By the end of this module, you'll understand how to structure prompts that consistently produce high-quality, accurate images that match your creative vision. You'll learn techniques used by professionals to get the most out of DALL-E's capabilities.
            </p>
            
            <div id="unlock-premium" className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-bold mb-4 text-center">Unlock Premium Content</h2>
              <p className="text-center mb-6">
                This module is part of our premium content. Unlock now to access this module and all other premium modules in this guide.
              </p>
              
              <ContentUnlockForm 
                formId="effective-prompts-unlock"
                buttonText="Unlock Premium Content"
              />
              
              <div className="mt-6">
                <h3 className="font-bold mb-2">What You'll Learn in This Module:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>The essential components of an effective DALL-E prompt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Different prompt structures for various types of images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How to specify artistic styles and aesthetics accurately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Techniques for referencing specific artists and art movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Common prompt mistakes and how to avoid them</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/dall-e-for-beginners/first-image">
                <Button variant="outline">
                  ← Previous: Creating Your First Image
                </Button>
              </Link>
              <Link href="/guides/dall-e-for-beginners/capabilities">
                <Button>
                  Next: Understanding DALL-E's Capabilities →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

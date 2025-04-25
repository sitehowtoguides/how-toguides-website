import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { ContentUnlockForm } from '@/components/lead-generation/ContentUnlockForm';

export const metadata: Metadata = {
  title: 'Basic Interactions with Gemini AI | How-ToGuides.com',
  description: 'Learn how to effectively communicate with Gemini AI, understand the interface, and master basic conversation techniques.',
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

export default function BasicInteractions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="basic-interactions" 
              guideSlug="gemini-ai-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#unlock-premium" className="text-primary hover:underline">Unlock Premium Content</a></li>
                <li className="text-slate-400">Understanding the Interface</li>
                <li className="text-slate-400">Starting a Conversation</li>
                <li className="text-slate-400">Conversation Best Practices</li>
                <li className="text-slate-400">Using Extensions</li>
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
            <h1 className="text-3xl font-bold mb-4">Basic Interactions with Gemini AI</h1>
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
                src="/images/gemini-ai-basic-interactions.jpg" 
                alt="Person interacting with Gemini AI interface on multiple devices" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you understand what Gemini AI is, how to access it, and its capabilities, it's time to learn how to interact with it effectively. This module will guide you through the Gemini interface, teach you how to start and maintain productive conversations, and share best practices for getting the most out of your interactions.
            </p>
            
            <p>
              By mastering these basic interaction techniques, you'll build a solid foundation for more advanced applications of Gemini AI in later modules.
            </p>
            
            <div id="unlock-premium" className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-bold mb-4 text-center">Unlock Premium Content</h2>
              <p className="text-center mb-6">
                This module is part of our premium content. Unlock now to access this module and all other premium modules in this guide.
              </p>
              
              <ContentUnlockForm 
                formId="basic-interactions-unlock"
                buttonText="Unlock Premium Content"
              />
              
              <div className="mt-6">
                <h3 className="font-bold mb-2">What You'll Learn in This Module:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How to navigate and understand the Gemini AI interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Techniques for starting effective conversations with Gemini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Best practices for maintaining context in longer conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>How to use Gemini's extensions to enhance functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Strategies for getting more accurate and helpful responses</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/gemini-ai-for-beginners/capabilities">
                <Button variant="outline">
                  ← Previous: Understanding Gemini AI's Capabilities
                </Button>
              </Link>
              <Link href="/guides/gemini-ai-for-beginners/prompt-engineering">
                <Button disabled>
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

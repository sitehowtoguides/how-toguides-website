import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Introduction to Midjourney | How-ToGuides.com',
  description: 'Learn what Midjourney is, how it works, and how it compares to other AI image generators in this comprehensive introduction.',
};

const modules = [
  {
    id: 'introduction',
    title: 'Introduction to Midjourney',
    description: 'Learn what Midjourney is and how it can transform your creative process.',
    isGated: false,
    slug: 'introduction',
  },
  {
    id: 'setting-up',
    title: 'Setting Up Your Midjourney Account',
    description: 'Create your Discord and Midjourney accounts and get ready to generate images.',
    isGated: false,
    slug: 'setting-up',
  },
  {
    id: 'discord-interface',
    title: 'Navigating the Discord Interface',
    description: 'Learn how to use Discord to interact with the Midjourney bot.',
    isGated: false,
    slug: 'discord-interface',
  },
  {
    id: 'first-image',
    title: 'Creating Your First Image',
    description: 'Generate your first AI image using simple prompts and commands.',
    isGated: true,
    slug: 'first-image',
  },
  {
    id: 'commands',
    title: 'Understanding Midjourney Commands',
    description: 'Master the essential commands for controlling Midjourney.',
    isGated: true,
    slug: 'commands',
  },
  {
    id: 'effective-prompts',
    title: 'Crafting Effective Prompts',
    description: 'Learn how to write prompts that generate exactly the images you want.',
    isGated: true,
    slug: 'effective-prompts',
  },
  {
    id: 'parameters',
    title: 'Using Parameters to Control Output',
    description: 'Fine-tune your images with aspect ratios, styles, and other parameters.',
    isGated: true,
    slug: 'parameters',
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features and Techniques',
    description: 'Explore advanced features like Multi Prompts, Zoom Out, and more.',
    isGated: true,
    slug: 'advanced-features',
  },
];

export default function IntroductionToMidjourney() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="introduction" 
              guideSlug="midjourney-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#what-is-midjourney" className="text-primary hover:underline">What is Midjourney?</a></li>
                <li><a href="#how-midjourney-works" className="text-primary hover:underline">How Midjourney Works</a></li>
                <li><a href="#midjourney-evolution" className="text-primary hover:underline">Midjourney's Evolution</a></li>
                <li><a href="#comparison" className="text-primary hover:underline">Comparison to Other AI Image Generators</a></li>
                <li><a href="#knowledge-check" className="text-primary hover:underline">Knowledge Check</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <Link href="/guides/midjourney-for-beginners" className="text-primary hover:underline mb-2 inline-block">
              ← Back to Guide Overview
            </Link>
            <h1 className="text-3xl font-bold mb-4">Introduction to Midjourney</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 8 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 1 of 8</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-evolution-infographic.jpg" 
                alt="Infographic showing Midjourney's evolution and capabilities through 2025" 
                fill
                className="object-cover"
              />
            </div>
            
            <h2 id="what-is-midjourney">What is Midjourney?</h2>
            <p>
              Midjourney is an AI image generation tool that creates images based on text descriptions (prompts) provided by users. Unlike traditional design software that requires manual creation, Midjourney uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results.
            </p>
            <p>
              At its core, Midjourney is powered by a diffusion model, a type of AI that gradually transforms random noise into coherent images based on the text guidance it receives. The system has been trained on billions of images and their associated descriptions, allowing it to understand complex concepts, artistic styles, lighting techniques, compositions, and more.
            </p>
            
            <ExpandableSection 
              title="How Midjourney Differs from Traditional Design Tools" 
              content={
                <div>
                  <p>Traditional design tools like Photoshop, Illustrator, or Blender require users to manually create every element of an image. This process demands technical skills, artistic ability, and significant time investment.</p>
                  <p>Midjourney flips this paradigm by allowing users to describe what they want in natural language. The AI handles the technical aspects of creation, enabling anyone—regardless of artistic background—to generate high-quality visuals in seconds.</p>
                  <p>Key differences include:</p>
                  <ul>
                    <li><strong>Input method:</strong> Text prompts vs. manual creation</li>
                    <li><strong>Skill requirement:</strong> Prompt writing vs. technical design skills</li>
                    <li><strong>Creation time:</strong> Seconds vs. hours or days</li>
                    <li><strong>Iteration speed:</strong> Rapid exploration of multiple concepts</li>
                    <li><strong>Creative process:</strong> Collaborative with AI vs. solely human-driven</li>
                  </ul>
                </div>
              }
            />
            
            <h2 id="how-midjourney-works">How Midjourney Works</h2>
            <p>
              Midjourney operates primarily through Discord, a communication platform popular with gamers and online communities. This unique approach creates a social, community-oriented experience where users can see each other's creations, share techniques, and learn collaboratively.
            </p>
            <p>
              The basic workflow for using Midjourney is:
            </p>
            <ol>
              <li>Join the Midjourney Discord server</li>
              <li>Use the <code>/imagine</code> command followed by your text prompt</li>
              <li>Wait 30-60 seconds while the AI generates four image options</li>
              <li>Choose to upscale an image, create variations, or start over with a new prompt</li>
            </ol>
            
            <h2 id="midjourney-evolution">Midjourney's Evolution</h2>
            <p>
              Since its public beta release in July 2022, Midjourney has evolved significantly. The current flagship model as of 2025 is Version 6, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions.
            </p>
            <p>
              Key milestones in Midjourney's development include:
            </p>
            <ul>
              <li><strong>Version 1-3 (2022):</strong> Initial releases with distinctive artistic style but limited photorealism</li>
              <li><strong>Version 4 (2023):</strong> Improved photorealism and prompt following</li>
              <li><strong>Version 5 (2023-2024):</strong> Major leap in quality with better composition and detail</li>
              <li><strong>Version 6 (2024-2025):</strong> Current version with exceptional photorealism, text rendering, and prompt accuracy</li>
              <li><strong>Niji Model (2023-2025):</strong> Specialized model for anime and illustration styles</li>
            </ul>
            
            <ExpandableSection 
              title="Technical Innovations in Version 6" 
              content={
                <div>
                  <p>Midjourney Version 6 represents a significant technical advancement over previous versions, with several key innovations:</p>
                  <ul>
                    <li><strong>Enhanced Diffusion Process:</strong> Refined noise-to-image transformation with better coherence</li>
                    <li><strong>Improved Text Understanding:</strong> More nuanced interpretation of complex prompts</li>
                    <li><strong>Advanced Compositional Logic:</strong> Better understanding of spatial relationships and scene construction</li>
                    <li><strong>Multi-Prompt Technology:</strong> Ability to weight different parts of prompts with varying importance</li>
                    <li><strong>Zoom Out Feature:</strong> Capability to expand the canvas beyond the original composition</li>
                    <li><strong>Vary Region:</strong> Selective modification of specific image areas while preserving others</li>
                    <li><strong>Improved Text Rendering:</strong> Near-perfect text generation within images</li>
                    <li><strong>Enhanced Face Generation:</strong> More realistic and consistent human faces</li>
                  </ul>
                  <p>These advancements have made Version 6 significantly more versatile and capable than its predecessors, particularly for professional use cases requiring precision and realism.</p>
                </div>
              }
            />
            
            <h2 id="comparison">Comparison to Other AI Image Generators</h2>
            <p>
              Compared to other AI image generators like DALL-E 3 or Stable Diffusion, Midjourney offers a unique balance of artistic quality and photorealism, with particular strengths in creating atmospheric, emotionally evocative images with strong aesthetic appeal.
            </p>
            <p>
              Key differences between major AI image generators:
            </p>
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Feature</th>
                  <th className="border border-slate-200 p-2 text-left">Midjourney</th>
                  <th className="border border-slate-200 p-2 text-left">DALL-E 3</th>
                  <th className="border border-slate-200 p-2 text-left">Stable Diffusion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2">Interface</td>
                  <td className="border border-slate-200 p-2">Discord-based</td>
                  <td className="border border-slate-200 p-2">Web interface / ChatGPT</td>
                  <td className="border border-slate-200 p-2">Various (web, local, API)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Artistic Quality</td>
                  <td className="border border-slate-200 p-2">Excellent</td>
                  <td className="border border-slate-200 p-2">Very Good</td>
                  <td className="border border-slate-200 p-2">Good (model dependent)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Photorealism</td>
                  <td className="border border-slate-200 p-2">Excellent (V6)</td>
                  <td className="border border-slate-200 p-2">Excellent</td>
                  <td className="border border-slate-200 p-2">Good (model dependent)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Text Rendering</td>
                  <td className="border border-slate-200 p-2">Very Good (V6)</td>
                  <td className="border border-slate-200 p-2">Excellent</td>
                  <td className="border border-slate-200 p-2">Fair to Good</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Prompt Accuracy</td>
                  <td className="border border-slate-200 p-2">Good to Very Good</td>
                  <td className="border border-slate-200 p-2">Excellent</td>
                  <td className="border border-slate-200 p-2">Fair to Good</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Speed</td>
                  <td className="border border-slate-200 p-2">30-60 seconds</td>
                  <td className="border border-slate-200 p-2">20-40 seconds</td>
                  <td className="border border-slate-200 p-2">Varies (5-60 seconds)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Cost</td>
                  <td className="border border-slate-200 p-2">Subscription-based</td>
                  <td className="border border-slate-200 p-2">Credit-based / Subscription</td>
                  <td className="border border-slate-200 p-2">Free to Subscription</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Open Source</td>
                  <td className="border border-slate-200 p-2">No</td>
                  <td className="border border-slate-200 p-2">No</td>
                  <td className="border border-slate-200 p-2">Yes</td>
                </tr>
              </tbody>
            </table>
            
            <InlineLeadCapture 
              formId="midjourney-intro-inline"
              title="Get Our AI Image Generator Comparison Guide"
              description="Subscribe to receive our comprehensive comparison of all major AI image generators, including detailed analysis of strengths, weaknesses, and ideal use cases."
              buttonText="Send Me the Comparison Guide"
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="What is the primary interface used to interact with Midjourney?"
              options={[
                "A web application similar to Photoshop",
                "A mobile app available on iOS and Android",
                "Discord, a communication platform",
                "A standalone desktop application"
              ]}
              correctAnswer="Discord, a communication platform"
              explanation="Midjourney operates primarily through Discord, which creates a social, community-oriented experience where users can see each other's creations and learn collaboratively."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <div></div>
              <Link href="/guides/midjourney-for-beginners/setting-up">
                <Button>
                  Next Module: Setting Up Your Midjourney Account →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

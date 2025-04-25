import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';
import { ContentUnlockForm } from '@/components/lead-generation/ContentUnlockForm';

export const metadata: Metadata = {
  title: 'Navigating the Discord Interface for Midjourney | How-ToGuides.com',
  description: 'Learn how to navigate Discord to effectively use Midjourney, including understanding channels, message flow, and interacting with the Midjourney Bot.',
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

export default function DiscordInterface() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="discord-interface" 
              guideSlug="midjourney-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#discord-layout" className="text-primary hover:underline">Understanding Discord Layout</a></li>
                <li><a href="#finding-channels" className="text-primary hover:underline">Finding the Right Channels</a></li>
                <li><a href="#message-flow" className="text-primary hover:underline">Understanding Message Flow</a></li>
                <li><a href="#midjourney-bot" className="text-primary hover:underline">Interacting with the Midjourney Bot</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Navigating the Discord Interface</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 8 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 3 of 8</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-discord-interface.jpg" 
                alt="Annotated screenshot of the Discord interface with Midjourney elements labeled" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Understanding how to navigate Discord is essential for using Midjourney effectively. If you're new to Discord, the interface might seem confusing at first, but it's actually quite straightforward once you understand the basic layout and functionality.
            </p>
            
            <h2 id="discord-layout">Understanding the Discord Layout</h2>
            <p>
              The Discord interface has several key components that you'll need to familiarize yourself with:
            </p>
            
            <h3>Main Interface Components:</h3>
            <ul>
              <li><strong>Server List:</strong> On the far left, showing icons for all servers you've joined</li>
              <li><strong>Channel List:</strong> To the right of the Server List, showing text and voice channels within the selected server</li>
              <li><strong>Main Chat Area:</strong> The central part where messages and images appear</li>
              <li><strong>Member List:</strong> On the right side, showing other users in the current channel</li>
              <li><strong>User Controls:</strong> At the bottom, including your profile settings and voice controls</li>
            </ul>
            
            <p>
              When you first join the Midjourney server, you'll notice it has many channels organized for different purposes. This organization helps manage the high volume of users and image generations.
            </p>
            
            <ExpandableSection 
              title="Discord Keyboard Shortcuts" 
              content={
                <div>
                  <p>Learning these keyboard shortcuts can significantly improve your Discord navigation experience:</p>
                  <ul>
                    <li><strong>Ctrl+K (Cmd+K on Mac):</strong> Quick server and channel switcher</li>
                    <li><strong>Ctrl+F (Cmd+F on Mac):</strong> Search within the current channel</li>
                    <li><strong>Shift+Esc:</strong> Mark all messages as read</li>
                    <li><strong>Alt+Up/Down:</strong> Navigate between channels</li>
                    <li><strong>Alt+Shift+Up/Down:</strong> Navigate between unread channels</li>
                    <li><strong>Ctrl+Shift+M (Cmd+Shift+M on Mac):</strong> Toggle mute for current server</li>
                    <li><strong>Tab:</strong> Autocomplete commands or usernames</li>
                  </ul>
                  <p>These shortcuts can help you quickly navigate Discord's interface, especially when channels are moving quickly with many image generations.</p>
                </div>
              }
            />
            
            <h2 id="finding-channels">Finding the Right Channels</h2>
            <p>
              The Midjourney server has several types of channels, each with a specific purpose. Understanding these channel types will help you find the right place to generate images and get help.
            </p>
            
            <h3>Channel Types in the Midjourney Server:</h3>
            <ul>
              <li><strong>Information Channels:</strong> Channels like #rules, #announcements, and #faq contain important information about using Midjourney</li>
              <li><strong>Newbie Channels:</strong> Channels like #newbies-1, #newbies-2, etc., are designated for new users to generate their first images</li>
              <li><strong>General Channels:</strong> Channels like #general-1, #general-2, etc., are for all users to generate images</li>
              <li><strong>Theme Channels:</strong> Specialized channels for specific types of images (e.g., #photography, #illustration)</li>
              <li><strong>Help Channels:</strong> Channels like #help-1 and #help-2 where you can ask questions and get assistance</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                As a beginner, you should start in one of the #newbies channels. These are less crowded and move at a slower pace, making them easier to navigate. Once you're comfortable with the basics, you can move to the general or theme channels.
              </p>
            </div>
            
            <h2 id="message-flow">Understanding Message Flow</h2>
            <p>
              Discord channels in the Midjourney server can move quickly as many users generate images simultaneously. Here's how to keep track of your own interactions:
            </p>
            
            <h3>Message Flow Characteristics:</h3>
            <ul>
              <li>Messages flow from bottom to top, with newest messages appearing at the bottom</li>
              <li>Each image generation request and its results appear as a thread in the channel</li>
              <li>Your own requests will be highlighted slightly to help you find them</li>
              <li>You can use the search function (Ctrl+F or Cmd+F) to find your own messages</li>
            </ul>
            
            <ExpandableSection 
              title="Using Threads to Organize Your Generations" 
              content={
                <div>
                  <p>Discord's "Threads" feature is extremely useful for keeping track of your Midjourney generations:</p>
                  <ol>
                    <li>When you generate an image, Discord automatically creates a thread</li>
                    <li>Click on the thread to open a separate view that only shows your interaction with that specific image generation</li>
                    <li>This isolates your conversation with the Midjourney Bot, making it easier to follow</li>
                    <li>You can return to the thread later by clicking on it in the channel or finding it in your "Active Threads" list</li>
                  </ol>
                  <p>Using threads effectively can transform your Midjourney experience from chaotic to organized, especially in busy channels.</p>
                </div>
              }
            />
            
            <h2 id="midjourney-bot">Interacting with the Midjourney Bot</h2>
            <p>
              All interactions with Midjourney happen through the Midjourney Bot. Understanding how to communicate with the bot is essential for using the service effectively.
            </p>
            
            <h3>Key Aspects of Bot Interaction:</h3>
            <ul>
              <li>You send commands to the bot using slash commands (starting with <code>/</code>)</li>
              <li>The bot responds with images based on your prompts</li>
              <li>You can interact with the generated images using buttons that appear below them</li>
              <li>The bot will also send you direct messages about your subscription and usage</li>
            </ul>
            
            <p>
              The most common command you'll use is <code>/imagine</code>, which generates images based on your text prompt. We'll cover this and other commands in detail in upcoming modules.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Important Note</p>
              <p className="text-yellow-600">
                If the channels are moving too fast and you're having trouble keeping track of your generations, remember that you can always check your direct messages with the Midjourney Bot. The bot sends you a copy of each image you generate.
              </p>
            </div>
            
            <InlineLeadCapture 
              formId="midjourney-discord-inline"
              title="Get Our Discord Navigation Cheat Sheet"
              description="Subscribe to receive our printable Discord Navigation Cheat Sheet with keyboard shortcuts, channel explanations, and tips for efficiently managing your Midjourney workflow."
              buttonText="Send Me the Cheat Sheet"
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which channels are best for beginners to start generating images in the Midjourney Discord server?"
              options={[
                "The #general channels",
                "The #newbies channels",
                "The #theme channels",
                "The #help channels"
              ]}
              correctAnswer="The #newbies channels"
              explanation="The #newbies channels are specifically designed for new users. They are less crowded and move at a slower pace, making them easier to navigate when you're first learning how to use Midjourney."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/setting-up">
                <Button variant="outline">
                  ← Previous: Setting Up Your Midjourney Account
                </Button>
              </Link>
              <div>
                <ContentUnlockForm 
                  formId="midjourney-module-unlock"
                  title="Unlock Premium Content"
                  description="Subscribe to access the next module: Creating Your First Image"
                  buttonText="Unlock Premium Content"
                  redirectPath="/guides/midjourney-for-beginners/first-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

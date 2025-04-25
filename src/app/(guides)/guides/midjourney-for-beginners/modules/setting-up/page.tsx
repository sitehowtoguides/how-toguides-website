import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Setting Up Your Midjourney Account | How-ToGuides.com',
  description: 'Learn how to set up your Midjourney account through Discord, create a subscription, and prepare for generating AI images.',
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

export default function SettingUpMidjourney() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="setting-up" 
              guideSlug="midjourney-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#creating-discord-account" className="text-primary hover:underline">Creating a Discord Account</a></li>
                <li><a href="#joining-midjourney-server" className="text-primary hover:underline">Joining the Midjourney Server</a></li>
                <li><a href="#subscription-plans" className="text-primary hover:underline">Midjourney Subscription Plans</a></li>
                <li><a href="#starting-subscription" className="text-primary hover:underline">Starting Your Subscription</a></li>
                <li><a href="#discord-settings" className="text-primary hover:underline">Important Discord Settings</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Setting Up Your Midjourney Account</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 10 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 2 of 8</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-signup-process.jpg" 
                alt="Step-by-step screenshots of the 2025 signup process with annotations" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Getting started with Midjourney requires both a Discord account and a Midjourney subscription. In this module, we'll walk through the complete setup process step by step, ensuring you're ready to start generating images.
            </p>
            
            <h2 id="creating-discord-account">Step 1: Creating a Discord Account</h2>
            <p>
              Unlike most AI tools that have their own dedicated platforms, Midjourney operates through Discord, a communication platform popular with gamers and online communities. If you don't already have a Discord account, you'll need to create one first.
            </p>
            
            <h3>How to Create a Discord Account:</h3>
            <ol>
              <li>Visit <a href="https://discord.com" target="_blank" rel="noopener noreferrer">discord.com</a> in your web browser</li>
              <li>Click on the "Register" button</li>
              <li>Enter your email address, username, password, and date of birth</li>
              <li>Verify your email address by clicking the link sent to your inbox</li>
              <li>Complete any additional verification steps if prompted</li>
            </ol>
            
            <ExpandableSection 
              title="Discord Platform Options" 
              content={
                <div>
                  <p>You can use Discord through multiple platforms:</p>
                  <ul>
                    <li><strong>Web Browser:</strong> Access Discord directly through any modern web browser at discord.com</li>
                    <li><strong>Desktop Application:</strong> Download the Discord app for Windows, macOS, or Linux for a more integrated experience</li>
                    <li><strong>Mobile App:</strong> Use Discord on iOS or Android devices</li>
                  </ul>
                  <p>For the best Midjourney experience, we recommend using either the desktop application or web browser on a computer rather than a mobile device. This makes it easier to view and interact with generated images.</p>
                </div>
              }
            />
            
            <h2 id="joining-midjourney-server">Step 2: Joining the Midjourney Discord Server</h2>
            <p>
              Once you have a Discord account, you'll need to join the official Midjourney server where all image generation happens.
            </p>
            
            <h3>How to Join the Midjourney Server:</h3>
            <ol>
              <li>Visit <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">midjourney.com</a></li>
              <li>Click on the "Join the Beta" or "Join Discord" button</li>
              <li>If you're already logged into Discord, you'll be directed to join the Midjourney server</li>
              <li>Accept the invitation to join the server</li>
              <li>Read and agree to the server rules when prompted</li>
            </ol>
            
            <p>
              After joining, you'll see the Midjourney Discord server in your server list on the left side of the Discord interface. The server icon looks like a stylized "MJ" logo.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Note</p>
              <p className="text-blue-600">
                The Midjourney server is extremely active with thousands of users generating images simultaneously. Don't be overwhelmed by the activity—we'll show you how to navigate this busy environment in the next module.
              </p>
            </div>
            
            <h2 id="subscription-plans">Midjourney Subscription Plans</h2>
            <p>
              As of April 2025, Midjourney no longer offers a free trial. All new users must subscribe to one of the paid plans to generate images. Here's an overview of the current subscription options:
            </p>
            
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Plan</th>
                  <th className="border border-slate-200 p-2 text-left">Price</th>
                  <th className="border border-slate-200 p-2 text-left">Fast Hours</th>
                  <th className="border border-slate-200 p-2 text-left">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2">Basic</td>
                  <td className="border border-slate-200 p-2">$10/month</td>
                  <td className="border border-slate-200 p-2">3.3 hours</td>
                  <td className="border border-slate-200 p-2">Standard features, public visibility</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Standard</td>
                  <td className="border border-slate-200 p-2">$30/month</td>
                  <td className="border border-slate-200 p-2">15 hours</td>
                  <td className="border border-slate-200 p-2">Standard features, public visibility</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Pro</td>
                  <td className="border border-slate-200 p-2">$60/month</td>
                  <td className="border border-slate-200 p-2">30 hours</td>
                  <td className="border border-slate-200 p-2">Stealth mode, faster generation</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Mega</td>
                  <td className="border border-slate-200 p-2">$120/month</td>
                  <td className="border border-slate-200 p-2">60 hours</td>
                  <td className="border border-slate-200 p-2">Maximum speed, priority support</td>
                </tr>
              </tbody>
            </table>
            
            <ExpandableSection 
              title="Understanding Fast Hours" 
              content={
                <div>
                  <p>Midjourney measures usage in "Fast Hours" rather than by image count. Fast Hours represent the amount of GPU processing time you can use at maximum speed.</p>
                  <p>Key points about Fast Hours:</p>
                  <ul>
                    <li>One Fast Hour equals approximately 60 minutes of GPU processing time at maximum speed</li>
                    <li>A typical image generation takes about 30-60 seconds of Fast Time</li>
                    <li>This means each Fast Hour allows for roughly 60-120 image generations</li>
                    <li>Unused Fast Hours do not roll over to the next month</li>
                    <li>When you run out of Fast Hours, image generation continues at a reduced speed (Relax Mode)</li>
                  </ul>
                  <p>For most casual users, even the Basic plan provides sufficient Fast Hours for regular use. Professional users who generate many images daily may benefit from the higher-tier plans.</p>
                </div>
              }
            />
            
            <h2 id="starting-subscription">Step 3: Starting Your Midjourney Subscription</h2>
            <p>
              Once you've joined the Midjourney Discord server, you can subscribe to start generating images:
            </p>
            
            <ol>
              <li>In the Midjourney Discord server, navigate to any of the "newbies" channels (e.g., #newbies-1, #newbies-2)</li>
              <li>Type <code>/subscribe</code> in the message field and press Enter</li>
              <li>The Midjourney Bot will respond with a direct message containing subscription options</li>
              <li>Click on the link provided to visit the subscription page</li>
              <li>Choose your preferred plan (Basic, Standard, Pro, or Mega)</li>
              <li>Enter your payment information and complete the subscription process</li>
            </ol>
            
            <p>
              After completing your subscription, you'll receive a confirmation message from the Midjourney Bot. Your account will be activated immediately, allowing you to start generating images right away.
            </p>
            
            <h2 id="discord-settings">Step 4: Important Discord Settings</h2>
            <p>
              To ensure you have the best experience with Midjourney, there are a few Discord settings you should configure:
            </p>
            
            <h3>Enable Direct Messages</h3>
            <p>
              The Midjourney Bot sends important notifications via direct messages, so you'll want to make sure you can receive them:
            </p>
            <ol>
              <li>Right-click on the Midjourney server icon in your Discord server list</li>
              <li>Select "Privacy Settings"</li>
              <li>Ensure "Allow direct messages from server members" is enabled</li>
              <li>Click "Done" to save your settings</li>
            </ol>
            
            <h3>Notification Settings</h3>
            <p>
              Discord channels can be very active, so you might want to adjust your notification settings:
            </p>
            <ol>
              <li>Right-click on the Midjourney server icon</li>
              <li>Select "Notification Settings"</li>
              <li>Choose your preferred notification level (recommended: "Only @mentions")</li>
              <li>Click "Done" to save your settings</li>
            </ol>
            
            <InlineLeadCapture 
              formId="midjourney-setup-inline"
              title="Get Our Midjourney Quick Start Guide"
              description="Subscribe to receive our printable Midjourney Quick Start Guide with command references, parameter cheat sheets, and troubleshooting tips."
              buttonText="Send Me the Quick Start Guide"
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="What is the first step to start using Midjourney?"
              options={[
                "Download the Midjourney app from the App Store",
                "Create a Discord account and join the Midjourney server",
                "Sign up directly on the Midjourney website",
                "Install the Midjourney plugin for Photoshop"
              ]}
              correctAnswer="Create a Discord account and join the Midjourney server"
              explanation="Midjourney operates through Discord, so you need to create a Discord account and join the Midjourney server before you can subscribe and start generating images."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/introduction">
                <Button variant="outline">
                  ← Previous: Introduction to Midjourney
                </Button>
              </Link>
              <Link href="/guides/midjourney-for-beginners/discord-interface">
                <Button>
                  Next: Navigating the Discord Interface →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

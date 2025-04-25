import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Creating Your First Image with Midjourney | How-ToGuides.com',
  description: 'Learn how to generate your first AI image with Midjourney using the /imagine command and understand the image generation process.',
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
              guideSlug="midjourney-for-beginners"
              isSubscribed={true}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#choosing-channel" className="text-primary hover:underline">Choosing a Channel</a></li>
                <li><a href="#imagine-command" className="text-primary hover:underline">Using the /imagine Command</a></li>
                <li><a href="#waiting-process" className="text-primary hover:underline">The Generation Process</a></li>
                <li><a href="#understanding-results" className="text-primary hover:underline">Understanding the Results</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Creating Your First Image</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 10 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 4 of 8</span>
              <span className="ml-4 bg-primary/10 text-primary px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-first-image-generation.jpg" 
                alt="Example of a first image generation with the /imagine command and resulting 2x2 grid" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you're set up and familiar with the Discord interface, it's time to generate your first image with Midjourney. This is where the magic happens! In this module, we'll walk through the complete process of creating your first AI-generated artwork.
            </p>
            
            <h2 id="choosing-channel">Step 1: Choosing a Channel</h2>
            <p>
              Before you can generate an image, you need to select an appropriate channel in the Midjourney Discord server.
            </p>
            
            <h3>How to Choose a Channel:</h3>
            <ol>
              <li>In the Midjourney Discord server, look at the channel list on the left side</li>
              <li>Select one of the #newbies channels (e.g., #newbies-1, #newbies-2, etc.)</li>
              <li>Make sure you can see messages flowing in the main chat area</li>
              <li>This is where you'll enter your commands and see your generated images</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Why Use Newbie Channels?</p>
              <p className="text-blue-600">
                The #newbies channels are specifically designed for new users. They move more slowly than general channels, making it easier to follow your own image generations. Once you're comfortable with the basics, you can move to other channels.
              </p>
            </div>
            
            <h2 id="imagine-command">Step 2: Using the /imagine Command</h2>
            <p>
              The basic command for generating images is <code>/imagine</code>. This tells the Midjourney Bot that you want to create an image based on a text description.
            </p>
            
            <h3>How to Use the /imagine Command:</h3>
            <ol>
              <li>Click in the message field at the bottom of the chat area</li>
              <li>Type <code>/imagine</code></li>
              <li>A prompt field will appear automatically</li>
              <li>In the prompt field, type a description of the image you want to create</li>
              <li>Press Enter to submit your request</li>
            </ol>
            
            <p>
              For your first image, try a simple but specific description. Here's an example you can copy and paste:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: a serene lake at sunset with mountains in the background and a small wooden boat</code>
            </div>
            
            <ExpandableSection 
              title="Tips for Your First Prompt" 
              content={
                <div>
                  <p>When writing your first prompt, keep these tips in mind:</p>
                  <ul>
                    <li><strong>Be specific:</strong> Include details about the subject, setting, lighting, and mood</li>
                    <li><strong>Keep it simple:</strong> Don't overwhelm your first prompt with too many elements</li>
                    <li><strong>Avoid complex concepts:</strong> Start with concrete, visual descriptions rather than abstract ideas</li>
                    <li><strong>Don't worry about parameters:</strong> For your first image, you don't need to include any special parameters</li>
                    <li><strong>Avoid prohibited content:</strong> Midjourney has content policies that prohibit explicit, violent, or political content</li>
                  </ul>
                  <p>Remember, this is just your first image! You'll have plenty of opportunities to experiment with more complex prompts as you become more familiar with Midjourney.</p>
                </div>
              }
            />
            
            <h2 id="waiting-process">Step 3: Waiting for Your Image</h2>
            <p>
              After submitting your prompt, Midjourney begins the generation process. Here's what happens:
            </p>
            
            <h3>The Generation Process:</h3>
            <ol>
              <li>You'll see a message saying "Making 4 images for [your username]..."</li>
              <li>A progress bar will appear showing the generation status</li>
              <li>The process typically takes 30-60 seconds depending on server load</li>
              <li>Once complete, four different image options based on your prompt will appear</li>
            </ol>
            
            <p>
              Each image generation uses a portion of your subscription's monthly GPU minutes or Fast Hours, depending on your plan. The standard process creates four initial options, allowing you to choose your favorite for further refinement.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Note</p>
              <p className="text-yellow-600">
                If you don't see your images after a few minutes, check your direct messages with Midjourney Bot. If there was an issue with your prompt (such as content that violates the terms of service), you'll receive a message explaining the problem.
              </p>
            </div>
            
            <h2 id="understanding-results">Step 4: Understanding the Results</h2>
            <p>
              When your images appear, you'll see a 2×2 grid of four different interpretations of your prompt. Each image has several buttons underneath that allow you to interact with the results.
            </p>
            
            <h3>Image Grid Components:</h3>
            <ul>
              <li><strong>U1, U2, U3, U4 Buttons:</strong> These "Upscale" buttons create a larger, more detailed version of the corresponding image</li>
              <li><strong>V1, V2, V3, V4 Buttons:</strong> These "Variation" buttons create new variations similar to the corresponding image</li>
              <li><strong>🔄 (Reroll) Button:</strong> Generates four new images with the same prompt</li>
            </ul>
            
            <p>
              Take a moment to examine each image and see how Midjourney interpreted your prompt. Notice the different compositions, lighting, and stylistic choices in each version. This variety is one of Midjourney's strengths, giving you multiple options to choose from.
            </p>
            
            <ExpandableSection 
              title="What to Do Next with Your Images" 
              content={
                <div>
                  <p>After generating your first set of images, you have several options:</p>
                  <ol>
                    <li><strong>Upscale your favorite:</strong> Click the U1-U4 button under your preferred image to create a larger, more detailed version</li>
                    <li><strong>Create variations:</strong> Click the V1-V4 button to generate new images similar to the one you like</li>
                    <li><strong>Try a new prompt:</strong> Use the experience to refine your prompt writing and try again</li>
                    <li><strong>Save your image:</strong> Right-click on any image and select "Save image as..." to download it to your device</li>
                    <li><strong>Share your creation:</strong> You can share the image on social media or with friends (Midjourney grants you usage rights to images you create)</li>
                  </ol>
                  <p>In the next modules, we'll explore these options in more detail and learn how to refine your results using Midjourney's powerful features.</p>
                </div>
              }
            />
            
            <InlineLeadCapture 
              formId="midjourney-first-image-inline"
              title="Get Our Midjourney Prompt Templates"
              description="Subscribe to receive our collection of 50+ proven Midjourney prompt templates for creating stunning images across different styles and subjects."
              buttonText="Send Me the Templates"
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="What is the correct command to generate an image in Midjourney?"
              options={[
                "/create prompt: mountain landscape",
                "/generate prompt: mountain landscape",
                "/imagine prompt: mountain landscape",
                "/midjourney prompt: mountain landscape"
              ]}
              correctAnswer="/imagine prompt: mountain landscape"
              explanation="The correct command is /imagine followed by the word 'prompt:' and then your description. This tells the Midjourney Bot that you want to generate an image based on your text description."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/discord-interface">
                <Button variant="outline">
                  ← Previous: Navigating the Discord Interface
                </Button>
              </Link>
              <Link href="/guides/midjourney-for-beginners/commands">
                <Button>
                  Next: Understanding Midjourney Commands →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

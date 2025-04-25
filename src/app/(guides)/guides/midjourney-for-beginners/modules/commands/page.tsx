import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Understanding Midjourney Commands | How-ToGuides.com',
  description: 'Master all essential Midjourney commands including /imagine, /info, /help, /settings, and advanced commands for better AI image generation.',
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

export default function MidjourneyCommands() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="commands" 
              guideSlug="midjourney-for-beginners"
              isSubscribed={true}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#primary-commands" className="text-primary hover:underline">Primary Commands</a></li>
                <li><a href="#image-interaction" className="text-primary hover:underline">Image Interaction Commands</a></li>
                <li><a href="#advanced-commands" className="text-primary hover:underline">Advanced Commands</a></li>
                <li><a href="#command-syntax" className="text-primary hover:underline">Command Syntax Rules</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Understanding Midjourney Commands</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 12 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 5 of 8</span>
              <span className="ml-4 bg-primary/10 text-primary px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-commands-chart.jpg" 
                alt="Chart showing all available Midjourney commands with descriptions" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Midjourney uses a system of slash commands to control various functions. Mastering these commands is essential for getting the most out of Midjourney and creating exactly the images you want. In this module, we'll explore all the essential commands and how to use them effectively.
            </p>
            
            <h2 id="primary-commands">Primary Commands</h2>
            <p>
              These are the core commands you'll use most frequently in Midjourney:
            </p>
            
            <h3>/imagine</h3>
            <p>
              This is the main command for generating images based on your text descriptions.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/imagine prompt: [your description]</code></li>
              <li><strong>Example:</strong> <code>/imagine prompt: futuristic city with flying cars and neon lights</code></li>
            </ul>
            <p>
              The <code>/imagine</code> command is what you'll use most often. It tells the Midjourney Bot to create images based on the text that follows the "prompt:" keyword. We'll explore prompt writing in detail in the next module.
            </p>
            
            <h3>/info</h3>
            <p>
              Shows information about your account and usage statistics.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/info</code></li>
            </ul>
            <p>
              This command displays your subscription type, remaining GPU minutes or Fast Hours, job queue position, and other account details. It's useful for tracking your usage and understanding how much of your subscription allocation remains.
            </p>
            
            <h3>/help</h3>
            <p>
              Provides a list of available commands and quick help information.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/help</code></li>
            </ul>
            <p>
              This is useful when you need a quick reference for commands and parameters. The bot will respond with a message containing links to documentation and a summary of common commands.
            </p>
            
            <h3>/settings</h3>
            <p>
              Allows you to change your default settings for image generation.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/settings</code></li>
            </ul>
            <p>
              This opens a menu where you can adjust quality, style, and other default parameters that will apply to all your future generations unless overridden in specific prompts.
            </p>
            
            <h3>/subscribe</h3>
            <p>
              Manages your subscription plan and billing information.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/subscribe</code></li>
            </ul>
            <p>
              Use this to view or change your subscription plan, update payment methods, or check billing history.
            </p>
            
            <ExpandableSection 
              title="Using /settings Effectively" 
              content={
                <div>
                  <p>The <code>/settings</code> command opens a powerful menu that allows you to set defaults for all your generations. Here are the key settings you can adjust:</p>
                  <ul>
                    <li><strong>Version:</strong> Choose which Midjourney model version to use by default (V6, V5.2, Niji, etc.)</li>
                    <li><strong>Style:</strong> Set your preferred stylization level (0-1000)</li>
                    <li><strong>Quality:</strong> Set your default quality setting (0.25, 0.5, 1, or 2)</li>
                    <li><strong>Aspect Ratio:</strong> Choose your preferred image dimensions</li>
                    <li><strong>Suffix:</strong> Add text that will automatically be appended to all your prompts</li>
                  </ul>
                  <p>Using <code>/settings</code> effectively can save you time by automatically applying your preferred parameters to every generation without having to type them each time.</p>
                  <p>For example, if you always want high-quality images in landscape format, you can set these as defaults and then focus only on your creative prompts.</p>
                </div>
              }
            />
            
            <h2 id="image-interaction">Image Interaction Commands</h2>
            <p>
              These commands allow you to work with existing images in various ways:
            </p>
            
            <h3>/blend</h3>
            <p>
              Combines two or more images to create a new blended result.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/blend</code></li>
              <li>After entering this command, you'll be prompted to upload 2-5 images to combine</li>
            </ul>
            <p>
              This is useful for merging styles, concepts, or elements from different images. The AI will attempt to create a cohesive blend that incorporates aspects of all uploaded images.
            </p>
            
            <h3>/describe</h3>
            <p>
              Generates prompt suggestions based on an uploaded image.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/describe</code></li>
              <li>After entering this command, you'll be prompted to upload an image</li>
            </ul>
            <p>
              This is extremely useful for "reverse engineering" prompts. If you find an image you like (either from Midjourney or elsewhere), this command will suggest prompts that might create similar results.
            </p>
            
            <h3>/shorten</h3>
            <p>
              Simplifies a long prompt to make it more concise.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/shorten prompt: [your long prompt]</code></li>
            </ul>
            <p>
              Useful for condensing detailed prompts that might exceed token limits or for simplifying overly complex descriptions.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                The <code>/describe</code> command is one of the most powerful tools for learning prompt engineering. Try uploading images you admire to see what prompts Midjourney suggests, then use those as inspiration for your own prompts.
              </p>
            </div>
            
            <h2 id="advanced-commands">Advanced Commands</h2>
            <p>
              These commands provide more specialized functionality for experienced users:
            </p>
            
            <h3>/prefer</h3>
            <p>
              Sets persistent preferences for your account.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/prefer [option] [setting]</code></li>
              <li><strong>Example:</strong> <code>/prefer suffix --hd</code></li>
            </ul>
            <p>
              This command allows you to set persistent preferences that will be applied to all your future generations. Unlike <code>/settings</code> which provides a menu interface, <code>/prefer</code> uses direct command syntax for more specific control.
            </p>
            
            <h3>/stealth</h3>
            <p>
              Toggles private mode where your images are only visible to you.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/stealth</code></li>
              <li><strong>Note:</strong> This feature is only available on higher-tier subscriptions (Pro and Mega)</li>
            </ul>
            <p>
              When stealth mode is active, your generations won't be visible to other users in the Discord channels. This is useful for private or commercial work.
            </p>
            
            <h3>/public</h3>
            <p>
              Makes your next generation visible in the public gallery.
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/public</code></li>
            </ul>
            <p>
              By default, your generations are not added to the public gallery. This command explicitly makes your next generation public.
            </p>
            
            <h3>/private</h3>
            <p>
              Makes your next generation private (default behavior).
            </p>
            <ul>
              <li><strong>Usage:</strong> <code>/private</code></li>
            </ul>
            <p>
              This is the opposite of the <code>/public</code> command and is the default behavior. It's only needed if you've previously used <code>/public</code> and want to switch back to private.
            </p>
            
            <ExpandableSection 
              title="Additional Specialized Commands" 
              content={
                <div>
                  <p>Beyond the core commands, Midjourney offers several specialized commands for specific use cases:</p>
                  <ul>
                    <li><strong>/fast</strong> - Switches to Fast mode (uses Fast Hours)</li>
                    <li><strong>/relax</strong> - Switches to Relax mode (slower but doesn't use Fast Hours)</li>
                    <li><strong>/remix</strong> - Toggles Remix mode, which allows editing of previous prompts</li>
                    <li><strong>/show</strong> - Displays a specific job by ID</li>
                    <li><strong>/prefer option list</strong> - Shows all available preference options</li>
                    <li><strong>/prefer option clear</strong> - Clears a specific preference setting</li>
                    <li><strong>/prefer option reset</strong> - Resets all preference settings to default</li>
                  </ul>
                  <p>These commands are less commonly used but can be valuable in specific situations or for power users who want maximum control over their Midjourney experience.</p>
                </div>
              }
            />
            
            <h2 id="command-syntax">Command Syntax Rules</h2>
            <p>
              When using Midjourney commands, keep these syntax rules in mind:
            </p>
            
            <ol>
              <li>Slash commands must be entered at the beginning of your message</li>
              <li>Commands are not case-sensitive (e.g., <code>/Imagine</code> works the same as <code>/imagine</code>)</li>
              <li>There should be no space between the slash and the command name</li>
              <li>For the <code>/imagine</code> command, the word "prompt:" must follow the command</li>
              <li>Parameters use specific formats (e.g., <code>--ar 16:9</code> for aspect ratio)</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Helpful Tip</p>
              <p className="text-yellow-600">
                You can use the Tab key to autocomplete commands in Discord. Type the beginning of a command (e.g., <code>/im</code>) and press Tab to complete it. This saves time and helps avoid typos.
              </p>
            </div>
            
            <InlineLeadCapture 
              formId="midjourney-commands-inline"
              title="Get Our Midjourney Command Reference Sheet"
              description="Subscribe to receive our printable Midjourney Command Reference Sheet with all commands, parameters, and example usage in an easy-to-reference format."
              buttonText="Send Me the Reference Sheet"
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which command would you use to get information about your Midjourney subscription and usage?"
              options={[
                "/status",
                "/account",
                "/info",
                "/usage"
              ]}
              correctAnswer="/info"
              explanation="The /info command displays your subscription type, remaining GPU minutes or Fast Hours, job queue position, and other account details. It's the correct command for checking your usage and subscription status."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/first-image">
                <Button variant="outline">
                  ← Previous: Creating Your First Image
                </Button>
              </Link>
              <Link href="/guides/midjourney-for-beginners/effective-prompts">
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

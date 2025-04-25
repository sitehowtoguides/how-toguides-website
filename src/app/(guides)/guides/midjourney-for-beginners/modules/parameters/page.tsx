import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Using Parameters to Control Midjourney Output | How-ToGuides.com',
  description: 'Learn how to use Midjourney parameters to fine-tune your AI-generated images with aspect ratios, quality settings, stylization, and more.',
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

export default function Parameters() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="parameters" 
              guideSlug="midjourney-for-beginners"
              isSubscribed={true}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#parameter-basics" className="text-primary hover:underline">Parameter Basics</a></li>
                <li><a href="#aspect-ratio" className="text-primary hover:underline">Aspect Ratio</a></li>
                <li><a href="#quality-stylization" className="text-primary hover:underline">Quality and Stylization</a></li>
                <li><a href="#version-control" className="text-primary hover:underline">Version Control</a></li>
                <li><a href="#special-parameters" className="text-primary hover:underline">Special Parameters</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Using Parameters to Control Output</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 12 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 7 of 8</span>
              <span className="ml-4 bg-primary/10 text-primary px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-parameters-chart.jpg" 
                alt="Comprehensive chart showing Midjourney parameters and their effects on image generation" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              While prompts tell Midjourney what to create, parameters tell it how to create it. Parameters are special commands that control technical aspects of image generation, such as aspect ratio, quality level, and stylization. Mastering parameters gives you precise control over your results and helps you create exactly the images you envision.
            </p>
            
            <h2 id="parameter-basics">Parameter Basics</h2>
            <p>
              Parameters are added to the end of your prompt using double hyphens followed by the parameter name and value.
            </p>
            
            <h3>Parameter Syntax</h3>
            <p>
              The basic syntax for parameters is:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: your prompt text --parameter value</code>
            </div>
            
            <p>
              You can include multiple parameters in a single prompt:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: a futuristic cityscape --ar 16:9 --v 6 --q 2</code>
            </div>
            
            <p>
              In this example:
            </p>
            <ul>
              <li><code>--ar 16:9</code> sets the aspect ratio to 16:9 (widescreen)</li>
              <li><code>--v 6</code> specifies using Version 6 of Midjourney</li>
              <li><code>--q 2</code> sets the quality to level 2 (high quality)</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Parameter Placement</p>
              <p className="text-blue-600">
                Parameters can be placed anywhere in your prompt, but it's best practice to put them at the end for better readability. The order of parameters doesn't matter.
              </p>
            </div>
            
            <h2 id="aspect-ratio">Aspect Ratio Parameters</h2>
            <p>
              The aspect ratio parameter (<code>--ar</code>) controls the width-to-height ratio of your generated images. This is one of the most commonly used parameters.
            </p>
            
            <h3>Common Aspect Ratios</h3>
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Parameter</th>
                  <th className="border border-slate-200 p-2 text-left">Ratio</th>
                  <th className="border border-slate-200 p-2 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--ar 1:1</code></td>
                  <td className="border border-slate-200 p-2">Square</td>
                  <td className="border border-slate-200 p-2">Social media posts, profile pictures</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--ar 16:9</code></td>
                  <td className="border border-slate-200 p-2">Widescreen</td>
                  <td className="border border-slate-200 p-2">YouTube thumbnails, presentations</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--ar 9:16</code></td>
                  <td className="border border-slate-200 p-2">Vertical</td>
                  <td className="border border-slate-200 p-2">Instagram stories, TikTok, mobile wallpapers</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--ar 3:2</code></td>
                  <td className="border border-slate-200 p-2">Standard photo</td>
                  <td className="border border-slate-200 p-2">Photography, prints</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--ar 2:3</code></td>
                  <td className="border border-slate-200 p-2">Portrait</td>
                  <td className="border border-slate-200 p-2">Book covers, portraits</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--ar 21:9</code></td>
                  <td className="border border-slate-200 p-2">Ultrawide</td>
                  <td className="border border-slate-200 p-2">Cinematic scenes, panoramas</td>
                </tr>
              </tbody>
            </table>
            
            <p>
              You can also use custom aspect ratios by specifying width and height values:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: mountain landscape --ar 7:3</code>
            </div>
            
            <ExpandableSection 
              title="Aspect Ratio Composition Tips" 
              content={
                <div>
                  <p>Different aspect ratios are better suited for different types of compositions:</p>
                  <ul>
                    <li><strong>Square (1:1):</strong> Great for centered, symmetrical compositions or subjects that fit naturally in a square frame (like portraits or single objects)</li>
                    <li><strong>Landscape (16:9, 3:2):</strong> Ideal for scenes with horizontal elements like landscapes, cityscapes, or group shots</li>
                    <li><strong>Portrait (9:16, 2:3):</strong> Perfect for vertical subjects like buildings, full-body portraits, or tall natural elements</li>
                    <li><strong>Panoramic (21:9 or wider):</strong> Best for expansive scenes that benefit from a wide field of view</li>
                  </ul>
                  <p>When choosing an aspect ratio, consider:</p>
                  <ul>
                    <li>Where the image will be used (social media, print, website)</li>
                    <li>The natural orientation of your subject</li>
                    <li>How much background or context you want to include</li>
                    <li>The compositional rules you want to apply (rule of thirds, golden ratio, etc.)</li>
                  </ul>
                  <p>Remember that extreme aspect ratios (very wide or very tall) may sometimes cause distortion or composition issues, so you might need to adjust your prompt to compensate.</p>
                </div>
              }
            />
            
            <h2 id="quality-stylization">Quality and Stylization Parameters</h2>
            <p>
              These parameters control the level of detail and artistic stylization in your images.
            </p>
            
            <h3>Quality Parameter</h3>
            <p>
              The quality parameter (<code>--q</code>) determines how much time and processing power Midjourney spends on your image, affecting the level of detail and coherence.
            </p>
            
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Parameter</th>
                  <th className="border border-slate-200 p-2 text-left">Effect</th>
                  <th className="border border-slate-200 p-2 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--q 0.25</code></td>
                  <td className="border border-slate-200 p-2">Draft quality</td>
                  <td className="border border-slate-200 p-2">Quick iterations, testing ideas</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--q 0.5</code></td>
                  <td className="border border-slate-200 p-2">Standard quality</td>
                  <td className="border border-slate-200 p-2">General use, good balance</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--q 1</code></td>
                  <td className="border border-slate-200 p-2">High quality (default)</td>
                  <td className="border border-slate-200 p-2">Detailed images, final versions</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--q 2</code></td>
                  <td className="border border-slate-200 p-2">Maximum quality</td>
                  <td className="border border-slate-200 p-2">Professional work, complex scenes</td>
                </tr>
              </tbody>
            </table>
            
            <h3>Stylization Parameter</h3>
            <p>
              The stylization parameter (<code>--s</code>) controls how strongly Midjourney applies its artistic style to your images. It ranges from 0 to 1000.
            </p>
            
            <ul>
              <li><strong>Low values (0-250):</strong> More photorealistic, less artistic interpretation</li>
              <li><strong>Medium values (250-750):</strong> Balanced blend of realism and artistic style</li>
              <li><strong>High values (750-1000):</strong> More stylized, artistic interpretation</li>
            </ul>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: portrait of a woman --s 100</code> (more photorealistic)
            </div>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: portrait of a woman --s 750</code> (more stylized)
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Note</p>
              <p className="text-yellow-600">
                In Midjourney V6, the default stylization value is 100. This is lower than previous versions, reflecting V6's improved ability to create photorealistic images.
              </p>
            </div>
            
            <h2 id="version-control">Version Control Parameters</h2>
            <p>
              Midjourney offers multiple model versions, each with different strengths and characteristics. You can specify which version to use with the <code>--v</code> parameter.
            </p>
            
            <h3>Available Versions</h3>
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Parameter</th>
                  <th className="border border-slate-200 p-2 text-left">Description</th>
                  <th className="border border-slate-200 p-2 text-left">Strengths</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--v 6</code></td>
                  <td className="border border-slate-200 p-2">Version 6 (default)</td>
                  <td className="border border-slate-200 p-2">Photorealism, text rendering, prompt accuracy</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--v 5.2</code></td>
                  <td className="border border-slate-200 p-2">Version 5.2</td>
                  <td className="border border-slate-200 p-2">Artistic style, vibrant colors</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--v 5.1</code></td>
                  <td className="border border-slate-200 p-2">Version 5.1</td>
                  <td className="border border-slate-200 p-2">Balanced realism and artistic style</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2"><code>--niji 5</code></td>
                  <td className="border border-slate-200 p-2">Niji Version 5</td>
                  <td className="border border-slate-200 p-2">Anime and illustration styles</td>
                </tr>
              </tbody>
            </table>
            
            <p>
              Each version has its own unique characteristics, and you may prefer different versions for different types of images:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: cyberpunk character concept art --niji 5</code> (for anime-style character art)
            </div>
            
            <ExpandableSection 
              title="When to Use Different Versions" 
              content={
                <div>
                  <p>Different Midjourney versions excel at different types of images:</p>
                  <ul>
                    <li><strong>Version 6:</strong> Best for photorealistic images, accurate text rendering, complex scenes, and precise prompt following. Use for product photography, realistic portraits, architectural visualization, and any image where accuracy is important.</li>
                    <li><strong>Version 5.2:</strong> Excels at artistic interpretations with vibrant colors and dramatic lighting. Great for fantasy scenes, surreal concepts, and images where artistic flair is more important than strict realism.</li>
                    <li><strong>Version 5.1:</strong> Offers a good balance between realism and artistic style. Useful when you want some creative interpretation but still need recognizable subjects.</li>
                    <li><strong>Niji 5:</strong> Specialized for anime, manga, and illustration styles. Perfect for character designs, stylized scenes, and anything with an anime aesthetic.</li>
                  </ul>
                  <p>Experiment with different versions for the same prompt to see which one best matches your vision. Sometimes the "best" version isn't the newest one, but the one that creates the specific aesthetic you're looking for.</p>
                </div>
              }
            />
            
            <h2 id="special-parameters">Special Parameters</h2>
            <p>
              Beyond the core parameters, Midjourney offers several special parameters for specific needs:
            </p>
            
            <h3>Seed Parameter</h3>
            <p>
              The seed parameter (<code>--seed</code>) sets a specific randomization seed, allowing you to create variations with consistent elements:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: forest landscape --seed 1234</code>
            </div>
            
            <p>
              Using the same seed with similar prompts will produce images with similar composition and elements. This is useful for creating variations while maintaining consistency.
            </p>
            
            <h3>Chaos Parameter</h3>
            <p>
              The chaos parameter (<code>--c</code>) controls how varied the results are. Higher values produce more unusual and unexpected results:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: abstract design --c 25</code> (moderate variation)
            </div>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: abstract design --c 75</code> (high variation)
            </div>
            
            <p>
              The chaos value ranges from 0 to 100, with the default being 0. Higher values are great for creative exploration and discovering unexpected ideas.
            </p>
            
            <h3>Tile Parameter</h3>
            <p>
              The tile parameter (<code>--tile</code>) creates seamlessly tileable patterns, perfect for textures and backgrounds:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: marble texture --tile</code>
            </div>
            
            <p>
              This is especially useful for creating:
            </p>
            <ul>
              <li>Textures for 3D modeling</li>
              <li>Website backgrounds</li>
              <li>Fabric patterns</li>
              <li>Game assets</li>
            </ul>
            
            <h3>Stop Parameter</h3>
            <p>
              The stop parameter (<code>--stop</code>) lets you end the generation process early, at a specified percentage:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: abstract art --stop 80</code>
            </div>
            
            <p>
              This can create more abstract, less defined images. Values range from 10-100, with lower values producing more abstract results.
            </p>
            
            <InlineLeadCapture 
              formId="midjourney-parameters-inline"
              title="Get Our Midjourney Parameter Cheat Sheet"
              description="Subscribe to receive our comprehensive parameter cheat sheet with all available parameters, their values, and example use cases in a printable PDF format."
              buttonText="Send Me the Cheat Sheet"
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which parameter would you use to create a widescreen image for a YouTube thumbnail?"
              options={[
                "--quality 2",
                "--ar 16:9",
                "--style 500",
                "--version 6"
              ]}
              correctAnswer="--ar 16:9"
              explanation="The aspect ratio parameter (--ar 16:9) is used to create widescreen images with a width-to-height ratio of 16:9, which is ideal for YouTube thumbnails and other widescreen content."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/effective-prompts">
                <Button variant="outline">
                  ← Previous: Crafting Effective Prompts
                </Button>
              </Link>
              <Link href="/guides/midjourney-for-beginners/advanced-features">
                <Button>
                  Next: Advanced Features and Techniques →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

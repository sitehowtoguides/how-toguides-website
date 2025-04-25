import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Advanced Features and Techniques for Midjourney | How-ToGuides.com',
  description: 'Master advanced Midjourney features like Multi Prompts, Zoom Out, Vary Region, and more to take your AI image generation to the next level.',
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

export default function AdvancedFeatures() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="advanced-features" 
              guideSlug="midjourney-for-beginners"
              isSubscribed={true}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#multi-prompts" className="text-primary hover:underline">Multi Prompts</a></li>
                <li><a href="#zoom-out" className="text-primary hover:underline">Zoom Out Feature</a></li>
                <li><a href="#vary-region" className="text-primary hover:underline">Vary Region</a></li>
                <li><a href="#image-blending" className="text-primary hover:underline">Image Blending</a></li>
                <li><a href="#workflows" className="text-primary hover:underline">Advanced Workflows</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Advanced Features and Techniques</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 15 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 8 of 8</span>
              <span className="ml-4 bg-primary/10 text-primary px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-advanced-features.jpg" 
                alt="Demonstration of advanced Midjourney features including Multi Prompts, Zoom Out, and Vary Region" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you've mastered the basics of Midjourney, it's time to explore the advanced features that can take your image generation to the next level. In this final module, we'll cover sophisticated techniques that give you unprecedented control over your creations and open up new creative possibilities.
            </p>
            
            <h2 id="multi-prompts">Multi Prompts</h2>
            <p>
              Multi Prompts is one of the most powerful features in Midjourney V6, allowing you to combine multiple concepts with precise control over how they blend together.
            </p>
            
            <h3>How Multi Prompts Work</h3>
            <p>
              The Multi Prompts feature uses the :: syntax to separate different parts of your prompt and assign weights to each part:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: [concept 1]::[weight] [concept 2]::[weight] [concept 3]::[weight]</code>
            </div>
            
            <p>
              For example:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/imagine prompt: a majestic lion::1.5 wearing golden armor::0.8 in a fantasy forest::1.2</code>
            </div>
            
            <p>
              In this example:
            </p>
            <ul>
              <li>"a majestic lion" has a weight of 1.5 (strong influence)</li>
              <li>"wearing golden armor" has a weight of 0.8 (moderate influence)</li>
              <li>"in a fantasy forest" has a weight of 1.2 (strong influence)</li>
            </ul>
            
            <p>
              The weights determine how much influence each concept has on the final image. Higher weights give that part of the prompt more importance.
            </p>
            
            <h3>Creative Applications of Multi Prompts</h3>
            <p>
              Multi Prompts can be used in many creative ways:
            </p>
            
            <ul>
              <li><strong>Style Blending:</strong> <code>portrait of a woman::1 in the style of Rembrandt::0.7 mixed with cyberpunk aesthetics::0.5</code></li>
              <li><strong>Subject Fusion:</strong> <code>wolf::1 combined with eagle::1 mythical creature::0.8</code></li>
              <li><strong>Environment Control:</strong> <code>character::1.2 indoor lighting::0.5 outdoor background::0.8</code></li>
              <li><strong>Emotion Layering:</strong> <code>portrait::1 happy expression::0.7 with underlying sadness::0.4</code></li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                When using Multi Prompts, start with a clear base concept at a higher weight (1.0-1.5), then add modifying concepts at lower weights (0.3-0.8). This creates a more coherent image while still incorporating all elements.
              </p>
            </div>
            
            <ExpandableSection 
              title="Advanced Multi Prompt Techniques" 
              content={
                <div>
                  <p>Beyond basic weighting, there are several advanced techniques for Multi Prompts:</p>
                  <ul>
                    <li><strong>Negative Weighting:</strong> You can use negative weights to specifically avoid certain elements: <code>portrait::1 cyberpunk::-0.5</code> (creates a portrait while avoiding cyberpunk elements)</li>
                    <li><strong>Granular Control:</strong> Break down complex concepts into multiple weighted parts for more control: <code>face::1.2 eyes::0.8 blue eyes::0.4 lips::0.6 smile::0.3</code></li>
                    <li><strong>Sequential Influence:</strong> Order matters in Multi Prompts. Elements listed first often have more influence on the core composition, while later elements influence details and style.</li>
                    <li><strong>Weight Balancing:</strong> The total of all weights doesn't need to equal any specific value. What matters is the relative relationship between weights.</li>
                  </ul>
                  <p>Experiment with different combinations of concepts and weights to discover unique creative possibilities that wouldn't be possible with traditional prompting.</p>
                </div>
              }
            />
            
            <h2 id="zoom-out">Zoom Out Feature</h2>
            <p>
              The Zoom Out feature allows you to expand the canvas of an existing image, revealing more of the scene beyond the original boundaries.
            </p>
            
            <h3>How to Use Zoom Out</h3>
            <p>
              To use the Zoom Out feature:
            </p>
            
            <ol>
              <li>Generate an image using <code>/imagine</code></li>
              <li>Upscale one of the variations (U1, U2, U3, or U4)</li>
              <li>Click on the "Zoom Out" button that appears below the upscaled image</li>
              <li>Choose from the available zoom options (1.5x, 2x, or Custom)</li>
            </ol>
            
            <p>
              The Zoom Out feature will generate an expanded version of your image, maintaining the original content while adding new elements around it.
            </p>
            
            <h3>Creative Applications of Zoom Out</h3>
            <p>
              Zoom Out can be used in many creative ways:
            </p>
            
            <ul>
              <li><strong>Revealing Context:</strong> Show more of the environment around your subject</li>
              <li><strong>Creating Panoramas:</strong> Expand landscapes to create wide panoramic views</li>
              <li><strong>Adding Characters:</strong> Zoom out to include additional characters or elements</li>
              <li><strong>Sequential Zooming:</strong> Apply multiple zoom outs to progressively reveal more of a scene</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Important Note</p>
              <p className="text-yellow-600">
                Zoom Out works best with images that have clear compositional elements and room for expansion. It may struggle with tightly cropped portraits or images with complex boundaries.
              </p>
            </div>
            
            <h2 id="vary-region">Vary Region</h2>
            <p>
              The Vary Region feature allows you to selectively modify specific areas of an image while keeping the rest unchanged.
            </p>
            
            <h3>How to Use Vary Region</h3>
            <p>
              To use the Vary Region feature:
            </p>
            
            <ol>
              <li>Generate and upscale an image</li>
              <li>Click on the "Vary (Region)" button that appears below the upscaled image</li>
              <li>Use the selection tool to draw a box around the area you want to modify</li>
              <li>Optionally, provide a text prompt to guide the variation</li>
              <li>Click "Submit" to generate variations of just that region</li>
            </ol>
            
            <p>
              This feature is incredibly powerful for making targeted adjustments to specific parts of your image without affecting the rest of the composition.
            </p>
            
            <h3>Creative Applications of Vary Region</h3>
            <p>
              Vary Region can be used in many creative ways:
            </p>
            
            <ul>
              <li><strong>Facial Adjustments:</strong> Modify expressions, hairstyles, or features</li>
              <li><strong>Object Replacement:</strong> Change specific objects while maintaining the scene</li>
              <li><strong>Background Modification:</strong> Alter the background while keeping the subject intact</li>
              <li><strong>Detail Enhancement:</strong> Add more detail to specific areas</li>
              <li><strong>Clothing or Accessory Changes:</strong> Modify what a character is wearing</li>
            </ul>
            
            <ExpandableSection 
              title="Advanced Vary Region Strategies" 
              content={
                <div>
                  <p>To get the most out of Vary Region, consider these advanced strategies:</p>
                  <ul>
                    <li><strong>Multiple Iterations:</strong> Apply Vary Region multiple times to different parts of the image, building up changes incrementally</li>
                    <li><strong>Guided Variations:</strong> Use specific text prompts when applying Vary Region to direct the changes more precisely</li>
                    <li><strong>Selection Size:</strong> The size of your selection affects how much context Midjourney considers. Larger selections maintain more coherence with surrounding areas</li>
                    <li><strong>Overlapping Selections:</strong> Sometimes making slightly overlapping selections helps create more seamless transitions between modified and unmodified areas</li>
                    <li><strong>Preserving Elements:</strong> If you want to keep certain elements exactly as they are, avoid including them in your selection</li>
                  </ul>
                  <p>Vary Region is particularly valuable for commercial work where clients might request specific changes to an otherwise approved concept.</p>
                </div>
              }
            />
            
            <h2 id="image-blending">Image Blending</h2>
            <p>
              Image Blending allows you to combine multiple existing images to create a new composite image that incorporates elements from all of them.
            </p>
            
            <h3>How to Use Image Blending</h3>
            <p>
              To use Image Blending:
            </p>
            
            <ol>
              <li>Use the <code>/blend</code> command</li>
              <li>Upload 2-5 images when prompted</li>
              <li>Optionally, add text to guide the blending process</li>
            </ol>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>/blend</code> (then upload images when prompted)
            </div>
            
            <p>
              Midjourney will analyze the uploaded images and create a new image that combines elements, styles, and concepts from all of them.
            </p>
            
            <h3>Creative Applications of Image Blending</h3>
            <p>
              Image Blending can be used in many creative ways:
            </p>
            
            <ul>
              <li><strong>Style Transfer:</strong> Blend a content image with a style image</li>
              <li><strong>Character Fusion:</strong> Combine multiple character designs</li>
              <li><strong>Concept Exploration:</strong> Blend different design concepts to find middle ground</li>
              <li><strong>Color Palette Mixing:</strong> Combine images with different color schemes</li>
              <li><strong>Texture Blending:</strong> Mix different textures for unique material effects</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                For best results with Image Blending, use images with similar compositions but different styles, or images with complementary elements that would make sense together in a single composition.
              </p>
            </div>
            
            <InlineLeadCapture 
              formId="midjourney-advanced-inline"
              title="Get Our Advanced Midjourney Techniques Guide"
              description="Subscribe to receive our comprehensive guide to advanced Midjourney techniques, including detailed workflows, case studies, and professional tips."
              buttonText="Send Me the Advanced Guide"
            />
            
            <h2 id="workflows">Advanced Workflows</h2>
            <p>
              Combining multiple advanced features creates powerful workflows that can produce highly refined and specific images.
            </p>
            
            <h3>Iterative Refinement Workflow</h3>
            <p>
              This workflow uses multiple features in sequence to progressively refine an image:
            </p>
            
            <ol>
              <li><strong>Initial Generation:</strong> Create a base image using Multi Prompts for precise concept control</li>
              <li><strong>Upscale and Vary:</strong> Upscale the best result and create variations to explore options</li>
              <li><strong>Targeted Refinement:</strong> Use Vary Region to fix specific areas that need improvement</li>
              <li><strong>Expansion:</strong> Use Zoom Out to reveal more of the scene if needed</li>
              <li><strong>Final Detailing:</strong> Use Vary Region again for final touches and details</li>
            </ol>
            
            <h3>Style Development Workflow</h3>
            <p>
              This workflow is focused on developing a consistent style across multiple images:
            </p>
            
            <ol>
              <li><strong>Style Definition:</strong> Create an initial image with your desired style using detailed style descriptors</li>
              <li><strong>Style Extraction:</strong> Use <code>/describe</code> on your result to get Midjourney's interpretation of the style</li>
              <li><strong>Style Refinement:</strong> Create variations and blend the best results to strengthen the style</li>
              <li><strong>Style Application:</strong> Use the refined style description in new prompts with different subjects</li>
              <li><strong>Style Consistency:</strong> Use the <code>--seed</code> parameter to maintain consistent style elements</li>
            </ol>
            
            <h3>Composite Character Workflow</h3>
            <p>
              This workflow is ideal for creating detailed character designs:
            </p>
            
            <ol>
              <li><strong>Character Base:</strong> Generate the basic character using Multi Prompts</li>
              <li><strong>Face Refinement:</strong> Use Vary Region to perfect facial features</li>
              <li><strong>Outfit Development:</strong> Use Vary Region to refine clothing and accessories</li>
              <li><strong>Environment Integration:</strong> Use Zoom Out to place the character in a setting</li>
              <li><strong>Final Composition:</strong> Use Image Blending to combine the best elements from different iterations</li>
            </ol>
            
            <ExpandableSection 
              title="Professional Production Workflow" 
              content={
                <div>
                  <p>For professional projects requiring high-quality, specific results, this comprehensive workflow combines all advanced features:</p>
                  <ol>
                    <li><strong>Concept Development:</strong>
                      <ul>
                        <li>Generate 3-5 initial concepts using different prompt approaches</li>
                        <li>Use <code>--q 0.25</code> for quick iterations at this stage</li>
                        <li>Select the most promising direction</li>
                      </ul>
                    </li>
                    <li><strong>Composition Refinement:</strong>
                      <ul>
                        <li>Regenerate the chosen concept with <code>--q 1</code> for better quality</li>
                        <li>Create 3-4 variations to explore compositional options</li>
                        <li>Use Multi Prompts to fine-tune the balance of elements</li>
                      </ul>
                    </li>
                    <li><strong>Detail Enhancement:</strong>
                      <ul>
                        <li>Upscale the best composition with <code>--q 2</code> for maximum detail</li>
                        <li>Use Vary Region to perfect specific areas one by one</li>
                        <li>Apply targeted text prompts for each region variation</li>
                      </ul>
                    </li>
                    <li><strong>Context Development:</strong>
                      <ul>
                        <li>Use Zoom Out to expand the canvas if needed</li>
                        <li>Apply Vary Region to the new areas for consistency</li>
                        <li>Ensure lighting and style remain consistent across the expanded image</li>
                      </ul>
                    </li>
                    <li><strong>Final Production:</strong>
                      <ul>
                        <li>Save the highest resolution version</li>
                        <li>Consider light post-processing in external software if needed</li>
                        <li>Document the successful prompt and parameter combination for future reference</li>
                      </ul>
                    </li>
                  </ol>
                  <p>This workflow is particularly effective for commercial projects where specific results are required and multiple stakeholders may need to approve the final image.</p>
                </div>
              }
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which Midjourney feature would be most useful if you wanted to change just the hairstyle of a character while keeping everything else the same?"
              options={[
                "Multi Prompts",
                "Zoom Out",
                "Vary Region",
                "Image Blending"
              ]}
              correctAnswer="Vary Region"
              explanation="Vary Region allows you to selectively modify specific areas of an image while keeping the rest unchanged. This makes it perfect for targeted changes like modifying a character's hairstyle without affecting the rest of the image."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/parameters">
                <Button variant="outline">
                  ← Previous: Using Parameters to Control Output
                </Button>
              </Link>
              <Link href="/guides/midjourney-for-beginners">
                <Button>
                  Return to Guide Overview →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Crafting Effective Prompts for Midjourney | How-ToGuides.com',
  description: 'Learn how to write effective Midjourney prompts that generate exactly the images you want, with detailed techniques, examples, and best practices.',
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
              guideSlug="midjourney-for-beginners"
              isSubscribed={true}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#prompt-basics" className="text-primary hover:underline">Prompt Structure Basics</a></li>
                <li><a href="#descriptive-language" className="text-primary hover:underline">Using Descriptive Language</a></li>
                <li><a href="#style-references" className="text-primary hover:underline">Style References and Artists</a></li>
                <li><a href="#prompt-techniques" className="text-primary hover:underline">Advanced Prompt Techniques</a></li>
                <li><a href="#common-mistakes" className="text-primary hover:underline">Common Mistakes to Avoid</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Crafting Effective Prompts</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 15 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 6 of 8</span>
              <span className="ml-4 bg-primary/10 text-primary px-2 py-1 rounded text-xs">Premium Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/midjourney-prompt-structure-guide.jpg" 
                alt="Visual guide showing the anatomy of an effective Midjourney prompt with examples" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              The prompt is the most important element in creating images with Midjourney. It's your way of communicating with the AI, guiding it to generate the exact image you have in mind. In this module, we'll explore the art and science of crafting effective prompts that produce stunning, precise results.
            </p>
            
            <h2 id="prompt-basics">Prompt Structure Basics</h2>
            <p>
              A well-structured prompt is the foundation of successful image generation. Let's break down the basic components of an effective Midjourney prompt:
            </p>
            
            <h3>The Anatomy of a Prompt</h3>
            <p>
              While there's no single "correct" way to write a prompt, most effective prompts include these key elements:
            </p>
            
            <ol>
              <li><strong>Subject:</strong> What is the main focus of your image?</li>
              <li><strong>Setting:</strong> Where is the subject located?</li>
              <li><strong>Lighting:</strong> What type of lighting illuminates the scene?</li>
              <li><strong>Mood/Atmosphere:</strong> What feeling should the image convey?</li>
              <li><strong>Style/Aesthetic:</strong> What artistic style should be applied?</li>
              <li><strong>Technical Details:</strong> What camera, lens, or rendering specifications?</li>
            </ol>
            
            <p>
              Not every prompt needs all these elements, but including more specific details generally leads to more precise results.
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <p className="font-bold">Basic Prompt Template:</p>
              <code>[subject] in [setting] with [lighting] creating a [mood] atmosphere, [style] style, [technical details]</code>
            </div>
            
            <p>
              Here's an example of a well-structured prompt using this template:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>a lone explorer standing on a cliff overlooking a vast alien landscape with bioluminescent plants, dramatic sunset lighting creating a mysterious atmosphere, cinematic style, ultra detailed, 8k, shallow depth of field</code>
            </div>
            
            <ExpandableSection 
              title="Prompt Length Considerations" 
              content={
                <div>
                  <p>The length of your prompt can significantly impact your results:</p>
                  <ul>
                    <li><strong>Short prompts (1-5 words):</strong> Give Midjourney more creative freedom but less control over specific details. Good for exploration and discovering unexpected results.</li>
                    <li><strong>Medium prompts (10-20 words):</strong> Provide a balance between guidance and creative interpretation. Good for most general use cases.</li>
                    <li><strong>Long prompts (25+ words):</strong> Offer more precise control over details but may sometimes result in the AI trying to incorporate too many elements. Good for specific, detailed concepts.</li>
                  </ul>
                  <p>Midjourney V6 has improved significantly in handling longer, more detailed prompts compared to earlier versions. However, there's still a point of diminishing returns where adding more words doesn't necessarily improve results.</p>
                  <p>A good approach is to start with medium-length prompts and add more details in subsequent iterations based on the initial results.</p>
                </div>
              }
            />
            
            <h2 id="descriptive-language">Using Descriptive Language</h2>
            <p>
              The specific words you choose have a profound impact on the images Midjourney generates. Learning to use rich, descriptive language is key to getting the results you want.
            </p>
            
            <h3>Adjectives and Descriptors</h3>
            <p>
              Using specific, evocative adjectives helps Midjourney understand exactly what you're looking for:
            </p>
            
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Instead of</th>
                  <th className="border border-slate-200 p-2 text-left">Try</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2">big</td>
                  <td className="border border-slate-200 p-2">massive, enormous, colossal, towering</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">small</td>
                  <td className="border border-slate-200 p-2">tiny, miniature, diminutive, microscopic</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">old</td>
                  <td className="border border-slate-200 p-2">ancient, weathered, timeworn, antique</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">beautiful</td>
                  <td className="border border-slate-200 p-2">stunning, exquisite, breathtaking, magnificent</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">scary</td>
                  <td className="border border-slate-200 p-2">terrifying, nightmarish, haunting, chilling</td>
                </tr>
              </tbody>
            </table>
            
            <h3>Materials and Textures</h3>
            <p>
              Specifying materials and textures adds richness and realism to your images:
            </p>
            
            <ul>
              <li><strong>Materials:</strong> marble, gold, wood, leather, glass, steel, bronze, ceramic</li>
              <li><strong>Textures:</strong> rough, smooth, polished, weathered, cracked, glossy, matte, grainy</li>
            </ul>
            
            <p>
              Example: "a <strong>weathered bronze</strong> statue with a <strong>patina finish</strong> and <strong>fine engraved details</strong>"
            </p>
            
            <h3>Lighting Terminology</h3>
            <p>
              Lighting dramatically affects the mood and visual impact of your images:
            </p>
            
            <ul>
              <li><strong>Natural lighting:</strong> golden hour, blue hour, harsh midday sun, soft morning light, dappled sunlight</li>
              <li><strong>Artificial lighting:</strong> neon, candlelight, firelight, studio lighting, rim lighting, backlit</li>
              <li><strong>Qualities:</strong> soft, harsh, dramatic, diffused, directional, ambient, volumetric</li>
            </ul>
            
            <p>
              Example: "a portrait of a woman in <strong>dramatic side lighting</strong> with <strong>soft blue highlights</strong> and <strong>deep shadows</strong>"
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                Create a personal "prompt vocabulary" document where you collect effective descriptive terms from your successful prompts. This becomes a valuable resource you can reference when crafting new prompts.
              </p>
            </div>
            
            <h2 id="style-references">Style References and Artists</h2>
            <p>
              One of the most powerful ways to control the aesthetic of your images is by referencing specific artistic styles, movements, or artists.
            </p>
            
            <h3>Art Styles and Movements</h3>
            <p>
              Referencing established art styles gives Midjourney a clear direction:
            </p>
            
            <ul>
              <li><strong>Traditional Art:</strong> impressionism, cubism, surrealism, art nouveau, baroque, renaissance</li>
              <li><strong>Modern Styles:</strong> cyberpunk, vaporwave, minimalism, pop art, abstract expressionism</li>
              <li><strong>Media Types:</strong> oil painting, watercolor, digital art, pencil sketch, charcoal drawing, pastel</li>
              <li><strong>Photography:</strong> portrait photography, macro photography, aerial photography, long exposure</li>
              <li><strong>3D/Digital:</strong> 3D render, octane render, unreal engine, cinema 4D, isometric</li>
            </ul>
            
            <h3>Artist References</h3>
            <p>
              Including artist names can strongly influence the style of your images. Here are some effective artist references for different styles:
            </p>
            
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Style Category</th>
                  <th className="border border-slate-200 p-2 text-left">Artist References</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2">Fantasy/Sci-Fi</td>
                  <td className="border border-slate-200 p-2">Greg Rutkowski, Tyler Edlin, Alphonse Mucha, Frank Frazetta</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Painterly</td>
                  <td className="border border-slate-200 p-2">Claude Monet, Vincent van Gogh, John Singer Sargent, Thomas Kinkade</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Digital/Concept Art</td>
                  <td className="border border-slate-200 p-2">Artgerm, WLOP, Ross Tran, Craig Mullins</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Photography</td>
                  <td className="border border-slate-200 p-2">Annie Leibovitz, Steve McCurry, Ansel Adams, Peter Lindbergh</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Cinematic</td>
                  <td className="border border-slate-200 p-2">Roger Deakins, Emmanuel Lubezki, Wes Anderson, Christopher Nolan</td>
                </tr>
              </tbody>
            </table>
            
            <p>
              Example: "a mystical forest landscape with ancient ruins, <strong>in the style of Alphonse Mucha and art nouveau</strong>, intricate details, flowing organic lines"
            </p>
            
            <ExpandableSection 
              title="Combining Multiple Style References" 
              content={
                <div>
                  <p>You can combine multiple style references to create unique hybrid aesthetics:</p>
                  <ul>
                    <li><strong>Mixing Artists:</strong> "in the style of Salvador Dali meets Hayao Miyazaki"</li>
                    <li><strong>Mixing Mediums:</strong> "digital art with watercolor textures"</li>
                    <li><strong>Mixing Eras:</strong> "cyberpunk aesthetic with art deco elements"</li>
                    <li><strong>Style Fusion:</strong> "anime style with photorealistic details"</li>
                  </ul>
                  <p>When combining styles, it's often helpful to use terms like "fusion of," "blend of," "combination of," or "inspired by" to help Midjourney understand your intent.</p>
                  <p>Example: "a portrait of a woman, <strong>fusion of art nouveau and cyberpunk aesthetics</strong>, flowing organic lines with neon accents, intricate details, digital painting"</p>
                </div>
              }
            />
            
            <h2 id="prompt-techniques">Advanced Prompt Techniques</h2>
            <p>
              Beyond basic structure and descriptive language, there are several advanced techniques that can help you achieve more precise results.
            </p>
            
            <h3>Weighted Prompts</h3>
            <p>
              In Midjourney V6, you can assign different weights to parts of your prompt using the :: syntax. This allows you to emphasize certain elements over others.
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>a cyberpunk city street::1.5 with neon signs and flying cars::0.8 in the rain::1.2</code>
            </div>
            
            <p>
              In this example, "a cyberpunk city street" has 1.5x weight, "with neon signs and flying cars" has 0.8x weight, and "in the rain" has 1.2x weight. Higher numbers give that portion of the prompt more influence on the final image.
            </p>
            
            <h3>Negative Prompts</h3>
            <p>
              You can specify elements you don't want in your image using negative prompts with the --no parameter:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>a beautiful landscape with mountains and a lake --no people, buildings, text</code>
            </div>
            
            <p>
              This tells Midjourney to avoid including people, buildings, or text in the generated image.
            </p>
            
            <h3>Multi-Prompting</h3>
            <p>
              Multi-prompting is a powerful technique in Midjourney V6 that allows you to combine different concepts with precise control:
            </p>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>a majestic lion::0.7 with armor::0.5 in a fantasy forest::0.8</code>
            </div>
            
            <p>
              This approach gives you fine-grained control over how different elements blend together in the final image.
            </p>
            
            <h3>Image Prompting</h3>
            <p>
              You can use existing images as part of your prompt to influence the style, composition, or content of your generations:
            </p>
            
            <ol>
              <li>Upload an image to Discord</li>
              <li>Copy the image URL</li>
              <li>Include the URL at the beginning of your prompt</li>
            </ol>
            
            <div className="bg-slate-100 p-4 rounded-md my-4 overflow-x-auto">
              <code>https://example.com/image.jpg a portrait in the same style</code>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Important Note</p>
              <p className="text-yellow-600">
                When using image prompting, be mindful of copyright. Only use images you have the rights to use, or that are in the public domain. Midjourney's terms of service prohibit using the service to infringe on intellectual property rights.
              </p>
            </div>
            
            <InlineLeadCapture 
              formId="midjourney-prompts-inline"
              title="Get Our Advanced Prompt Engineering Guide"
              description="Subscribe to receive our comprehensive 50-page guide to advanced prompt engineering techniques for Midjourney, including 100+ proven prompt templates."
              buttonText="Send Me the Advanced Guide"
            />
            
            <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
            <p>
              Even experienced Midjourney users can fall into these common prompt pitfalls:
            </p>
            
            <h3>Overloading the Prompt</h3>
            <p>
              Trying to include too many elements or concepts in a single prompt often leads to confused or muddled results. Instead:
            </p>
            <ul>
              <li>Focus on one main concept per image</li>
              <li>Prioritize the most important elements</li>
              <li>Use weighted prompts to emphasize key elements</li>
            </ul>
            
            <h3>Being Too Vague</h3>
            <p>
              Vague prompts like "beautiful landscape" or "cool character" give Midjourney too little direction. Instead:
            </p>
            <ul>
              <li>Be specific about what you want</li>
              <li>Include details about style, lighting, and mood</li>
              <li>Use precise descriptive language</li>
            </ul>
            
            <h3>Ignoring Composition</h3>
            <p>
              Many users focus on subject and style but neglect composition. To improve composition:
            </p>
            <ul>
              <li>Specify camera angle (bird's eye view, low angle, etc.)</li>
              <li>Include framing details (close-up, wide shot, etc.)</li>
              <li>Reference composition types (rule of thirds, golden ratio, etc.)</li>
            </ul>
            
            <h3>Contradictory Elements</h3>
            <p>
              Including contradictory elements can confuse the AI. For example:
            </p>
            <ul>
              <li>"Photorealistic anime style" (these are opposing concepts)</li>
              <li>"Bright nighttime scene" (contradictory lighting)</li>
              <li>"Modern ancient temple" (conflicting time periods)</li>
            </ul>
            
            <p>
              Instead, be clear and consistent with your stylistic choices and descriptors.
            </p>
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which of the following is the most effective way to emphasize certain elements in a Midjourney V6 prompt?"
              options={[
                "Using ALL CAPS for important words",
                "Repeating the important words multiple times",
                "Using the :: syntax with numerical weights",
                "Placing important words at the beginning of the prompt"
              ]}
              correctAnswer="Using the :: syntax with numerical weights"
              explanation="In Midjourney V6, the most effective way to emphasize certain elements is to use the :: syntax with numerical weights (e.g., 'cyberpunk city::1.5'). This gives you precise control over how much influence each part of your prompt has on the final image."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/midjourney-for-beginners/commands">
                <Button variant="outline">
                  ← Previous: Understanding Midjourney Commands
                </Button>
              </Link>
              <Link href="/guides/midjourney-for-beginners/parameters">
                <Button>
                  Next: Using Parameters to Control Output →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

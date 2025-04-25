import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { InlineLeadCapture } from '@/components/lead-generation/InlineLeadCapture';

export const metadata: Metadata = {
  title: 'Understanding Gemini AI\'s Capabilities | How-ToGuides.com',
  description: 'Explore Gemini AI\'s multimodal features, understand its different capabilities, and learn how it compares to other AI assistants.',
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

export default function Capabilities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="capabilities" 
              guideSlug="gemini-ai-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#multimodal-capabilities" className="text-primary hover:underline">Multimodal Capabilities</a></li>
                <li><a href="#text-capabilities" className="text-primary hover:underline">Text Processing Capabilities</a></li>
                <li><a href="#image-capabilities" className="text-primary hover:underline">Image Understanding</a></li>
                <li><a href="#code-capabilities" className="text-primary hover:underline">Code Generation and Analysis</a></li>
                <li><a href="#limitations" className="text-primary hover:underline">Current Limitations</a></li>
                <li><a href="#knowledge-check" className="text-primary hover:underline">Knowledge Check</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Understanding Gemini AI's Capabilities</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 15 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 3 of 8</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/gemini-ai-capabilities.jpg" 
                alt="Visualization of Gemini AI's multimodal capabilities showing text, image, and code processing" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you understand what Gemini AI is and how to access it, let's explore its capabilities in more detail. This module will dive deeper into Gemini's multimodal features, examine its strengths across different types of tasks, and help you understand what Gemini can and cannot do.
            </p>
            
            <p>
              Understanding these capabilities will help you leverage Gemini more effectively for your specific needs and set realistic expectations about what it can accomplish.
            </p>
            
            <h2 id="multimodal-capabilities">Multimodal Capabilities: The Core of Gemini</h2>
            <p>
              Gemini's most distinctive feature is its native multimodality—the ability to understand, process, and generate content across different types of information simultaneously. Unlike many AI systems that were primarily designed for text and later adapted for other media, Gemini was built from the ground up to work with multiple modalities.
            </p>
            
            <h3>What Does Multimodal Mean in Practice?</h3>
            <p>
              Multimodality means Gemini can:
            </p>
            
            <ul>
              <li><strong>Process mixed inputs</strong>: You can provide text, images, and code in a single prompt, and Gemini will understand the relationships between them.</li>
              <li><strong>Generate cross-modal responses</strong>: Gemini can analyze an image and provide textual descriptions, explanations, or code based on what it sees.</li>
              <li><strong>Maintain context across modalities</strong>: When you switch between different types of information in a conversation, Gemini remembers the context from previous exchanges.</li>
              <li><strong>Perform tasks that require multiple types of understanding</strong>: For example, explaining a diagram, analyzing a screenshot, or suggesting code based on a visual design.</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Multimodal Example</p>
              <p className="text-blue-600">
                You could upload a photo of a math problem written on paper, ask Gemini to solve it, then ask it to explain the solution step-by-step, and finally request code that implements the mathematical concept—all in a single, coherent conversation.
              </p>
            </div>
            
            <h2 id="text-capabilities">Text Processing Capabilities</h2>
            <p>
              While Gemini's multimodality is its standout feature, its text processing capabilities form the foundation of most interactions. Here's what Gemini can do with text:
            </p>
            
            <h3>Content Generation</h3>
            <p>
              Gemini excels at generating various types of written content:
            </p>
            
            <ul>
              <li><strong>Creative writing</strong>: Stories, poems, scripts, and other creative formats</li>
              <li><strong>Professional content</strong>: Business emails, reports, presentations, and marketing copy</li>
              <li><strong>Educational materials</strong>: Lesson plans, study guides, and explanations of complex concepts</li>
              <li><strong>Conversational responses</strong>: Natural, contextually appropriate replies in dialogue</li>
            </ul>
            
            <h3>Content Transformation</h3>
            <p>
              Gemini can transform existing text in various ways:
            </p>
            
            <ul>
              <li><strong>Summarization</strong>: Condensing long documents while preserving key information</li>
              <li><strong>Expansion</strong>: Elaborating on brief points with additional details and examples</li>
              <li><strong>Reformatting</strong>: Converting between different content formats (e.g., paragraphs to bullet points)</li>
              <li><strong>Style adaptation</strong>: Rewriting content in different tones or styles (formal, casual, technical, etc.)</li>
              <li><strong>Translation</strong>: Converting text between different languages while preserving meaning</li>
            </ul>
            
            <h3>Information Analysis</h3>
            <p>
              Gemini can analyze and extract insights from text:
            </p>
            
            <ul>
              <li><strong>Sentiment analysis</strong>: Identifying emotional tone and attitudes in text</li>
              <li><strong>Entity recognition</strong>: Identifying people, organizations, locations, and other entities</li>
              <li><strong>Topic extraction</strong>: Identifying main themes and subjects in content</li>
              <li><strong>Fact checking</strong>: Verifying factual claims against its knowledge base</li>
              <li><strong>Pattern recognition</strong>: Identifying trends, relationships, and structures in textual data</li>
            </ul>
            
            <ExpandableSection 
              title="Advanced Text Capabilities" 
              content={
                <div>
                  <p>Beyond the basic text capabilities, Gemini offers several advanced text processing features:</p>
                  
                  <h4>Chain-of-Thought Reasoning</h4>
                  <p>Gemini can break down complex problems into step-by-step reasoning processes, making it particularly effective for:</p>
                  <ul>
                    <li>Mathematical problem-solving</li>
                    <li>Logical deductions</li>
                    <li>Multi-step planning</li>
                    <li>Decision analysis</li>
                  </ul>
                  
                  <h4>Long-Context Understanding</h4>
                  <p>Gemini (especially the Ultra model) can maintain context over very long conversations or documents, allowing it to:</p>
                  <ul>
                    <li>Analyze lengthy research papers</li>
                    <li>Maintain coherence in extended dialogues</li>
                    <li>Reference information from much earlier in a conversation</li>
                    <li>Process and summarize book-length content</li>
                  </ul>
                  
                  <h4>Nuanced Language Understanding</h4>
                  <p>Gemini demonstrates sophisticated understanding of language nuances, including:</p>
                  <ul>
                    <li>Humor and sarcasm (though not always perfectly)</li>
                    <li>Cultural references and idioms</li>
                    <li>Implicit meaning and subtext</li>
                    <li>Technical jargon across various domains</li>
                  </ul>
                  
                  <p>These advanced capabilities are more pronounced in Gemini Ultra (the paid version) but are present to some degree in all versions of Gemini.</p>
                </div>
              }
            />
            
            <h2 id="image-capabilities">Image Understanding</h2>
            <p>
              Gemini's ability to understand and analyze images is one of its most powerful features. Here's what it can do with visual information:
            </p>
            
            <h3>Image Analysis</h3>
            <p>
              Gemini can extract information from images in various ways:
            </p>
            
            <ul>
              <li><strong>Object recognition</strong>: Identifying people, animals, objects, and scenes in images</li>
              <li><strong>Text extraction</strong>: Reading and transcribing text visible in images</li>
              <li><strong>Visual problem-solving</strong>: Analyzing diagrams, charts, and visual puzzles</li>
              <li><strong>Detailed description</strong>: Providing comprehensive descriptions of image content</li>
              <li><strong>Aesthetic analysis</strong>: Commenting on composition, style, and visual elements</li>
            </ul>
            
            <h3>Practical Image Applications</h3>
            <p>
              These image capabilities enable various practical applications:
            </p>
            
            <ul>
              <li><strong>Document analysis</strong>: Extracting information from screenshots, documents, or photos of printed materials</li>
              <li><strong>Educational support</strong>: Explaining diagrams, charts, or visual educational materials</li>
              <li><strong>Accessibility</strong>: Describing images for visually impaired users</li>
              <li><strong>Visual troubleshooting</strong>: Analyzing screenshots of error messages or technical issues</li>
              <li><strong>Real-world assistance</strong>: Identifying objects, plants, landmarks, or other items in photos</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Important Note on Image Generation</p>
              <p className="text-yellow-600">
                Unlike some other AI systems, Gemini currently does not generate images. It can analyze and describe images you provide, but it cannot create new visual content. For image generation, you would need to use a specialized AI tool like DALL-E, Midjourney, or Stable Diffusion.
              </p>
            </div>
            
            <InlineLeadCapture 
              heading="Want to master Gemini's multimodal capabilities?"
              text="Unlock our premium modules to learn advanced techniques for combining text and image prompts, working with complex visual information, and leveraging Gemini's full multimodal potential."
              formId="capabilities-inline"
              buttonText="Unlock Premium Content"
            />
            
            <h2 id="code-capabilities">Code Generation and Analysis</h2>
            <p>
              Gemini offers robust capabilities for working with code, making it a valuable tool for developers and those learning to program:
            </p>
            
            <h3>Code Generation</h3>
            <p>
              Gemini can generate code based on natural language descriptions:
            </p>
            
            <ul>
              <li><strong>Complete functions and programs</strong>: Creating working code from descriptions of desired functionality</li>
              <li><strong>Algorithms implementation</strong>: Translating algorithmic concepts into executable code</li>
              <li><strong>Boilerplate generation</strong>: Creating standard code structures and patterns</li>
              <li><strong>Multiple language support</strong>: Generating code in many programming languages, including Python, JavaScript, Java, C++, and more</li>
            </ul>
            
            <h3>Code Analysis and Improvement</h3>
            <p>
              Gemini can analyze existing code to provide insights and improvements:
            </p>
            
            <ul>
              <li><strong>Bug identification</strong>: Finding and explaining errors in code</li>
              <li><strong>Code optimization</strong>: Suggesting performance improvements</li>
              <li><strong>Readability enhancements</strong>: Improving code structure and documentation</li>
              <li><strong>Security analysis</strong>: Identifying potential security vulnerabilities</li>
              <li><strong>Code explanation</strong>: Breaking down how code works in plain language</li>
            </ul>
            
            <h3>Learning and Documentation</h3>
            <p>
              Gemini can assist with learning programming and documenting code:
            </p>
            
            <ul>
              <li><strong>Tutorial generation</strong>: Creating step-by-step coding tutorials</li>
              <li><strong>Concept explanation</strong>: Explaining programming concepts with examples</li>
              <li><strong>Documentation writing</strong>: Generating documentation for code</li>
              <li><strong>Code translation</strong>: Converting code between different programming languages</li>
            </ul>
            
            <ExpandableSection 
              title="Supported Programming Languages" 
              content={
                <div>
                  <p>Gemini supports a wide range of programming languages, including but not limited to:</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div>
                      <h4>General Purpose:</h4>
                      <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>C#</li>
                        <li>Go</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                        <li>Swift</li>
                        <li>Kotlin</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4>Web Development:</h4>
                      <ul>
                        <li>HTML/CSS</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>Ruby on Rails</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4>Data Science:</h4>
                      <ul>
                        <li>R</li>
                        <li>SQL</li>
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>MATLAB</li>
                      </ul>
                      
                      <h4>Others:</h4>
                      <ul>
                        <li>Bash/Shell</li>
                        <li>PowerShell</li>
                        <li>Rust</li>
                        <li>Scala</li>
                        <li>Haskell</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-4">Gemini's proficiency varies across languages, with stronger capabilities in widely used languages like Python, JavaScript, and Java. The Ultra model (in Gemini Advanced) generally offers better performance for less common languages and more complex coding tasks.</p>
                </div>
              }
            />
            
            <h2 id="limitations">Current Limitations of Gemini AI</h2>
            <p>
              While Gemini is a powerful AI system, it's important to understand its limitations to use it effectively:
            </p>
            
            <h3>Knowledge Limitations</h3>
            <ul>
              <li><strong>Knowledge cutoff</strong>: Gemini's training data has a cutoff date, meaning it may not have information about very recent events or developments.</li>
              <li><strong>Factual accuracy</strong>: While generally reliable, Gemini can sometimes provide incorrect information or "hallucinate" facts.</li>
              <li><strong>Specialized expertise</strong>: Gemini's knowledge may be less comprehensive in highly specialized or niche domains.</li>
            </ul>
            
            <h3>Capability Limitations</h3>
            <ul>
              <li><strong>No image generation</strong>: As mentioned earlier, Gemini cannot create images.</li>
              <li><strong>Limited direct actions</strong>: Gemini cannot directly interact with other systems or perform actions outside its interface (though extensions are expanding this capability).</li>
              <li><strong>Complex reasoning limitations</strong>: For extremely complex reasoning tasks, Gemini may make logical errors or miss subtle connections.</li>
              <li><strong>Contextual understanding</strong>: While impressive, Gemini's understanding of context can break down in very long or complex conversations.</li>
            </ul>
            
            <h3>Ethical and Safety Limitations</h3>
            <ul>
              <li><strong>Content policies</strong>: Gemini will refuse to generate certain types of content that violate Google's policies, such as harmful, illegal, or explicitly inappropriate content.</li>
              <li><strong>Bias</strong>: Like all AI systems, Gemini may reflect biases present in its training data, though Google has implemented various safeguards to mitigate this.</li>
              <li><strong>Not a replacement for professionals</strong>: Gemini should not be used as a substitute for professional advice in critical areas like medicine, law, finance, or engineering.</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Best Practice</p>
              <p className="text-blue-600">
                Always verify important information provided by Gemini, especially for critical decisions. Use Gemini as a helpful assistant rather than the final authority on any subject.
              </p>
            </div>
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which of the following is NOT something Gemini AI can currently do?"
              options={[
                "Analyze and describe the content of an image",
                "Generate code based on a natural language description",
                "Create original images based on text prompts",
                "Translate text between different languages"
              ]}
              correctAnswer="Create original images based on text prompts"
              explanation="While Gemini AI can analyze images, generate code, and translate text, it currently cannot create original images based on text prompts. This is a key limitation to be aware of when using Gemini. For image generation, you would need to use specialized AI tools like DALL-E, Midjourney, or Stable Diffusion."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/gemini-ai-for-beginners/getting-started">
                <Button variant="outline">
                  ← Previous: Getting Started with Gemini AI
                </Button>
              </Link>
              <Link href="/guides/gemini-ai-for-beginners/basic-interactions">
                <Button>
                  Next: Basic Interactions with Gemini AI →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

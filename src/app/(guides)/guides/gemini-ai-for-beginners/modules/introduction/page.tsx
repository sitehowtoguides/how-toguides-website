import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';

export const metadata: Metadata = {
  title: 'Introduction to Gemini AI | How-ToGuides.com',
  description: 'Learn what Gemini AI is, its key features, capabilities, and how it can transform your workflow in this comprehensive introduction.',
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

export default function Introduction() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="introduction" 
              guideSlug="gemini-ai-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#what-is-gemini" className="text-primary hover:underline">What is Gemini AI?</a></li>
                <li><a href="#key-features" className="text-primary hover:underline">Key Features and Capabilities</a></li>
                <li><a href="#versions" className="text-primary hover:underline">Different Versions of Gemini</a></li>
                <li><a href="#benefits" className="text-primary hover:underline">Benefits of Using Gemini AI</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Introduction to Gemini AI</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 10 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 1 of 8</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/gemini-ai-introduction.jpg" 
                alt="Gemini AI interface showing multimodal capabilities with text and image processing" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Artificial Intelligence has transformed the way we interact with technology, and Google's Gemini AI represents one of the most significant advancements in this field. As a powerful multimodal AI assistant, Gemini offers capabilities that were once the realm of science fiction, enabling users to accomplish tasks ranging from simple conversations to complex creative projects with unprecedented ease and efficiency.
            </p>
            
            <h2 id="what-is-gemini">What is Gemini AI?</h2>
            <p>
              Gemini AI is Google's most capable and general AI model to date, designed to understand and process multiple types of information simultaneously. Launched in December 2023, Gemini represents the culmination of Google's extensive research and development in artificial intelligence, specifically created to offer a more intuitive, helpful, and versatile AI assistant experience.
            </p>
            
            <p>
              Unlike its predecessors and many competitors, Gemini was built from the ground up to be multimodal, meaning it can seamlessly understand, operate across, and combine different types of information including text, code, audio, images, and video. This native multimodality allows Gemini to process and respond to complex queries that involve multiple formats of information, making it exceptionally versatile for a wide range of applications.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">What Makes Gemini Different</p>
              <p className="text-blue-600">
                While many AI systems were initially designed for text and later adapted for other media types, Gemini was built with multimodality as a core design principle. This fundamental difference allows for more natural and comprehensive interactions across different types of information.
              </p>
            </div>
            
            <h2 id="key-features">Key Features and Capabilities of Gemini AI</h2>
            <p>
              Gemini AI offers an impressive array of features that make it a powerful tool for both casual users and professionals:
            </p>
            
            <h3>Multimodal Understanding</h3>
            <p>
              Gemini can process and analyze text, images, audio, and video simultaneously, allowing for more natural and comprehensive interactions. For example, you can show Gemini an image of a math problem and ask it to solve it, or share a screenshot of code and ask for an explanation and improvements.
            </p>
            
            <h3>Advanced Reasoning</h3>
            <p>
              With sophisticated reasoning capabilities, Gemini can tackle complex problems, make connections between different pieces of information, and provide nuanced responses. It excels at multi-step reasoning tasks that require understanding context and applying knowledge across domains.
            </p>
            
            <h3>Creative Assistance</h3>
            <p>
              From writing and editing to generating ideas and creating visual content, Gemini excels at helping users with creative tasks. It can help draft articles, suggest improvements to your writing, brainstorm ideas, and even assist with design concepts.
            </p>
            
            <h3>Research and Information Synthesis</h3>
            <p>
              Gemini can search the web, analyze large volumes of information, and synthesize findings into coherent, easy-to-understand responses. This makes it an invaluable tool for research, learning, and staying informed on complex topics.
            </p>
            
            <h3>Code Generation and Debugging</h3>
            <p>
              Developers can leverage Gemini's ability to write, explain, and debug code across multiple programming languages. It can generate code based on natural language descriptions, explain how existing code works, and suggest improvements or fixes for bugs.
            </p>
            
            <h3>Language Translation</h3>
            <p>
              Gemini offers robust translation capabilities across numerous languages, helping bridge communication gaps and making content accessible to global audiences.
            </p>
            
            <h3>Mathematical Problem-Solving</h3>
            <p>
              Complex mathematical problems can be solved step-by-step with clear explanations, making Gemini a helpful tool for students, educators, and professionals working with mathematical concepts.
            </p>
            
            <h3>Integration with Google Services</h3>
            <p>
              Gemini works seamlessly with other Google products and services, enhancing productivity within the Google ecosystem. It can interact with Gmail, Google Docs, Google Drive, and other services to help you work more efficiently.
            </p>
            
            <ExpandableSection 
              title="Comparing Gemini to Other AI Assistants" 
              content={
                <div>
                  <p>Gemini AI differs from other popular AI assistants in several key ways:</p>
                  <table className="w-full border-collapse border border-slate-200 my-4">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-2 text-left">Feature</th>
                        <th className="border border-slate-200 p-2 text-left">Gemini AI</th>
                        <th className="border border-slate-200 p-2 text-left">ChatGPT</th>
                        <th className="border border-slate-200 p-2 text-left">Claude</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-2">Native Multimodality</td>
                        <td className="border border-slate-200 p-2">Built from ground up for multimodal</td>
                        <td className="border border-slate-200 p-2">Added later with GPT-4V</td>
                        <td className="border border-slate-200 p-2">Added later with Claude 3</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-2">Ecosystem Integration</td>
                        <td className="border border-slate-200 p-2">Deep Google integration</td>
                        <td className="border border-slate-200 p-2">OpenAI ecosystem, plugins</td>
                        <td className="border border-slate-200 p-2">Limited ecosystem</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-2">Web Search</td>
                        <td className="border border-slate-200 p-2">Direct Google Search integration</td>
                        <td className="border border-slate-200 p-2">Bing search (Plus only)</td>
                        <td className="border border-slate-200 p-2">Limited web access</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-2">Mobile Experience</td>
                        <td className="border border-slate-200 p-2">Dedicated app with camera integration</td>
                        <td className="border border-slate-200 p-2">Mobile app available</td>
                        <td className="border border-slate-200 p-2">Web interface on mobile</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-2">Free Tier Capabilities</td>
                        <td className="border border-slate-200 p-2">Gemini Pro model</td>
                        <td className="border border-slate-200 p-2">GPT-3.5</td>
                        <td className="border border-slate-200 p-2">Claude Instant</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>While all these AI assistants are powerful tools, Gemini's native multimodality and deep integration with Google's ecosystem give it unique advantages for certain use cases, particularly those involving multiple types of media or requiring integration with Google services.</p>
                </div>
              }
            />
            
            <h2 id="versions">Different Versions of Gemini</h2>
            <p>
              Google has optimized Gemini for different sizes and use cases, each designed for specific applications:
            </p>
            
            <h3>Gemini Ultra</h3>
            <p>
              This is Google's largest and most capable model, specifically designed for highly complex tasks that require advanced reasoning, planning, and understanding. Ultra powers Gemini Advanced, the premium version available through a Google One AI Premium subscription.
            </p>
            
            <p>
              Gemini Ultra excels at:
            </p>
            <ul>
              <li>Complex reasoning and problem-solving</li>
              <li>Advanced code generation and analysis</li>
              <li>Sophisticated creative content creation</li>
              <li>Handling long, detailed conversations with extended context</li>
              <li>Multimodal tasks requiring deep understanding</li>
            </ul>
            
            <h3>Gemini Pro</h3>
            <p>
              Designed for scaling across a wide range of tasks, Gemini Pro offers an excellent balance of capability and efficiency. This version powers the free tier of Gemini and is suitable for most everyday AI assistant needs.
            </p>
            
            <p>
              Gemini Pro is ideal for:
            </p>
            <ul>
              <li>General question answering and information retrieval</li>
              <li>Basic content creation and editing</li>
              <li>Standard code assistance</li>
              <li>Everyday problem-solving</li>
              <li>Common multimodal tasks</li>
            </ul>
            
            <h3>Gemini Nano</h3>
            <p>
              The most efficient model in the family, Gemini Nano is optimized for on-device tasks, allowing AI capabilities directly on smartphones and other mobile devices without requiring constant cloud connectivity.
            </p>
            
            <p>
              Gemini Nano is perfect for:
            </p>
            <ul>
              <li>On-device text generation and summarization</li>
              <li>Smart reply suggestions</li>
              <li>Real-time language translation</li>
              <li>Local image understanding</li>
              <li>Privacy-sensitive applications</li>
            </ul>
            
            <p>
              As of 2025, Google has continued to evolve the Gemini family with newer versions like Gemini 2.0, offering enhanced capabilities while maintaining the same tiered approach to different use cases.
            </p>
            
            <h2 id="benefits">Benefits of Using Gemini AI</h2>
            <p>
              Incorporating Gemini AI into your digital toolkit offers numerous advantages:
            </p>
            
            <h3>Enhanced Productivity</h3>
            <p>
              Gemini can automate routine tasks, generate content, and provide quick answers, saving valuable time and effort. Whether you're drafting emails, creating reports, or organizing information, Gemini can help streamline your workflow.
            </p>
            
            <h3>Improved Decision-Making</h3>
            <p>
              By analyzing data and providing insights, Gemini helps users make more informed decisions. It can help you evaluate options, understand complex information, and identify patterns that might otherwise be missed.
            </p>
            
            <h3>Creative Expansion</h3>
            <p>
              Gemini can serve as a creative partner, offering ideas, refining concepts, and helping overcome creative blocks. Whether you're writing, designing, or brainstorming, Gemini can help expand your creative horizons.
            </p>
            
            <h3>Learning Assistance</h3>
            <p>
              Students and lifelong learners can use Gemini to explain complex concepts, provide study materials, and offer personalized learning experiences. It can break down difficult topics, provide examples, and help you practice and test your knowledge.
            </p>
            
            <h3>Accessibility</h3>
            <p>
              Gemini's multimodal capabilities make digital information more accessible to people with different needs and preferences. It can help bridge communication gaps and make technology more inclusive.
            </p>
            
            <h3>Seamless Google Integration</h3>
            <p>
              For users already in the Google ecosystem, Gemini offers deep integration with services like Gmail, Google Drive, and Google Docs, creating a more cohesive and efficient digital experience.
            </p>
            
            <h3>Continuous Improvement</h3>
            <p>
              As an AI system, Gemini continues to learn and improve over time, offering increasingly valuable assistance as it evolves and adapts to user needs.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Important Note</p>
              <p className="text-yellow-600">
                While Gemini AI is a powerful tool, it's important to use it responsibly. Always verify critical information, be aware of potential biases, and maintain appropriate privacy practices when sharing sensitive information.
              </p>
            </div>
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="What is the primary feature that distinguishes Gemini AI from many other AI assistants?"
              options={[
                "It was developed by Google",
                "It was built from the ground up to be multimodal",
                "It has a free and paid version",
                "It can generate images"
              ]}
              correctAnswer="It was built from the ground up to be multimodal"
              explanation="While other AI assistants have added multimodal capabilities later, Gemini was designed from the beginning to understand and process multiple types of information (text, images, code, audio, video) simultaneously. This native multimodality is a key distinguishing feature of Gemini AI."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/gemini-ai-for-beginners">
                <Button variant="outline">
                  ← Back to Guide Overview
                </Button>
              </Link>
              <Link href="/guides/gemini-ai-for-beginners/getting-started">
                <Button>
                  Next: Getting Started with Gemini AI →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

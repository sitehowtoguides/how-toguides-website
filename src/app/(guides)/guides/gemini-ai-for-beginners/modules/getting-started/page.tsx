import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';

export const metadata: Metadata = {
  title: 'Getting Started with Gemini AI | How-ToGuides.com',
  description: 'Learn how to set up and access Gemini AI on different devices, create a Google account, and understand the differences between free and paid versions.',
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

export default function GettingStarted() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="getting-started" 
              guideSlug="gemini-ai-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#google-account" className="text-primary hover:underline">Creating a Google Account</a></li>
                <li><a href="#accessing-gemini" className="text-primary hover:underline">Accessing Gemini AI</a></li>
                <li><a href="#free-vs-paid" className="text-primary hover:underline">Free vs. Paid Versions</a></li>
                <li><a href="#system-requirements" className="text-primary hover:underline">System Requirements</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Getting Started with Gemini AI</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 12 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 2 of 8</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/gemini-ai-getting-started.jpg" 
                alt="Multiple devices showing Gemini AI interface on web, mobile, and tablet" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Now that you understand what Gemini AI is and its capabilities, it's time to get set up and start using it. This module will guide you through creating a Google account (if you don't already have one), accessing Gemini AI on different platforms, understanding the differences between free and paid versions, and ensuring your system meets the requirements for optimal use.
            </p>
            
            <h2 id="google-account">Creating a Google Account (if you don't have one)</h2>
            <p>
              Before you can start using Gemini AI, you'll need a Google account. This serves as your gateway to not only Gemini but the entire ecosystem of Google services that integrate with it.
            </p>
            
            <h3>How to Create a Google Account</h3>
            <p>
              If you already have a Google account (Gmail, YouTube, Google Drive, etc.), you can skip this section and proceed to accessing Gemini AI. If not, follow these steps to create a new Google account:
            </p>
            
            <ol>
              <li>
                <strong>Visit the Google Account creation page</strong>: Go to <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer">accounts.google.com/signup</a> in your web browser.
              </li>
              <li>
                <strong>Enter your personal information</strong>: You'll need to provide:
                <ul>
                  <li>First and last name</li>
                  <li>Username (which will become your Gmail address)</li>
                  <li>Password (make sure it's strong and secure)</li>
                </ul>
              </li>
              <li>
                <strong>Provide verification and recovery options</strong>: Google will ask for:
                <ul>
                  <li>A phone number for verification and account recovery</li>
                  <li>An existing email address (optional but recommended for account recovery)</li>
                </ul>
              </li>
              <li>
                <strong>Agree to Google's terms and privacy policy</strong>: Review the terms of service and privacy policy, then check the agreement box.
              </li>
              <li>
                <strong>Complete the verification process</strong>: Google will send a verification code to the phone number you provided. Enter this code to verify your account.
              </li>
              <li>
                <strong>Set up account preferences</strong>: You can customize various settings for your Google account, including privacy options and personalization preferences.
              </li>
            </ol>
            
            <p>
              Once you've completed these steps, your Google account will be active and ready to use with Gemini AI and other Google services.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Account Security Recommendations</p>
              <p className="text-blue-600">
                Since your Gemini AI interactions will be linked to your Google account, it's important to ensure your account is secure:
              </p>
              <ul className="text-blue-600 mt-2">
                <li>Enable two-factor authentication (2FA) for an extra layer of security</li>
                <li>Use a strong, unique password not used for other services</li>
                <li>Regularly review account activity for unauthorized access attempts</li>
                <li>Keep recovery options (phone number, email) updated</li>
              </ul>
            </div>
            
            <h2 id="accessing-gemini">Accessing Gemini AI</h2>
            <p>
              Now that you have a Google account, you can access Gemini AI through multiple platforms. Each offers a slightly different experience, so you may prefer one over the others depending on your needs and circumstances.
            </p>
            
            <h3>Through the Gemini Website</h3>
            <p>
              The primary way to access Gemini AI is through its dedicated website:
            </p>
            
            <ol>
              <li><strong>Visit <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">gemini.google.com</a></strong> in your web browser.</li>
              <li><strong>Sign in with your Google account</strong> if prompted.</li>
              <li><strong>Accept the terms of service</strong> if this is your first time using Gemini.</li>
              <li><strong>Begin interacting</strong> with Gemini through the chat interface.</li>
            </ol>
            
            <p>
              The web interface offers the most complete Gemini experience, with access to all features including image uploads, extensions, and the full range of model capabilities.
            </p>
            
            <h3>Through Google AI Studio</h3>
            <p>
              For developers and those interested in more technical applications:
            </p>
            
            <ol>
              <li><strong>Visit <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer">ai.google.dev</a></strong> in your web browser.</li>
              <li><strong>Sign in with your Google account</strong>.</li>
              <li><strong>Navigate to the Gemini section</strong> of Google AI Studio.</li>
              <li><strong>Choose between chat mode or prompt design mode</strong> depending on your needs.</li>
            </ol>
            
            <p>
              Google AI Studio provides additional tools for prompt engineering, API access, and more technical applications of Gemini AI.
            </p>
            
            <h3>Through the Gemini Mobile App</h3>
            <p>
              For on-the-go access, the Gemini mobile app offers a convenient way to use the AI assistant:
            </p>
            
            <ol>
              <li>
                <strong>Download the Gemini app</strong> from the:
                <ul>
                  <li><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard" target="_blank" rel="noopener noreferrer">Google Play Store</a> (Android)</li>
                  <li><a href="https://apps.apple.com/us/app/google-bard/id6451152918" target="_blank" rel="noopener noreferrer">Apple App Store</a> (iOS)</li>
                </ul>
              </li>
              <li><strong>Install and open the app</strong> on your mobile device.</li>
              <li><strong>Sign in with your Google account</strong>.</li>
              <li><strong>Grant necessary permissions</strong> for features like camera access (for image analysis) and microphone access (for voice interactions).</li>
              <li><strong>Begin interacting</strong> with Gemini through the mobile interface.</li>
            </ol>
            
            <p>
              The mobile app includes special features optimized for smartphones, such as camera integration for real-time image analysis and voice interaction capabilities.
            </p>
            
            <ExpandableSection 
              title="Additional Access Methods" 
              content={
                <div>
                  <h4>Through Google Chrome</h4>
                  <p>You can also access Gemini directly from the Chrome browser:</p>
                  <ol>
                    <li><strong>Open Google Chrome</strong> on your computer.</li>
                    <li><strong>Type "@gemini" followed by your query</strong> in the address bar.</li>
                    <li><strong>Press Enter</strong> to see Gemini's response directly in a dropdown from the address bar.</li>
                  </ol>
                  <p>This quick-access method is perfect for simple queries when you don't need the full chat interface.</p>
                  
                  <h4>Through Google Assistant (on supported devices)</h4>
                  <p>On some Android devices, Gemini can be accessed through Google Assistant:</p>
                  <ol>
                    <li><strong>Activate Google Assistant</strong> on your device (by saying "Hey Google" or using the gesture/button).</li>
                    <li><strong>Say "Talk to Gemini"</strong> or tap the Gemini icon if it appears.</li>
                    <li><strong>Begin your conversation</strong> with Gemini through the Assistant interface.</li>
                  </ol>
                  <p>This integration varies by device and region, so it may not be available on all Android devices.</p>
                  
                  <h4>Through Gmail (Extensions)</h4>
                  <p>Gemini can be accessed directly within Gmail to help with email composition:</p>
                  <ol>
                    <li><strong>Open Gmail</strong> in your web browser.</li>
                    <li><strong>Click "Compose"</strong> to start a new email.</li>
                    <li><strong>Look for the Gemini icon</strong> in the composition toolbar.</li>
                    <li><strong>Click the icon</strong> to access Gemini's help with drafting or refining your email.</li>
                  </ol>
                  <p>This integration is particularly useful for professional email writing and quick responses.</p>
                </div>
              }
            />
            
            <h2 id="free-vs-paid">Free vs. Paid Versions (Gemini Advanced)</h2>
            <p>
              Gemini is available in both free and paid tiers, with the paid version offering enhanced capabilities and features.
            </p>
            
            <h3>Free Version Features</h3>
            <p>
              The free version of Gemini provides access to:
            </p>
            
            <ul>
              <li><strong>Gemini Pro model</strong>: Google's versatile AI model suitable for a wide range of everyday tasks.</li>
              <li><strong>Basic multimodal capabilities</strong>: Ability to understand and generate text, analyze images, and process various types of information.</li>
              <li><strong>Web search integration</strong>: Access to current information from the internet.</li>
              <li><strong>Basic extensions</strong>: Integration with some Google services and tools.</li>
              <li><strong>Standard usage limits</strong>: Reasonable but limited number of queries per day.</li>
              <li><strong>Mobile app access</strong>: Full functionality on the Gemini mobile app.</li>
            </ul>
            
            <p>
              For many users, the free version offers sufficient capabilities for everyday AI assistance needs.
            </p>
            
            <h3>Gemini Advanced (Paid Version)</h3>
            <p>
              Gemini Advanced is available as part of the Google One AI Premium subscription for $19.99/month (pricing may vary by region). It offers:
            </p>
            
            <ul>
              <li><strong>Access to Gemini Ultra model</strong>: Google's most powerful AI model with enhanced reasoning capabilities and performance on complex tasks.</li>
              <li><strong>Higher usage limits</strong>: More queries per day and the ability to handle longer, more complex conversations.</li>
              <li><strong>Priority access to new features</strong>: Early access to the latest Gemini capabilities as they're released.</li>
              <li><strong>Advanced code capabilities</strong>: Superior code generation, explanation, and debugging features.</li>
              <li><strong>Enhanced creative abilities</strong>: More sophisticated writing, brainstorming, and creative assistance.</li>
              <li><strong>Deeper reasoning</strong>: Better performance on complex analytical tasks and multi-step problems.</li>
              <li><strong>Extended context window</strong>: Ability to reference and remember more information from your conversation history.</li>
              <li><strong>Additional Google One benefits</strong>: 2TB of cloud storage and other Google One premium features.</li>
            </ul>
            
            <h3>Comparing Free and Paid Features</h3>
            <table className="w-full border-collapse border border-slate-200 my-4">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">Feature</th>
                  <th className="border border-slate-200 p-2 text-left">Free Gemini</th>
                  <th className="border border-slate-200 p-2 text-left">Gemini Advanced</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-2">AI Model</td>
                  <td className="border border-slate-200 p-2">Gemini Pro</td>
                  <td className="border border-slate-200 p-2">Gemini Ultra</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Usage Limits</td>
                  <td className="border border-slate-200 p-2">Standard</td>
                  <td className="border border-slate-200 p-2">Higher</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Context Window</td>
                  <td className="border border-slate-200 p-2">Limited</td>
                  <td className="border border-slate-200 p-2">Extended (1M+ tokens)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Code Capabilities</td>
                  <td className="border border-slate-200 p-2">Basic</td>
                  <td className="border border-slate-200 p-2">Advanced</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Creative Assistance</td>
                  <td className="border border-slate-200 p-2">Good</td>
                  <td className="border border-slate-200 p-2">Enhanced</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Complex Reasoning</td>
                  <td className="border border-slate-200 p-2">Basic</td>
                  <td className="border border-slate-200 p-2">Advanced</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">New Features</td>
                  <td className="border border-slate-200 p-2">Regular updates</td>
                  <td className="border border-slate-200 p-2">Priority access</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Cloud Storage</td>
                  <td className="border border-slate-200 p-2">None included</td>
                  <td className="border border-slate-200 p-2">2TB Google One storage</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2">Price</td>
                  <td className="border border-slate-200 p-2">Free</td>
                  <td className="border border-slate-200 p-2">$19.99/month</td>
                </tr>
              </tbody>
            </table>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">When to Upgrade to Gemini Advanced</p>
              <p className="text-yellow-600">
                Consider upgrading to Gemini Advanced if:
              </p>
              <ul className="text-yellow-600 mt-2">
                <li>You use Gemini extensively for work, research, or creative projects</li>
                <li>You frequently work with code and need advanced programming assistance</li>
                <li>You require deeper reasoning for complex analytical tasks</li>
                <li>You need longer context windows for detailed conversations or document analysis</li>
                <li>You value early access to new AI features and capabilities</li>
                <li>You can benefit from the additional Google One storage and premium features</li>
              </ul>
              <p className="text-yellow-600 mt-2">
                Many users find that the free version meets their needs, while professionals, developers, researchers, and power users often benefit from the enhanced capabilities of Gemini Advanced.
              </p>
            </div>
            
            <h2 id="system-requirements">System Requirements for Optimal Use</h2>
            <p>
              To ensure the best experience with Gemini AI, your devices should meet certain system requirements. These requirements vary depending on how you're accessing Gemini.
            </p>
            
            <h3>Web Browser Requirements</h3>
            <p>
              For accessing Gemini through a web browser (gemini.google.com or AI Studio):
            </p>
            
            <ul>
              <li><strong>Supported browsers</strong>: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari (latest versions recommended)</li>
              <li><strong>JavaScript</strong>: Must be enabled</li>
              <li><strong>Cookies</strong>: Must be enabled for Google domains</li>
              <li><strong>Internet connection</strong>: Stable broadband connection (minimum 1 Mbps, 5+ Mbps recommended)</li>
              <li><strong>Screen resolution</strong>: Minimum 1280 x 720 pixels</li>
            </ul>
            
            <h3>Mobile App Requirements</h3>
            <p>
              For the Gemini mobile app:
            </p>
            
            <ul>
              <li><strong>Android devices</strong>: Android 9.0 (Pie) or newer, 2GB RAM minimum (4GB+ recommended)</li>
              <li><strong>iOS devices</strong>: iOS 15.0 or newer, iPhone 8 or newer, iPad 6th generation or newer</li>
              <li><strong>Storage space</strong>: At least 100MB free space for the app</li>
              <li><strong>Internet connection</strong>: Mobile data or Wi-Fi connection (Wi-Fi recommended for image uploads)</li>
              <li><strong>Optional permissions</strong>: Camera access (for image analysis), microphone access (for voice input)</li>
            </ul>
            
            <h3>For Advanced Features</h3>
            <p>
              When using more demanding features, especially with Gemini Advanced:
            </p>
            
            <ul>
              <li><strong>Processing complex code</strong>: 8GB+ RAM recommended</li>
              <li><strong>Working with large images</strong>: Modern GPU recommended for smoother experience</li>
              <li><strong>Extended conversations</strong>: Faster processor and more RAM improve response times</li>
              <li><strong>Multiple extensions</strong>: 4GB+ RAM recommended when using multiple extensions simultaneously</li>
            </ul>
            
            <ExpandableSection 
              title="Optimizing Performance" 
              content={
                <div>
                  <p>To get the best performance from Gemini AI, consider these optimization tips:</p>
                  <ul>
                    <li><strong>Clear browser cache</strong> periodically to free up resources</li>
                    <li><strong>Close unnecessary tabs and applications</strong> to free up memory</li>
                    <li><strong>Use wired internet connections</strong> when possible for more stable connectivity</li>
                    <li><strong>Keep your browser and operating system updated</strong> to the latest versions</li>
                    <li><strong>For mobile devices, ensure sufficient battery</strong> or use while connected to power for extended sessions</li>
                    <li><strong>Consider using the dedicated app</strong> instead of the web interface on mobile devices for better performance</li>
                    <li><strong>Restart your browser or device</strong> if you notice performance degradation during long sessions</li>
                  </ul>
                  <p>These optimizations can significantly improve your experience, especially when using Gemini for extended periods or for resource-intensive tasks.</p>
                </div>
              }
            />
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which of the following is NOT a way to access Gemini AI?"
              options={[
                "Through the dedicated Gemini website",
                "Through the Gemini mobile app",
                "Through Microsoft Word integration",
                "Through Google Chrome address bar"
              ]}
              correctAnswer="Through Microsoft Word integration"
              explanation="While Gemini AI can be accessed through the dedicated website (gemini.google.com), the mobile app, and the Google Chrome address bar (using @gemini), it does not currently offer direct integration with Microsoft Word. Gemini integrates with Google's ecosystem of products like Gmail and Google Docs, but not with Microsoft Office applications."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/gemini-ai-for-beginners/introduction">
                <Button variant="outline">
                  ← Previous: Introduction to Gemini AI
                </Button>
              </Link>
              <Link href="/guides/gemini-ai-for-beginners/capabilities">
                <Button>
                  Next: Understanding Gemini AI's Capabilities →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

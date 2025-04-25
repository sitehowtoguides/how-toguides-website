import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';

export const metadata: Metadata = {
  title: 'Setting Up Your DALL-E Account | How-ToGuides.com',
  description: 'Learn how to create your DALL-E account, understand the credit system, and get ready to generate AI images.',
};

const modules = [
  {
    id: 'introduction',
    title: 'Introduction to DALL-E',
    description: 'Learn what DALL-E is and how it can transform your creative process.',
    isGated: false,
    slug: 'introduction',
  },
  {
    id: 'setting-up',
    title: 'Setting Up Your DALL-E Account',
    description: 'Create your account and understand the credit system.',
    isGated: false,
    slug: 'setting-up',
  },
  {
    id: 'interface',
    title: 'Navigating the DALL-E Interface',
    description: 'Learn how to use the DALL-E dashboard and tools.',
    isGated: false,
    slug: 'interface',
  },
  {
    id: 'first-image',
    title: 'Creating Your First Image',
    description: 'Generate your first AI image with DALL-E step by step.',
    isGated: true,
    slug: 'first-image',
  },
  {
    id: 'effective-prompts',
    title: 'Crafting Effective Prompts',
    description: 'Master the art of writing prompts that get the results you want.',
    isGated: true,
    slug: 'effective-prompts',
  },
  {
    id: 'capabilities',
    title: 'Understanding DALL-E\'s Capabilities',
    description: 'Explore what DALL-E can and cannot do.',
    isGated: true,
    slug: 'capabilities',
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features',
    description: 'Learn about editing, variations, and other powerful tools.',
    isGated: true,
    slug: 'advanced-features',
  },
  {
    id: 'subscription-plans',
    title: 'DALL-E Subscription Plans',
    description: 'Compare different pricing options and find the best fit for you.',
    isGated: true,
    slug: 'subscription-plans',
  },
];

export default function SettingUp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="setting-up" 
              guideSlug="dall-e-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#creating-account" className="text-primary hover:underline">Creating an OpenAI Account</a></li>
                <li><a href="#accessing-dalle" className="text-primary hover:underline">Accessing DALL-E</a></li>
                <li><a href="#credits-subscriptions" className="text-primary hover:underline">Understanding Credits and Subscriptions</a></li>
                <li><a href="#verification" className="text-primary hover:underline">Verifying Your Phone Number</a></li>
                <li><a href="#knowledge-check" className="text-primary hover:underline">Knowledge Check</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <Link href="/guides/dall-e-for-beginners" className="text-primary hover:underline mb-2 inline-block">
              ← Back to Guide Overview
            </Link>
            <h1 className="text-3xl font-bold mb-4">Setting Up Your DALL-E Account</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 8 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 2 of 8</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/dalle-account-setup.jpg" 
                alt="Step-by-step screenshots of the DALL-E account creation process with annotations" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Getting started with DALL-E requires an OpenAI account and either credits or a subscription. In this module, we'll walk through the entire setup process step by step, ensuring you understand all the options available to you.
            </p>
            
            <p>
              By the end of this module, you'll have a fully functional DALL-E account ready for creating images, and you'll understand how the credit system works so you can make informed decisions about your usage.
            </p>
            
            <h2 id="creating-account">Step 1: Creating an OpenAI Account</h2>
            <p>
              If you don't already have an OpenAI account, you'll need to create one first. Here's how to do it:
            </p>
            
            <ol>
              <li>
                <strong>Visit the OpenAI website:</strong> Open your web browser and go to <a href="https://openai.com" target="_blank" rel="noopener noreferrer">openai.com</a>
              </li>
              <li>
                <strong>Click on the "Sign Up" button:</strong> You'll find this in the top-right corner of the homepage
              </li>
              <li>
                <strong>Choose your sign-up method:</strong> You can create an account using:
                <ul>
                  <li>Your email address and a password</li>
                  <li>Your Google account</li>
                  <li>Your Microsoft account</li>
                  <li>Your Apple account</li>
                </ul>
              </li>
              <li>
                <strong>Enter your information:</strong> If you choose email signup, you'll need to provide:
                <ul>
                  <li>Your email address</li>
                  <li>A secure password</li>
                  <li>Your name (optional)</li>
                </ul>
              </li>
              <li>
                <strong>Verify your email:</strong> Check your inbox for a verification email from OpenAI and click the link to confirm your account
              </li>
              <li>
                <strong>Complete any additional verification:</strong> Depending on OpenAI's current security requirements, you might need to complete additional verification steps
              </li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                Use a strong, unique password for your OpenAI account to protect your conversation history and personal information. Consider using a password manager to generate and store a secure password.
              </p>
            </div>
            
            <h2 id="accessing-dalle">Step 2: Accessing DALL-E</h2>
            <p>
              Once you have an OpenAI account, you can access DALL-E in two main ways:
            </p>
            
            <h3>Option 1: Through the OpenAI Website</h3>
            <ol>
              <li>Log in to your OpenAI account at <a href="https://openai.com" target="_blank" rel="noopener noreferrer">openai.com</a></li>
              <li>Navigate to the DALL-E section by clicking on "Products" in the top menu and selecting "DALL-E"</li>
              <li>You'll be directed to the DALL-E interface where you can start generating images</li>
            </ol>
            
            <h3>Option 2: Through the DALL-E Direct Link</h3>
            <ol>
              <li>Go directly to <a href="https://labs.openai.com" target="_blank" rel="noopener noreferrer">labs.openai.com</a></li>
              <li>Log in with your OpenAI account credentials if prompted</li>
              <li>You'll be taken straight to the DALL-E interface</li>
            </ol>
            
            <h3>Option 3: Through ChatGPT (If You Have ChatGPT Plus)</h3>
            <ol>
              <li>Log in to ChatGPT at <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">chat.openai.com</a></li>
              <li>Start a new conversation</li>
              <li>Use the image generation feature by clicking the "+" button next to the prompt field and selecting "Generate image"</li>
              <li>Alternatively, you can type "/image" followed by your prompt</li>
            </ol>
            
            <p>
              For this guide, we'll focus primarily on using DALL-E through the dedicated interface (Options 1 and 2), as this provides access to all features and the most control over your image generation.
            </p>
            
            <h2 id="credits-subscriptions">Step 3: Understanding Credits and Subscriptions</h2>
            <p>
              DALL-E operates on a credit system or subscription model. Here's how it works:
            </p>
            
            <h3>Free Tier</h3>
            <p>
              New users typically receive a limited number of free credits:
            </p>
            <ul>
              <li>These credits expire after a certain period (usually 30 days)</li>
              <li>The free tier has some limitations on resolution and features</li>
              <li>As of 2025, new accounts receive 15 free credits</li>
              <li>Each standard image generation uses 1 credit</li>
            </ul>
            
            <h3>Credit Purchases</h3>
            <p>
              You can buy additional credits as needed:
            </p>
            <ol>
              <li>Visit the "Buy Credits" section in your account</li>
              <li>Select a credit package (prices start at $15 for 115 credits as of 2025)</li>
              <li>Complete the payment process using a credit card or PayPal</li>
              <li>Purchased credits don't expire</li>
            </ol>
            
            <h3>ChatGPT Plus Subscription</h3>
            <p>
              If you subscribe to ChatGPT Plus ($20/month as of 2025):
            </p>
            <ul>
              <li>You get access to DALL-E through the ChatGPT interface</li>
              <li>This includes a monthly allocation of DALL-E generations (currently 100 per day)</li>
              <li>Additional generations beyond the allocation require credit purchases</li>
              <li>The subscription also includes access to GPT-4 and other premium features</li>
            </ul>
            
            <h3>API Access</h3>
            <p>
              For developers or high-volume users:
            </p>
            <ul>
              <li>Requires setting up API access through the OpenAI platform</li>
              <li>Uses a pay-as-you-go pricing model based on resolution and volume</li>
              <li>Offers programmatic access for integration with applications</li>
              <li>Provides more flexibility for commercial applications</li>
            </ul>
            
            <ExpandableSection 
              title="Credit Usage by Feature" 
              content={
                <div>
                  <p>Different DALL-E features use different amounts of credits:</p>
                  
                  <h4>Standard Image Generation</h4>
                  <ul>
                    <li>1024×1024 Standard Quality: 1 credit per image</li>
                    <li>1024×1024 HD Quality: 2 credits per image</li>
                    <li>1024×1792 or 1792×1024 Standard Quality: 2 credits per image</li>
                    <li>1024×1792 or 1792×1024 HD Quality: 3 credits per image</li>
                  </ul>
                  
                  <h4>Editing Features</h4>
                  <ul>
                    <li>Inpainting (replacing parts of an image): 1 credit</li>
                    <li>Outpainting (extending an image): 1-2 credits depending on size</li>
                    <li>Variations (creating alternatives of an image): 1 credit per variation</li>
                  </ul>
                  
                  <h4>API Usage</h4>
                  <p>API pricing follows a different model based on tokens and resolution. For the most current API pricing, check the OpenAI website.</p>
                  
                  <p>Note: Credit costs may change over time as OpenAI updates their pricing structure.</p>
                </div>
              }
            />
            
            <h2 id="verification">Step 4: Verifying Your Phone Number</h2>
            <p>
              For security purposes, OpenAI requires phone verification:
            </p>
            
            <ol>
              <li>If not already verified during account creation, you'll be prompted to add a phone number</li>
              <li>Enter your phone number in the format requested</li>
              <li>You'll receive a verification code via SMS</li>
              <li>Enter the code to complete verification</li>
            </ol>
            
            <p>
              This one-time verification helps prevent abuse and ensures account security. It's a standard requirement for all OpenAI services, including DALL-E.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Important Note</p>
              <p className="text-yellow-600">
                If you're having trouble with phone verification, ensure you're using a valid mobile number that can receive SMS messages. VoIP numbers and some prepaid services may not work for verification. If you continue to have issues, contact OpenAI support for assistance.
              </p>
            </div>
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="How many free credits do new DALL-E users typically receive in 2025?"
              options={[
                "5 credits",
                "10 credits",
                "15 credits",
                "25 credits"
              ]}
              correctAnswer="15 credits"
              explanation="As of 2025, new OpenAI accounts receive 15 free DALL-E credits that expire after 30 days. Each standard image generation (1024×1024 standard quality) uses 1 credit."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/dall-e-for-beginners/introduction">
                <Button variant="outline">
                  ← Previous: Introduction to DALL-E
                </Button>
              </Link>
              <Link href="/guides/dall-e-for-beginners/interface">
                <Button>
                  Next: Navigating the DALL-E Interface →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

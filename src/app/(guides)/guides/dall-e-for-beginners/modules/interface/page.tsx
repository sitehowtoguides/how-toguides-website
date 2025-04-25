import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';

export const metadata: Metadata = {
  title: 'Navigating the DALL-E Interface | How-ToGuides.com',
  description: 'Learn how to navigate the DALL-E interface, understand all the features, and set up your workspace for optimal image generation.',
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

export default function Interface() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <ModuleNavigation 
              modules={modules} 
              currentModuleId="interface" 
              guideSlug="dall-e-for-beginners"
              isSubscribed={false}
            />
            
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="font-bold mb-2">In This Module</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#main-dashboard" className="text-primary hover:underline">The Main Dashboard</a></li>
                <li><a href="#projects" className="text-primary hover:underline">Creating and Managing Projects</a></li>
                <li><a href="#generation-options" className="text-primary hover:underline">Understanding Generation Options</a></li>
                <li><a href="#image-history" className="text-primary hover:underline">Navigating Your Image History</a></li>
                <li><a href="#collections" className="text-primary hover:underline">Using Collections</a></li>
                <li><a href="#account-settings" className="text-primary hover:underline">Adjusting Account Settings</a></li>
                <li><a href="#mobile-interface" className="text-primary hover:underline">Mobile Interface</a></li>
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
            <h1 className="text-3xl font-bold mb-4">Navigating the DALL-E Interface</h1>
            <div className="flex items-center text-sm text-slate-500 mb-6">
              <span className="mr-4">Reading time: 12 minutes</span>
              <span className="mr-4">|</span>
              <span>Module 3 of 8</span>
              <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free Content</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/dalle-interface-annotated.jpg" 
                alt="Annotated screenshot of the DALL-E interface with key elements labeled" 
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Understanding how to navigate the DALL-E interface is essential for using the tool effectively. In this module, we'll explore every aspect of the DALL-E dashboard, helping you become comfortable with all the features and options available to you.
            </p>
            
            <p>
              By the end of this module, you'll be familiar with the entire DALL-E workspace and ready to start creating your first images with confidence.
            </p>
            
            <h2 id="main-dashboard">The Main Dashboard</h2>
            <p>
              When you first access DALL-E, you'll see the main dashboard with several key components:
            </p>
            
            <ul>
              <li>
                <strong>Prompt Field:</strong> The large text input area at the top where you enter your descriptions. This is where you'll write the text prompts that tell DALL-E what to create.
              </li>
              <li>
                <strong>Generate Button:</strong> The button to start the image generation process, typically located next to or below the prompt field.
              </li>
              <li>
                <strong>Gallery Area:</strong> The main space where generated images appear. This grid displays your creations and allows for various interactions with each image.
              </li>
              <li>
                <strong>History Panel:</strong> Access to your previously generated images, organized chronologically.
              </li>
              <li>
                <strong>Settings Menu:</strong> Options for adjusting preferences and account settings, usually accessible via an icon in the top-right corner.
              </li>
              <li>
                <strong>Help Resources:</strong> Links to guides, tutorials, and support, typically found in the footer or menu.
              </li>
            </ul>
            
            <p>
              The interface is designed to be intuitive, with a clear workflow from entering your prompt at the top to viewing your generated images below.
            </p>
            
            <h2 id="projects">Creating and Managing Projects</h2>
            <p>
              DALL-E organizes your work into projects, which helps keep related images together:
            </p>
            
            <h3>Creating a New Project</h3>
            <ol>
              <li>Click on "New Project" in the top-left corner of the dashboard</li>
              <li>Give your project a name (optional but recommended for organization)</li>
              <li>Your new project becomes the active workspace</li>
            </ol>
            
            <h3>Switching Between Projects</h3>
            <ol>
              <li>Click on the project selector dropdown in the top-left corner</li>
              <li>Select the project you want to work with from the list</li>
              <li>The interface updates to show only images from that project</li>
            </ol>
            
            <h3>Renaming or Deleting Projects</h3>
            <ol>
              <li>Click on the project selector dropdown</li>
              <li>Click the three dots (⋮) next to the project name</li>
              <li>Select "Rename" or "Delete" from the menu</li>
              <li>Confirm your action when prompted</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                Create separate projects for different purposes or themes. For example, you might have projects for "Product Mockups," "Character Designs," and "Social Media Content." This makes it much easier to find specific images later.
              </p>
            </div>
            
            <h2 id="generation-options">Understanding the Generation Options</h2>
            <p>
              Before generating an image, you can set several options that affect both the results and credit usage:
            </p>
            
            <h3>Image Size</h3>
            <p>
              DALL-E offers three size options as of 2025:
            </p>
            <ul>
              <li><strong>1024×1024:</strong> Square format, ideal for general purposes and social media</li>
              <li><strong>1024×1792:</strong> Portrait orientation (vertical), good for posters, phone wallpapers, or Pinterest</li>
              <li><strong>1792×1024:</strong> Landscape orientation (horizontal), suitable for desktop wallpapers, banners, or wide compositions</li>
            </ul>
            
            <h3>Quality Settings</h3>
            <p>
              You can choose between two quality levels:
            </p>
            <ul>
              <li><strong>Standard:</strong> Uses fewer credits but still produces high-quality images</li>
              <li><strong>HD:</strong> Uses more credits but provides enhanced detail and clarity</li>
            </ul>
            
            <h3>Style Options</h3>
            <p>
              DALL-E offers style presets to guide the overall aesthetic:
            </p>
            <ul>
              <li><strong>Natural:</strong> Balanced approach with no strong stylistic bias</li>
              <li><strong>Vivid:</strong> More colorful and dramatic interpretations</li>
              <li><strong>Photographic:</strong> Emphasizes realism and photographic qualities</li>
              <li><strong>Digital Art:</strong> Leans toward digital illustration styles</li>
            </ul>
            
            <h3>Number of Images</h3>
            <p>
              You can generate multiple variations at once:
            </p>
            <ul>
              <li>Choose between 1-4 images per generation</li>
              <li>Each image counts separately toward your credit usage</li>
              <li>All images will use the same prompt but with different interpretations</li>
            </ul>
            
            <ExpandableSection 
              title="Credit Usage by Option Combination" 
              content={
                <div>
                  <p>Here's how different option combinations affect credit usage:</p>
                  
                  <table className="min-w-full border-collapse border border-slate-300">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-2">Size</th>
                        <th className="border border-slate-300 p-2">Quality</th>
                        <th className="border border-slate-300 p-2">Credits Per Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-2">1024×1024 (Square)</td>
                        <td className="border border-slate-300 p-2">Standard</td>
                        <td className="border border-slate-300 p-2">1</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2">1024×1024 (Square)</td>
                        <td className="border border-slate-300 p-2">HD</td>
                        <td className="border border-slate-300 p-2">2</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2">1024×1792 (Portrait)</td>
                        <td className="border border-slate-300 p-2">Standard</td>
                        <td className="border border-slate-300 p-2">2</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2">1024×1792 (Portrait)</td>
                        <td className="border border-slate-300 p-2">HD</td>
                        <td className="border border-slate-300 p-2">3</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2">1792×1024 (Landscape)</td>
                        <td className="border border-slate-300 p-2">Standard</td>
                        <td className="border border-slate-300 p-2">2</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2">1792×1024 (Landscape)</td>
                        <td className="border border-slate-300 p-2">HD</td>
                        <td className="border border-slate-300 p-2">3</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <p className="mt-4">Remember that if you generate multiple images at once, the credit cost is multiplied by the number of images. For example, generating 4 HD landscape images would use 12 credits (3 credits × 4 images).</p>
                </div>
              }
            />
            
            <h2 id="image-history">Navigating Your Image History</h2>
            <p>
              DALL-E automatically saves all your generated images, making it easy to revisit your creations:
            </p>
            
            <h3>Accessing Your History</h3>
            <ol>
              <li>Click on "History" in the left sidebar</li>
              <li>Browse through your past generations organized by date</li>
              <li>The most recent images appear at the top</li>
            </ol>
            
            <h3>Filtering Your History</h3>
            <p>
              You can narrow down your history view:
            </p>
            <ul>
              <li><strong>By Project:</strong> Use the dropdown menu to filter by specific project</li>
              <li><strong>By Date Range:</strong> Select a time period to view images from specific dates</li>
              <li><strong>By Search:</strong> Enter keywords from your prompts to find specific images</li>
            </ul>
            
            <h3>Image Details</h3>
            <p>
              When viewing your history, you can:
            </p>
            <ul>
              <li>Click on any image to see it in full size</li>
              <li>View the original prompt used to generate the image</li>
              <li>See the generation date and settings used</li>
              <li>Access options to download, share, or create variations</li>
            </ul>
            
            <h2 id="collections">Using Collections</h2>
            <p>
              Collections help organize your favorite images beyond the project structure:
            </p>
            
            <h3>Creating Collections</h3>
            <ol>
              <li>Hover over any image and click the bookmark icon</li>
              <li>Select "Create new collection" from the dropdown</li>
              <li>Enter a name for your collection</li>
              <li>Click "Create" to save the collection</li>
            </ol>
            
            <h3>Adding Images to Collections</h3>
            <ol>
              <li>Hover over any image and click the bookmark icon</li>
              <li>Select an existing collection from the dropdown</li>
              <li>The image is now saved to that collection</li>
            </ol>
            
            <h3>Viewing and Managing Collections</h3>
            <ol>
              <li>Click on "Collections" in the left sidebar</li>
              <li>Select a collection to view its contents</li>
              <li>Use the three dots (⋮) menu to rename or delete collections</li>
              <li>Remove images from collections by clicking the bookmark icon again</li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-700 font-medium">Note</p>
              <p className="text-yellow-600">
                Collections are separate from projects. Projects organize your work during creation, while collections allow you to curate images across different projects based on themes, quality, or intended use.
              </p>
            </div>
            
            <h2 id="account-settings">Adjusting Account Settings</h2>
            <p>
              To manage your account and preferences:
            </p>
            
            <h3>Accessing Settings</h3>
            <ol>
              <li>Click on your profile icon in the top-right corner</li>
              <li>Select "Settings" from the dropdown menu</li>
            </ol>
            
            <h3>Available Settings</h3>
            <p>
              In the settings menu, you can:
            </p>
            <ul>
              <li><strong>View Credit Balance:</strong> Check your remaining credits and purchase history</li>
              <li><strong>Manage Subscription:</strong> Upgrade, downgrade, or cancel subscription plans</li>
              <li><strong>Set Default Preferences:</strong> Choose default generation settings</li>
              <li><strong>Update Profile Information:</strong> Change your name, email, or password</li>
              <li><strong>Configure Privacy and Sharing:</strong> Adjust who can see your creations</li>
              <li><strong>Enable/Disable Notifications:</strong> Manage email and in-app notifications</li>
              <li><strong>Access API Settings:</strong> Set up and manage API access if needed</li>
            </ul>
            
            <h2 id="mobile-interface">Mobile Interface</h2>
            <p>
              DALL-E is fully functional on mobile devices, with an interface adapted for smaller screens:
            </p>
            
            <h3>Key Differences on Mobile</h3>
            <ul>
              <li>The prompt field appears at the top with a simplified menu</li>
              <li>Generated images display in a single column rather than a grid</li>
              <li>Access the menu by tapping the hamburger icon (≡) in the top-left</li>
              <li>Settings are accessed through the profile icon in the top-right</li>
              <li>Swipe gestures allow for quick navigation between images</li>
            </ul>
            
            <h3>Mobile-Specific Tips</h3>
            <ul>
              <li>Use landscape orientation when reviewing multiple images or working with the editing features</li>
              <li>Take advantage of the "Dictate" feature on your keyboard for entering long prompts</li>
              <li>Save images directly to your device's photo library for easy sharing</li>
              <li>Consider using the mobile app if available for your device (check app stores)</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-700 font-medium">Pro Tip</p>
              <p className="text-blue-600">
                If you're frequently switching between desktop and mobile, use collections to mark your favorite images for easy access on any device. This saves you from scrolling through your entire history when on a smaller screen.
              </p>
            </div>
            
            <h2 id="knowledge-check">Knowledge Check</h2>
            <KnowledgeCheck 
              question="Which of the following image sizes uses the most credits when generated in HD quality?"
              options={[
                "1024×1024 (Square)",
                "1024×1792 (Portrait)",
                "1792×1024 (Landscape)",
                "All use the same number of credits"
              ]}
              correctAnswer="1024×1792 (Portrait)"
              explanation="Both portrait (1024×1792) and landscape (1792×1024) formats use 3 credits per image when generated in HD quality, while square format (1024×1024) uses 2 credits in HD quality. The non-square formats require more processing power due to their larger overall pixel count."
            />
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/guides/dall-e-for-beginners/setting-up">
                <Button variant="outline">
                  ← Previous: Setting Up Your DALL-E Account
                </Button>
              </Link>
              <Link href="/guides/dall-e-for-beginners/first-image">
                <Button>
                  Next: Creating Your First Image →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

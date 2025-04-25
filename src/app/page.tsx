import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/lead-generation/LeadCaptureForm';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Master AI Tools with Step-by-Step Guides
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Comprehensive tutorials to help you learn ChatGPT, Midjourney, DALL-E, and Gemini AI. From beginner basics to advanced techniques.
          </p>
          <Button asChild size="lg" className="rounded-md">
            <Link href="/guides">
              Explore Guides
            </Link>
          </Button>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How to Use ChatGPT for Beginners</h3>
                <p className="text-slate-600 mb-4">Master ChatGPT from scratch with our step-by-step tutorial</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/guides/chatgpt-for-beginners">
                    Read Guide
                  </Link>
                </Button>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How to Use Midjourney: Step-by-Step</h3>
                <p className="text-slate-600 mb-4">Learn to create stunning AI-generated images with Midjourney</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/guides/midjourney-for-beginners">
                    Read Guide
                  </Link>
                </Button>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How to Write Effective AI Prompts</h3>
                <p className="text-slate-600 mb-4">Techniques for crafting prompts that get better results from AI tools</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/guides/write-effective-ai-prompts">
                    Read Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Latest Updates</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-slate-700">ChatGPT Guide updated with GPT-4o information (April 19, 2025)</li>
            <li className="text-slate-700">New Gemini AI Tutorial now available (April 10, 2025)</li>
            <li className="text-slate-700">Midjourney Guide updated with v6 features (March 28, 2025)</li>
          </ul>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Our AI Newsletter</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest AI tools and techniques
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 border border-slate-300 rounded-md mb-3"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">
                Subscribe
              </button>
              <p className="text-xs text-slate-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

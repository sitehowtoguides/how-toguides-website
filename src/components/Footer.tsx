import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/logo-compass.png" 
                alt="How-ToGuides.com Logo" 
                width={30} 
                height={30} 
                className="h-7 w-auto" 
              />
              <h3 className="text-lg font-bold">How-ToGuides.com</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Master AI tools with step-by-step guides and tutorials.
            </p>
          </div>

          {/* Column 2: Popular Guides */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/chatgpt-for-beginners" className="text-slate-600 hover:text-primary">
                  How to Use ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/guides/midjourney-for-beginners" className="text-slate-600 hover:text-primary">
                  How to Use Midjourney
                </Link>
              </li>
              <li>
                <Link href="/guides/write-effective-ai-prompts" className="text-slate-600 hover:text-primary">
                  How to Write Effective AI Prompts
                </Link>
              </li>
              <li>
                <Link href="/guides/gemini-ai-for-beginners" className="text-slate-600 hover:text-primary">
                  How to Use Gemini AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/ai-terminology-glossary" className="text-slate-600 hover:text-primary">
                  AI Terminology Glossary
                </Link>
              </li>
              <li>
                <Link href="/resources/prompt-engineering-cheat-sheet" className="text-slate-600 hover:text-primary">
                  Prompt Engineering Cheat Sheet
                </Link>
              </li>
              <li>
                <Link href="/resources/ai-model-comparison" className="text-slate-600 hover:text-primary">
                  AI Model Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-slate-600 mb-4">
              Stay updated with the latest AI tools and techniques.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} How-ToGuides.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

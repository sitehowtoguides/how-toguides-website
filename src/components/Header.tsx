'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import HeaderCTA from './HeaderCTA';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/logo-compass.png" 
              alt="How-ToGuides.com Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-slate-900">How-ToGuides.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/guides" className="text-slate-700 hover:text-primary font-medium">
              AI Guides
            </Link>
            <Link href="/prompt-engineering" className="text-slate-700 hover:text-primary font-medium">
              Prompt Engineering
            </Link>
            <Link href="/resources" className="text-slate-700 hover:text-primary font-medium">
              Resources
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-primary font-medium">
              About
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <HeaderCTA />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/guides"
                className="text-slate-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Guides
              </Link>
              <Link
                href="/prompt-engineering"
                className="text-slate-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Prompt Engineering
              </Link>
              <Link
                href="/resources"
                className="text-slate-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

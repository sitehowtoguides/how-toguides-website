'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function FreeKits() {
  const [email, setEmail] = useState('');
  const [selectedKit, setSelectedKit] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const kits = [
    {
      id: 'chatgpt',
      title: "ChatGPT Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Prompts Cheat Sheet",
        "Models Comparison Table",
        "AI Terminology Glossary"
      ],
      image: "/images/chatgpt-kit-preview.jpg"
    },
    {
      id: 'midjourney',
      title: "Midjourney Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Visual Prompt Templates",
        "Parameter Reference Sheet",
        "Style Examples Gallery"
      ],
      image: "/images/midjourney-kit-preview.jpg"
    },
    {
      id: 'gemini',
      title: "Gemini AI Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Multimodal Prompts Cheat Sheet",
        "Feature Comparison Table",
        "AI Terminology Glossary"
      ],
      image: "/images/gemini-kit-preview.jpg"
    },
    {
      id: 'dalle',
      title: "DALL-E Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Visual Prompt Templates",
        "Image Style Reference Sheet",
        "AI Art Terminology Glossary"
      ],
      image: "/images/dalle-kit-preview.jpg"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!selectedKit) {
      setError('Please select a kit');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          tags: [`${selectedKit}-beginners-kit`]
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSuccess(true);
      setEmail('');
      setSelectedKit(null);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Free AI Beginner's Kits</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Get instant access to our comprehensive beginner's kits for the most popular AI tools.
          Each kit includes PDF guides, cheat sheets, and reference materials to help you master AI tools quickly.
        </p>
      </div>

      {isSuccess ? (
        <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Success!</h2>
          <p className="text-green-700 mb-4">
            Your beginner's kit has been sent to your email. Please check your inbox (and spam folder) for the download links.
          </p>
          <Button onClick={() => setIsSuccess(false)} className="bg-green-600 hover:bg-green-700">
            Get Another Kit
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((kit) => (
            <div 
              key={kit.id} 
              className={`border rounded-lg overflow-hidden transition-all ${
                selectedKit === kit.id 
                  ? 'border-primary shadow-md transform scale-105' 
                  : 'border-slate-200 hover:border-primary hover:shadow-sm'
              }`}
              onClick={() => setSelectedKit(kit.id)}
            >
              <div className="relative h-48 bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="text-sm">Kit Preview Image</span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{kit.title}</h2>
                <ul className="space-y-1 mb-4">
                  {kit.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={selectedKit === kit.id ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedKit(kit.id)}
                >
                  {selectedKit === kit.id ? 'Selected' : 'Select This Kit'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isSuccess && (
        <div className="max-w-md mx-auto mt-12 bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Get Your Free Kit</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting || !selectedKit}
            >
              {isSubmitting ? 'Sending...' : 'Get Free Kit'}
            </Button>
            
            <p className="text-xs text-slate-500 mt-3">
              By signing up, you'll also receive our AI newsletter with the latest
              tips and updates. You can unsubscribe anytime.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

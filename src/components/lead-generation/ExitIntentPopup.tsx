"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ExitIntentPopupProps {
  guideType: 'chatgpt' | 'midjourney' | 'gemini' | 'dalle';
}

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ guideType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Guide-specific content
  const guideContent = {
    chatgpt: {
      title: "Get Your Free ChatGPT Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Prompts Cheat Sheet",
        "Models Comparison Table",
        "AI Terminology Glossary"
      ],
      buttonText: "Get Free Kit"
    },
    midjourney: {
      title: "Get Your Free Midjourney Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Visual Prompt Templates",
        "Parameter Reference Sheet",
        "Style Examples Gallery"
      ],
      buttonText: "Get Free Kit"
    },
    gemini: {
      title: "Get Your Free Gemini AI Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Multimodal Prompts Cheat Sheet",
        "Feature Comparison Table",
        "AI Terminology Glossary"
      ],
      buttonText: "Get Free Kit"
    },
    dalle: {
      title: "Get Your Free DALL-E Beginner's Kit",
      items: [
        "Full PDF Guide",
        "Visual Prompt Templates",
        "Image Style Reference Sheet",
        "AI Art Terminology Glossary"
      ],
      buttonText: "Get Free Kit"
    }
  };

  const content = guideContent[guideType];

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('exitIntentShown');
    
    if (hasShownPopup) {
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the page
      if (e.clientY <= 0) {
        setIsVisible(true);
        // Mark as shown in this session
        sessionStorage.setItem('exitIntentShown', 'true');
        // Remove the event listener after triggering
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Add event listener after a delay to prevent immediate triggering
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
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
          tags: [`${guideType}-beginners-kit`]
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSuccess(true);
      
      // Hide popup after success message is shown
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-fadeIn">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">{content.title}</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">What You'll Get:</h3>
              <ul className="space-y-2">
                {content.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              {!isSuccess ? (
                <form onSubmit={handleSubmit}>
                  <p className="mb-4 text-slate-600">
                    Enter your email to get instant access to the complete kit:
                  </p>
                  
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4"
                    disabled={isSubmitting}
                  />
                  
                  {error && (
                    <p className="text-red-500 text-sm mb-2">{error}</p>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : content.buttonText}
                  </Button>
                  
                  <p className="text-xs text-slate-500 mt-3">
                    By signing up, you'll also receive our AI newsletter with the latest
                    tips and updates. You can unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-green-100 text-green-800 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Success!</h3>
                  <p className="text-center text-slate-600">
                    Check your email for your free beginner's kit.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;

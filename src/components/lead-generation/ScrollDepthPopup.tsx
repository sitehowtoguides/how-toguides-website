'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { EmailCapture } from './EmailCapture';
import { X } from 'lucide-react';

interface ScrollDepthPopupProps {
  formId: string;
  guideName: string;
  title: string;
  description: string;
  scrollPercentage?: number;
  buttonText?: string;
}

export function ScrollDepthPopup({
  formId,
  guideName,
  title,
  description,
  scrollPercentage = 70,
  buttonText = 'Subscribe',
}: ScrollDepthPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  // Check if user is already subscribed
  useEffect(() => {
    const subscribed = localStorage.getItem('subscribed') === 'true';
    setIsSubscribed(subscribed);
    
    // Check if scroll depth popup has already been shown in this session
    const scrollDepthShown = sessionStorage.getItem('scroll_depth_shown') === 'true';
    setHasShown(scrollDepthShown);
  }, []);
  
  // Set up scroll depth detection
  useEffect(() => {
    if (isSubscribed || hasShown) return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      if (scrolled >= scrollPercentage) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('scroll_depth_shown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSubscribed, hasShown, scrollPercentage]);
  
  const handleSuccess = () => {
    setIsSubscribed(true);
    setIsOpen(false);
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed bottom-4 right-4 max-w-sm w-full z-50 animate-in slide-in-from-right-10 duration-300">
      <div className="bg-white rounded-lg shadow-xl border border-slate-200 relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2" 
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
          </div>
          
          <EmailCapture
            formId={formId}
            guideName={guideName}
            signupSource="scroll_depth_popup"
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
}

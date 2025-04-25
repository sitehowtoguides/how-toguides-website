'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { EmailCapture } from './EmailCapture';
import { X } from 'lucide-react';

interface InlineLeadCaptureProps {
  formId: string;
  guideName: string;
  signupSource: string;
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
}

export function InlineLeadCapture({
  formId,
  guideName,
  signupSource,
  title,
  description,
  buttonText = 'Subscribe',
  className = '',
}: InlineLeadCaptureProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  // Check if user is already subscribed
  useEffect(() => {
    const subscribed = localStorage.getItem('subscribed') === 'true';
    setIsSubscribed(subscribed);
    
    // Check if this specific inline form was dismissed
    const dismissed = localStorage.getItem(`dismissed_${signupSource}`) === 'true';
    setIsDismissed(dismissed);
  }, [signupSource]);
  
  const handleSuccess = () => {
    setIsSubscribed(true);
  };
  
  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(`dismissed_${signupSource}`, 'true');
  };
  
  if (isSubscribed || isDismissed) {
    return null;
  }
  
  return (
    <div className={`bg-slate-50 border border-slate-200 rounded-lg p-6 relative ${className}`}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-2 right-2 h-6 w-6" 
        onClick={handleDismiss}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
      
      <EmailCapture
        formId={formId}
        guideName={guideName}
        signupSource={signupSource}
        onSuccess={handleSuccess}
      />
    </div>
  );
}

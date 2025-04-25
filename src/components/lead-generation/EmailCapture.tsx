'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface EmailCaptureProps {
  formId: string;
  guideName: string;
  signupSource: string;
  onSuccess?: () => void;
  className?: string;
}

export function EmailCapture({
  formId,
  guideName,
  signupSource,
  onSuccess,
  className = '',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check if user is already subscribed
  useEffect(() => {
    const subscribed = localStorage.getItem('subscribed') === 'true';
    if (subscribed) {
      setIsSubmitted(true);
    }
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          formId,
          metadata: {
            guideName,
            signupSource,
          },
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        localStorage.setItem('subscribed', 'true');
        
        // Add tag for the specific guide
        await fetch('/api/convertkit/add-tag', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            tagName: guideName,
          }),
        });
        
        toast.success('Successfully subscribed!');
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className={`text-center p-4 ${className}`}>
        <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
        <p className="text-slate-600">
          You're now subscribed. Check your email for your free resources.
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </Button>
        
        <p className="text-xs text-slate-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </form>
  );
}

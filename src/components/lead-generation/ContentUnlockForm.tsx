'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ContentUnlockFormProps {
  formId: string;
  guideName: string;
  moduleSlug: string;
  onSuccess?: () => void;
  className?: string;
}

export function ContentUnlockForm({
  formId,
  guideName,
  moduleSlug,
  onSuccess,
  className = '',
}: ContentUnlockFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
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
            signupSource: `content_unlock_${moduleSlug}`,
          },
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('subscribed', 'true');
        
        // Add tags for the specific guide and module
        await fetch('/api/convertkit/add-tag', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            tagName: `${guideName} - Premium`,
          }),
        });
        
        toast.success('Content unlocked! You now have access to all premium content.');
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error(data.message || 'Failed to unlock content. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
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
              Unlocking...
            </>
          ) : (
            'Unlock Premium Content'
          )}
        </Button>
        
        <p className="text-xs text-slate-500 text-center">
          By subscribing, you'll get access to all premium content and receive our newsletter with AI tips.
        </p>
      </div>
    </form>
  );
}

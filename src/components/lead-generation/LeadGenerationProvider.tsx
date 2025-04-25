"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ExitIntentPopup } from './ExitIntentPopup';

interface LeadGenerationProviderProps {
  children: React.ReactNode;
}

export const LeadGenerationProvider: React.FC<LeadGenerationProviderProps> = ({ 
  children
}) => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  // Determine current guide based on URL path
  let currentGuide: 'chatgpt' | 'midjourney' | 'gemini' | 'dalle' = 'chatgpt';
  
  if (pathname?.includes('midjourney')) {
    currentGuide = 'midjourney';
  } else if (pathname?.includes('gemini')) {
    currentGuide = 'gemini';
  } else if (pathname?.includes('dall-e')) {
    currentGuide = 'dalle';
  }
  
  // Only render client-side components after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <>
      {children}
      
      {/* Only render exit intent popup on client side */}
      {isClient && (
        <ExitIntentPopup guideType={currentGuide} />
      )}
    </>
  );
};

export default LeadGenerationProvider;

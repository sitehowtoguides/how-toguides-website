'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function ExpandableSection({
  title,
  children,
  defaultOpen = false,
  className = '',
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? 'content' : undefined}
      className={`border rounded-md ${className}`}
      onValueChange={(value) => setIsOpen(!!value)}
    >
      <AccordionItem value="content" className="border-none">
        <AccordionTrigger className="px-4 py-3 hover:bg-slate-50">
          <div className="flex items-center">
            <span className="font-medium">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-slate-50">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

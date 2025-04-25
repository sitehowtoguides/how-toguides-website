import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeaderCTA() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link href="/free-kits">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
          Free AI Kits
        </Button>
      </Link>
      <Link href="/guides/chatgpt-for-beginners">
        <Button>
          Start Learning
        </Button>
      </Link>
    </div>
  );
}

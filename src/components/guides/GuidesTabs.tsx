'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  readingTime: number;
  lastUpdated: string;
}

export function GuideCard({ 
  title, 
  description, 
  slug, 
  imageUrl, 
  readingTime, 
  lastUpdated 
}: GuideCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-xs text-slate-500">
          {readingTime} min read • Updated {lastUpdated}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/guides/${slug}`}>
            Read Guide
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface GuidesTabsProps {
  guides: {
    chatgpt: GuideCardProps[];
    midjourney: GuideCardProps[];
    dalle: GuideCardProps[];
    gemini: GuideCardProps[];
  };
}

export function GuidesTabs({ guides }: GuidesTabsProps) {
  const [activeTab, setActiveTab] = useState('all');
  
  // Combine all guides for the "All" tab
  const allGuides = [
    ...guides.chatgpt,
    ...guides.midjourney,
    ...guides.dalle,
    ...guides.gemini
  ];
  
  return (
    <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-5 mb-8">
        <TabsTrigger value="all">All Guides</TabsTrigger>
        <TabsTrigger value="chatgpt">ChatGPT</TabsTrigger>
        <TabsTrigger value="midjourney">Midjourney</TabsTrigger>
        <TabsTrigger value="dalle">DALL-E</TabsTrigger>
        <TabsTrigger value="gemini">Gemini AI</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGuides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="chatgpt" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.chatgpt.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="midjourney" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.midjourney.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="dalle" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.dalle.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="gemini" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.gemini.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

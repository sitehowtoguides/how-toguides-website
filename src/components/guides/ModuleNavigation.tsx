'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ModuleNavigationProps {
  modules: {
    id: string;
    title: string;
    order: number;
    isGated: boolean;
    slug: string;
  }[];
  currentModuleId?: string;
  guideSlug: string;
  isSubscribed: boolean;
}

export function ModuleNavigation({
  modules,
  currentModuleId,
  guideSlug,
  isSubscribed,
}: ModuleNavigationProps) {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  
  // Load completed modules from localStorage on client side
  useEffect(() => {
    const storedCompletedModules = localStorage.getItem(`${guideSlug}-completed-modules`);
    if (storedCompletedModules) {
      setCompletedModules(JSON.parse(storedCompletedModules));
    }
  }, [guideSlug]);
  
  // Sort modules by order
  const sortedModules = [...modules].sort((a, b) => a.order - b.order);
  
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-200">
        <h2 className="font-semibold text-lg">Guide Modules</h2>
      </div>
      
      <ul className="divide-y divide-slate-200">
        {sortedModules.map((module) => {
          const isCompleted = completedModules.includes(module.id);
          const isCurrent = module.id === currentModuleId;
          const isAccessible = !module.isGated || isSubscribed;
          
          return (
            <li key={module.id}>
              <Link 
                href={`/guides/${guideSlug}/modules/${module.slug}`}
                className={`flex items-center p-3 hover:bg-slate-50 transition-colors ${
                  isCurrent ? 'bg-slate-100' : ''
                } ${
                  !isAccessible ? 'opacity-70' : ''
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isCompleted ? 'bg-green-100 text-green-700 border border-green-300' : 
                  isCurrent ? 'bg-blue-100 text-blue-700 border border-blue-300' :
                  'bg-slate-100 text-slate-500 border border-slate-300'
                }`}>
                  {isCompleted ? '✓' : module.order}
                </div>
                
                <div className="flex-1">
                  <span className={`${isCurrent ? 'font-medium' : ''}`}>
                    {module.title}
                  </span>
                </div>
                
                {!isAccessible && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    Premium
                  </span>
                )}
                
                <ChevronRight className="h-4 w-4 text-slate-400 ml-2" />
              </Link>
            </li>
          );
        })}
      </ul>
      
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="text-sm text-slate-500 mb-2">
          {completedModules.length} of {modules.length} modules completed
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full" 
            style={{ width: `${(completedModules.length / modules.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

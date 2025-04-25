'use client';

import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';

interface KnowledgeCheckProps {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: React.ReactNode;
  className?: string;
}

export function KnowledgeCheck({
  question,
  options,
  correctAnswerIndex,
  explanation,
  className = '',
}: KnowledgeCheckProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsSubmitted(true);
    setIsCorrect(selectedOption === correctAnswerIndex);
  };
  
  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  };
  
  return (
    <div className={`bg-slate-50 p-4 rounded-lg border border-slate-200 ${className}`}>
      <h3 className="text-lg font-semibold mb-3">Knowledge Check</h3>
      <p className="mb-4">{question}</p>
      
      <RadioGroup 
        value={selectedOption?.toString()} 
        onValueChange={(value) => setSelectedOption(parseInt(value))}
        className="space-y-2 mb-4"
        disabled={isSubmitted}
      >
        {options.map((option, index) => (
          <div key={index} className={`flex items-start space-x-2 p-2 rounded ${
            isSubmitted && index === correctAnswerIndex ? 'bg-green-50' : 
            isSubmitted && index === selectedOption ? 'bg-red-50' : ''
          }`}>
            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
            <Label 
              htmlFor={`option-${index}`}
              className={`flex-1 ${
                isSubmitted && index === correctAnswerIndex ? 'text-green-700 font-medium' : 
                isSubmitted && index === selectedOption ? 'text-red-700' : ''
              }`}
            >
              {option}
              {isSubmitted && index === correctAnswerIndex && (
                <CheckCircle className="inline ml-2 h-4 w-4 text-green-600" />
              )}
              {isSubmitted && index === selectedOption && index !== correctAnswerIndex && (
                <XCircle className="inline ml-2 h-4 w-4 text-red-600" />
              )}
            </Label>
          </div>
        ))}
      </RadioGroup>
      
      {isSubmitted && (
        <Alert className={isCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}>
          <AlertDescription className="flex flex-col gap-2">
            <span className={isCorrect ? 'text-green-700' : 'text-amber-700'}>
              {isCorrect ? 'Correct!' : 'Not quite right.'}
            </span>
            <div className="text-slate-700">{explanation}</div>
          </AlertDescription>
        </Alert>
      )}
      
      <div className="mt-4">
        {!isSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedOption === null}
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={handleReset}
            variant="outline"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

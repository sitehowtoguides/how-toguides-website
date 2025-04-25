'use client';

import { useState } from 'react';
import { convertKitClient } from '@/lib/convertkit/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface LeadCaptureFormProps {
  formId: string;
  guideName: string;
  signupSource: string;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export function LeadCaptureForm({
  formId,
  guideName,
  signupSource,
  title,
  description,
  buttonText = 'Get Free Kit',
  className = '',
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    
    // Validate email
    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await convertKitClient.subscribeToForm(formId, {
        email,
        firstName: name || undefined,
        fields: {
          last_guide_viewed: guideName,
          signup_source: signupSource
        }
      });
      
      setIsSuccess(true);
      // Store in localStorage to remember user has subscribed
      localStorage.setItem('subscribed', 'true');
      localStorage.setItem('subscribedEmail', email);
      
    } catch (err) {
      setError('There was an error subscribing. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`lead-form-success ${className}`}>
        <div className="lead-form-success-icon">
          <i className="fas fa-check-circle icon-xl icon-success"></i>
        </div>
        <h3 className="lead-form-success-title">Thank you for subscribing!</h3>
        <p className="lead-form-success-message">Check your email for your free {guideName} Kit.</p>
        <div className="lead-form-success-download">
          <a href="#" className="btn-secondary-standard">
            <i className="fas fa-download icon-sm"></i>
            <span>Download Now</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`lead-form ${className}`}>
      {title && <h3 className="lead-form-title">{title}</h3>}
      {description && <p className="lead-form-description">{description}</p>}
      
      <form onSubmit={handleSubmit} className="lead-form-fields">
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            <i className="fas fa-user form-field-icon"></i>
            <span>Your Name (Optional)</span>
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="email" className="form-label">
            <i className="fas fa-envelope form-field-icon"></i>
            <span>Your Email Address</span>
            <span className="form-required">*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (validationError) setValidationError(null);
            }}
            placeholder="Enter your email address"
            required
            className={`form-input ${validationError ? 'form-input-error' : ''}`}
          />
          {validationError && (
            <p className="form-validation-error">
              <i className="fas fa-exclamation-circle"></i>
              <span>{validationError}</span>
            </p>
          )}
        </div>
        
        {error && (
          <Alert variant="destructive" className="form-alert-error">
            <i className="fas fa-exclamation-triangle"></i>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Button 
          type="submit" 
          className="form-submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="button-loading">
              <i className="fas fa-spinner fa-spin"></i>
              <span>Sending...</span>
            </span>
          ) : (
            <span className="button-default">
              <i className="fas fa-paper-plane"></i>
              <span>{buttonText}</span>
            </span>
          )}
        </Button>
        
        <div className="form-privacy">
          <i className="fas fa-lock form-privacy-icon"></i>
          <p className="form-privacy-text">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </form>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { convertKitClient } from '@/lib/convertkit/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface LeadCapturePopupProps {
  formId: string;
  guideName: string;
  signupSource: string;
  title: string;
  description: string;
  buttonText?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCapturePopup({
  formId,
  guideName,
  signupSource,
  title,
  description,
  buttonText = 'Get Free Kit',
  isOpen,
  onClose,
}: LeadCapturePopupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [step, setStep] = useState(1); // For multi-step form: 1 = email collection, 2 = preferences

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setValidationError(null);
      
      // Validate email
      if (!validateEmail(email)) {
        setValidationError('Please enter a valid email address');
        return;
      }
      
      // Move to step 2 if valid
      setStep(2);
      return;
    }
    
    // Handle final submission (step 2)
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
      
      // Reset form state but don't close immediately to show success message
      setTimeout(() => {
        onClose();
        // Reset form after closing
        setTimeout(() => {
          setIsSuccess(false);
          setEmail('');
          setName('');
          setStep(1);
        }, 500);
      }, 3000);
      
    } catch (err) {
      setError('There was an error subscribing. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        onClose();
        // Reset form state when dialog is closed
        setTimeout(() => {
          setIsSuccess(false);
          setEmail('');
          setName('');
          setStep(1);
          setError(null);
          setValidationError(null);
        }, 300);
      }
    }}>
      <DialogContent className="popup-dialog">
        <div className="popup-decoration-corner"></div>
        
        <DialogHeader>
          <DialogTitle className="popup-title">
            <i className="fas fa-gift popup-title-icon"></i>
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription className="popup-description">{description}</DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="popup-success">
            <div className="popup-success-icon">
              <i className="fas fa-check-circle icon-xl icon-success"></i>
            </div>
            <h3 className="popup-success-title">Thank you for subscribing!</h3>
            <p className="popup-success-message">Check your email for your free {guideName} Kit.</p>
            <div className="popup-success-download">
              <a href="#" className="btn-secondary-standard">
                <i className="fas fa-download icon-sm"></i>
                <span>Download Now</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="popup-form">
            {/* Step indicator */}
            <div className="popup-steps">
              <div className={`popup-step ${step >= 1 ? 'active' : ''}`}>
                <div className="popup-step-number">1</div>
                <div className="popup-step-label">Your Info</div>
              </div>
              <div className="popup-step-connector"></div>
              <div className={`popup-step ${step >= 2 ? 'active' : ''}`}>
                <div className="popup-step-number">2</div>
                <div className="popup-step-label">Preferences</div>
              </div>
            </div>
            
            {step === 1 && (
              <div className="popup-step-content">
                <div className="form-field">
                  <label htmlFor="popup-email" className="form-label">
                    <i className="fas fa-envelope form-field-icon"></i>
                    <span>Your Email Address</span>
                    <span className="form-required">*</span>
                  </label>
                  <Input
                    id="popup-email"
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
                
                <Button 
                  type="submit" 
                  className="form-submit-button"
                >
                  <span className="button-default">
                    <span>Continue</span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </Button>
              </div>
            )}
            
            {step === 2 && (
              <div className="popup-step-content">
                <div className="form-field">
                  <label htmlFor="popup-name" className="form-label">
                    <i className="fas fa-user form-field-icon"></i>
                    <span>Your Name (Optional)</span>
                  </label>
                  <Input
                    id="popup-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </div>
                
                <div className="form-field">
                  <label className="form-label">
                    <i className="fas fa-bell form-field-icon"></i>
                    <span>Newsletter Preferences</span>
                  </label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked className="checkbox-input" />
                      <span className="checkbox-text">Weekly AI tips & tutorials</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked className="checkbox-input" />
                      <span className="checkbox-text">New guide notifications</span>
                    </label>
                  </div>
                </div>
                
                {error && (
                  <Alert variant="destructive" className="form-alert-error">
                    <i className="fas fa-exclamation-triangle"></i>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="form-buttons">
                  <Button 
                    type="button" 
                    className="form-back-button"
                    onClick={handleBack}
                  >
                    <i className="fas fa-arrow-left"></i>
                    <span>Back</span>
                  </Button>
                  
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
                </div>
              </div>
            )}
            
            <div className="form-privacy">
              <i className="fas fa-lock form-privacy-icon"></i>
              <p className="form-privacy-text">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

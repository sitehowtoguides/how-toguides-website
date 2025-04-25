'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-1PLJ849SK4';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      // Track page views when the route changes
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure',
            });
            
            // Custom event tracking for lead generation forms
            document.addEventListener('DOMContentLoaded', function() {
              // Track form submissions
              document.addEventListener('submit', function(e) {
                const form = e.target;
                if (form.classList.contains('lead-form-fields') || form.classList.contains('popup-form')) {
                  gtag('event', 'form_submission', {
                    'form_id': form.closest('[data-form-id]')?.dataset.formId || 'unknown',
                    'guide_name': form.closest('[data-guide-name]')?.dataset.guideName || 'unknown',
                    'signup_source': form.closest('[data-signup-source]')?.dataset.signupSource || 'unknown'
                  });
                }
              });
              
              // Track guide module clicks
              document.querySelectorAll('.guide-card a, .module-navigation a').forEach(link => {
                link.addEventListener('click', function() {
                  const moduleTitle = this.closest('.guide-card')?.querySelector('.guide-card-title')?.textContent || 
                                     this.textContent || 'unknown';
                  const isPremium = this.textContent.includes('Premium') || this.innerHTML.includes('lock');
                  
                  gtag('event', 'module_click', {
                    'module_title': moduleTitle,
                    'is_premium': isPremium,
                    'guide_name': document.querySelector('.guide-title')?.textContent || 'unknown'
                  });
                });
              });
              
              // Track CTA button clicks
              document.querySelectorAll('.cta-section .btn-primary-standard').forEach(button => {
                button.addEventListener('click', function() {
                  gtag('event', 'cta_click', {
                    'cta_text': this.textContent.trim(),
                    'cta_location': 'guide_page',
                    'guide_name': document.querySelector('.guide-title')?.textContent || 'unknown'
                  });
                });
              });
              
              // Track download clicks
              document.querySelectorAll('.lead-form-success-download a, .popup-success-download a').forEach(link => {
                link.addEventListener('click', function() {
                  gtag('event', 'download_click', {
                    'download_type': 'lead_magnet',
                    'guide_name': document.querySelector('.guide-title')?.textContent || 'unknown'
                  });
                });
              });
            });
          `,
        }}
      />
      
      {/* Google Search Console Verification - HTML Tag Method (Backup) */}
      <meta 
        name="google-site-verification" 
        content="add-your-verification-code-here" 
      />
    </>
  );
}

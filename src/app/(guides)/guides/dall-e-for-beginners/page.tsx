// Import the standardized guide components CSS, enhanced color system, typography, visual elements, and lead forms
import '@/app/guide-components.css';
import '@/app/colors.css';
import '@/app/typography.css';
import '@/app/visual-elements.css';
import '@/app/lead-forms.css';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/lead-generation/LeadCaptureForm';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateGuideMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateGuideMetadata({
  title: 'How to Use DALL-E: Complete Tutorial for Beginners (2025)',
  description: 'Learn how to use DALL-E with our comprehensive beginner\'s guide. From creating your first AI-generated image to mastering advanced techniques and understanding subscription plans.',
  slug: '/guides/dall-e-for-beginners',
  ogImagePath: '/images/dall-e-beginners-guide-2025.jpg',
  keywords: ['DALL-E tutorial', 'AI image generation', 'OpenAI', 'DALL-E 3', 'text-to-image', 'AI art', 'DALL-E prompts', 'image generation'],
});

export default function DallEGuide() {
  const modules = [
    {
      id: 'introduction',
      title: 'Introduction to DALL-E',
      description: 'Learn what DALL-E is and how it can transform your creative process.',
      isGated: false,
      slug: 'introduction',
      order: 1,
    },
    {
      id: 'setting-up',
      title: 'Setting Up Your DALL-E Account',
      description: 'Create your OpenAI account and get ready to generate images.',
      isGated: false,
      slug: 'setting-up',
      order: 2,
    },
    {
      id: 'interface',
      title: 'Navigating the DALL-E Interface',
      description: 'Learn how to use the DALL-E web interface and mobile app.',
      isGated: false,
      slug: 'interface',
      order: 3,
    },
    {
      id: 'first-image',
      title: 'Creating Your First Image',
      description: 'Generate your first AI image using simple prompts.',
      isGated: true,
      slug: 'first-image',
      order: 4,
    },
    {
      id: 'effective-prompts',
      title: 'Crafting Effective Prompts',
      description: 'Learn how to write prompts that generate exactly the images you want.',
      isGated: true,
      slug: 'effective-prompts',
      order: 5,
    },
    {
      id: 'capabilities',
      title: 'Understanding DALL-E\'s Capabilities',
      description: 'Explore what DALL-E can and cannot do, including its limitations.',
      isGated: true,
      slug: 'capabilities',
      order: 6,
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features and Techniques',
      description: 'Master advanced features like outpainting, variations, and more.',
      isGated: true,
      slug: 'advanced-features',
      order: 7,
    },
    {
      id: 'subscription-plans',
      title: 'Subscription Plans and Pricing',
      description: 'Understand the different subscription options and how to choose the right one.',
      isGated: true,
      slug: 'subscription-plans',
      order: 8,
    },
  ];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "Is DALL-E free to use?",
      answer: "DALL-E offers both free and paid options. New users receive a limited number of free credits that refresh monthly. For more intensive use, OpenAI offers paid subscription plans with additional credits and features. The free tier is sufficient for casual experimentation, while professional use typically requires a paid subscription."
    },
    {
      question: "How is DALL-E different from Midjourney and Stable Diffusion?",
      answer: "DALL-E (particularly DALL-E 3) excels at following precise instructions and creating photorealistic images. Midjourney tends to produce more artistic, stylized results with strong aesthetic qualities. Stable Diffusion is open-source and offers more customization options but may require more technical knowledge. DALL-E is also directly integrated with ChatGPT, making it accessible through conversation."
    },
    {
      question: "How do I write good DALL-E prompts?",
      answer: "Effective DALL-E prompts are detailed and specific. Include subject information, setting details, lighting conditions, perspective, style references, and mood. For example, instead of 'a cat,' try 'a fluffy orange tabby cat sitting on a windowsill at sunset, warm golden lighting, close-up perspective, photorealistic style.' DALL-E 3 responds well to longer, more descriptive prompts."
    },
    {
      question: "Can I edit images I've created with DALL-E?",
      answer: "Yes, DALL-E offers several editing capabilities. You can generate variations of existing images, use the outpainting feature to extend images beyond their original boundaries, and make targeted edits to specific areas using natural language instructions. These features allow for iterative refinement of your generated images."
    },
    {
      question: "Do I own the images created with DALL-E?",
      answer: "Yes, according to OpenAI's current terms, users own the images they generate with DALL-E and can use them commercially. This includes selling the images, using them in products, or publishing them. However, it's always good practice to check OpenAI's latest terms of service as policies may evolve."
    },
    {
      question: "What are DALL-E's limitations?",
      answer: "DALL-E has several limitations: it may struggle with accurate text rendering within images, precise counting of objects, complex spatial relationships, and certain anatomical details. It also has content policies that restrict generating certain types of content, including violent, adult, hateful, or deceptive imagery, as well as images of real public figures."
    },
    {
      question: "Can I access DALL-E through ChatGPT?",
      answer: "Yes, DALL-E 3 is integrated with ChatGPT Plus and Enterprise subscriptions. This allows you to generate images directly within a conversation, with ChatGPT helping to refine your prompts. This integration offers a more conversational approach to image generation compared to the standalone DALL-E interface."
    },
    {
      question: "How many images can I generate with DALL-E?",
      answer: "The number of images you can generate depends on your subscription tier. Free users receive a limited number of credits that refresh monthly (typically 15 credits per month, with each credit generating one image). Paid subscribers receive more credits (typically 50+ per month), and additional credits can be purchased separately if needed."
    }
  ];

  // Schema markup data
  const schemaData = {
    title: "How to Use DALL-E: Complete Tutorial for Beginners",
    description: "Learn how to use DALL-E with our comprehensive beginner's guide. From creating your first AI-generated image to mastering advanced techniques and understanding subscription plans.",
    datePublished: "2025-04-18T08:00:00+00:00",
    dateModified: "2025-04-18T08:00:00+00:00",
    author: {
      name: "Maya Johnson",
      type: "Person"
    },
    image: "https://www.how-toguides.com/images/dall-e-beginners-guide-2025.jpg",
    steps: modules.map((module, index) => ({
      name: `Module ${index + 1}: ${module.title}`,
      text: module.description,
      url: `https://www.how-toguides.com/guides/dall-e-for-beginners/modules/${module.slug}`
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup guide={schemaData} faq={faqData} />
      
      <div className="guide-page dalle-theme">
        <div className="container mx-auto px-4 py-8">
          {/* Guide Header */}
          <div className="guide-header">
            <div className="badge-with-icon badge-primary">
              <i className="fas fa-image icon-xs"></i>
              <span>AI Image Generation</span>
            </div>
            
            <h1 className="guide-title">How to Use DALL-E: Complete Tutorial for Beginners</h1>
            <p className="guide-subtitle">
              Master OpenAI's powerful image generation tool with our step-by-step guide
            </p>
            
            <div className="guide-meta">
              <span className="icon-with-text">
                <i className="fas fa-clock icon-sm icon-neutral"></i>
                <span>Reading time: 22 minutes</span>
              </span>
              <span className="guide-meta-separator">|</span>
              <span className="icon-with-text">
                <i className="fas fa-calendar-alt icon-sm icon-neutral"></i>
                <span>Last updated: April 18, 2025</span>
              </span>
            </div>
            
            <div className="tag-container">
              <span className="tag">Beginner-Friendly</span>
              <span className="tag">AI Image Generation</span>
              <span className="tag">OpenAI</span>
            </div>
            
            <div className="guide-hero-image image-frame">
              <Image 
                src="/images/dall-e-beginners-guide-2025.jpg" 
                alt="DALL-E interface showing AI-generated images from text prompts" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Guide Content Layout */}
          <div className="guide-content-layout">
            {/* Main Content */}
            <div className="guide-main-content">
              <div className="prose max-w-none subsection-spacing">
                <div className="decorative-line"></div>
                
                <h2>
                  <span className="icon-with-text">
                    <i className="fas fa-image icon-md icon-primary"></i>
                    <span>Introduction</span>
                  </span>
                </h2>
                
                <p>
                  DALL-E has revolutionized the way we create visual content, making it possible for anyone—regardless of artistic ability—to generate stunning, unique images using just text descriptions. Whether you're a designer seeking inspiration, a marketer creating visual content, or simply curious about AI image generation, DALL-E offers an accessible entry point into the world of AI-powered creativity.
                </p>
                
                <div className="callout callout-info">
                  <div className="callout-title">
                    <i className="fas fa-info-circle"></i>
                    <span>What is DALL-E?</span>
                  </div>
                  <p className="callout-content">
                    DALL-E is an AI image generation system developed by OpenAI that creates images from text descriptions (prompts). Named as a combination of artist Salvador Dalí and Pixar's WALL-E, it can generate, edit, and vary realistic images and art based on natural language descriptions.
                  </p>
                </div>
                
                <p>
                  Many beginners find themselves overwhelmed by questions: How do I access DALL-E? What makes an effective prompt? What are its capabilities and limitations? How much does it cost? This comprehensive guide answers all these questions and more, taking you from complete novice to confident DALL-E user.
                </p>
                
                <p>
                  In this guide, you'll learn everything you need to know about using DALL-E effectively, from creating your first image to mastering advanced techniques. We'll cover the latest 2025 interface, including DALL-E 3's enhanced capabilities, and provide practical examples you can apply immediately to your own projects.
                </p>
                
                <div className="fancy-quote">
                  DALL-E has completely transformed my creative workflow. I can now visualize concepts in seconds that would have taken hours to sketch or describe to a human artist. It's like having a visual brainstorming partner that never gets tired.
                  <span className="fancy-quote-author">— Jordan Lee, UX Designer</span>
                </div>
                
                <h2>
                  <span className="icon-with-text">
                    <i className="fas fa-list-check icon-md icon-primary"></i>
                    <span>What You'll Learn</span>
                  </span>
                </h2>
                
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Account Setup</div>
                      <div className="feature-list-description">How to set up your OpenAI account to access DALL-E</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Interface Navigation</div>
                      <div className="feature-list-description">Navigating the DALL-E web interface and mobile app</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Prompt Engineering</div>
                      <div className="feature-list-description">Crafting effective prompts that generate exactly what you envision</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Advanced Techniques</div>
                      <div className="feature-list-description">Using features like variations, outpainting, and targeted edits</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Subscription Management</div>
                      <div className="feature-list-description">Choosing the right subscription plan for your needs</div>
                    </div>
                  </li>
                </ul>
                
                <div className="section-divider">
                  <div className="section-divider-line"></div>
                  <i className="fas fa-book section-divider-icon"></i>
                  <div className="section-divider-line"></div>
                </div>
                
                <h2>
                  <span className="icon-with-text">
                    <i className="fas fa-graduation-cap icon-md icon-primary"></i>
                    <span>Module Overview</span>
                  </span>
                </h2>
                
                <p>
                  This guide is divided into 8 comprehensive modules, taking you from complete beginner to confident DALL-E user. The first three modules are freely available to help you get started, while the remaining five modules are premium content that dive deeper into advanced techniques and features.
                </p>
                
                <div className="progress-steps">
                  {modules.map((module, index) => (
                    <div key={module.id} className="progress-step">
                      <div className={`progress-step-indicator ${index < 3 ? 'completed' : index === 3 ? 'active' : ''}`}></div>
                      <div className="progress-step-label">{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Module Grid */}
              <div className="module-grid section-spacing">
                {modules.map((module, index) => (
                  <div key={module.id} className="guide-card">
                    <div className="card-decoration-top"></div>
                    <div className="guide-card-header">
                      <div className="step-indicator">
                        <div className="step-number">{index + 1}</div>
                        <h3 className="guide-card-title step-title">{module.title}</h3>
                      </div>
                    </div>
                    <div className="guide-card-content">
                      <p className="guide-card-description">{module.description}</p>
                    </div>
                    <div className="guide-card-footer">
                      <Link href={`/guides/dall-e-for-beginners/modules/${module.slug}`}>
                        <Button className={module.isGated ? "btn-outline-standard btn-full" : "btn-primary-standard btn-full"}>
                          {module.isGated ? (
                            <span className="icon-with-text">
                              <i className="fas fa-lock icon-sm"></i>
                              <span>Premium Content</span>
                            </span>
                          ) : (
                            <span className="icon-with-text">
                              <i className="fas fa-play icon-sm"></i>
                              <span>Start Learning</span>
                            </span>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="cta-section bg-gradient-primary">
                <div className="feature-icon-container pulse-animation">
                  <i className="fas fa-wand-magic-sparkles feature-icon"></i>
                </div>
                <h2 className="cta-title">Ready to Master DALL-E?</h2>
                <p className="cta-description">
                  Start with our free modules to learn the basics, then unlock the premium content to become a DALL-E expert. Our step-by-step approach makes it easy to learn at your own pace.
                </p>
                <Button className="btn-primary-standard btn-auto">
                  <span className="icon-with-text">
                    <i className="fas fa-unlock-alt icon-sm"></i>
                    <span>Get Full Access</span>
                  </span>
                </Button>
              </div>
              
              {/* FAQ Section */}
              <div className="faq-section">
                <h2 className="faq-title" id="frequently-asked-questions">
                  <span className="icon-with-text">
                    <i className="fas fa-question-circle icon-md icon-primary"></i>
                    <span>Frequently Asked Questions</span>
                  </span>
                </h2>
                <div className="faq-grid">
                  {faqData.map((item, index) => (
                    <div key={index} className="faq-item fade-in">
                      <h3 className="faq-question">
                        <span className="icon-with-text">
                          <i className="fas fa-question icon-sm icon-primary"></i>
                          <span>{item.question}</span>
                        </span>
                      </h3>
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="guide-sidebar">
              <div className="guide-sidebar-sticky">
                <ModuleNavigation 
                  modules={modules} 
                  currentModuleId={null} 
                  guideSlug="dall-e-for-beginners"
                  isSubscribed={false}
                />
                
                {/* Author Section */}
                <div className="author-section">
                  <div className="author-header">
                    <div className="author-avatar"></div>
                    <div>
                      <h3 className="author-name">
                        <span className="icon-with-text">
                          <i className="fas fa-user icon-sm icon-primary"></i>
                          <span>Written by Maya Johnson</span>
                        </span>
                      </h3>
                      <p className="author-title">Digital Artist & AI Specialist</p>
                    </div>
                  </div>
                  <p className="author-bio">
                    Maya has been using DALL-E since its initial release and has created thousands of AI-generated images for various projects. She specializes in prompt engineering and creative applications of AI image generation tools.
                  </p>
                </div>
                
                {/* Lead Capture Form */}
                <div className="lead-form">
                  <div className="decorative-dots">
                    <div className="decorative-dot"></div>
                    <div className="decorative-dot"></div>
                    <div className="decorative-dot"></div>
                  </div>
                  <h3 className="lead-form-title">
                    <span className="icon-with-text">
                      <i className="fas fa-gift icon-md icon-primary"></i>
                      <span>Get the DALL-E Prompt Engineering Kit</span>
                    </span>
                  </h3>
                  <p className="lead-form-description">Subscribe to receive our free starter kit with 50+ proven prompt templates, style examples, and exclusive tips for DALL-E.</p>
                  <LeadCaptureForm 
                    formId="dall-e-guide-sidebar"
                    guideName="DALL-E for Beginners"
                    signupSource="sidebar"
                    buttonText="Send Me the Prompt Kit"
                  />
                </div>
                
                {/* Tooltip Example */}
                <div className="callout callout-tip">
                  <div className="callout-title">
                    <i className="fas fa-lightbulb"></i>
                    <span>Pro Tip</span>
                  </div>
                  <p className="callout-content">
                    DALL-E works best with <span className="tooltip">detailed, specific prompts<span className="tooltip-text">Prompts that include subject, setting, lighting, style, and other specific details</span></span>. The more information you provide, the closer the result will match your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Import the standardized guide components CSS, enhanced color system, typography, and visual elements
import '@/app/guide-components.css';
import '@/app/colors.css';
import '@/app/typography.css';
import '@/app/visual-elements.css';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/lead-generation/LeadCaptureForm';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateGuideMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateGuideMetadata({
  title: 'How to Use Midjourney: Step-by-Step Beginner\'s Guide (2025)',
  description: 'Learn how to use Midjourney with our comprehensive beginner\'s guide. From setting up your Discord account to creating stunning AI-generated images with effective prompts and parameters.',
  slug: '/guides/midjourney-for-beginners',
  ogImagePath: '/images/midjourney-beginners-guide-2025.jpg',
  keywords: ['Midjourney tutorial', 'AI image generation', 'Discord bot', 'Midjourney prompts', 'Midjourney parameters', 'Midjourney V6', 'AI art', 'text-to-image'],
});

const modules = [
  {
    id: 'introduction',
    title: 'Introduction to Midjourney',
    description: 'Learn what Midjourney is and how it can transform your creative process.',
    isGated: false,
    slug: 'introduction',
    order: 1,
  },
  {
    id: 'setting-up',
    title: 'Setting Up Your Midjourney Account',
    description: 'Create your Discord and Midjourney accounts and get ready to generate images.',
    isGated: false,
    slug: 'setting-up',
    order: 2,
  },
  {
    id: 'discord-interface',
    title: 'Navigating the Discord Interface',
    description: 'Learn how to use Discord to interact with the Midjourney bot.',
    isGated: false,
    slug: 'discord-interface',
    order: 3,
  },
  {
    id: 'first-image',
    title: 'Creating Your First Image',
    description: 'Generate your first AI image using simple prompts and commands.',
    isGated: true,
    slug: 'first-image',
    order: 4,
  },
  {
    id: 'commands',
    title: 'Understanding Midjourney Commands',
    description: 'Master the essential commands for controlling Midjourney.',
    isGated: true,
    slug: 'commands',
    order: 5,
  },
  {
    id: 'effective-prompts',
    title: 'Crafting Effective Prompts',
    description: 'Learn how to write prompts that generate exactly the images you want.',
    isGated: true,
    slug: 'effective-prompts',
    order: 6,
  },
  {
    id: 'parameters',
    title: 'Using Parameters to Control Output',
    description: 'Fine-tune your images with aspect ratios, styles, and other parameters.',
    isGated: true,
    slug: 'parameters',
    order: 7,
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features and Techniques',
    description: 'Explore advanced features like Multi Prompts, Zoom Out, and more.',
    isGated: true,
    slug: 'advanced-features',
    order: 8,
  },
];

// FAQ data for schema markup
const faqData = [
  {
    question: "Is Midjourney free to use?",
    answer: "Midjourney offers a limited free trial, but ongoing use requires a subscription. Plans start at $10/month for the Basic plan, with higher tiers offering more GPU time and features. The free trial provides approximately 25 image generations to test the service."
  },
  {
    question: "Do I need Discord to use Midjourney?",
    answer: "Yes, Midjourney operates primarily through Discord. You need a Discord account to access and use the Midjourney bot. This is because Midjourney uses Discord's infrastructure for user interaction, image generation, and community features."
  },
  {
    question: "How do I write good Midjourney prompts?",
    answer: "Good Midjourney prompts are specific, descriptive, and include style references. Start with a clear subject, add descriptive details, specify artistic styles or artists for reference, and use parameters like --ar for aspect ratio. Experiment with different prompt structures to find what works best for your vision."
  },
  {
    question: "What's the difference between Midjourney and other AI image generators?",
    answer: "Midjourney typically produces more artistic, stylized images compared to DALL-E and Stable Diffusion. It excels at creating atmospheric, painterly visuals with strong composition. Midjourney operates through Discord rather than a web interface, and has specific parameters and commands unique to its system."
  },
  {
    question: "Can I sell images created with Midjourney?",
    answer: "Yes, you can sell images created with Midjourney if you have an appropriate subscription. The Standard and Pro plans grant commercial usage rights, allowing you to sell the images you create. However, the Basic plan is for personal use only and doesn't include commercial rights."
  },
  {
    question: "How can I upscale or improve my Midjourney images?",
    answer: "You can upscale Midjourney images using the U1-U4 buttons that appear below your generated images. For further enhancements, use the Vary (V) options to create variations, or add parameters like --upbeta for enhanced upscaling. You can also use external tools like Topaz Gigapixel for additional upscaling."
  },
  {
    question: "What are the most important Midjourney parameters to know?",
    answer: "The most essential Midjourney parameters include: --ar for aspect ratio, --v for version selection, --stylize or --s for controlling stylization level, --chaos for variation intensity, --seed for reproducibility, and --quality or --q for rendering quality. These parameters help you control the fundamental aspects of your image generation."
  },
  {
    question: "Can Midjourney generate images of celebrities or real people?",
    answer: "Midjourney has policies against creating photorealistic images of real people without their consent. While you can reference artistic styles of celebrities, creating realistic depictions may be filtered or rejected by the system. Always review Midjourney's content policies before attempting to create images of real individuals."
  }
];

export default function MidjourneyGuide() {
  // Schema markup data
  const schemaData = {
    title: "How to Use Midjourney: Step-by-Step Beginner's Guide",
    description: "Learn how to use Midjourney with our comprehensive beginner's guide. From setting up your account to creating stunning AI-generated images with effective prompts.",
    datePublished: "2025-04-20T08:00:00+00:00",
    dateModified: "2025-04-20T08:00:00+00:00",
    author: {
      name: "Alex Rivera",
      type: "Person"
    },
    image: "https://www.how-toguides.com/images/midjourney-beginners-guide-2025.jpg",
    steps: modules.map((module, index) => ({
      name: `Module ${index + 1}: ${module.title}`,
      text: module.description,
      url: `https://www.how-toguides.com/guides/midjourney-for-beginners/modules/${module.slug}`
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup guide={schemaData} faq={faqData} />
      
      <div className="guide-page midjourney-theme">
        <div className="container mx-auto px-4 py-8">
          {/* Guide Header */}
          <div className="guide-header">
            <div className="badge-with-icon badge-primary">
              <i className="fas fa-star icon-xs"></i>
              <span>Most Popular Guide</span>
            </div>
            
            <h1 className="guide-title">How to Use Midjourney: Step-by-Step Beginner's Guide</h1>
            
            <div className="guide-meta">
              <span className="icon-with-text">
                <i className="fas fa-clock icon-sm icon-neutral"></i>
                <span>Reading time: 25 minutes</span>
              </span>
              <span className="guide-meta-separator">|</span>
              <span className="icon-with-text">
                <i className="fas fa-calendar-alt icon-sm icon-neutral"></i>
                <span>Last updated: April 20, 2025</span>
              </span>
            </div>
            
            <div className="tag-container">
              <span className="tag">Beginner-Friendly</span>
              <span className="tag">AI Image Generation</span>
              <span className="tag">Discord Bot</span>
            </div>
            
            <div className="guide-hero-image image-frame">
              <Image 
                src="/images/midjourney-beginners-guide-2025.jpg" 
                alt="Step-by-step tutorial on how to use Midjourney for beginners in 2025" 
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
                    <i className="fas fa-paint-brush icon-md icon-primary"></i>
                    <span>Introduction</span>
                  </span>
                </h2>
                
                <p>
                  Midjourney has revolutionized image creation, allowing anyone to generate stunning visuals using simple text prompts—but getting started can feel overwhelming. Whether you're an artist seeking inspiration, a designer looking for quick concept art, or simply curious about AI image generation, Midjourney's unique Discord-based interface and specialized commands can present a learning curve for newcomers.
                </p>
                
                <div className="callout callout-info">
                  <div className="callout-title">
                    <i className="fas fa-info-circle"></i>
                    <span>What is Midjourney?</span>
                  </div>
                  <p className="callout-content">
                    Midjourney is an AI image generation tool that creates images from text descriptions (prompts). It operates through Discord and is known for its artistic, painterly style that produces visually stunning results.
                  </p>
                </div>
                
                <p>
                  Many beginners struggle with the basics: accessing Midjourney, understanding the Discord interface, crafting effective prompts, and navigating the various parameters and settings. The good news? These challenges are easy to overcome with the right guidance.
                </p>
                
                <p>
                  In this comprehensive guide, you'll learn everything you need to know to start using Midjourney effectively, from creating your account to writing your first prompts and exploring advanced features. We'll cover the latest 2025 interface, including the newest Midjourney Version 6 model, and exciting features like Multi Prompts and Zoom Out that have transformed the creative possibilities.
                </p>
                
                <div className="fancy-quote">
                  Midjourney has completely transformed my creative workflow. What used to take hours of conceptualization now happens in minutes, allowing me to explore ideas I never would have considered.
                  <span className="fancy-quote-author">— Sarah Chen, Digital Artist</span>
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
                      <div className="feature-list-title">Discord Integration</div>
                      <div className="feature-list-description">How to set up your Midjourney account through Discord and navigate the interface</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Creating Your First Images</div>
                      <div className="feature-list-description">Generate your first AI images with simple prompts and commands</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Prompt Engineering</div>
                      <div className="feature-list-description">Learn how to write prompts that generate exactly the images you want</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Parameter Mastery</div>
                      <div className="feature-list-description">Control aspect ratios, styles, and other settings for perfect results</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Advanced Techniques</div>
                      <div className="feature-list-description">Explore Multi Prompts, Zoom Out, and other advanced features</div>
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
                  This guide is divided into 8 comprehensive modules, taking you from complete beginner to confident Midjourney user. The first three modules are freely available to help you get started, while the remaining five modules are premium content that dive deeper into advanced techniques and features.
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
                      <Link href={`/guides/midjourney-for-beginners/modules/${module.slug}`}>
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
                  <i className="fas fa-rocket feature-icon"></i>
                </div>
                <h2 className="cta-title">Ready to Master Midjourney?</h2>
                <p className="cta-description">
                  Start with our free modules to learn the basics, then unlock the premium content to become a Midjourney expert. Our step-by-step approach makes it easy to learn at your own pace.
                </p>
                <Button className="btn-primary-standard btn-auto">
                  <span className="icon-with-text">
                    <i className="fas fa-unlock-alt icon-sm"></i>
                    <span>Get Started Now</span>
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
                  guideSlug="midjourney-for-beginners"
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
                          <span>Written by Alex Rivera</span>
                        </span>
                      </h3>
                      <p className="author-title">AI Image Generation Expert</p>
                    </div>
                  </div>
                  <p className="author-bio">
                    Alex has been using Midjourney since its beta release and has created over 10,000 images using AI tools. He specializes in prompt engineering and creative workflows.
                  </p>
                </div>
                
                {/* Lead Capture Form */}
                <div className="lead-form-standard">
                  <div className="decorative-dots">
                    <div className="decorative-dot"></div>
                    <div className="decorative-dot"></div>
                    <div className="decorative-dot"></div>
                  </div>
                  <h3 className="lead-form-title-standard">
                    <span className="icon-with-text">
                      <i className="fas fa-gift icon-md icon-primary"></i>
                      <span>Get the AI Image Generation Starter Kit</span>
                    </span>
                  </h3>
                  <p className="lead-form-description-standard">Subscribe to receive our free starter kit with prompt templates, parameter cheat sheets, and exclusive tips.</p>
                  <LeadCaptureForm 
                    formId="midjourney-guide-sidebar"
                    guideName="Midjourney for Beginners"
                    signupSource="sidebar"
                    buttonText="Send Me the Starter Kit"
                  />
                </div>
                
                {/* Tooltip Example */}
                <div className="callout callout-tip">
                  <div className="callout-title">
                    <i className="fas fa-lightbulb"></i>
                    <span>Pro Tip</span>
                  </div>
                  <p className="callout-content">
                    Hover over any <span className="tooltip">parameter<span className="tooltip-text">Parameters are special commands that modify how Midjourney generates images</span></span> in our guide to see a detailed explanation of what it does and how to use it effectively.
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

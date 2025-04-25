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
  title: 'How to Use Gemini AI: Complete Beginner\'s Guide (2025)',
  description: 'Learn how to use Google\'s Gemini AI with our comprehensive step-by-step guide for beginners. Master multimodal capabilities, prompt engineering, and practical applications for text, images, and code.',
  slug: '/guides/gemini-ai-for-beginners',
  ogImagePath: '/images/gemini-ai-guide-hero.jpg',
  keywords: ['Gemini AI tutorial', 'Google AI', 'multimodal AI', 'Gemini Pro', 'Gemini Ultra', 'AI assistant', 'prompt engineering', 'Google Bard'],
});

export default function GeminiAIGuide() {
  const modules = [
    {
      id: 'introduction',
      title: 'Introduction to Gemini AI',
      description: 'Learn what Gemini AI is and how it can transform your workflow.',
      isGated: false,
      slug: 'introduction',
      order: 1,
    },
    {
      id: 'getting-started',
      title: 'Getting Started with Gemini AI',
      description: 'Create your account and set up Gemini AI on different devices.',
      isGated: false,
      slug: 'getting-started',
      order: 2,
    },
    {
      id: 'capabilities',
      title: 'Understanding Gemini AI\'s Capabilities',
      description: 'Explore the multimodal features and different versions of Gemini.',
      isGated: false,
      slug: 'capabilities',
      order: 3,
    },
    {
      id: 'basic-interactions',
      title: 'Basic Interactions with Gemini AI',
      description: 'Learn how to communicate effectively with Gemini AI.',
      isGated: true,
      slug: 'basic-interactions',
      order: 4,
    },
    {
      id: 'prompt-engineering',
      title: 'Crafting Effective Prompts',
      description: 'Master the art of writing prompts that get the best results.',
      isGated: true,
      slug: 'prompt-engineering',
      order: 5,
    },
    {
      id: 'multimodal-features',
      title: 'Using Multimodal Features',
      description: 'Work with images, code, and other media types in Gemini.',
      isGated: true,
      slug: 'multimodal-features',
      order: 6,
    },
    {
      id: 'practical-applications',
      title: 'Practical Applications',
      description: 'Real-world use cases and examples for different professions.',
      isGated: true,
      slug: 'practical-applications',
      order: 7,
    },
    {
      id: 'advanced-techniques',
      title: 'Advanced Techniques',
      description: 'Take your Gemini AI skills to the next level with advanced strategies.',
      isGated: true,
      slug: 'advanced-techniques',
      order: 8,
    },
  ];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What is Gemini AI and how does it differ from other AI assistants?",
      answer: "Gemini AI is Google's most advanced AI system, designed from the ground up to be multimodal—meaning it can understand and work with text, images, code, audio, and video simultaneously. Unlike many other AI assistants that were primarily built for text and later adapted for other media, Gemini's native multimodality allows for more natural and comprehensive interactions across different types of information."
    },
    {
      question: "Do I need to pay to use Gemini AI?",
      answer: "Gemini AI offers both free and paid tiers. The free version (powered by Gemini Pro) provides access to most core features and is suitable for many everyday tasks. Gemini Advanced, available through a Google One AI Premium subscription ($19.99/month), offers access to the more powerful Gemini Ultra model, higher usage limits, and additional features."
    },
    {
      question: "How do I access Gemini AI?",
      answer: "You can access Gemini AI through multiple channels: the dedicated Gemini web interface (gemini.google.com), the Gemini mobile app (Android and iOS), directly in Google Chrome via the sidebar, through Google Workspace applications, or via the Gemini API for developers. Each access method requires a Google account."
    },
    {
      question: "Can Gemini AI understand and generate images?",
      answer: "Yes, Gemini AI has strong multimodal capabilities that allow it to understand, analyze, and respond to images. You can upload images and ask questions about them, request analysis, or use them as context for further discussion. Gemini can also generate images through integration with Google's Imagen image generation system."
    },
    {
      question: "Is Gemini AI good for coding and programming?",
      answer: "Yes, Gemini AI excels at coding tasks. It can write code in multiple programming languages, debug existing code, explain code functionality, convert code between languages, and help with software development across the entire development lifecycle. Gemini Ultra (available in the paid tier) performs particularly well on complex programming tasks."
    },
    {
      question: "How does Gemini AI compare to ChatGPT?",
      answer: "Gemini AI and ChatGPT are both powerful AI assistants with different strengths. Gemini excels in multimodal tasks (especially with its native integration of text, images, and code), Google ecosystem integration, and certain reasoning tasks. ChatGPT may have advantages in certain text generation scenarios and has a larger ecosystem of plugins. The performance difference varies by specific task and use case."
    },
    {
      question: "Can I use Gemini AI for research?",
      answer: "Yes, Gemini AI is an excellent research assistant. It can help summarize information, explore topics from multiple perspectives, analyze data, find patterns, and generate insights. When using Gemini for research, it's important to verify important information from authoritative sources, as with any AI system."
    },
    {
      question: "What are the limitations of Gemini AI?",
      answer: "Like all AI systems, Gemini has limitations. It may occasionally provide inaccurate information (hallucinations), has knowledge cutoff dates after which it lacks information, can't browse the web independently in all versions, may struggle with highly specialized domain knowledge, and has usage limits based on your subscription tier. Understanding these limitations helps set appropriate expectations."
    }
  ];

  // Schema markup data
  const schemaData = {
    title: "How to Use Gemini AI: Complete Beginner's Guide",
    description: "Learn how to use Google's Gemini AI with our comprehensive step-by-step guide for beginners. Master multimodal capabilities, prompt engineering, and practical applications.",
    datePublished: "2025-04-15T08:00:00+00:00",
    dateModified: "2025-04-15T08:00:00+00:00",
    author: {
      name: "How-ToGuides.com Team",
      type: "Organization"
    },
    image: "https://www.how-toguides.com/images/gemini-ai-guide-hero.jpg",
    steps: modules.map((module, index) => ({
      name: `Module ${index + 1}: ${module.title}`,
      text: module.description,
      url: `https://www.how-toguides.com/guides/gemini-ai-for-beginners/modules/${module.slug}`
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup guide={schemaData} faq={faqData} />
      
      <div className="guide-page gemini-theme">
        <div className="container mx-auto px-4 py-8">
          {/* Guide Header */}
          <div className="guide-header">
            <div className="badge-with-icon badge-primary">
              <i className="fas fa-bolt icon-xs"></i>
              <span>New for 2025</span>
            </div>
            
            <h1 className="guide-title">How to Use Gemini AI: Complete Beginner's Guide</h1>
            <p className="guide-subtitle">
              Master Google's powerful multimodal AI assistant with our comprehensive, step-by-step tutorial
            </p>
            
            <div className="tag-container">
              <span className="tag">Beginner-Friendly</span>
              <span className="tag">Updated April 2025</span>
              <span className="tag">20-Minute Read</span>
              <span className="tag">Google AI</span>
            </div>
            
            <div className="guide-hero-image image-frame">
              <Image 
                src="/images/gemini-ai-guide-hero.jpg" 
                alt="Gemini AI interface showing multimodal capabilities with text and image processing" 
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
                    <i className="fas fa-robot icon-md icon-primary"></i>
                    <span>What You'll Learn in This Guide</span>
                  </span>
                </h2>
                
                <p>
                  Google's Gemini AI represents a significant leap forward in artificial intelligence, offering powerful multimodal capabilities that can transform how you work, create, and solve problems. This comprehensive guide will take you from complete beginner to confident Gemini user through clear, step-by-step instructions and practical examples.
                </p>
                
                <div className="callout callout-info">
                  <div className="callout-title">
                    <i className="fas fa-info-circle"></i>
                    <span>What is Gemini AI?</span>
                  </div>
                  <p className="callout-content">
                    Gemini AI is Google's most advanced artificial intelligence system, designed to understand and work with multiple types of information simultaneously—including text, images, code, audio, and video. It's available in different versions (Pro, Ultra, Nano) with varying capabilities and can be accessed through multiple platforms.
                  </p>
                </div>
                
                <p>
                  Whether you're a student, professional, developer, or creative, this guide will help you harness Gemini AI's full potential for your specific needs. We'll cover everything from basic setup to advanced techniques, with special focus on Gemini's unique multimodal capabilities that set it apart from other AI assistants.
                </p>
                
                <h3>
                  <span className="icon-with-text">
                    <i className="fas fa-check-circle icon-sm icon-success"></i>
                    <span>By the end of this guide, you'll be able to:</span>
                  </span>
                </h3>
                
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Access Gemini Across Devices</div>
                      <div className="feature-list-description">Set up and use Gemini AI on web, mobile, and within Google Workspace</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Understand Model Differences</div>
                      <div className="feature-list-description">Know when to use Gemini Pro, Ultra, or Nano for different tasks</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Master Multimodal Interactions</div>
                      <div className="feature-list-description">Work with text, images, and code simultaneously for powerful results</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Write Effective Prompts</div>
                      <div className="feature-list-description">Craft prompts that generate exactly what you need</div>
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <i className="fas fa-check-circle feature-list-icon"></i>
                    <div className="feature-list-content">
                      <div className="feature-list-title">Apply Practical Use Cases</div>
                      <div className="feature-list-description">Use Gemini for research, content creation, coding, and problem-solving</div>
                    </div>
                  </li>
                </ul>
                
                <div className="fancy-quote">
                  Gemini AI has fundamentally changed how I approach complex problems. Its ability to understand both text and visual information simultaneously has made it an indispensable tool in my research workflow.
                  <span className="fancy-quote-author">— Dr. Michael Chen, Data Scientist</span>
                </div>
                
                <h2>
                  <span className="icon-with-text">
                    <i className="fas fa-star icon-md icon-primary"></i>
                    <span>Why Learn Gemini AI?</span>
                  </span>
                </h2>
                
                <p>
                  As Google's most advanced AI system, Gemini offers unique advantages that make it worth mastering:
                </p>
                
                <div className="section-divider">
                  <div className="section-divider-line"></div>
                  <i className="fas fa-layer-group section-divider-icon"></i>
                  <div className="section-divider-line"></div>
                </div>
                
                <h3>
                  <span className="icon-with-text">
                    <i className="fas fa-cubes icon-sm icon-primary"></i>
                    <span>Multimodal by Design</span>
                  </span>
                </h3>
                
                <p>
                  Unlike many AI systems that were primarily designed for text and later adapted for other media, Gemini was built from the ground up to understand and work with multiple types of information simultaneously—text, images, code, audio, and more.
                </p>
                
                <div className="callout callout-tip">
                  <div className="callout-title">
                    <i className="fas fa-lightbulb"></i>
                    <span>Pro Tip</span>
                  </div>
                  <p className="callout-content">
                    When working with Gemini's multimodal features, try combining different types of inputs in a single prompt. For example, upload an image of code with errors and ask Gemini to both explain the code and fix the bugs.
                  </p>
                </div>
                
                <h3>
                  <span className="icon-with-text">
                    <i className="fas fa-link icon-sm icon-primary"></i>
                    <span>Deep Google Integration</span>
                  </span>
                </h3>
                
                <p>
                  Gemini seamlessly connects with Google's ecosystem of services, including Gmail, Docs, Drive, and Search, creating powerful workflows that enhance productivity.
                </p>
                
                <h3>
                  <span className="icon-with-text">
                    <i className="fas fa-rocket icon-sm icon-primary"></i>
                    <span>State-of-the-Art Capabilities</span>
                  </span>
                </h3>
                
                <p>
                  With advanced reasoning, creative abilities, and technical skills, Gemini represents the cutting edge of what AI assistants can accomplish in 2025.
                </p>
                
                <h3>
                  <span className="icon-with-text">
                    <i className="fas fa-mobile-alt icon-sm icon-primary"></i>
                    <span>Accessibility Across Devices</span>
                  </span>
                </h3>
                
                <p>
                  Available on web, mobile, and even directly in Google Chrome, Gemini meets you where you work with consistent capabilities.
                </p>
                
                <div className="section-divider">
                  <div className="section-divider-line"></div>
                  <i className="fas fa-book section-divider-icon"></i>
                  <div className="section-divider-line"></div>
                </div>
                
                <h2>
                  <span className="icon-with-text">
                    <i className="fas fa-graduation-cap icon-md icon-primary"></i>
                    <span>How This Guide Is Structured</span>
                  </span>
                </h2>
                
                <p>
                  We've organized this guide into eight comprehensive modules that progress from fundamentals to advanced applications. The first three modules are freely accessible to help you get started, while the remaining five modules are premium content that dive deeper into mastering Gemini AI.
                </p>
                
                <div className="progress-steps">
                  {modules.map((module, index) => (
                    <div key={module.id} className="progress-step">
                      <div className={`progress-step-indicator ${index < 3 ? 'completed' : index === 3 ? 'active' : ''}`}></div>
                      <div className="progress-step-label">{index + 1}</div>
                    </div>
                  ))}
                </div>
                
                <p>
                  Each module builds on the previous one, but you can also jump to specific sections based on your interests and needs. We recommend at least reviewing the Introduction and Getting Started modules if you're new to Gemini AI.
                </p>
                
                <p>
                  Ready to begin your journey with one of the world's most advanced AI assistants? Let's dive in!
                </p>
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
                      <Link href={`/guides/gemini-ai-for-beginners/modules/${module.slug}`}>
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
                  <i className="fas fa-brain feature-icon"></i>
                </div>
                <h2 className="cta-title">Ready to Master Gemini AI?</h2>
                <p className="cta-description">
                  Start with our free modules to learn the basics, then unlock the premium content to become a Gemini AI expert. Our step-by-step approach makes it easy to learn at your own pace.
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
                  guideSlug="gemini-ai-for-beginners"
                  isSubscribed={false}
                />
                
                {/* Author Section */}
                <div className="author-section">
                  <div className="author-header">
                    <div className="author-avatar"></div>
                    <div>
                      <h3 className="author-name">
                        <span className="icon-with-text">
                          <i className="fas fa-users icon-sm icon-primary"></i>
                          <span>Written by How-ToGuides.com Team</span>
                        </span>
                      </h3>
                      <p className="author-title">AI Technology Experts</p>
                    </div>
                  </div>
                  <p className="author-bio">
                    Our team of AI specialists has been working with Google's AI technologies since their early releases, providing expert guidance on leveraging these tools for maximum productivity.
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
                      <span>Get the Gemini AI Mastery Kit</span>
                    </span>
                  </h3>
                  <p className="lead-form-description-standard">Subscribe to receive our free starter kit with prompt templates, multimodal examples, and exclusive tips for Google's Gemini AI.</p>
                  <LeadCaptureForm 
                    formId="gemini-guide-sidebar"
                    guideName="Gemini AI for Beginners"
                    signupSource="sidebar"
                    buttonText="Send Me the Mastery Kit"
                  />
                </div>
                
                {/* Tooltip Example */}
                <div className="callout callout-tip">
                  <div className="callout-title">
                    <i className="fas fa-lightbulb"></i>
                    <span>Pro Tip</span>
                  </div>
                  <p className="callout-content">
                    Gemini AI works best when you're specific about what you need. Try using <span className="tooltip">multimodal prompts<span className="tooltip-text">Prompts that combine text with images, code, or other media types</span></span> to get the most accurate and helpful responses.
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

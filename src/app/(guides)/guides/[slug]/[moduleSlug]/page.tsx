import { generateModuleMetadata } from '@/lib/metadata';

export { generateModuleMetadata as generateMetadata };

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/lead-generation/LeadCaptureForm';
import { ContentUnlockForm } from '@/components/lead-generation/ContentUnlockForm';
import { ModuleNavigation } from '@/components/guides/ModuleNavigation';
import { ExpandableSection } from '@/components/guides/ExpandableSection';
import { KnowledgeCheck } from '@/components/guides/KnowledgeCheck';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// This would normally come from Contentful
const getGuideData = (slug) => {
  const guides = {
    'chatgpt-for-beginners': {
      title: "How to Use ChatGPT for Beginners: Complete 2025 Guide",
      description: "Learn how to use ChatGPT effectively with this comprehensive beginner's guide.",
      formId: "chatgpt-form",
      modules: [
        { id: "1", title: "Introduction to ChatGPT", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Creating Your ChatGPT Account", order: 2, isGated: false, slug: "account-setup" },
        { id: "3", title: "Navigating the ChatGPT Interface", order: 3, isGated: false, slug: "interface" },
        { id: "4", title: "Writing Your First Prompts", order: 4, isGated: true, slug: "first-prompts" },
        { id: "5", title: "Understanding Different ChatGPT Models", order: 5, isGated: true, slug: "models" },
        { id: "6", title: "ChatGPT for Content Creation", order: 6, isGated: true, slug: "content-creation" },
        { id: "7", title: "Troubleshooting Common Issues", order: 7, isGated: true, slug: "troubleshooting" },
        { id: "8", title: "Frequently Asked Questions", order: 8, isGated: true, slug: "faq" }
      ],
      author: {
        name: "Alex Johnson",
        role: "AI Content Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "25 min read",
      lastUpdated: "April 15, 2025"
    },
    'midjourney-for-beginners': {
      title: "How to Use Midjourney: Step-by-Step Beginner's Guide",
      description: "Master Midjourney with this comprehensive guide.",
      formId: "midjourney-form",
      modules: [
        { id: "1", title: "Introduction to Midjourney", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Setting Up Discord & Midjourney", order: 2, isGated: false, slug: "setup" },
        { id: "3", title: "Understanding Midjourney Commands", order: 3, isGated: false, slug: "commands" },
        { id: "4", title: "Writing Effective Prompts", order: 4, isGated: true, slug: "prompts" },
        { id: "5", title: "Using Parameters & Settings", order: 5, isGated: true, slug: "parameters" },
        { id: "6", title: "Advanced Techniques", order: 6, isGated: true, slug: "advanced-techniques" },
        { id: "7", title: "Troubleshooting & FAQs", order: 7, isGated: true, slug: "troubleshooting" }
      ],
      author: {
        name: "Maya Rodriguez",
        role: "Digital Artist & AI Specialist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "30 min read",
      lastUpdated: "April 10, 2025"
    },
    'dalle-for-beginners': {
      title: "How to Use DALL-E: Complete Tutorial for Beginners",
      description: "Get started with DALL-E and learn how to create amazing AI-generated images.",
      formId: "dalle-form",
      modules: [
        { id: "1", title: "Introduction to DALL-E", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Creating Your OpenAI Account", order: 2, isGated: false, slug: "account-setup" },
        { id: "3", title: "Navigating the DALL-E Interface", order: 3, isGated: false, slug: "interface" },
        { id: "4", title: "Writing Effective Prompts", order: 4, isGated: true, slug: "prompts" },
        { id: "5", title: "Image Editing with DALL-E", order: 5, isGated: true, slug: "editing" },
        { id: "6", title: "Advanced Techniques", order: 6, isGated: true, slug: "advanced-techniques" },
        { id: "7", title: "Troubleshooting & FAQs", order: 7, isGated: true, slug: "troubleshooting" }
      ],
      author: {
        name: "Jordan Chen",
        role: "AI Art Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "20 min read",
      lastUpdated: "April 5, 2025"
    },
    'gemini-ai-for-beginners': {
      title: "How to Use Gemini AI: Beginner's Tutorial",
      description: "Explore Google's Gemini AI with this comprehensive guide.",
      formId: "gemini-form",
      modules: [
        { id: "1", title: "Introduction to Gemini AI", order: 1, isGated: false, slug: "introduction" },
        { id: "2", title: "Setting Up Gemini AI", order: 2, isGated: false, slug: "setup" },
        { id: "3", title: "Understanding Multimodal Capabilities", order: 3, isGated: false, slug: "multimodal" },
        { id: "4", title: "Text Generation with Gemini", order: 4, isGated: true, slug: "text-generation" },
        { id: "5", title: "Image Understanding", order: 5, isGated: true, slug: "image-understanding" },
        { id: "6", title: "Advanced Applications", order: 6, isGated: true, slug: "advanced-applications" },
        { id: "7", title: "Troubleshooting & FAQs", order: 7, isGated: true, slug: "troubleshooting" }
      ],
      author: {
        name: "Priya Sharma",
        role: "Google AI Specialist",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      },
      readingTime: "22 min read",
      lastUpdated: "April 18, 2025"
    }
  };
  
  return guides[slug] || null;
};

// This would normally come from Contentful
const getModuleContent = (guideSlug, moduleSlug) => {
  // For demonstration, we'll only have detailed content for the ChatGPT guide
  if (guideSlug === 'chatgpt-for-beginners') {
    const moduleContents = {
      'introduction': {
        title: "Introduction to ChatGPT",
        content: `
          <h2>What is ChatGPT?</h2>
          <p>ChatGPT is an advanced AI language model developed by OpenAI, designed to understand and generate human-like text based on the prompts it receives. Released in November 2022, ChatGPT quickly became one of the fastest-growing consumer applications in history, reaching over 100 million users within just two months of its launch.</p>
          
          <p>At its core, ChatGPT is built on a large language model (LLM) that has been trained on vast amounts of text data from the internet, books, articles, and other sources. This training allows it to understand context, generate coherent responses, and assist with a wide range of tasks—from answering questions and writing content to helping with coding and creative projects.</p>
          
          <h2>How ChatGPT Works</h2>
          <p>ChatGPT operates through a process called "generative AI," which means it can create new content rather than simply retrieving pre-written answers. When you enter a prompt, ChatGPT:</p>
          
          <ol>
            <li>Processes your input to understand the context and intent</li>
            <li>Draws on its training data to formulate a relevant response</li>
            <li>Generates text that attempts to be helpful, harmless, and honest</li>
            <li>Presents this response in a conversational format</li>
          </ol>
          
          <p>The model maintains context throughout a conversation, allowing for back-and-forth exchanges that build on previous messages. This creates a more natural and useful interaction compared to traditional search engines or simple chatbots.</p>
        `,
        expandableSections: [
          {
            title: "The Evolution of ChatGPT",
            content: `
              <p>Since its initial release, ChatGPT has undergone several significant updates:</p>
              
              <ul>
                <li><strong>ChatGPT (GPT-3.5)</strong>: The original release, based on the GPT-3.5 architecture</li>
                <li><strong>ChatGPT Plus</strong>: A subscription service launched in February 2023, offering priority access, faster response times, and access to newer models</li>
                <li><strong>GPT-4</strong>: Released in March 2023, offering improved reasoning, creativity, and more nuanced instructions following</li>
                <li><strong>GPT-4 Turbo</strong>: An enhanced version with a larger context window and more recent knowledge</li>
                <li><strong>GPT-4o</strong>: Released in 2024, offering significantly faster response times and improved multimodal capabilities</li>
              </ul>
              
              <p>Each iteration has brought improvements in accuracy, capabilities, and user experience, making ChatGPT increasingly versatile and powerful.</p>
            `
          },
          {
            title: "ChatGPT vs. Other AI Assistants",
            content: `
              <p>While ChatGPT is one of the most popular AI assistants, it exists in a growing ecosystem of similar tools. Here's how it compares to some alternatives:</p>
              
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>ChatGPT</th>
                    <th>Google Gemini</th>
                    <th>Claude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>OpenAI</td>
                    <td>Google</td>
                    <td>Anthropic</td>
                  </tr>
                  <tr>
                    <td>Base Model</td>
                    <td>GPT-3.5/4/4o</td>
                    <td>Gemini</td>
                    <td>Claude</td>
                  </tr>
                  <tr>
                    <td>Strengths</td>
                    <td>Versatility, coding, creative writing</td>
                    <td>Web search, Google integration</td>
                    <td>Long context, nuanced responses</td>
                  </tr>
                  <tr>
                    <td>Free Tier</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              
              <p>Each assistant has its own strengths and limitations, and many users employ multiple tools depending on their specific needs.</p>
            `
          }
        ],
        knowledgeChecks: [
          {
            question: "What is ChatGPT?",
            options: [
              "A search engine that finds answers on the internet",
              "An AI language model that generates text based on prompts",
              "A database of pre-written responses to common questions",
              "A voice assistant like Siri or Alexa"
            ],
            correctAnswer: 1,
            explanation: "ChatGPT is an AI language model developed by OpenAI that generates human-like text based on the prompts it receives. Unlike a search engine, it creates new content rather than retrieving existing information."
          },
          {
            question: "Which of the following is NOT a version of ChatGPT?",
            options: [
              "GPT-3.5",
              "GPT-4",
              "GPT-4o",
              "GPT-5"
            ],
            correctAnswer: 3,
            explanation: "As of 2025, GPT-5 has not been released. The main versions of ChatGPT include GPT-3.5, GPT-4, GPT-4 Turbo, and GPT-4o."
          }
        ]
      },
      'account-setup': {
        title: "Creating Your ChatGPT Account",
        content: `
          <h2>Setting Up Your ChatGPT Account</h2>
          <p>Before you can start using ChatGPT, you'll need to create an OpenAI account. The process is straightforward and takes just a few minutes. Follow these steps to get started:</p>
          
          <h3>Step 1: Visit the ChatGPT Website</h3>
          <p>Open your web browser and go to <a href="https://chat.openai.com" target="_blank">chat.openai.com</a>. This is the official website for ChatGPT.</p>
          
          <h3>Step 2: Sign Up for an Account</h3>
          <p>On the ChatGPT homepage, you'll see a "Sign up" button. Click on it to begin the registration process. You'll be presented with several options for creating your account:</p>
          
          <ul>
            <li><strong>Email and Password</strong>: Enter your email address and create a secure password</li>
            <li><strong>Google Account</strong>: Sign up using your existing Google account</li>
            <li><strong>Microsoft Account</strong>: Sign up using your existing Microsoft account</li>
            <li><strong>Apple ID</strong>: Sign up using your Apple ID</li>
          </ul>
          
          <p>Choose the option that's most convenient for you. For this tutorial, we'll use the email and password method.</p>
          
          <h3>Step 3: Verify Your Email</h3>
          <p>After entering your email and creating a password, OpenAI will send a verification link to your email address. Check your inbox (and spam folder if necessary) for an email from OpenAI, and click the verification link to confirm your account.</p>
          
          <h3>Step 4: Complete Your Profile</h3>
          <p>Once your email is verified, you may be asked to provide some additional information to complete your profile, such as your name. Fill in the required fields and continue.</p>
          
          <h3>Step 5: Agree to Terms and Policies</h3>
          <p>Review and accept OpenAI's terms of service and privacy policy. It's important to understand how your data will be used when interacting with ChatGPT.</p>
        `,
        expandableSections: [
          {
            title: "Free vs. Plus: Understanding ChatGPT Subscription Options",
            content: `
              <p>ChatGPT offers both free and paid subscription options:</p>
              
              <h4>ChatGPT Free</h4>
              <ul>
                <li>Access to the GPT-3.5 model</li>
                <li>Standard response times</li>
                <li>Limited to shorter conversations</li>
                <li>May experience limited availability during peak times</li>
                <li>Basic features only</li>
                <li>Cost: Free</li>
              </ul>
              
              <h4>ChatGPT Plus</h4>
              <ul>
                <li>Access to GPT-4 and GPT-4o models</li>
                <li>Priority access during peak times</li>
                <li>Faster response times</li>
                <li>Support for longer conversations</li>
                <li>Access to advanced features and plugins</li>
                <li>Cost: $20/month (as of 2025)</li>
              </ul>
              
              <p>For most beginners, the free tier is sufficient to learn and experiment with ChatGPT. You can always upgrade to Plus later if you need the advanced features or find yourself using ChatGPT extensively.</p>
            `
          },
          {
            title: "Account Security Best Practices",
            content: `
              <p>Protecting your ChatGPT account is important, especially if you plan to use it for professional or sensitive conversations. Here are some security best practices:</p>
              
              <ol>
                <li><strong>Use a Strong, Unique Password</strong>: Create a password that's at least 12 characters long, with a mix of uppercase and lowercase letters, numbers, and special characters.</li>
                
                <li><strong>Enable Two-Factor Authentication (2FA)</strong>: Add an extra layer of security by enabling 2FA in your account settings. This requires a second verification step when logging in.</li>
                
                <li><strong>Be Cautious with Sensitive Information</strong>: Avoid sharing highly sensitive personal information (like social security numbers or financial details) in your ChatGPT conversations.</li>
                
                <li><strong>Regularly Review Your Conversation History</strong>: Periodically check your conversation history and delete any sensitive conversations you no longer need.</li>
                
                <li><strong>Log Out on Shared Devices</strong>: If you use ChatGPT on a shared or public computer, always log out when you're finished.</li>
              </ol>
              
              <p>Taking these precautions will help ensure your ChatGPT account remains secure and your conversations private.</p>
            `
          }
        ],
        knowledgeChecks: [
          {
            question: "What is required to create a ChatGPT account?",
            options: [
              "A credit card for payment",
              "A valid email address",
              "A phone number for verification",
              "A social media account"
            ],
            correctAnswer: 1,
            explanation: "To create a ChatGPT account, you need a valid email address for verification. While you can sign up using Google, Microsoft, or Apple accounts, the fundamental requirement is an email for verification. A credit card is only needed for ChatGPT Plus subscriptions."
          },
          {
            question: "Which of the following is NOT a sign-up option for ChatGPT?",
            options: [
              "Email and password",
              "Google account",
              "Microsoft account",
              "Twitter account"
            ],
            correctAnswer: 3,
            explanation: "ChatGPT offers sign-up options using email and password, Google account, Microsoft account, and Apple ID. Twitter (now X) is not currently offered as a sign-up option for ChatGPT."
          }
        ]
      },
      'interface': {
        title: "Navigating the ChatGPT Interface",
        content: `
          <h2>Understanding the ChatGPT Interface</h2>
          <p>Once you've created your account and logged in, you'll be presented with the ChatGPT interface. Understanding this interface is key to using ChatGPT effectively. Let's explore the main components:</p>
          
          <h3>The Main Chat Area</h3>
          <p>The central part of the screen is the chat area, where your conversation with ChatGPT takes place. This is where:</p>
          <ul>
            <li>You type your prompts and questions</li>
            <li>ChatGPT displays its responses</li>
            <li>The entire conversation history is visible</li>
          </ul>
          
          <p>The chat follows a familiar messaging format, with your messages typically appearing on the right and ChatGPT's responses on the left.</p>
          
          <h3>The Prompt Input Field</h3>
          <p>At the bottom of the screen is the prompt input field, where you type your questions, instructions, or requests for ChatGPT. This field expands as you type longer prompts. To send your prompt, you can either:</p>
          <ul>
            <li>Press the Enter key (if you have this setting enabled)</li>
            <li>Click the paper airplane icon</li>
            <li>Use Ctrl+Enter (or Cmd+Enter on Mac)</li>
          </ul>
          
          <h3>The Sidebar</h3>
          <p>On the left side of the screen is the sidebar, which contains several important elements:</p>
          
          <h4>New Chat Button</h4>
          <p>At the top of the sidebar, you'll find the "New Chat" button. Clicking this starts a fresh conversation with ChatGPT, separate from your previous chats.</p>
          
          <h4>Chat History</h4>
          <p>Below the New Chat button is your chat history, showing previous conversations organized by date. You can:</p>
          <ul>
            <li>Click on any past conversation to revisit it</li>
            <li>Rename conversations for better organization</li>
            <li>Delete conversations you no longer need</li>
          </ul>
          
          <h4>Settings and Account Options</h4>
          <p>At the bottom of the sidebar, you'll find:</p>
          <ul>
            <li>Your account name and subscription status</li>
            <li>Settings menu for customizing your ChatGPT experience</li>
            <li>Help and FAQ resources</li>
            <li>Logout option</li>
          </ul>
        `,
        expandableSections: [
          {
            title: "Customizing Your ChatGPT Experience",
            content: `
              <p>ChatGPT offers several settings to customize your experience. To access these settings, click on your account name at the bottom of the sidebar and select "Settings" from the menu.</p>
              
              <h4>General Settings</h4>
              <ul>
                <li><strong>Theme</strong>: Choose between light mode, dark mode, or system default</li>
                <li><strong>Clear all chats</strong>: Delete your entire chat history at once</li>
                <li><strong>Data controls</strong>: Manage how your data is used for training and improvement</li>
              </ul>
              
              <h4>Chat Settings</h4>
              <ul>
                <li><strong>Send messages with Enter key</strong>: Toggle whether pressing Enter sends your message or creates a new line</li>
                <li><strong>Suggested responses</strong>: Enable or disable suggested follow-up questions</li>
                <li><strong>Chat history and training</strong>: Control whether your chats are saved and used for training</li>
              </ul>
              
              <h4>Beta Features</h4>
              <p>OpenAI frequently adds experimental features to ChatGPT. Check this section regularly to try out new capabilities before they're fully released.</p>
            `
          },
          {
            title: "Understanding ChatGPT Models",
            content: `
              <p>When using ChatGPT, you can choose between different AI models, each with its own capabilities and limitations. The model selector is located at the top of the chat interface.</p>
              
              <h4>GPT-3.5</h4>
              <ul>
                <li>Available to all users (free and Plus)</li>
                <li>Faster responses than GPT-4</li>
                <li>Good for general questions and basic tasks</li>
                <li>Less nuanced understanding compared to GPT-4</li>
                <li>Smaller context window (limited memory of conversation)</li>
              </ul>
              
              <h4>GPT-4 (Plus subscribers only)</h4>
              <ul>
                <li>More advanced reasoning capabilities</li>
                <li>Better at complex instructions and nuanced tasks</li>
                <li>Improved accuracy and reduced hallucinations</li>
                <li>Larger context window (can remember more of your conversation)</li>
                <li>Slower response times compared to GPT-3.5</li>
              </ul>
              
              <h4>GPT-4o (Plus subscribers only)</h4>
              <ul>
                <li>OpenAI's most advanced model as of 2025</li>
                <li>Combines the speed of GPT-3.5 with the capabilities of GPT-4</li>
                <li>Enhanced multimodal capabilities (text, images, audio)</li>
                <li>Improved reasoning and instruction following</li>
                <li>Optimized for conversational use</li>
              </ul>
              
              <p>For beginners, GPT-3.5 is perfectly adequate for learning how to use ChatGPT. As you become more familiar with the system and develop more complex needs, you might consider upgrading to Plus for access to the more advanced models.</p>
            `
          }
        ],
        knowledgeChecks: [
          {
            question: "How do you start a new conversation in ChatGPT?",
            options: [
              "Refresh the browser page",
              "Click the 'New Chat' button in the sidebar",
              "Type '/new' in the prompt field",
              "Delete the current conversation first"
            ],
            correctAnswer: 1,
            explanation: "To start a new conversation in ChatGPT, click the 'New Chat' button located at the top of the sidebar on the left side of the interface. This creates a fresh conversation while preserving your previous chats in the history."
          },
          {
            question: "Which of these is NOT a feature available in the ChatGPT sidebar?",
            options: [
              "Chat history",
              "Settings menu",
              "File upload option",
              "New Chat button"
            ],
            correctAnswer: 2,
            explanation: "The file upload option is not located in the sidebar. File uploads (for Plus users with GPT-4 or GPT-4o) are available in the main chat interface near the prompt input field. The sidebar contains the New Chat button, chat history, and settings/account options."
          }
        ]
      },
      'first-prompts': {
        title: "Writing Your First Prompts",
        isGated: true,
        content: `
          <h2>The Art of Prompt Writing</h2>
          <p>Learning to write effective prompts is perhaps the most important skill for getting the most out of ChatGPT. A well-crafted prompt can make the difference between a vague, unhelpful response and a detailed, accurate answer that perfectly addresses your needs.</p>
          
          <p>In this module, we'll explore the principles of effective prompt writing and provide practical examples to help you master this essential skill.</p>
          
          <h3>Basic Prompt Structure</h3>
          <p>While there's no single "correct" way to write a prompt, most effective prompts include these elements:</p>
          
          <ol>
            <li><strong>Clear instruction</strong>: What exactly do you want ChatGPT to do?</li>
            <li><strong>Necessary context</strong>: What background information is needed?</li>
            <li><strong>Format specification</strong>: How should the response be structured?</li>
            <li><strong>Scope or constraints</strong>: Any limitations or specific focus areas?</li>
          </ol>
          
          <p>Here's a simple template you can adapt for many situations:</p>
          
          <pre>
          [Instruction] about [Topic]. Include [Specific elements]. Format as [Desired format]. Keep it [Scope/Constraints].
          </pre>
          
          <h3>Examples of Basic Prompts</h3>
          
          <h4>Example 1: Simple Question</h4>
          <p><strong>Poor prompt:</strong> "Mars"</p>
          <p><strong>Better prompt:</strong> "What are the key facts about Mars, including its size, distance from the Sun, and notable features?"</p>
          
          <h4>Example 2: Writing Request</h4>
          <p><strong>Poor prompt:</strong> "Write about climate change"</p>
          <p><strong>Better prompt:</strong> "Write a 300-word explanation of climate change for high school students. Include the main causes, potential consequences, and three actions individuals can take to help."</p>
          
          <h4>Example 3: Problem Solving</h4>
          <p><strong>Poor prompt:</strong> "Help with math"</p>
          <p><strong>Better prompt:</strong> "I need to solve this quadratic equation: 2x² + 5x - 3 = 0. Please show me the step-by-step solution using the quadratic formula."</p>
        `,
        expandableSections: [
          {
            title: "Advanced Prompting Techniques",
            content: `
              <p>Once you're comfortable with basic prompts, you can explore these advanced techniques to get even better results:</p>
              
              <h4>Role Prompting</h4>
              <p>Ask ChatGPT to adopt a specific role or perspective:</p>
              <pre>
              "Act as an experienced [profession/role] and help me with [task]."
              </pre>
              <p><strong>Example:</strong> "Act as an experienced financial advisor and help me create a budget plan for a family of four with a monthly income of $6,000."</p>
              
              <h4>Chain-of-Thought Prompting</h4>
              <p>Encourage step-by-step reasoning:</p>
              <pre>
              "Think through this problem step by step: [problem]"
              </pre>
              <p><strong>Example:</strong> "Think through this problem step by step: If a shirt originally costs $25 and is discounted by 30%, then further discounted by an additional 15%, what is the final price?"</p>
              
              <h4>Few-Shot Learning</h4>
              <p>Provide examples of what you want:</p>
              <pre>
              "I want you to [task]. Here are some examples:
              Example 1: [input] → [desired output]
              Example 2: [input] → [desired output]
              Now do the same for: [new input]"
              </pre>
              <p><strong>Example:</strong> "I want you to rewrite sentences to be more engaging. Here are some examples:<br>
              Example 1: 'The cat sat on the mat.' → 'The sleek feline lounged lazily on the weathered welcome mat.'<br>
              Example 2: 'He went to the store.' → 'He dashed to the corner store, dodging raindrops along the way.'<br>
              Now do the same for: 'She read a book.'"</p>
            `
          },
          {
            title: "Common Prompt Mistakes to Avoid",
            content: `
              <p>Even experienced ChatGPT users sometimes make these common prompting mistakes:</p>
              
              <h4>Being Too Vague</h4>
              <p><strong>Problem:</strong> Vague prompts like "Tell me about history" or "Help me with marketing" are too broad.</p>
              <p><strong>Solution:</strong> Be specific about what aspect of the topic you're interested in and what kind of help you need.</p>
              
              <h4>Overloading with Instructions</h4>
              <p><strong>Problem:</strong> Cramming too many requests into one prompt can overwhelm the model.</p>
              <p><strong>Solution:</strong> Break complex tasks into a series of simpler prompts, building on previous responses.</p>
              
              <h4>Not Providing Enough Context</h4>
              <p><strong>Problem:</strong> Assuming ChatGPT knows your specific situation or background information.</p>
              <p><strong>Solution:</strong> Provide relevant context, especially for personalized advice or specific scenarios.</p>
              
              <h4>Unclear Formatting Requests</h4>
              <p><strong>Problem:</strong> Asking for content in a particular format without specifying the details.</p>
              <p><strong>Solution:</strong> Clearly describe the format you want, or better yet, provide an example of the desired output structure.</p>
              
              <h4>Not Iterating and Refining</h4>
              <p><strong>Problem:</strong> Giving up if the first response isn't exactly what you wanted.</p>
              <p><strong>Solution:</strong> Treat prompting as a conversation—refine your request based on the initial response to get closer to your desired outcome.</p>
            `
          }
        ],
        knowledgeChecks: [
          {
            question: "Which of the following is the most effective prompt?",
            options: [
              "Tell me about dogs",
              "Write an essay",
              "Explain the benefits of regular exercise for adults, including physical and mental health advantages. Keep it under 300 words.",
              "AI technology"
            ],
            correctAnswer: 2,
            explanation: "The third option is the most effective prompt because it includes a clear instruction (explain the benefits of regular exercise), specifies the target audience (adults), includes specific elements to cover (physical and mental health advantages), and provides constraints (under 300 words)."
          },
          {
            question: "What is 'role prompting' in ChatGPT?",
            options: [
              "Asking ChatGPT to play a game with different characters",
              "Instructing ChatGPT to adopt a specific professional or expert perspective",
              "Creating a fictional scenario for entertainment purposes",
              "Assigning different topics to different chat sessions"
            ],
            correctAnswer: 1,
            explanation: "Role prompting is a technique where you ask ChatGPT to adopt a specific professional or expert perspective (e.g., 'Act as a financial advisor' or 'Respond as a history professor') to get responses with specialized knowledge and appropriate tone for that role."
          }
        ]
      }
    };
    
    return moduleContents[moduleSlug] || null;
  }
  
  // For other guides, we'll return a placeholder structure
  return {
    title: moduleSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    isGated: moduleSlug !== 'introduction' && moduleSlug !== 'setup' && moduleSlug !== 'interface' && moduleSlug !== 'commands' && moduleSlug !== 'account-setup' && moduleSlug !== 'multimodal',
    content: `<p>This is placeholder content for the ${moduleSlug} module of the ${guideSlug} guide. In the production version, this would contain comprehensive content about this topic.</p>`
  };
};

// Get the next and previous modules
const getAdjacentModules = (guide, currentModuleSlug) => {
  if (!guide || !guide.modules) return { prev: null, next: null };
  
  const sortedModules = [...guide.modules].sort((a, b) => a.order - b.order);
  const currentIndex = sortedModules.findIndex(module => module.slug === currentModuleSlug);
  
  return {
    prev: currentIndex > 0 ? sortedModules[currentIndex - 1] : null,
    next: currentIndex < sortedModules.length - 1 ? sortedModules[currentIndex + 1] : null
  };
};

export default function ModulePage({ params }) {
  const { slug, moduleSlug } = params;
  const guide = getGuideData(slug);
  
  if (!guide) {
    notFound();
  }
  
  const module = guide.modules.find(m => m.slug === moduleSlug);
  if (!module) {
    notFound();
  }
  
  const moduleContent = getModuleContent(slug, moduleSlug);
  const { prev, next } = getAdjacentModules(guide, moduleSlug);
  
  // In a real app, this would be determined by checking if the user has subscribed
  const isSubscribed = false;
  
  // Check if content should be gated
  const isContentGated = moduleContent?.isGated && !isSubscribed;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Module Header */}
      <div className="bg-slate-900 text-white py-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-2">
              <Link href={`/guides/${slug}`} className="text-slate-300 hover:text-white text-sm flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to {guide.title.split(':')[0]}
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{moduleContent?.title || module.title}</h1>
            <div className="flex items-center text-sm text-slate-300">
              <span className="mr-4">Module {module.order} of {guide.modules.length}</span>
              <span>{guide.readingTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
            {/* Module Navigation */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden sticky top-4">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h3 className="font-semibold">Guide Contents</h3>
              </div>
              <ModuleNavigation
                modules={guide.modules}
                currentModuleId={module.id}
                guideSlug={slug}
                isSubscribed={isSubscribed}
              />
            </div>
            
            {/* Lead Capture Form */}
            {!isContentGated && (
              <LeadCaptureForm
                formId={guide.formId || process.env.NEXT_PUBLIC_CONVERTKIT_GENERAL_FORM_ID || ''}
                guideName={guide.title.split(':')[0]}
                signupSource="module_sidebar"
                title={`Get Your Free ${guide.title.split(':')[0]} Kit`}
                description="Subscribe to receive cheat sheets, templates, and exclusive resources."
                buttonText="Get Free Kit"
              />
            )}
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {isContentGated ? (
              <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Premium Content</h2>
                <p className="mb-4">This module is part of our premium content. Subscribe to access this module and all other premium content in this guide.</p>
                
                <ContentUnlockForm
                  formId={guide.formId || process.env.NEXT_PUBLIC_CONVERTKIT_GENERAL_FORM_ID || ''}
                  guideName={guide.title.split(':')[0]}
                  moduleTitle={moduleContent?.title || module.title}
                  signupSource="content_gate"
                />
              </div>
            ) : (
              <>
                {/* Module Content */}
                <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: moduleContent?.content || '<p>Content coming soon</p>' }} />
                
                {/* Expandable Sections */}
                {moduleContent?.expandableSections && moduleContent.expandableSections.length > 0 && (
                  <div className="mb-8 space-y-4">
                    <h2 className="text-2xl font-bold">Additional Resources</h2>
                    {moduleContent.expandableSections.map((section, index) => (
                      <ExpandableSection
                        key={index}
                        title={section.title}
                        content={section.content}
                      />
                    ))}
                  </div>
                )}
                
                {/* Knowledge Checks */}
                {moduleContent?.knowledgeChecks && moduleContent.knowledgeChecks.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Knowledge Check</h2>
                    <div className="space-y-6">
                      {moduleContent.knowledgeChecks.map((check, index) => (
                        <KnowledgeCheck
                          key={index}
                          question={check.question}
                          options={check.options}
                          correctAnswer={check.correctAnswer}
                          explanation={check.explanation}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Module Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                  {prev ? (
                    <Button variant="outline" asChild>
                      <Link href={`/guides/${slug}/${prev.slug}`} className="flex items-center">
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Previous: {prev.title}
                      </Link>
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {next ? (
                    <Button asChild>
                      <Link href={`/guides/${slug}/${next.slug}`} className="flex items-center">
                        Next: {next.title}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild>
                      <Link href={`/guides/${slug}`} className="flex items-center">
                        Complete Guide
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${moduleContent?.title || module.title} | ${guide.title}`,
            "description": `Learn about ${moduleContent?.title || module.title} in our comprehensive ${guide.title.split(':')[0]} guide.`,
            "author": {
              "@type": "Person",
              "name": guide.author.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "How-To Guides",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.how-toguides.com/logo.png"
              }
            },
            "isPartOf": {
              "@type": "Series",
              "name": guide.title,
              "url": `https://www.how-toguides.com/guides/${slug}`
            },
            "datePublished": "2025-04-01",
            "dateModified": "2025-04-15"
          })
        }}
      />
    </div>
  );
}

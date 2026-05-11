export const pricingData: Record<string, {name: string, price: string, interval: string, desc: string, popular: boolean, features: string[] }[]> = {
  "social-media-management": [
    {
      name: "Starter",
      price: "INR 12,999",
      interval: "/ mo",
      desc: "Perfect for brands needing basic consistency.",
      popular: false,
      features: ["8 static posts/month", "4 reels/month", "Captions + hashtags", "Basic content calendar", "Instagram + Facebook support"]
    },
    {
      name: "Growth",
      price: "INR 24,999",
      interval: "/ mo",
      desc: "Comprehensive growth system for scaling companies.",
      popular: true,
      features: ["12 static posts/month", "8 reels/month", "Content strategy", "Engagement support", "Monthly report", "Instagram, FB, LinkedIn, YouTube Shorts"]
    },
    {
      name: "Premium",
      price: "INR 44,999",
      interval: "/ mo",
      desc: "Full-stack dominance with intense volume.",
      popular: false,
      features: ["20 posts/month", "12 reels/month", "Advanced content strategy", "Community management", "Monthly analytics report", "Ad creative support"]
    }
  ],
  "website-design-development": [
    {
      name: "Landing Page",
      price: "INR 14,999",
      interval: "one-time",
      desc: "High-converting single page site.",
      popular: false,
      features: ["1-page website", "Mobile responsive design", "Contact form", "WhatsApp button", "Basic SEO setup", "Final CTA"]
    },
    {
      name: "Business Website",
      price: "INR 29,999",
      interval: "one-time",
      desc: "Complete online presence for modern businesses.",
      popular: true,
      features: ["4–5 pages", "Home, About, Services, Contact, Portfolio", "Mobile responsive", "Basic SEO", "Contact form", "WhatsApp integration"]
    },
    {
      name: "Premium Website",
      price: "INR 59,999+",
      interval: "one-time",
      desc: "Custom engineered digital platform.",
      popular: false,
      features: ["6–10 pages", "Custom design & Dedicated service pages", "SEO structure", "Integrations", "Blog/CMS setup", "Speed optimization & Advanced animations"]
    }
  ],
  "digital-marketing": [
    {
      name: "Starter",
      price: "INR 14,999",
      interval: "/ mo",
      desc: "Kickstart your traffic engine.",
      popular: false,
      features: ["Basic SEO", "Google Business Profile optimization", "1 campaign setup", "Monthly performance report"]
    },
    {
      name: "Growth",
      price: "INR 29,999",
      interval: "/ mo",
      desc: "Consistent traffic and leads generation.",
      popular: true,
      features: ["SEO", "Google/Meta ads management", "Lead generation setup", "Landing page suggestions", "Monthly reporting"]
    },
    {
      name: "Premium",
      price: "INR 59,999+",
      interval: "/ mo",
      desc: "Omnichannel scaling and automation.",
      popular: false,
      features: ["SEO + paid ads", "Email marketing", "Lead generation funnel", "Retargeting strategy", "Weekly optimization"]
    }
  ],
  "video-editing-content-production": [
    {
      name: "Starter",
      price: "INR 7,999",
      interval: "/ mo",
      desc: "Basic short-form content output.",
      popular: false,
      features: ["8 short-form reels/month", "Captions", "Basic cuts", "Music + subtitles"]
    },
    {
      name: "Growth",
      price: "INR 14,999",
      interval: "/ mo",
      desc: "Professional reel and shorts production.",
      popular: true,
      features: ["15 short-form videos/month", "Captions", "B-roll", "Sound effects", "Hook text", "Basic thumbnail covers"]
    },
    {
      name: "Premium",
      price: "INR 29,999+",
      interval: "/ mo",
      desc: "Maximum impact multi-format video editing.",
      popular: false,
      features: ["30 short-form videos/month", "Advanced editing", "Reels, Shorts, LinkedIn clips", "2 long-form YouTube videos", "Thumbnail support"]
    }
  ],
  "ai-automation-chatbot-setup": [
    {
      name: "Basic Chatbot",
      price: "INR 14,999",
      interval: "setup",
      desc: "Introductory automated responses.",
      popular: false,
      features: ["Website chatbot or WhatsApp auto-reply flow", "FAQs", "Lead collection", "Basic appointment/contact flow"]
    },
    {
      name: "Growth Automation",
      price: "INR 29,999",
      interval: "setup",
      desc: "Complete lead generation communication.",
      popular: true,
      features: ["AI chatbot", "Appointment booking automation", "Google Sheet/CRM connection", "Email notification setup", "Lead capture system"]
    },
    {
      name: "Premium Automation",
      price: "INR 59,999+",
      interval: "setup",
      desc: "Full-scale business operations integration.",
      popular: false,
      features: ["Advanced chatbot", "WhatsApp/website integration", "CRM automation", "Email workflows", "Multi-step business automation"]
    }
  ]
};

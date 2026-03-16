import React from 'react';
import { Video, Edit2, Globe } from 'lucide-react';

const base = import.meta.env.BASE_URL;

// --- PORTFOLIO DATA ---
export const portfolioData = [
  {
    id: 1,
    client: "CJN Bali Creative",
    project: "MK FEST 2025",
    category: "Video Production",
    year: "2025",
    description: "Logo usage in real environments, outside of staged scenarios.",
    imageSrc: `${base}portofolio/cjn/foto-cjn-vertical.avif`,
    size: "small"
  },
  {
    id: 2,
    imageSrc: `${base}portofolio/cjn/foto-cjn-vertical-tiga.avif`,
    size: "small"
  },
];

// --- SERVICES DATA ---
export const servicesData = [
  {
    id: 'video-editing',
    title: "Video Editing",
    tagline: "Turn raw footage into energizing stories.",
    description: "From TikToks to cinematic commercials, we edit to retain attention.",
    icon: <Video className="w-6 h-6" />,
    gradient: "from-pink-500/20 to-rose-500/5",
    imageColor: "bg-pink-500/10",
    tiers: [
      {
        name: "STARTER",
        alias: "The Quick Cut",
        price: "$49",
        bestFor: "Daily TikToks, simple Reels, or testing the waters.",
        features: [
          "Up to 60 Sec Duration (Vertical/9:16)",
          "Basic Cuts & Trimming (Rapih & on beat)",
          "Standard Captions (No fancy animation)",
          "Background Music (Royalty Free)",
          "1x Revision",
          "Delivery: 2 Days"
        ]
      },
      {
        name: "PRO",
        alias: "The Viral Pack",
        price: "$129",
        originalPrice: "$199",
        bestFor: "Content Creators, YouTubers, & Brand Reels.",
        isPopular: true,
        features: [
          "Up to 3 Mins Duration (Vertical/Horizontal)",
          "Dynamic Motion Graphics",
          "Engaging Subtitles",
          "Sound Design & SFX",
          "Basic Color Grading",
          "3x Revisions",

        ]
      },
      {
        name: "ENTERPRISE",
        alias: "The Cinema Grade",
        price: "Starts from $299",
        bestFor: "Company Profiles, Event Aftermovies, Ads.",
        features: [
          "Unlimited Duration (Custom scope)",
          "Cinematic Color Grading",
          "Advanced Visual Effects (VFX)",
          "Storyboarding & Script Assist",
          "Project File Included (.prproj)",
          "Unlimited Revisions during draft"
        ]
      }
    ]
  },
  {
    id: 'logo-design',
    title: "Logo Design",
    tagline: "Visual identity that commands the stage.",
    description: "Logos that work on a business card and a billboard.",
    icon: <Edit2 className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-indigo-500/5",
    imageColor: "bg-purple-500/10",
    tiers: [
      {
        name: "STARTER",
        alias: "The Identity Spark",
        price: "$99",
        bestFor: "Small startups, personal projects, streamers.",
        features: [
          "1 High-Impact Logo Concept",
          "High-Res Export (JPG & Transparent PNG)",
          "Black & White Variation",
          "Web-Ready Files Only",
          "2x Minor Revisions.",
          "Delivery: 2 Days"
        ]
      },
      {
        name: "PRO",
        alias: "The Brand Voltage",
        price: "$299",
        originalPrice: "$399",
        bestFor: "Serious Businesses, Event Organizers, Clothing Brands.",
        isPopular: true,
        features: [
          "3 Unique Custom Concepts",
          "Full Source Files (AI, EPS, SVG)",
          "Real-World 3D Mockup (Merch/Signage)",
          "Social Media Kit (Profile Pic & Header)",
          "Typography & Color Palette Guide",
          "5x Revisions",
        ]
      },
      {
        name: "ENTERPRISE",
        alias: "The Full Ecosystem",
        price: "Ask for Quote",
        bestFor: "Corporate Rebranding, Large Scale Events.",
        features: [
          "5 Premium Concepts + Brand Philosophy",
          "Complete Brand Guidelines Book",
          "Stationery Design (Business Card, etc)",
          "Exclusive Copyright Transfer Agreement",
          "Priority Delivery (Skip the queue)",
          "Unlimited Revisions"
        ]
      }
    ]
  },
  {
    id: 'web-design',
    title: "Web Design",
    tagline: "No bloat code, just pure aesthetic impact.",
    description: "Stunning websites built with next-gen visual tools.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/5",
    imageColor: "bg-blue-500/10",
    tiers: [
      {
        name: "STARTER",
        alias: "The Landing Point",
        price: "$199",
        bestFor: "Perfect for personal brands & simple intros.",
        features: [
          "Single Page High-Impact Site",
          "100% Mobile Responsive",
          "Hero Section + Bio + Contact Form",
          "Social Media & Link Integration",
          "Lightning Fast Loading (Optimized Assets)",
          "1 Month Free Maintenance"
        ]
      },
      {
        name: "PRO",
        alias: "The Business Hub",
        price: "$499",
        originalPrice: "$599",
        bestFor: "Complete website to grow your business.",
        isPopular: true,
        features: [
          "Multi-Page Website (Home, Services, About)",
          "Visual CMS Integration (Easy Edit)",
          "Interactive Scroll Animations",
          "Basic SEO Setup (Google Indexing)",
          "WhatsApp /Call Widget",
          "3 Months Free Maintenance"
        ]
      },
      {
        name: "ENTERPRISE",
        alias: "The Brand Dominance",
        price: "Ask for Quote",
        bestFor: "For those who need world-class visuals & scale.",
        features: [
          "Enterprise-Grade Visual Architecture",
          "Advanced CMS for Large Catalogs",
          "E-Commerce / Store Integration",
          "Cinematic Motion Effects",
          "Custom Design System & Assets",
          "VIP Priority Support"
        ]
      }
    ]
  }
];

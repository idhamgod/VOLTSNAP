import React from 'react';
import { Video, Edit2, Globe } from 'lucide-react';

const base = import.meta.env.BASE_URL;

// --- PORTFOLIO DATA ---
export const portfolioData = [
  {
    id: 1,
    client: "CJN Bali Creative",
    project: "MK FEST",
    category: "Logo Design",
    year: "2025",
    description: "Logo usage in real environments, outside of staged scenarios.",
    imageSrc: `${base}portofolio/cjn/foto-cjn-vertical.avif`,
    size: "small"
  },
  {
    id: 2,
    client: "CJN Bali Creative",
    project: "Nyepi Eve 2026",
    year: "2025",
    imageSrc: `${base}portofolio/cjn/ogoh1.avif`,
    size: "small"
  },
];

// --- SERVICES DATA ---
export const servicesData = [
  {
    id: 'video-editing',
    title: "Video Editing",
    tagline: "Turn raw footage into energizing stories.",
    description: "From TikToks to cinematic commercials, we edit to retain attention. Whether it's a 60-second reel or a full event aftermovie, every cut is calculated to keep eyes glued.",
    icon: <Video className="w-6 h-6" />,
    gradient: "from-pink-500/20 to-rose-500/5",
    imageColor: "bg-pink-500/10",
    features: [
      "Short-form content (TikTok, Reels, Shorts)",
      "Long-form YouTube & brand videos",
      "Dynamic motion graphics & transitions",
      "Sound design & SFX layering",
      "Cinematic color grading",
      "Event aftermovies & company profiles",
      "Storyboarding & script assistance",
      "Unlimited revisions until you're happy"
    ]
  },
  {
    id: 'logo-design',
    title: "Logo Design",
    tagline: "Visual identity that commands the stage.",
    description: "Logos that work on a business card and a billboard. We build visual identities from scratch—no templates, no shortcuts. Your brand deserves to look like you, not everyone else.",
    icon: <Edit2 className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-indigo-500/5",
    imageColor: "bg-purple-500/10",
    features: [
      "Multiple unique custom concepts",
      "Full source files (AI, EPS, SVG, PNG)",
      "Real-world 3D mockups (merch, signage)",
      "Social media kit (profile pic & header)",
      "Typography & color palette guide",
      "Complete brand guidelines book",
      "Stationery design (business cards, etc)",
      "Copyright transfer included"
    ]
  },
  {
    id: 'web-design',
    title: "Web Design",
    tagline: "No bloat code, just pure aesthetic impact.",
    description: "Stunning websites built with next-gen visual tools. From single landing pages to full business platforms, we create web experiences that convert visitors into customers.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/5",
    imageColor: "bg-blue-500/10",
    features: [
      "100% mobile responsive design",
      "Interactive scroll animations",
      "Lightning fast loading (optimized assets)",
      "SEO-ready structure (Google indexing)",
      "Visual CMS integration (easy edits)",
      "WhatsApp / Call widget integration",
      "E-commerce & store capabilities",
      "Ongoing maintenance & support"
    ]
  }
];

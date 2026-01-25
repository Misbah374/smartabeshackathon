/** @format */

// SEO Meta Tags Component - Use this for consistent meta tag generation
// This file serves as a reference for creating meta tags across the application

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
}

// Hackathon Meta Data
export const pageMetadata = {
  home: {
    title: "Smart ABES Hackathon 2025 - DSA & Innovation",
    description:
      "Join Smart ABES Hackathon - The Missing Piece. Build innovative projects powered by Data Structures and Algorithms.",
    keywords: [
      "Smart ABES Hackathon",
      "hackathon 2025",
      "Data Structures and Algorithms",
      "DSA hackathon",
    ],
    ogUrl: "https://smartabeshackathon.tech",
  },
  about: {
    title: "About Smart ABES Hackathon - DSA Innovation Event",
    description:
      "Learn about Smart ABES Hackathon 2025. Discover how we inspire innovation through Data Structures and Algorithms.",
    keywords: ["hackathon", "about", "innovation", "DSA"],
    ogUrl: "https://smartabeshackathon.tech/about",
  },
  contacts: {
    title: "Contact Us - Smart ABES Hackathon",
    description:
      "Get in touch with the Smart ABES Hackathon team. Find contact information, social links, and support channels.",
    keywords: ["contact", "support", "team", "social"],
    ogUrl: "https://smartabeshackathon.tech/contacts",
  },
  faq: {
    title: "FAQ - Smart ABES Hackathon",
    description:
      "Frequently asked questions about Smart ABES Hackathon 2025. Get answers about registration, rules, and participation.",
    keywords: ["faq", "questions", "answers", "help"],
    ogUrl: "https://smartabeshackathon.tech/faq",
  },
  judging: {
    title: "Judging Criteria - Smart ABES Hackathon",
    description:
      "Learn about the judging criteria. Understand how projects are evaluated based on innovation, implementation, and impact.",
    keywords: ["judging", "criteria", "evaluation", "scoring"],
    ogUrl: "https://smartabeshackathon.tech/judging-criteria",
  },
  problemStatements: {
    title: "Problem Statements - Smart ABES Hackathon",
    description:
      "Explore the problem statements for Smart ABES Hackathon. Solve real-world challenges with Data Structures and Algorithms.",
    keywords: ["problems", "statements", "challenges", "DSA"],
    ogUrl: "https://smartabeshackathon.tech/problem-statements",
  },
};

// For future pages, follow this template:
/*
export const newPageMetadata = {
  title: "Page Title - Smart ABES Hackathon",
  description: "A clear, concise description under 160 characters",
  keywords: ["keyword1", "keyword2", "keyword3"],
  ogUrl: "https://smartabeshackathon.tech/path",
};
*/

// SEO Title Guidelines:
// - Keep titles under 60 characters
// - Include main keyword
// - Brand name at the end
// - Make it compelling and click-worthy

// SEO Description Guidelines:
// - Keep descriptions under 160 characters
// - Include main keyword early
// - Make it actionable/compelling
// - Include unique value proposition

// SEO Keywords Guidelines:
// - 3-5 relevant keywords per page
// - Include long-tail keywords
// - Match user search intent
// - Avoid keyword stuffing

export const seoTips = {
  titleLength: "50-60 characters",
  descriptionLength: "120-160 characters",
  optimalKeywords: "3-5 per page",
  imageAlt: "Descriptive, includes keywords",
  headings: "H1 (one per page), H2, H3 in hierarchy",
  linkText: "Descriptive, includes keywords",
  content: "Original, helpful, regularly updated",
  mobileOptimized: "Responsive design, fast loading",
  structuredData: "JSON-LD for rich snippets",
};

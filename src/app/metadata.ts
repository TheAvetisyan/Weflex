import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Weflex",
    "AI",
    "Agent",
    "Magic UI",
    "Freelancer",
    "UI/UX",
    "Developer",
    "React Template",
    "Next.js Template",
    "Tailwind",
    "Shadcn",
    "Tailwind V4",
  ],
  authors: [
    {
      name: "Weflex",
      url: "https://weflex.am",
    },
  ],
  creator: "Weflex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@dillionverma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

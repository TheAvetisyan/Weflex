import type { Metadata } from "next";
import CreatorDeckComponent from "@/components/portfolio/CreatorDeckComponent";

export const metadata: Metadata = {
  title: "Creator Deck – Influencer Platform by Weflex",
  description:
    "Creator Deck is a global platform connecting brands with creators. Weflex supported the platform's development for speed, scale, and usability.",
  openGraph: {
    title: "Creator Deck – Powered by Weflex",
    description:
      "An enterprise-grade influencer marketing platform built with modern tech. Weflex partnered to deliver results at scale.",
    url: "https://weflex.am/services/creator-deck",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Deck – Scalable Influencer Marketing",
    description:
      "Built by Weflex, Creator Deck supports top-tier influencer campaigns for global brands.",
  },
};

export default function CreatorDeckPage() {
  return (
    <main className="flex justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
      <CreatorDeckComponent />
    </main>
  );
}

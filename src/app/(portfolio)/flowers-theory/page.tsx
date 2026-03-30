import type { Metadata } from "next";
import FlowersTheoryComponent from "@/components/portfolio/FlowersTheoryComponent";

export const metadata: Metadata = {
  title: "Flowers Theory - Premium Florist by Weflex",
  description:
    "Flowers Theory is a premium flower delivery brand in Yerevan with elegant bouquets, same-day delivery, reviews, FAQ, and rich content experience.",
  openGraph: {
    title: "Flowers Theory - Yerevan Florist & Flower Delivery",
    description:
      "Explore Flowers Theory: curated bouquets, category filters, bestsellers, trusted reviews, and 24/7 floral delivery service.",
    url: "https://weflex.am/flowers-theory",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowers Theory by Weflex",
    description:
      "Premium flowers in Yerevan with same-day delivery, top reviews, and a complete modern ecommerce flow.",
  },
};

export default function FlowersTheoryPage() {
  return (
    <main className="flex justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
      <FlowersTheoryComponent />
    </main>
  );
}

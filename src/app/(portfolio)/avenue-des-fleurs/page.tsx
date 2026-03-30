import type { Metadata } from "next";
import AvenueDesFleursComponent from "@/components/portfolio/AvenueDesFleursComponent";

export const metadata: Metadata = {
  title: "Avenue Des Fleurs - Premium Florist by Weflex",
  description:
    "Avenue Des Fleurs is a premium florist in Yerevan offering luxury bouquets, curated seasonal flowers, and same-day delivery.",
  openGraph: {
    title: "Avenue Des Fleurs - Premium Florist in Yerevan",
    description:
      "Explore Avenue Des Fleurs: luxury floral arrangements, 24/7 service, and same-day flower delivery across Yerevan.",
    url: "https://weflex.am/avenue-des-fleurs",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenue Des Fleurs by Weflex",
    description:
      "Premium bouquets and floral design experience in Yerevan with 24/7 availability.",
  },
};

export default function AvenueDesFleursPage() {
  return (
    <main className="flex justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
      <AvenueDesFleursComponent />
    </main>
  );
}

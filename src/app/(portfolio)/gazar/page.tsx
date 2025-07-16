
import type { Metadata } from "next";
import GazarComponent from "@/components/portfolio/GazarComponent";

export const metadata: Metadata = {
  title: "Gazar – Online Grocery Experience by Weflex",
  description:
    "Gazar is an Armenian grocery delivery platform, built by Weflex to simplify everyday shopping with a clean and responsive experience.",
  openGraph: {
    title: "Gazar – Built by Weflex",
    description:
      "With real-time inventory, secure checkout, and smooth UX, Gazar redefines how Armenians shop for groceries. Powered by Weflex.",
    url: "https://weflex.am/services/gazar",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazar – Grocery Shopping Platform by Weflex",
    description:
      "Weflex helped launch Gazar – a powerful ecommerce platform for groceries in Armenia.",
  },
};

export default function GazarPage() {
  
  return (
    <main className="flex justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
        <GazarComponent />
    </main>
  );
}

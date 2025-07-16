import type { Metadata } from "next";
import PizzaAyoComponent from "@/components/portfolio/PizzaAyoComponent";

export const metadata: Metadata = {
  title: "Pizza Ayo – Food Delivery App by Weflex",
  description:
    "Weflex built the Pizza Ayo platform – a fast, modern food delivery solution in Armenia with real-time tracking and seamless UX.",
  openGraph: {
    title: "Pizza Ayo – Built by Weflex",
    description:
      "Pizza Ayo is a modern food ordering experience for Armenians. Developed by Weflex to deliver speed, style, and reliability.",
    url: "https://weflex.am/services/pizza-ayo",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Ayo – Fast Food Delivery, Made by Weflex",
    description:
      "Explore how Weflex helped Pizza Ayo launch a sleek and powerful food delivery platform in Armenia.",
  },
};

export default function PizzaAyoPage() {
  return (
    <main className="flex   justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
      <PizzaAyoComponent />
    </main>
  );
}

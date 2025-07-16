
import AutomatrComponent from "@/components/portfolio/AutomatrComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatr – Automation Platform by Weflex",
  description:
    "Discover Automatr, the modern business automation platform built by Weflex. Increase efficiency, reduce manual work, and scale faster.",
  openGraph: {
    title: "Automatr – Built by Weflex",
    description:
      "Automatr is a powerful tool for managing workflows and automating business operations. Developed with performance and scalability in mind.",
    url: "https://weflex.am/services/automatr",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatr by Weflex",
    description:
      "Streamline your business with Automatr – a custom-built automation platform engineered by Weflex.",
  },
};

export default function PizzaAyoPage() {
  

  return (
    <main className="flex   justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
      <AutomatrComponent />
    </main>
  );
}

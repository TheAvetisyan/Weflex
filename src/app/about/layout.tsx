
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Weflex – Who We Are",
  description:
    "Learn more about Weflex – a custom software and e-commerce development company based in Yerevan. We build digital tools that grow your business.",
  openGraph: {
    title: "About Weflex",
    description:
      "Meet the team behind Weflex. Based in Armenia, we specialize in building smart digital solutions.",
    url: "https://weflex.am/about",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Weflex",
    description:
      "Get to know the people and mission behind Weflex in Yerevan.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      {/* Progress Bar Placeholder - The actual progress bar is in the page component */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent" />

      {children}
    </section>
  );
}

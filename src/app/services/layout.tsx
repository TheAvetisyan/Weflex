


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Ecommerce Services – Weflex",
  description:
    "Explore our custom software services – from ecommerce websites to mobile app development. Built in Armenia, designed to scale.",
  openGraph: {
    title: "Our Services – Weflex",
    description:
      "See what Weflex can do for your business. We deliver tailored digital solutions using modern technologies.",
    url: "https://weflex.am/services",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weflex Software Services",
    description:
      "Smart software and ecommerce solutions from Yerevan, Armenia. Built to grow your business.",
  },
};

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="relative">
  
        {children}
      </section>
    );
  }
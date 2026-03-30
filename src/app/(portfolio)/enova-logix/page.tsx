import type { Metadata } from "next";
import EnovaLogixComponent from "@/components/portfolio/EnovaLogixComponent";

export const metadata: Metadata = {
  title: "Enova Logix - Vehicle Transport by Weflex",
  description:
    "Enova Logix provides reliable auto shipping across the U.S. with insured transport, licensed carriers, and responsive 24/7 support.",
  openGraph: {
    title: "Enova Logix - Transportation Made Simple",
    description:
      "Fast, affordable, and reliable vehicle transport services nationwide with transparent communication and on-time delivery.",
    url: "https://weflex.am/enova-logix",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enova Logix by Weflex",
    description:
      "Nationwide auto shipping with licensed carriers, full insurance, and 24/7 customer support.",
  },
};

export default function EnovaLogixPage() {
  return (
    <main className="flex justify-center min-h-screen flex-col items-center bg-white dark:bg-black">
      <EnovaLogixComponent />
    </main>
  );
}

import GrowthPlanComponent from "@/components/growth/GrowthPlanComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Plan – Weflex",
  description:
    "Unlock your business growth with Weflex’s digital growth plan. Strategy, design, development – all aligned to your goals.",
  openGraph: {
    title: "Business Growth Plan – Weflex",
    description:
      "Accelerate your growth with tailored software and strategic support from Weflex.",
    url: "https://weflex.am/growth-plan",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Weflex Growth Plan",
    description:
      "Our proven digital growth framework helps your business scale smarter.",
  },
};

export default function GrowthPlan() {
  return (
    <div className="flex min-h-screen flex-col  items-center justify-center bg-white dark:bg-black">
      <main className="flex-1  w-[90vw] sm:w-auto">
        <GrowthPlanComponent />
      </main>
    </div>
  );
}

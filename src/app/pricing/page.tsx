import PricingCalculator from "@/components/pricing/pricing-calcuator";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – Weflex",
  description:
    "Transparent pricing for software development, ecommerce websites, and mobile apps. Choose the plan that fits your business.",
  openGraph: {
    title: "Weflex Pricing Plans",
    description:
      "Get a clear view of how much our custom solutions cost. No hidden fees. Value you can trust.",
    url: "https://weflex.am/pricing",
    siteName: "Weflex",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Weflex Pricing",
    description:
      "Affordable and scalable pricing for custom software and ecommerce projects.",
  },
};

export default function PricingPage() {
  return (
    <div>
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute ">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <h1 className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            🚀 Build Your Custom Package
          </h1>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              Build Your Custom Package
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              Select the services you need and customize your package. Get an
              instant estimate for your project.
            </p>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 pt-32">
        <PricingCalculator />
      </main>

      <div className="container mx-auto p-20 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-300">
          We design and develop custom software solutions that help businesses
          grow, streamline operations, and achieve their goals faster.
        </p>
        <Button
          variant={"default"}
          className="rounded-full px-10 py-4 font-semibold  shadow-lg transition-all hover:shadow-xl"
        >
          Contact Us Today
        </Button>
      </div>
    </div>
  );
}

"use client";
import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Cog,
  Globe,
  Laptop,
  LayoutDashboard,
  MessageSquare,
  SmartphoneIcon as MobileIcon,
  ShoppingCart,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-gray-500" />,
    title: "Business-first mindset",
    description: "We solve real problems, not just write code.",
  },
  {
    icon: <Cog className="h-6 w-6 text-gray-500" />,
    title: "End-to-end execution",
    description: "From design to deployment.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-gray-500" />,
    title: "Easy-to-work-with team",
    description: "Transparent, agile, and easy to work with.",
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-gray-500" />,
    title: "Growth-ready solutions",
    description: "Built to grow with you.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black">
      <main className="flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-[85%] sm:w-full py-24 md:py-32 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300 backdrop-blur-sm"
                >
                  🚀 Our Services
                </motion.div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                  Smart, scalable, and beautifully crafted software
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Tailored to your business. From idea to execution, we&quot;re
                  your strategic technology partner.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-[85%]  sm:w-full py-12 md:py-24  flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 lg:grid-cols-2">
              <ServiceCard
                icon={<Code className="h-10 w-10 text-gray-500" />}
                title="Custom Software Development"
                description='We build powerful software tailored specifically to your business needs. Whether it"s a platform, dashboard, or internal tool – our custom solutions improve productivity and scale with you.'
                features={["Web apps", "Internal systems", "B2B solutions"]}
              />

              <ServiceCard
                icon={<ShoppingCart className="h-10 w-10 text-gray-500" />}
                title="E-commerce Development"
                description="Sell smarter with fast, secure, and stunning online stores. We create high-performance e-commerce websites that convert visitors into loyal customers."
                features={["Shopify", "Headless Commerce", "Custom Stores"]}
              />

              <ServiceCard
                icon={<Globe className="h-10 w-10 text-gray-500" />}
                title="Website Development"
                description="Your website is your digital home – let's make it exceptional. We craft fast, responsive, and SEO-optimized websites that reflect your brand and drive results."
                features={["Business websites", "Landing pages", "Portfolios"]}
              />

              <ServiceCard
                icon={<MobileIcon className="h-10 w-10 text-gray-500" />}
                title="Mobile App Development"
                description="From MVP to full-featured apps, we build mobile solutions that feel intuitive and perform flawlessly across devices."
                features={[
                  "iOS & Android",
                  "Cross-platform",
                  "Flutter & React Native",
                ]}
              />

              <ServiceCard
                icon={<LayoutDashboard className="h-10 w-10 text-gray-500" />}
                title="SaaS Product Development"
                description="Have a startup idea or need a custom SaaS platform? We can help bring it to life – fast, secure, and ready to scale."
                features={[
                  "Dashboards",
                  "Admin panels",
                  "Client portals",
                  "Google Analytics",
                ]}
              />

              <ServiceCard
                icon={<Laptop className="h-10 w-10 text-gray-500" />}
                title="API & Backend Development"
                description="Solid backends are the backbone of great apps. We build reliable, scalable, and secure APIs and backend systems that power your frontend experience."
                features={[
                  "Node.js",
                  "Nest.js",
                  "PostgreSQL",
                  "REST & GraphQL APIs",
                ]}
              />

              <ServiceCard
                icon={<Laptop className="h-10 w-10 text-gray-500" />}
                title="UI/UX Design"
                description="Design that's not only beautiful – but also functional. We create intuitive user experiences that your customers will love and your team will enjoy working with."
                features={["Wireframes", "Prototypes", "Full UI kits"]}
              />

              <ServiceCard
                icon={<Cog className="h-10 w-10 text-gray-500" />}
                title="Integrations & Automation"
                description="Streamline workflows by connecting your tools and automating processes. From CRM to third-party APIs – we make your tech stack work better together."
                features={[
                  "Zapier",
                  "Stripe",
                  "Notion",
                  "Automatr",
                  "Custom APIs",
                ]}
              />

              <ServiceCard
                icon={<MessageSquare className="h-10 w-10 text-gray-500" />}
                title="Ongoing Support & Maintenance"
                description="Technology evolves – and so should your software. We offer long-term support, updates, and optimization to keep your systems running smoothly."
                features={[]}
                className="lg:col-span-2"
              />
            </div>
          </div>
        </section>
        <section className="w-[85%] sm:w-full py-12 md:py-24 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                ✨ Why Weflex?
              </h2>
              <p className="text-muted-foreground">
                We&quot;re not just developers – we&quot;re your technology
                partners.
              </p>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2 lg:grid-cols-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group flex flex-col items-center space-y-2 rounded-lg p-4 text-center h-full transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold min-h-[56px]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-[85%] sm:w-full py-12 md:py-24 bg-gray-50/50 dark:bg-black backdrop-blur-sm flex items-center justify-center relative">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                  Need something unique?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Contact us and let&quot;s build your next big idea together.
                </p>
              </div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
                >
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-md ${className}`}
    >
      <CardHeader className="pb-3">
        <div className="mb-3">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground sm:min-h-[60px]">
          {description}
        </CardDescription>
      </CardHeader>
      {features.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {feature}
              </span>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

"use client";
import { motion } from "motion/react";
import {

  Check,
  ChevronRight,
  Star,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function GrowthPlanComponent() {
    const [activeTab, setActiveTab] = useState("phase1");


  return (
    <>
      {/* Differentiators Section */}
      <section className="py-20 border-b border-black/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <Badge className="mb-4 rounded-full bg-black dark:bg-white px-4 py-1 text-white dark:text-black">
              Launching 2025
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
              Transform Your Business with Weflex{" "}
              <span className="relative inline-block">
                Growth Plan
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
              </span>
            </h1>
            <p className="mt-4 text-black/70 dark:text-white/70">
              Our approach is different. We don&apos;t just build websites - we
              create growth engines for your business.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center h-12 w-full rounded-full bg-black dark:bg-white px-8 text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 hover:shadow-md hover:shadow-red-500/20 sm:w-auto"
              >
                Contact Us <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "dollar-sign",
                title: "Fixed Monthly Price",
                description:
                  "No surprises or hidden fees. One predictable monthly payment covers everything from development to hosting.",
              },
              {
                icon: "sparkles",
                title: "Continuous Optimization",
                description:
                  "We don't stop at launch. Our plan includes 9 months of growth, testing, and optimization after your site goes live.",
              },
              {
                icon: "book-open",
                title: "Data-Driven Approach",
                description:
                  "We use A/B testing and analytics to make decisions based on real user behavior, not assumptions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-0 bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-red-500/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/[0.01] to-black/[0.05] dark:from-white/[0.03] dark:to-white/[0.08] transition-colors group-hover:from-black/[0.03] group-hover:to-black/[0.08] dark:group-hover:from-white/[0.05] dark:group-hover:to-white/[0.1]"></div>
                  <CardContent className="relative p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                      {index === 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      )}
                      {index === 1 && <Sparkles className="h-6 w-6" />}
                      {index === 2 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-black/70 dark:text-white/70">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <Badge className="mb-4 rounded-full bg-black/10 dark:bg-white/10 px-4 py-1 text-black dark:text-white">
              The Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
              Your{" "}
              <span className="relative inline-block">
                12-Month
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
              </span>{" "}
              Journey
            </h2>
            <p className="mt-4 text-black/70 dark:text-white/70">
              A structured approach to building and growing your e-commerce
              platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <Tabs
              defaultValue="phase1"
              className="w-full"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-1 gap-2 sm:gap-0 sm:grid-cols-2 rounded-full bg-black/5 dark:bg-white/5 p-1">
                <TabsTrigger
                  value="phase1"
                  className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Phase 1: Build & Launch
                </TabsTrigger>
                <TabsTrigger
                  value="phase2"
                  className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Phase 2: Growth & Optimization
                </TabsTrigger>
              </TabsList>
              <div className="mt-12 h-auto sm:h-[450px] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-sm">
                <TabsContent
                  value="phase1"
                  className="h-full data-[state=inactive]:hidden"
                >
                  <div className="grid h-full md:grid-cols-3">
                    <div className="flex flex-col border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-6 md:border-b-0 md:border-r">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                        1
                      </div>
                      <h3 className="mb-2 text-lg font-bold dark:text-white">
                        Month 1: Foundation & Design
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm dark:text-white/90">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Custom design & responsive layout</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>
                            Static pages: Home, About, Contact, Products
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Domain, hosting, and infrastructure setup</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col border-b border-black/10 dark:border-white/10 bg-white/[0.05] p-6 md:border-b-0 md:border-r">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                        2
                      </div>
                      <h3 className="mb-2 text-lg font-bold dark:text-white">
                        Month 2: Backend Development
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm dark:text-white/90">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>User login/registration system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Admin panel for product management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Basic CMS for content updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>E-commerce core development begins</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col bg-black/[0.02] dark:bg-white/[0.02] p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                        3
                      </div>
                      <h3 className="mb-2 text-lg font-bold dark:text-white">
                        Month 3: E-commerce Core & Launch
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm dark:text-white/90">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>
                            Cart, product filters, search functionality
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Payment gateway integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Secure checkout & order management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Full mobile optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Complete public launch</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="phase2"
                  className="h-full data-[state=inactive]:hidden"
                >
                  <div className="grid h-full md:grid-cols-3">
                    <div className="flex flex-col border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-6 md:border-b-0 md:border-r">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                        4-6
                      </div>
                      <h3 className="mb-2 text-lg font-bold dark:text-white">
                        Months 4-6: Testing & Optimization
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm dark:text-white/90">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Setup A/B testing tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Analytics implementation & tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Page speed optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>SEO enhancements & content improvements</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col border-b border-black/10 dark:border-white/10 bg-white p-6 md:border-b-0 md:border-r">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                        7-9
                      </div>
                      <h3 className="mb-2 text-lg font-bold dark:text-white">
                        Months 7-9: Marketing & UX
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm dark:text-white/90">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Marketing tools implementation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Loyalty or rewards program (optional)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Multilingual expansion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>UX improvements based on user feedback</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col bg-black/[0.02] dark:bg-white/[0.02] p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                        10-12
                      </div>
                      <h3 className="mb-2 text-lg font-bold dark:text-white">
                        Months 10-12: Scaling & Automation
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm dark:text-white/90">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Email automation workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Reporting and analytics dashboards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Security audits and performance tuning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Strategic scaling based on business needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-black dark:text-white" />
                          <span>Planning for year 2 (if continuing)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Plan Overview Section */}
      <section className="border-y border-black/5 dark:border-white/5  dark:bg-white/[0.02] py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <div className="text-sm font-medium uppercase tracking-wider text-black/50 dark:text-white/50">
                  The Complete Package
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  E-commerce{" "}
                  <span className="relative inline-block">
                    Growth Plan
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-xl text-black/70 dark:text-white/70">
                  $800/month for 12 months
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-medium dark:text-white">
                      Full Website Build & Launch in 3 Months
                    </div>
                    <div className="text-sm text-black/70 dark:text-white/70">
                      Custom design, user system, and e-commerce functionality
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-medium dark:text-white">
                      9 Months of Growth & Optimization
                    </div>
                    <div className="text-sm text-black/70 dark:text-white/70">
                      A/B testing, analytics, SEO, and performance improvements
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-medium dark:text-white">
                      Ongoing Support & Maintenance
                    </div>
                    <div className="text-sm text-black/70 dark:text-white/70">
                      Regular updates, security monitoring, and technical
                      support
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-medium dark:text-white">
                      All-Inclusive Pricing
                    </div>
                    <div className="text-sm text-black/70 dark:text-white/70">
                      Hosting, infrastructure, and all development costs
                      included
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-2 shadow-xl"
            >
              <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white dark:text-white">
                NEW
              </div>
              <div className="rounded-xl bg-black dark:bg-white p-6 text-white dark:text-black">
                <h3 className="text-xl font-bold">What Makes Us Different</h3>
                <p className="mt-2 text-sm text-white/70 dark:text-black/70">
                  Unlike traditional agencies that charge by the hour or deliver
                  a website and disappear, we&apos;re committed to your
                  long-term success.
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/10">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Traditional Agency:</span>{" "}
                      Build a website and hand it off
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/10">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Freelancers:</span> Limited
                      availability and inconsistent quality
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/10">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">DIY Platforms:</span>{" "}
                      Limited customization and technical support
                    </div>
                  </div>
                  <div className="mt-6 rounded-xl bg-black/[0.03] p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <Star className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="font-medium">Weflex:</div>
                        <div className="text-sm text-black/70">
                          A true partner invested in your growth with a complete
                          solution from development to optimization
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section (New)
        <section className=" py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <Badge className="mb-4 rounded-full bg-black/10 dark:bg-white/10 px-4 py-1 text-black dark:text-white">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-black/70 dark:text-white/70">
                Everything you need to know about our service
              </p>
            </motion.div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "What happens after the 12 months?",
                  answer:
                    "After the initial 12-month period, you can continue with our maintenance plan at a reduced rate or take full ownership of your site. We'll ensure a smooth transition either way.",
                },
                {
                  question: "Can I cancel before the 12 months are up?",
                  answer:
                    "Yes, you can cancel after the first 3 months with a 30-day notice. However, the best results come from completing the full optimization cycle.",
                },
                {
                  question: "Do I own the website?",
                  answer:
                    "Absolutely. You own 100% of the website and all its assets. We provide the service of building and optimizing it.",
                },
                {
                  question: "What technology stack do you use?",
                  answer:
                    "We use modern, scalable technologies including Next.js, React, and headless CMS solutions. Our stack is chosen based on your specific business needs and performance requirements.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-black/10 dark:border-white/10 p-6"
                >
                  <h3 className="text-lg font-bold dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-black/70 dark:text-white/70">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

      {/* CTA Section */}
      <section className="py-20 border-y border-black/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white to-black/5 dark:from-black dark:to-white/5 p-8 shadow-xl"
          >
            <div className="mx-auto max-w-md text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">
                Ready to{" "}
                <span className="relative inline-block">
                  Transform
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
                </span>{" "}
                Your Business?
              </h2>
              <p className="mt-4 text-black/70 dark:text-white/70">
                Start your e-commerce journey with Weflex today and launch your
                store in just 3 months.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="flex items-center justify-center h-12 w-full rounded-full bg-black dark:bg-white px-8 text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 hover:shadow-md hover:shadow-red-500/20 sm:w-auto"
                >
                  Contact Us <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

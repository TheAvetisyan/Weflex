"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Filter,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

export default function FlowersTheoryComponent() {
  return (
    <div className="w-[90vw] sm:w-full">
      <section className="w-full min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden gap-10">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium">
                <span>💐</span>
                <h1>Yerevan Florist & Flower Delivery</h1>
              </div>

              <Image
                src="/company_logos/flowers_theory.png"
                alt="Flowers Theory"
                width={420}
                height={120}
                className="dark:hidden h-auto w-auto max-h-24 object-contain"
              />
              <Image
                src="/company_logos/flowers_theory_white.png"
                alt="Flowers Theory"
                width={420}
                height={120}
                className="hidden dark:block h-auto w-auto max-h-24 object-contain"
              />

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl">
                Premium flower brand in Yerevan with same-day delivery, elegant
                handcrafted bouquets, category filters, customer reviews, FAQ,
                and editorial blog content.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="https://www.flowerstheory.com/en/flowers"
                  target="_blank"
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Order Flowers
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>

                <Link
                  href="https://www.flowerstheory.com/en/contact"
                  target="_blank"
                  className="group flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                >
                  <span>Contact Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800" />
              <div className="absolute inset-8 rounded-full bg-white dark:bg-black shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/company_logos/flowers_theory_icon.png"
                  alt="Flowers Theory"
                  width={420}
                  height={120}
                  className="w-64 h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Flowers Theory Stands Out
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                A complete floral brand experience powered by service quality,
                strong trust signals, and thoughtful product discovery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  label: "24/7 Delivery",
                  icon: <Truck className="w-6 h-6" />,
                },
                {
                  label: "5.0 Google Reviews",
                  icon: <Star className="w-6 h-6" />,
                },
                {
                  label: "Same-Day Service",
                  icon: <Clock className="w-6 h-6" />,
                },
                {
                  label: "Premium Quality",
                  icon: <Sparkles className="w-6 h-6" />,
                },
                {
                  label: "Smart Product Filters",
                  icon: <Filter className="w-6 h-6" />,
                },
                {
                  label: "FAQ & Blog Content Hub",
                  icon: <BookOpen className="w-6 h-6" />,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Comprehensive Product Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Flowers Theory combines beautiful floral design with practical
                ecommerce UX for fast ordering and confident selection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Smart Catalog",
                  desc: "Roses, mixed florals, hydrangeas and more with clean category navigation.",
                  icon: <Search className="w-5 h-5" />,
                },
                {
                  title: "Filters & Bestsellers",
                  desc: "Best-seller flags, collection filtering, and fast discovery for high-intent buyers.",
                  icon: <Filter className="w-5 h-5" />,
                },
                {
                  title: "Trust Layer",
                  desc: "Visible customer reviews, clear service promises, and FAQ confidence.",
                  icon: <ShieldCheck className="w-5 h-5" />,
                },
                {
                  title: "Content Engine",
                  desc: "About pages and blog content for SEO growth and brand storytelling.",
                  icon: <BookOpen className="w-5 h-5" />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 space-y-5">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-gray-500" />
                  <p>info@flowerstheory.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <p>+374 55 62 64 99</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <p>124 Khorenatsi Street, Kentron, Yerevan 0018, Armenia</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-8 space-y-4">
              <h3 className="text-2xl font-semibold">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://www.flowerstheory.com/en/flowers?is_bestseller=true"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  Best Sellers <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.flowerstheory.com/en/faq"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  FAQ <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.flowerstheory.com/en/blog"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  Blog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://maps.google.com/?cid=7723512283690495362"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  Google Reviews <MessageCircle className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

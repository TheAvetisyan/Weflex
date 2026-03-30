"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clock,
  Flower2,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

export default function AvenueDesFleursComponent() {
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
                <span className="text-lg">🌸</span>
                <h1>Premium Florist in Yerevan</h1>
              </div>

              <Image
                src="/company_logos/avenue.png"
                alt="Avenue Des Fleurs"
                width={420}
                height={120}
                className="dark:hidden h-auto w-auto max-h-24 object-contain"
              />
              <Image
                src="/company_logos/avenue_white.png"
                alt="Avenue Des Fleurs"
                width={420}
                height={120}
                className="hidden dark:block h-auto w-auto max-h-24 object-contain"
              />

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl">
                Luxury bouquets, curated seasonal flowers, and same-day delivery
                across Yerevan. Available 24/7 for everyday moments and special
                events.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="https://www.flower.am/en/flowers"
                  target="_blank"
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Flowers
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>

                <Link
                  href="https://www.flower.am/en/contact"
                  target="_blank"
                  className="group flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                >
                  <span>Contact Studio</span>
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
                  src="/company_logos/avenue_icon.png"
                  alt="Avenue Des Fleurs"
                  width={420}
                  height={120}
                  className=" w-64 h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Curated Flowers",
                text: "Expert florists hand-select seasonal blooms and prepare limited-edition arrangements each day.",
                icon: <Flower2 className="w-6 h-6" />,
              },
              {
                title: "Same-Day Delivery",
                text: "Fast and careful delivery in Yerevan with premium presentation and fresh quality standards.",
                icon: <Truck className="w-6 h-6" />,
              },
              {
                title: "Events and Ceremonies",
                text: "Wedding bouquets, ceremonial accessories, and custom floral design for special occasions.",
                icon: <Clock className="w-6 h-6" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Contact & Store Information
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <p>Armenia, Yerevan, Pushkin 50 str</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <p>+374 (55) 35 30 00</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-gray-500" />
                  <p>Info.avenuedesfleurs@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-8 space-y-5">
              <h3 className="text-2xl font-semibold">Useful Links</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://www.flower.am/en/flowers?is_bestseller=true"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  Best Sellers <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.flower.am/en/accessories?category=wedding-bouquets"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  Wedding Bouquets <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.avenuedesfleurs.com"
                  target="_blank"
                  className="inline-flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  Brand Website <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

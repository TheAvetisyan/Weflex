"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function EnovaLogixComponent() {
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
                <span>🚛</span>
                <h1>Transportation made simple</h1>
              </div>

              <Image
                src="/company_logos/enova-logix.webp"
                alt="Enova Logix"
                width={380}
                height={120}
                className="dark:hidden h-auto w-auto max-h-20 object-contain"
              />
              <Image
                src="/company_logos/enova-logix.webp"
                alt="Enova Logix"
                width={380}
                height={120}
                className="hidden dark:block h-auto w-auto max-h-20 object-contain"
              />

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl">
                Fast, affordable, and reliable auto shipping across the U.S.
                with licensed carriers, fully insured transport, and live
                shipment visibility.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="https://enovalogix.com/"
                  target="_blank"
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>

                <Link
                  href="tel:+16069094099"
                  className="group flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                >
                  <span>Call: (606) 909-4099</span>
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
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  label: "Fully Insured",
                  icon: <ShieldCheck className="w-6 h-6" />,
                },
                {
                  label: "On-Time Delivery",
                  icon: <Clock className="w-6 h-6" />,
                },
                {
                  label: "Licensed & Bonded",
                  icon: <CheckCircle2 className="w-6 h-6" />,
                },
                { label: "24/7 Support", icon: <Truck className="w-6 h-6" /> },
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { k: "4.9★", v: "Rating across verified reviews" },
              { k: "10K+", v: "Active dealerships" },
              { k: "75", v: "Net Promoter Score" },
              { k: "24/7", v: "Customer support" },
            ].map((stat) => (
              <div
                key={stat.k}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6"
              >
                <p className="text-3xl font-bold">{stat.k}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {stat.v}
                </p>
              </div>
            ))}
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
                  <p>enovalogix@enovalogix.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <p>(606) 909-4099</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <p>11132 Welby Way, North Hollywood, California 91606</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <p>Mon-Sun 9am-9pm EST, live chat 24/7</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-8 space-y-4">
              <h3 className="text-2xl font-semibold">Why Choose Enova Logix</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  Reliable nationwide vehicle transport services across all 50
                  states.
                </li>
                <li>
                  No upfront payments and transparent, market-based pricing.
                </li>
                <li>
                  Certified and insured carrier network with real-time updates.
                </li>
                <li>
                  Dedicated specialists focused on fast response and clear
                  communication.
                </li>
              </ul>
              <Link
                href="https://enovalogix.com/"
                target="_blank"
                className="inline-flex items-center gap-2 font-medium mt-2 hover:text-gray-600 dark:hover:text-gray-400"
              >
                Visit Website <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

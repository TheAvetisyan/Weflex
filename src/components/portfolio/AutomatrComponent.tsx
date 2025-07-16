"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone, ArrowRight, Brain, Zap, Shield } from "lucide-react";
import Solution from "@/components/sections/solution";


export default function AutomatrComponent() {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <div className="w-[90vw] sm:w-full ">
        {/* Hero Section */}
        <section className="w-full pt-20 min-h-screen flex flex-col relative overflow-hidden gap-10 justify-center">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium">
                  <span className="text-lg">🤖</span>
                  <h1>Custom Automations,powered by AI</h1>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                  <Image
                    src="/company_logos/automatr.png"
                    alt="Automatr Logo"
                    width={300}
                    height={300}
                    className=" object-cover "
                  />
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-md">
                  We solve your toughest challenges with AI-powered cloud
                  automations.
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <Link
                    href="https://automatr.io/"
                    target="_blank"
                    className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Visit Us
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto"
                style={{
                  transform: `translateY(${scrollY * 0.1}px) rotate(${
                    scrollY * 0.02
                  }deg)`,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800" />
                <div className="absolute inset-8 rounded-full bg-white dark:bg-black shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/6 h-3/6 relative ">
                    <Image
                      src="/automatrlogomark.png"
                      alt="Pizza Ayo Logo"
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="  flex justify-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Scroll to explore
              </p>
              <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center">
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-32 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                  Automatr is an AI-driven automation platform that delivers
                  custom cloud-based solutions, mimicking human-like actions
                  across the web.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Brain className="text-[#2563eb]" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Extract Data from Any Website
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Turn any website or social platform into a powerful data
                      source. Capture structured data like emails, product
                      details, competitor insights, and social profiles for
                      seamless analysis and integration.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Zap className="text-[#2563eb]" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Automate various website tasks
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Engage with posts, send personalized messages, verify
                      accounts, follow profiles, fill forms, book appointments,
                      and more—streamline your web tasks with ease and
                      efficiency.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Shield className="text-[#2563eb]" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      AI-Powered Analytics & Insights
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Leverage AI to turn raw data into actionable
                      insights—create detailed personas, analyze engagement
                      metrics, and craft data-driven strategies for improved
                      results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Solution />

        <section
          id="contact"
          className="w-full py-32 px-4 bg-white dark:bg-gray-950 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16 max-w-2xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Get in touch
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 text-lg"
                >
                  Ready to streamline your business operations? Reach out to
                  discuss your project.
                </motion.p>
              </motion.div>

              <div className="flex flex-col md:flex-row w-full justify-center gap-8">
                <Link
                  href="https://automatr.io"
                  target="_blank"
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full overflow-hidden text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Visit Website
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>

                <Link
                  href="mailto:contact@automatr.io"
                  className="group relative px-8 py-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-medium rounded-full overflow-hidden text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Email Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
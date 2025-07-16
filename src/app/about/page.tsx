"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const section1InView = useInView(section1Ref, { once: false, amount: 0.5 });
  const section2InView = useInView(section2Ref, { once: false, amount: 0.5 });
  const section3InView = useInView(section3Ref, { once: false, amount: 0.5 });
  const section4InView = useInView(section4Ref, { once: false, amount: 0.5 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-background min-h-screen" ref={containerRef}>
      {/* Navigation Dots */}
      <div className="fixed top-1/2 -translate-y-1/2 left-8 hidden xl:flex flex-col gap-6 z-40">
        {[
          { ref: section1Ref, inView: section1InView },
          { ref: section2Ref, inView: section2InView },
          { ref: section3Ref, inView: section3InView },
          { ref: section4Ref, inView: section4InView },
        ].map((section, index) => (
          <motion.button
            key={index}
            className="w-3 h-3 rounded-full bg-secondary relative"
            onClick={() => {
              section.ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label={`Scroll to section ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence>
              {section.inView && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <main className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <motion.section
          ref={section1Ref}
          className="min-h-screen flex flex-col justify-center py-24"
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <div className="max-w-4xl">
            <motion.div
              className="overflow-hidden mb-4"
              variants={fadeInVariants}
            >
              <motion.h1
                className="text-7xl md:text-9xl font-extralight tracking-tight"
                initial={{ y: "100%" }}
                animate={section1InView ? { y: 0 } : { y: "100%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
              >
                About <span className="font-normal">Us</span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="h-px w-24 bg-primary mb-16"
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: 96,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.6,
                  },
                },
              }}
            />

            <motion.h1
              className="text-xl md:text-2xl font-extralight leading-relaxed text-muted-foreground max-w-3xl ml-auto"
              variants={fadeInVariants}
            >
              At Weflex, we don&apos;t just build software — we build the future
              of your business. Our mission is simple: we help you grow faster,
              work smarter, and achieve more by crafting custom software
              that&apos;s tailored to your exact needs.
            </motion.h1>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section
          ref={section2Ref}
          className="min-h-screen flex flex-col justify-center py-24"
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <div className="grid md:grid-cols-2 gap-24">
            <motion.h2
              className="text-4xl md:text-6xl font-extralight tracking-tight"
              variants={fadeInVariants}
            >
              What <span className="font-normal">We Do</span>
            </motion.h2>

            <motion.div className="space-y-16" variants={staggerChildren}>
              {[
                {
                  title: "Tailored Software Solutions",
                  description:
                    "We create software that's designed to scale with your business, not just meet your current needs.",
                },
                {
                  title: "Growth-Focused Innovation",
                  description:
                    "Every line of code is written with one goal in mind — to accelerate your growth and make your business more efficient.",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "We ensure everything works together so you can focus on what matters most: growing your business.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={fadeInVariants}
                  custom={index}
                >
                  <div className="overflow-hidden mb-6">
                    <motion.h3
                      className="text-2xl font-light flex items-center gap-2"
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {item.title}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </motion.h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          ref={section3Ref}
          className="min-h-screen flex flex-col justify-center py-24"
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <div className="grid md:grid-cols-2 gap-24">
            <motion.div
              className="space-y-16 order-2 md:order-1"
              variants={staggerChildren}
            >
              {[
                {
                  title: "Your Growth is Our Priority",
                  description:
                    "We approach every project as if it's our own business. We invest in your success and make sure you're always ahead of the competition.",
                },
                {
                  title: "End-to-End Support",
                  description:
                    "From concept to execution, we're with you every step of the way, ensuring that your business continues to thrive long after launch.",
                },
                {
                  title: "Smart Solutions for Every Stage",
                  description:
                    "Whether you're a startup or scaling fast, we provide custom solutions that evolve with your business.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={fadeInVariants}
                >
                  <motion.div
                    className="h-px w-16 bg-primary mb-6"
                    whileHover={{ width: 96 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              variants={fadeInVariants}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-extralight tracking-tight sticky top-24"
                variants={fadeInVariants}
              >
                Why <span className="font-normal">Choose Us</span>
              </motion.h2>
              <motion.p
                className="mt-16 text-muted-foreground font-light leading-relaxed text-lg max-w-md"
                variants={fadeInVariants}
              >
                When you work with Weflex, you&apos;re partnering with a team
                that thinks like an extension of your business, committed to
                your long-term success.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={section4Ref}
          className="min-h-screen flex flex-col justify-center py-24"
          initial="hidden"
          animate={section4InView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <div className="grid md:grid-cols-2 gap-24">
            <motion.h2
              className="text-4xl md:text-6xl font-extralight tracking-tight"
              variants={fadeInVariants}
            >
              Contact <span className="font-normal">Us</span>
            </motion.h2>

            <motion.div className="space-y-12" variants={staggerChildren}>
              <motion.div variants={fadeInVariants}>
                <Link href="tel:+1(747)273-9820" className="group block">
                  <div className="flex items-center gap-6 mb-2">
                    <motion.div
                      className="w-16 h-16 rounded-full border border-muted flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "var(--primary)",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      <Phone className="h-6 w-6" />
                    </motion.div>
                    <span className="text-2xl font-extralight">Phone</span>
                  </div>
                  <p className="text-muted-foreground font-light text-lg ml-[5.5rem] group-hover:text-foreground transition-colors duration-300">
                    +1 (747) 273-9820
                  </p>
                </Link>
              </motion.div>

              <motion.div variants={fadeInVariants}>
                <Link href="mailto:info@weflex.am" className="group block">
                  <div className="flex items-center gap-6 mb-2">
                    <motion.div
                      className="w-16 h-16 rounded-full border border-muted flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "var(--primary)",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      <Mail className="h-6 w-6" />
                    </motion.div>
                    <span className="text-2xl font-extralight">Email</span>
                  </div>
                  <p className="text-muted-foreground font-light text-lg ml-[5.5rem] group-hover:text-foreground transition-colors duration-300">
                    info@weflex.am
                  </p>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

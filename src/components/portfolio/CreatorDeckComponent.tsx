"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Instagram,
  Linkedin,
  Award,
  Globe,
  MessageSquare,
  Briefcase,
  Star,
  Calendar,
  Share2,
  ShoppingBag,
} from "lucide-react";
export default function CreatorDeckComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-[90vw] sm:w-full">
        {/* Hero Section */}
        <section className="w-full pt-20 sm:pt-0 min-h-screen flex flex-col relative overflow-hidden gap-10 justify-center">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium">
                  <span className="text-lg">✨</span>
                  <h1>Women-Founded, Minority-Led</h1>
                </div>

                <Image
                  src="/creatordecklogo.png"
                  width={500}
                  height={500}
                  alt="logo"
                  className="object-cover w-auto h-16"
                />

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-md">
                  Culturally relevant, data-driven influencer marketing for
                  forward-thinking brands.
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <Link
                    href="https://www.creatordeck.com/services"
                    target="_blank"
                    className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Our Services
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </Link>

                  <Link
                    href="https://www.creatordeck.com/contact"
                    target="_blank"
                    className="group flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                    }}
                    className="w-3/4 h-3/4 relative"
                  >
                    <Image
                      src="/redLogoMobile.png"
                      alt="Creator Deck"
                      fill
                      className="object-contain rounded-full "
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center z-20">
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
                  With over 17 years of experience, we create culturally
                  relevant and data-driven campaigns for brands across various
                  sectors.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold">Women-Founded</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Established in 2008 by visionary female entrepreneurs with
                      a passion for authentic marketing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold">Data-Driven</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our strategies are backed by comprehensive analytics and
                      industry insights for maximum impact.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Award className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold">Award-Winning</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Recognized on Inc. 5000&apos;s Fastest Growing Companies
                      List in 2022 for our exceptional work.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section
          id="about"
          className="w-full py-32 px-4 bg-gray-50 dark:bg-gray-950"
        >
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>About Us</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold">
                    Influencer marketing with purpose
                  </h2>

                  <div className="space-y-6 text-lg">
                    <p className="text-gray-600 dark:text-gray-400">
                      Creator Deck is a women-founded, minority-led influencer
                      marketing agency based in Burlingame, California.
                      Established in 2008, we bring over 17 years of experience
                      to the industry.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400">
                      We specialize in creating culturally relevant and
                      data-driven campaigns for brands across various sectors,
                      including beauty, fashion, health, luxury, retail,
                      e-commerce, pets, food and beverage, travel, sports and
                      entertainment, and restaurants.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400">
                      Led by CEO Helen Zhu, our agency has worked with over a
                      dozen L&apos;Oréal brands and companies like Nasty Gal and
                      Kipling.
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </div>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </div>
                    </Link>
                    <Link
                      href="https://creatordeck.com"
                      target="_blank"
                      aria-label="Website"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="aspect-[4/3] w-full bg-white dark:bg-black rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/TheBeginning_ABOUTPAGE.png"
                    alt="Creator Deck Team"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="w-full py-32 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-16"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>Our Services</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold">
                    Comprehensive influencer marketing solutions
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Strategy & Trend Reporting",
                      description:
                        "Developing influencer strategies and providing insights into current trends.",
                      icon: (
                        <TrendingUp className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      ),
                    },
                    {
                      title: "Influencer Campaign Management",
                      description:
                        "Managing end-to-end influencer operations, including outreach, onboarding, briefing, contracting, and campaign support.",
                      icon: (
                        <Users className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      ),
                    },
                    {
                      title: "Social & Community Management",
                      description:
                        "Handling social media and community management to bring brands to life across owned channels.",
                      icon: (
                        <MessageSquare className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      ),
                    },
                    {
                      title: "Affiliate Marketing",
                      description:
                        "Implementing affiliate partner strategies to drive traffic and sales.",
                      icon: (
                        <ShoppingBag className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      ),
                    },
                    {
                      title: "Experiential Marketing",
                      description:
                        "Producing events and experiences that foster authentic connections and brand loyalty.",
                      icon: (
                        <Calendar className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      ),
                    },
                    {
                      title: "Public Relations",
                      description:
                        "Providing PR expertise to amplify brand reach and credibility.",
                      icon: (
                        <Share2 className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      ),
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6">
                        {service.icon}
                      </div>

                      <h3 className="text-xl font-semibold mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="w-full py-32 px-4 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-16"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium">
                    <Globe className="w-4 h-4" />
                    <span>Our Platform</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold">
                    Subscription-based influencer management
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <Image
                      src="/SHEIN_HOMEPAGE.gif"
                      alt="Creator Deck Platform"
                      width={500}
                      height={500}
                      className="max-h-[500px] object-cover rounded-2xl shadow-xl"
                    />
                  </div>

                  <div className="space-y-8 order-1 lg:order-2">
                    <h3 className="text-3xl font-bold">
                      Streamline your influencer marketing
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Our subscription-based platform starts at $49.99/month,
                      allowing businesses to:
                    </p>

                    <ul className="space-y-4">
                      {[
                        "Manage projects efficiently",
                        "Maintain comprehensive influencer databases",
                        "Track all communications in one place",
                        "View detailed campaign reports and analytics",
                        "Scale your influencer marketing efforts",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="w-full py-32 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium">
                    <Users className="w-4 h-4" />
                    <span>Our Philosophy</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold">
                    Creating a better future through authentic content
                  </h2>

                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Creator Deck emphasizes collaboration with diverse
                      communities, focusing on fairness, kindness, credibility,
                      and inclusivity. We aim to create a better future through
                      authentic social media content.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          label: "Fairness",
                          icon: <Award className="w-5 h-5" />,
                        },
                        {
                          label: "Kindness",
                          icon: <Users className="w-5 h-5" />,
                        },
                        {
                          label: "Credibility",
                          icon: <Star className="w-5 h-5" />,
                        },
                        {
                          label: "Inclusivity",
                          icon: <Globe className="w-5 h-5" />,
                        },
                      ].map((value, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            {value.icon}
                          </div>
                          <span className="font-medium">{value.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src="/ICESKAKTER_UD-HOMPAGE2.gif"
                    alt="Creator Deck Team"
                    width={500}
                    height={500}
                    className="max-h-[500px] rounded-2xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="w-full py-32 px-4 bg-white dark:bg-black overflow-hidden relative"
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
                  Let&apos;s work together
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 text-lg"
                >
                  Ready to elevate your brand with culturally relevant
                  influencer marketing? Get in touch with our team.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Burlingame, California
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    info@creatordeck.com
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Website</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <Link
                      href="https://creatordeck.com"
                      className="hover:underline"
                    >
                      creatordeck.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Creator Deck</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Women-founded, minority-led influencer marketing agency since
                  2008.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </Link>
                  <Link
                    href="https://creatordeck.com"
                    target="_blank"
                    aria-label="Website"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Strategy & Trend Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Campaign Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Social Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Affiliate Marketing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#about"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Creator Deck. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

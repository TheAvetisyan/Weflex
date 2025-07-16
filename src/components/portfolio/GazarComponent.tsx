"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Apple,
  ChevronRight,
  Leaf,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

export default function GazarComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
                <span className="text-lg">🥬</span>
                <h1>Fresh Produce Delivered</h1>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                <Image
                  src="/company_logos/gazar_colored.svg"
                  alt="Gazar.am Logo"
                  width={300}
                  height={100}
                  className="object-contain"
                />
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-md">
                Fresh Fruits & Vegetables Delivered in Yerevan
              </p>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="https://gazar.am/shop"
                  className="group relative px-8 py-4 bg-green-600 dark:bg-green-500 text-white dark:text-black font-medium rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Order Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-green-700 dark:bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>

                <Link
                  href="https://gazar.am"
                  className="group flex items-center gap-2 font-medium transition-colors hover:text-green-600 dark:hover:text-green-400"
                >
                  <span>Browse Products</span>
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
              <div className="absolute inset-8 rounded-full bg-white dark:bg-black shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 relative">
                  <Image
                    src="/avocado.webp"
                    alt="Fresh Produce"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
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
                Gazar.am is an Armenian online grocery store that delivers fresh
                fruits, vegetables, and organic products straight to your door.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-xl">🍎</span>
                  </div>
                  <h3 className="text-xl font-semibold">Fresh Fruits</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bananas, apples, citrus, berries and more delivered fresh to
                    your door.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-xl">🥬</span>
                  </div>
                  <h3 className="text-xl font-semibold">Fresh Vegetables</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tomatoes, cucumbers, grays and other seasonal vegetables.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-xl">🍯</span>
                  </div>
                  <h3 className="text-xl font-semibold">Organic Products</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Juices, honey, herbs, nuts, eggs and other organic products.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section
        id="location"
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
                  <MapPin className="w-4 h-4" />
                  <span>Location & Hours</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                  Based in Yerevan, Armenia
                </h2>

                <div className="space-y-6 text-lg">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-black dark:text-white">
                      Address:
                    </span>
                    <br />
                    Based in Yerevan, Armenia (exact address not listed)
                  </p>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-gray-400" />
                    <div>
                      <p className="font-medium">Working Hours:</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Orders accepted 24/7 through the website, deliveries
                        during daytime hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] w-full bg-white dark:bg-black rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97586.95232810622!2d44.41773035!3d40.1539933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1714629300000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gazar.am Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="w-full py-32 px-4">
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
                  <Apple className="w-4 h-4" />
                  <span>Product Highlights</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                  Discover our fresh selection
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Fruits",
                    items: [
                      "Bananas",
                      "Apples",
                      "Citrus",
                      "Berries",
                      "Seasonal Fruits",
                      "Exotic Fruits",
                    ],
                    icon: "🍎",
                  },
                  {
                    title: "Vegetables",
                    items: [
                      "Tomatoes",
                      "Cucumbers",
                      "grays",
                      "Potatoes",
                      "Onions",
                      "Seasonal Vegetables",
                    ],
                    icon: "🥬",
                  },
                  {
                    title: "Other Products",
                    items: ["Juices", "Honey", "Herbs", "Nuts", "Eggs"],
                    icon: "🍯",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6">
                      <span className="text-xl">{category.icon}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">
                      {category.title}
                    </h3>

                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  href="https://gazar.am"
                  target="_blank"
                  className="group inline-flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                >
                  <span>View All Products</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section
        id="offers"
        className="w-full py-32 px-4 bg-gray-50 dark:bg-gray-950"
      >
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
                  <Leaf className="w-4 h-4" />
                  <span>Current Offers</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                  Special deals for you
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Fruit Combo Box",
                    description:
                      "A selection of fresh seasonal fruits in a convenient combo box.",
                    cta: "Order Now",

                    link: "https://gazar.am",
                    icon: "🍇",
                  },
                  {
                    title: "Vegetable Combo Box",
                    description:
                      "Essential vegetables for your weekly needs in one convenient package.",
                    cta: "Order Now",
                    link: "https://gazar.am",
                    icon: "🥕",
                  },
                ].map((option, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6">
                      <span className="text-xl">{option.icon}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {option.description}
                    </p>

                    <Link
                      href={option.link}
                      className="inline-flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      <span>{option.cta}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ordering Options */}
      <section id="order" className="w-full py-32 px-4">
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
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ordering Options</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                  How would you like to order?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Website",
                    description:
                      "Order directly via gazar.am for the full selection of products.",
                    cta: "Order Online",
                    link: "https://gazar.am",
                    icon: "🌐",
                  },
                  {
                    title: "Mobile-Friendly",
                    description:
                      "Our mobile-friendly site makes ordering on the go easy and convenient.",
                    cta: "Visit Site",
                    link: "https://gazar.am",
                    icon: "📱",
                  },
                  {
                    title: "Yerevan Delivery",
                    description:
                      "We deliver to all areas within Yerevan with varying delivery fees by area and weight.",
                    cta: "Check Delivery",
                    link: "https://gazar.am/ContactUs",
                    icon: "🚚",
                  },
                ].map((option, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6">
                      <span className="text-xl">{option.icon}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {option.description}
                    </p>

                    <Link
                      href={option.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      <span>{option.cta}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="w-full py-32 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden relative"
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
                We&apos;d love to hear from you. Reach out for orders, feedback,
                or inquiries.
              </motion.p>
            </motion.div>

            <div className="flex w-full">
              <div className="flex w-full justify-center items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    +374 55 456 454
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShoppingBag className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Delivery</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Varies by area and weight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";

import { useState } from "react";
import {
  Plus,
  Minus,
  CheckCircle2,
  X,
  ShoppingCart,
  Code,
  Zap,
  Smartphone,
  Globe,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// Define service categories and their options
const serviceCategories = [
  {
    id: "full-cycle",
    name: "Software & Web",
    icon: Code,
    description:
      "From websites to mobile apps and full-stack solutions, we build everything from scratch to scale.",
    basePrice: 2500,
    options: [
      {
        id: "custom-software",
        name: "Custom Software Development",
        price: 4000,
        description:
          "Tailored software built to match your exact business needs and workflows.",
      },
      {
        id: "website-dev",
        name: "Website Development",
        price: 2000,
        description:
          "Modern, responsive websites built for performance and aesthetics.",
      },
      {
        id: "mobile-app",
        name: "Mobile App Development",
        price: 3500,
        description:
          "iOS and Android apps built with user experience and scalability in mind.",
      },
      {
        id: "saas-product",
        name: "SaaS Product Development",
        price: 5000,
        description:
          "End-to-end development of cloud-based SaaS platforms with user onboarding, billing, and dashboards.",
      },
      {
        id: "api-backend",
        name: "API & Backend Development",
        price: 3000,
        description:
          "Secure, scalable backend services and APIs for data-driven applications.",
      },
    ],
  },
  {
    id: "ecommerce-conversion",
    name: "E-Commerce & Conversion",
    icon: ShoppingCart,
    description:
      "Maximize your online sales potential with optimized design, SEO, and conversion tools.",
    basePrice: 2200,
    options: [
      {
        id: "ecommerce-dev",
        name: "E-commerce Development",
        price: 3000,
        description:
          "Powerful online store setup with payment gateways and order management.",
      },
      {
        id: "website-hosting",
        name: "Website Hosting",
        price: 600,
        description:
          "Fast and secure hosting solutions tailored for websites and e-commerce.",
      },
      {
        id: "seo-services",
        name: "SEO Services",
        price: 1000,
        description:
          "Boost search engine rankings and drive organic traffic with expert SEO strategies.",
      },
      {
        id: "uiux-design",
        name: "UI/UX Design",
        price: 1800,
        description:
          "User-centric design for websites and apps to improve experience and retention.",
      },
      {
        id: "support-maintenance",
        name: "Ongoing Support & Maintenance",
        price: 500,
        description:
          "Keep your digital platforms updated, secure, and running smoothly 24/7.",
      },
    ],
  },
  {
    id: "automation-infra",
    name: "Automation & Infrastructure",
    icon: Zap,
    description:
      "Automate workflows and build resilient infrastructure to support your digital operations.",
    basePrice: 2000,
    options: [
      {
        id: "integrations",
        name: "Integrations & Automation",
        price: 2500,
        description:
          "Automate processes and connect systems for increased efficiency and reduced manual work.",
      },
      {
        id: "custom-software-dup",
        name: "Custom Software Development",
        price: 4000,
        description:
          "Custom applications reimagined for automation and system integration.",
      },
      {
        id: "api-backend-dup",
        name: "API & Backend Development",
        price: 3000,
        description:
          "Backend systems designed to scale with your automation needs.",
      },
      {
        id: "saas-product-dup",
        name: "SaaS Product Development",
        price: 5000,
        description:
          "Cloud-native SaaS products built with automation in mind from day one.",
      },
      {
        id: "hosting-dup",
        name: "Website Hosting",
        price: 600,
        description:
          "Infrastructure solutions that support scaling, uptime, and performance.",
      },
    ],
  },
  {
    id: "frontend-marketing",
    name: "Mobile, Design & Marketing",
    icon: Smartphone,
    description:
      "Design and mobile-first strategies paired with high-impact SEO and support.",
    basePrice: 1800,
    options: [
      {
        id: "uiux-design-dup",
        name: "UI/UX Design",
        price: 1800,
        description:
          "Polished, user-first interfaces for web and mobile platforms.",
      },
      {
        id: "mobile-app-dup",
        name: "Mobile App Development",
        price: 3500,
        description:
          "Cross-platform apps that engage users and convert traffic into value.",
      },
      {
        id: "seo-dup",
        name: "SEO Services",
        price: 1000,
        description:
          "Ongoing SEO campaigns to boost visibility and search performance.",
      },
      {
        id: "support-maintenance-dup",
        name: "Ongoing Support & Maintenance",
        price: 500,
        description:
          "Full-cycle support to keep everything running and evolving smoothly.",
      },
      {
        id: "ecommerce-dup",
        name: "E-commerce Development",
        price: 3000,
        description:
          "Online storefronts built for maximum conversion and ease of use.",
      },
    ],
  },
  {
    id: "core-web-services",
    name: "Core Web Services",
    icon: Globe,
    description:
      "Foundational services to launch, run, and evolve your digital presence.",
    basePrice: 1900,
    options: [
      {
        id: "website-dev-dup",
        name: "Website Development",
        price: 2000,
        description:
          "Responsive, modern websites that drive traffic and build trust.",
      },
      {
        id: "integrations-dup",
        name: "Integrations & Automation",
        price: 2500,
        description:
          "Effortless third-party integrations and smart automations.",
      },
      {
        id: "saas-product-dup2",
        name: "SaaS Product Development",
        price: 5000,
        description:
          "Reliable SaaS platforms built to evolve with your business.",
      },
      {
        id: "custom-software-dup2",
        name: "Custom Software Development",
        price: 4000,
        description:
          "Custom systems for unique business logic, built to grow with you.",
      },
      {
        id: "mobile-app-dup2",
        name: "Mobile App Development",
        price: 3500,
        description: "Powerful apps tailored to your users and goals.",
      },
    ],
  },
];

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<
    {
      categoryId: string;
      optionIds: string[];
    }[]
  >([]);

  const [activeTab, setActiveTab] = useState("all");

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;

    selectedServices.forEach((service) => {
      const category = serviceCategories.find(
        (cat) => cat.id === service.categoryId
      );
      if (category) {
        // Add price for each selected option
        service.optionIds.forEach((optionId) => {
          const option = category.options.find((opt) => opt.id === optionId);
          if (option) {
            total += option.price;
          }
        });
      }
    });

    return total;
  };

  // Select all options in a category
  const selectAllOptions = (categoryId: string, e: React.MouseEvent) => {
    // Prevent event bubbling
    e.stopPropagation();

    setSelectedServices((prev) => {
      const category = serviceCategories.find((cat) => cat.id === categoryId);
      if (!category) return prev;

      // Get all option IDs for this category
      const allOptionIds = category.options.map((option) => option.id);

      // Check if category already exists
      const existingIndex = prev.findIndex((s) => s.categoryId === categoryId);

      if (existingIndex >= 0) {
        // Category exists, replace its options with all options
        const newServices = [...prev];
        newServices[existingIndex].optionIds = allOptionIds;
        return newServices;
      } else {
        // Category doesn't exist, add it with all options
        return [...prev, { categoryId, optionIds: allOptionIds }];
      }
    });
  };

  // Toggle service option with debug logging
  const toggleServiceOption = (
    categoryId: string,
    optionId: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();

    setSelectedServices((prev) => {
      const existingIndex = prev.findIndex((s) => s.categoryId === categoryId);

      if (existingIndex >= 0) {
        // Create a new array to maintain immutability
        const newServices = prev.map((service, index) => {
          if (index === existingIndex) {
            const optionExists = service.optionIds.includes(optionId);
            return {
              ...service,
              optionIds: optionExists
                ? service.optionIds.filter((id) => id !== optionId) // Remove
                : [...service.optionIds, optionId], // Add with spread
            };
          }
          return service;
        });

        // Cleanup empty categories
        return newServices.filter(
          (service) =>
            service.categoryId !== categoryId || service.optionIds.length > 0
        );
      }

      // Add new category with option
      return [...prev, { categoryId, optionIds: [optionId] }];
    });
  };
  // Check if a service option is selected
  const isOptionSelected = (categoryId: string, optionId: string) => {
    const category = selectedServices.find((s) => s.categoryId === categoryId);
    return category ? category.optionIds.includes(optionId) : false;
  };

  // Remove a specific option with debug logging
  const removeOption = (
    categoryId: string,
    optionId: string,
    e: React.MouseEvent
  ) => {
    // Prevent event bubbling
    e.stopPropagation();

    setSelectedServices((prev) => {
      const newServices = [...prev];
      const categoryIndex = newServices.findIndex(
        (s) => s.categoryId === categoryId
      );

      if (categoryIndex >= 0) {
        newServices[categoryIndex].optionIds = newServices[
          categoryIndex
        ].optionIds.filter((id) => id !== optionId);

        // If no options left, remove the category
        if (newServices[categoryIndex].optionIds.length === 0) {
          return newServices.filter((s) => s.categoryId !== categoryId);
        }
      }

      return newServices;
    });
  };

  // Filter categories based on active tab
  const filteredCategories =
    activeTab === "all"
      ? serviceCategories
      : serviceCategories.filter((category) => category.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-[90%] self-center sm:self-start lg:w-2/3">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              <Tabs className="w-full">
                <TabsList className="w-full h-auto p-1 overflow-x-auto flex-nowrap justify-start">
                  <TabsTrigger
                    value="all"
                    onClick={() => setActiveTab("all")}
                    className={cn(
                      "flex-shrink-0 py-2.5 text-sm font-medium whitespace-nowrap",
                      activeTab === "all"
                        ? "bg-background shadow-sm"
                        : "bg-transparent"
                    )}
                  >
                    All Services
                  </TabsTrigger>
                  {serviceCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={cn(
                        "flex-shrink-0 py-2.5 text-sm font-medium whitespace-nowrap",
                        activeTab === category.id
                          ? "bg-background shadow-sm"
                          : "bg-transparent"
                      )}
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent className="px-0 pt-6">
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center mt-2 sm:mt-0 sm:ml-auto"
                      onClick={(e) => selectAllOptions(category.id, e)}
                    >
                      Select All
                    </Button>
                  </div>

                  <div className="grid gap-2">
                    {category.options.map((option) => (
                      <div
                        key={option.id}
                        className={cn(
                          "flex flex-col sm:flex-row items-start sm:items-center rounded-lg border p-3 transition-all",
                          isOptionSelected(category.id, option.id)
                            ? "border-primary/30 bg-primary/5"
                            : "border-border hover:border-primary/20"
                        )}
                      >
                        <div className="flex items-center gap-2 w-full">
                          {isOptionSelected(category.id, option.id) ? (
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          ) : (
                            <div className="h-4 w-4 flex-shrink-0" />
                          )}
                          <span
                            className={cn(
                              "line-clamp-1",
                              isOptionSelected(category.id, option.id)
                                ? "font-medium"
                                : ""
                            )}
                          >
                            {option.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-2 sm:mt-0 ml-0 sm:ml-auto">
                          <span className="text-muted-foreground">
                            ${option.price}
                          </span>
                          <Button
                            variant={
                              isOptionSelected(category.id, option.id)
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            className="h-8 w-8 rounded-full p-0"
                            onClick={(e) =>
                              toggleServiceOption(category.id, option.id, e)
                            }
                          >
                            {isOptionSelected(category.id, option.id) ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeTab === "all" && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-[90%] sm:w-full self-center sm:self-auto lg:w-1/3">
        <div className="sticky top-4 py-4 lg:py-8">
          <Card className="overflow-hidden border shadow-md">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl text-primary">
                Your Package Summary
              </CardTitle>
              <CardDescription className="text-primary">
                Customized for your business needs
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <AnimatePresence>
                {selectedServices.length === 0 ? (
                  <motion.div
                    className="py-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-base font-medium">
                      Your package is empty
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Add services to see your custom quote
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4">
                      {selectedServices.map((service) => {
                        const category = serviceCategories.find(
                          (cat) => cat.id === service.categoryId
                        );
                        if (!category || service.optionIds.length === 0)
                          return null;

                        return (
                          <motion.div
                            key={service.categoryId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="pb-4 border-b border-border last:border-0"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <category.icon className="h-4 w-4 text-primary" />
                              <div className="font-medium">{category.name}</div>
                            </div>
                            <ul className="space-y-2">
                              <AnimatePresence>
                                {service.optionIds.map((optionId) => {
                                  const option = category.options.find(
                                    (opt) => opt.id === optionId
                                  );
                                  if (!option) return null;

                                  return (
                                    <motion.li
                                      key={optionId}
                                      className="flex items-center justify-between text-sm"
                                      initial={{ opacity: 0, x: -5 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 5 }}
                                      transition={{ duration: 0.15 }}
                                    >
                                      <span className="text-muted-foreground break-words pr-2">
                                        {option.name}
                                      </span>
                                      <div className="flex items-center gap-2 flex-shrink-0">
                                        <span>${option.price}</span>
                                        <button
                                          onClick={(e) =>
                                            removeOption(
                                              service.categoryId,
                                              optionId,
                                              e
                                            )
                                          }
                                          className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                                        >
                                          <X className="h-3 w-3" />
                                          <span className="sr-only">
                                            Remove
                                          </span>
                                        </button>
                                      </div>
                                    </motion.li>
                                  );
                                })}
                              </AnimatePresence>
                            </ul>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total Estimate</span>
                        <span>${calculateTotal()}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        *Final pricing may vary based on project specifics
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                className="w-full"
                size="lg"
                disabled={selectedServices.length === 0}
              >
                Request Detailed Quote
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 border">
            <CardHeader>
              <CardTitle className="text-base">Why Choose Weflex?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Transparent pricing with no hidden fees
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Customized solutions for your business needs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Expert team with years of industry experience
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Ongoing support and maintenance
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

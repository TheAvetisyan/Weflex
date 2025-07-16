"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    // Show success message
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="w-full flex items-center justify-center py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto sm:w-full w-[85%]">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Send us a message
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Fill out the form below and we&quot;ll get back to you as soon as
                possible.
              </p>
            </div>

            {isSubmitted ? (
              <Card className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Thank you for reaching out. We&quot;ll get back to you shortly.
                  </p>
                </div>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="border-gray-300 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="min-h-[120px] md:min-h-[150px] border-gray-300 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Contact Information
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Reach out to us directly or visit our office.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              <Card className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      For general inquiries
                    </p>
                    <a
                      href="mailto:info@weflex.am"
                      className="text-gray-900 dark:text-gray-100 hover:underline mt-1 block"
                    >
                      info@weflex.am
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      When we&quot;re available
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-900 dark:text-gray-100 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-900 dark:text-gray-100 text-sm">
                        Saturday: Closed
                      </p>
                      <p className="text-gray-900 dark:text-gray-100 text-sm">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {/* Map and Social Media - Full width on mobile, side by side on larger screens */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Map */}
              <div className="w-full">
                <h3 className="text-lg font-medium mb-4">Our Location</h3>
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6736975799!2d44.5225!3d40.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1e8ad39175%3A0xf5913660c8c4fd5c!2s12%20I.%20Alikhanian%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Weflex Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="w-full">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/weflex.am"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <Facebook className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/weflex.am/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <Instagram className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/weflexdevelopment/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <Linkedin className="h-6 w-6 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

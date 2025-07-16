"use client";

import Link from "next/link";
import { ChevronRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen  w-full flex items-center justify-center">
      <div className="container max-w-6xl py-12 sm:w-full w-[85%]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Sidebar / Table of Contents */}
          <aside className="hidden md:block">
            <div className="sticky top-20">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">On this page</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      { id: "introduction", title: "Introduction" },
                      { id: "information", title: "Information We Collect" },
                      { id: "usage", title: "How We Use Your Data" },
                      { id: "sharing", title: "Data Sharing" },
                      { id: "rights", title: "Your Rights" },
                      { id: "security", title: "Data Security" },
                      { id: "transfers", title: "International Transfers" },
                      { id: "children", title: "Children's Privacy" },
                      { id: "changes", title: "Changes to Policy" },
                      { id: "contact", title: "Contact Us" },
                    ].map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ChevronRight className="mr-1 h-3 w-3" />
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className="p-4 bg-primary/5 border border-primary/10">
                  <h4 className="font-medium mb-2">Need help?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have questions about our privacy practices, please
                    contact our team.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-10">
            <div className="space-y-4">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Last Updated: April 17, 2025
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                How we collect, use, and protect your information
              </p>
            </div>

            <Separator />

            <section id="introduction" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  1. Introduction
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    Weflex (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy and is
                    committed to protecting your personal data. This Privacy
                    Policy describes how we collect, use, and protect your
                    personal information when you use our services.
                  </p>
                  <p>
                    By using Weflex, you agree to the terms of this Privacy
                    Policy. If you do not agree, please do not use our services.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="information" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  2. Information We Collect
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>We may collect the following types of personal data:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="font-semibold">Account Data:</span>
                      <span>
                        Email address, name, login credentials, profile
                        information
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">Usage Data:</span>
                      <span>
                        Information about how you use our services, including
                        pages visited, features used
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">Device Information:</span>
                      <span>
                        IP address, browser type, device type, operating system
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">Communication Data:</span>
                      <span>
                        Emails, chat messages, and other communications with us
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">
                        Payment Information:
                      </span>
                      <span>
                        Billing address, payment method details (we do not store
                        full credit card numbers)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="usage" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  3. How We Use Your Data
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>We use your personal data to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>
                      Send you technical notices, updates, security alerts, and
                      support messages
                    </li>
                    <li>
                      Monitor and analyze trends, usage, and activities in
                      connection with our services
                    </li>
                    <li>
                      Detect, investigate, and prevent fraudulent transactions
                      and other illegal activities
                    </li>
                    <li>Personalize and improve your experience</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="sharing" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  4. Data Sharing
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    We do not sell your personal data. We may share data with:
                  </p>
                  <ul>
                    <li>
                      <strong>Service Providers:</strong> Companies that perform
                      services on our behalf (e.g., payment processing, data
                      analysis)
                    </li>
                    <li>
                      <strong>Business Partners:</strong> Third parties with
                      whom we partner to offer products or services
                    </li>
                    <li>
                      <strong>Legal Authorities:</strong> When required by law
                      or to protect our rights
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="rights" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  5. Your Rights
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>Depending on your location, you may have the right to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      "Access the personal data we hold about you",
                      "Request correction of inaccurate data",
                      "Request deletion of your data",
                      "Object to our processing of your data",
                      "Request restriction of processing",
                      "Request transfer of your data",
                      "Withdraw consent",
                    ].map((right, index) => (
                      <div key={index} className="bg-muted/50 p-3 rounded-md">
                        {right}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="security" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  6. Data Security
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    We implement appropriate security measures to protect your
                    personal data against unauthorized access, alteration,
                    disclosure, or destruction. However, no method of
                    transmission over the Internet or electronic storage is 100%
                    secure, so we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="transfers" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  7. International Transfers
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    Your information may be transferred to and processed in
                    countries other than the one in which you reside. These
                    countries may have data protection laws that differ from
                    those in your country.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="children" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  8. Children&apos;s Privacy
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    Our services are not directed to children under 16. We do
                    not knowingly collect personal data from children under 16.
                    If you become aware that a child has provided us with
                    personal data, please contact us.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="changes" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  9. Changes to This Privacy Policy
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the &quot;Effective Date&quot; at the top.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="contact" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  10. Contact Us
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg mt-4">
                    <p className="mb-0">
                      <strong>Email:</strong> info@weflex.am
                      <br />
                      <strong>Address:</strong> Armenia, Yerevan,12 Alikhanyan St.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to top button */}
            <div className="flex justify-center pt-8">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

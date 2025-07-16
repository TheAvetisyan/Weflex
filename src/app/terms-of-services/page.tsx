"use client";

import Link from "next/link";
import { ChevronRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container max-w-6xl py-12 sm:w-full w-[85%]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] ">
          {/* Sidebar / Table of Contents */}
          <aside className="hidden md:block">
            <div className="sticky top-20">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">On this page</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      { id: "acceptance", title: "Acceptance of Terms" },
                      { id: "license", title: "Use License" },
                      { id: "accounts", title: "User Accounts" },
                      { id: "payment", title: "Payment Terms" },
                      { id: "intellectual", title: "Intellectual Property" },
                      { id: "content", title: "User Content" },
                      { id: "prohibited", title: "Prohibited Uses" },
                      { id: "disclaimer", title: "Disclaimer of Warranties" },
                      { id: "limitation", title: "Limitation of Liability" },
                      { id: "termination", title: "Termination" },
                      { id: "governing", title: "Governing Law" },
                      { id: "changes", title: "Changes to Terms" },
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
                  <h4 className="font-medium mb-2">Legal Questions?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have questions about our terms, please contact our
                    legal team.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact">Contact Legal</Link>
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
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground">
                The rules and guidelines for using our platform
              </p>
            </div>

            <Separator />

            <section id="acceptance" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  1. Acceptance of Terms
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    By accessing or using Weflex&apos;s services, you agree to
                    be bound by these Terms of Service and all applicable laws
                    and regulations. If you do not agree with any of these
                    terms, you are prohibited from using or accessing our
                    services.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="license" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  2. Use License
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    Permission is granted to temporarily use Weflex&apos;s
                    services for personal, non-commercial transitory viewing
                    only. This is the grant of a license, not a transfer of
                    title, and under this license you may not:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-primary text-sm font-medium">
                          1
                        </span>
                      </div>
                      <span>Modify or copy the materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-primary text-sm font-medium">
                          2
                        </span>
                      </div>
                      <span>Use the materials for any commercial purpose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-primary text-sm font-medium">
                          3
                        </span>
                      </div>
                      <span>
                        Attempt to decompile or reverse engineer any software
                        contained in Weflex&apos;s services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-primary text-sm font-medium">
                          4
                        </span>
                      </div>
                      <span>
                        Remove any copyright or other proprietary notations from
                        the materials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-primary text-sm font-medium">
                          5
                        </span>
                      </div>
                      <span>
                        Transfer the materials to another person or &quot;mirror&quot; the
                        materials on any other server
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    This license shall automatically terminate if you violate
                    any of these restrictions and may be terminated by Weflex at
                    any time.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="accounts" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  3. User Accounts
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    When you create an account with us, you must provide
                    accurate, complete, and current information. You are
                    responsible for safeguarding your account credentials and
                    for any activities or actions under your account.
                  </p>
                  <p>
                    We reserve the right to disable any user account if, in our
                    opinion, you have violated any provision of these Terms.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="payment" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  4. Payment Terms
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    For paid services, you agree to pay all fees in accordance
                    with the fees, charges, and billing terms in effect at the
                    time a fee or charge is due and payable. You are responsible
                    for paying all applicable taxes associated with your use of
                    the services.
                  </p>
                  <p>
                    Subscription fees are non-refundable except as expressly
                    provided in these Terms or as required by applicable law.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="intellectual" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  5. Intellectual Property
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    The Service and its original content, features, and
                    functionality are and will remain the exclusive property of
                    Weflex and its licensors. The Service is protected by
                    copyright, trademark, and other laws of both the United
                    States and foreign countries.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="content" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  6. User Content
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    You retain all rights to any content you submit, post, or
                    display on or through the Service. By submitting, posting,
                    or displaying content on or through the Service, you grant
                    us a worldwide, non-exclusive, royalty-free license to use,
                    reproduce, modify, adapt, publish, translate, create
                    derivative works from, distribute, perform, and display such
                    content in connection with providing the Service.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="prohibited" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  7. Prohibited Uses
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>You agree not to use the Service:</p>
                  <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-destructive text-sm">✕</span>
                      </div>
                      <span>
                        In any way that violates any applicable federal, state,
                        local, or international law or regulation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-destructive text-sm">✕</span>
                      </div>
                      <span>
                        To transmit, or procure the sending of, any advertising
                        or promotional material, including any &quot;junk mail,&quot; 
                        &quot;chain letter,&quot; &quot;spam&quot; or any other similar 
                        solicitation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-destructive text-sm">✕</span>
                      </div>
                      <span>
                        To impersonate or attempt to impersonate Weflex, a
                        Weflex employee, another user, or any other person or
                        entity
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-destructive text-sm">✕</span>
                      </div>
                      <span>
                        To engage in any other conduct that restricts or
                        inhibits anyone&apos;s use or enjoyment of the Service,
                        or which may harm Weflex or users of the Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="disclaimer" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  8. Disclaimer of Warranties
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 p-4 rounded-lg">
                    <p className="text-amber-800 dark:text-amber-300">
                      The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
                      basis, without any warranties of any kind, either express
                      or implied. Weflex expressly disclaims all warranties,
                      whether express, implied, statutory, or otherwise,
                      including but not limited to the implied warranties of
                      merchantability, fitness for a particular purpose, and
                      non-infringement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="limitation" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  9. Limitation of Liability
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    In no event shall Weflex, its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses,
                    resulting from your access to or use of or inability to
                    access or use the Service.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="termination" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  10. Termination
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    We may terminate or suspend your account and bar access to
                    the Service immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever and
                    without limitation, including but not limited to a breach of
                    the Terms.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="governing" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  11. Governing Law
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    These Terms shall be governed and construed in accordance
                    with the laws of the United States, without regard to its
                    conflict of law provisions.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="changes" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  12. Changes to Terms
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. If a revision is material,
                    we will provide at least 30 days&apos; notice prior to any
                    new terms taking effect.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="contact" className="scroll-mt-20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  13. Contact Us
                </h2>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p>
                    If you have any questions about these Terms, please contact
                    us at:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg mt-4">
                    <p className="mb-0">
                      <strong>Email:</strong> info@weflex.am
                      <br />
                      <strong>Address:</strong> Armenia, Yerevan,12 Alikhanyan
                      St.
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

"use client";

import { siteConfig } from "@/lib/config";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="w-full border-t bg-background flex items-center justify-center"
    >
      <div className="container px-4 py-12 md:py-16 flex flex-col items-center justify-center">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo_black.png"
                width={90}
                height={80}
                alt="logo"
                className="hidden dark:block"
              />
              <Image
                src="/logo-white.png"
                width={90}
                height={80}
                alt="logo"
                className="block dark:hidden"
              />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.hero.description}
            </p>

            {/* Social media links */}
            <div className="flex items-center space-x-4">
              <Link
                 href="https://www.facebook.com/weflex.am"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
                    target="_blank"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/weflex.am/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/weflexdevelopment/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Footer links columns */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {siteConfig.footerLinks.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  <h4 className="text-sm font-semibold text-primary">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.url}
                          className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span>{link.title}</span>
                          <div className="ml-1 flex h-4 w-4 items-center justify-center rounded border border-border opacity-0 transform translate-x-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1">
                            <ChevronRightIcon className="h-3 w-3" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <Link
                href="/privacy-policy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-services"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

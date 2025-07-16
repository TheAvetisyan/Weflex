"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = siteConfig.nav.links;

export function NavMenu() {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const activeNav = navs.find((nav) => pathname === nav.href);
    
    if (activeNav) {
      const navItem = ref.current?.querySelector(
        `[href="${activeNav.href}"]`
      )?.parentElement;

      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
        setIsReady(true);
      }
    } else {
      // Reset values if no active nav found
      setIsReady(false);
    }
  }, [pathname]);

  return (
    <div className="w-full sm:flex items-center justify-center hidden "> 
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              pathname === item.href
                ? "text-primary"
                : "text-primary/60 hover:text-primary"
            } tracking-tight`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
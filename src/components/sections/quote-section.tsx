"use client";
import { siteConfig } from "@/lib/config";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export function QuoteSection() {
  const { quoteSection } = siteConfig;
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true  }));
  return (
    <section
      id="quote"
      className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20"
    >
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        
      >
        <CarouselContent>
          {quoteSection.map((quotes, index) => (
            <CarouselItem key={index} className="w-full flex justify-center">
              <blockquote className="max-w-3xl text-left px-4">
                <p className="text-xl md:text-2xl text-primary leading-relaxed tracking-tighter font-medium mb-6">
                  {quotes.quote}
                </p>

                <div className="flex gap-4">
                  <div className="text-left">
                    <cite className="text-lg font-medium text-primary not-italic">
                      {quotes.author.name}
                    </cite>
                    <p className="text-sm text-primary">{quotes.author.role}</p>
                  </div>
                </div>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

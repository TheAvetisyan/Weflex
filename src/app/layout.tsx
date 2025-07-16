import { Navbar } from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterSection } from "@/components/sections/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "black",
};

export const metadata: Metadata = {
  title: "Weflex – Custom Software & E-commerce Solutions in Yerevan",
  description:
    "Weflex is a Yerevan-based IT company helping businesses grow faster with custom software, E-commerce websites, and mobile apps. Smart digital solutions tailored to your goals.",
  keywords: [
    "custom software Armenia",
    "ecommerce development Yerevan",
    "mobile app development Armenia",
    "Armenian tech company",
    "Weflex Yerevan",
    "Next.js agency Armenia",
    "tailor-made business software",
  ],
  metadataBase: new URL("https://weflex.am"),
  openGraph: {
    title: "Weflex – Software & E-commerce Solutions Built for Growth",
    description:
      "We help your business grow with custom-built software, E-commerce platforms, and mobile apps. Based in Yerevan, Armenia. Work smarter. Scale faster.",
    url: "https://weflex.am",
    siteName: "Weflex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weflex – Grow Your Business Digitally",
    description:
      "Partner with Weflex for custom software, E-commerce websites, and mobile app development. Armenia’s growth-focused tech company.",
  },
  alternates: {
    canonical: "https://weflex.am/",
  },
  other: {
    "og:locale": "en_US",
    "og:locale:alternate": "hy_AM",
    "content-language": "en",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-180x180.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-192x192.png",
      },
      {
        rel: "icon",
        url: "/favicon-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Weflex",
              url: "https://weflex.am",
              logo: "https://weflex.am/logo.png",
              email: "info@weflex.am",
              telephone: "+1-747-273-9820",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yerevan",
                addressCountry: "Armenia",
              },
              sameAs: [
                "https://www.facebook.com/weflex",
                "https://www.linkedin.com/company/weflex",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="border-x relative">
            <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
            <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
            <Navbar />
            {children}
            <FooterSection />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

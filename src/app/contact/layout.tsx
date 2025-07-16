import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Weflex – Let's Build Something",
    description:
      "Have a project in mind? Get in touch with Weflex to discuss your digital vision. Based in Yerevan, serving clients worldwide.",
    openGraph: {
      title: "Contact Us – Weflex",
      description:
        "Reach out to Weflex for custom software, mobile apps, and ecommerce websites. Let’s talk!",
      url: "https://weflex.am/contact",
      siteName: "Weflex",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "Talk to Weflex",
      description:
        "Connect with our team to bring your digital project to life.",
    },
  };

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="relative">
  
        {children}
      </section>
    );
  }
import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { AnimatedBeamMultipleOutputDemo } from "@/components/sections/animated-beam-section";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Weflex LLC",
  description: "Smart scheduling powered by AI.",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "AI Calendar",
    "Smart Scheduling",
    "Productivity",
    "Time Management",
  ],
  links: {
    email: "support@calai.app",
    discord: "https://discord.gg/calaiapp",
    github: "https://github.com/calaiapp",
    instagram: "https://instagram.com/calaiapp",
  },
  nav: {
    links: [
      // { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "Services", href: "/services" },
      { id: 3, name: "About", href: "/about" },
      { id: 4, name: "Pricing", href: "/#pricing" },
      { id: 4, name: "Growth", href: "/growth-plan" },
    ],
  },
  hero: {
    // badgeIcon: "💼",
    badge: "🎯 Business-Focused Development",
    title: "Transform Ideas Into Powerful Digital Products",
    description:
      "From startups to enterprises, we turn your goals into custom web and app solutions, designed to grow, scale, and perform.",
    cta: {
      primary: {
        text: "Try for Free",
        href: "#",
      },
      secondary: {
        text: "Log in",
        href: "#",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: "/company_logos/Coca_Cola.png",
        logo_dark: "/company_logos/Coca_Cola_white.png",
      },
      {
        id: 2,
        name: "Company 2",
        logo: "/company_logos/Marvel.png",
        logo_dark: "/company_logos/Marvel_white.png",
      },
      {
        id: 3,
        name: "Company 3",
        logo: "/company_logos/EUNIC.png",
        logo_dark: "/company_logos/EUNIC_white.png",
      },
      {
        id: 4,
        name: "Company 4",
        logo: "/company_logos/Karas.png",
        logo_dark: "/company_logos/Karas_white.png",
      },
      {
        id: 5,
        name: "Company 5",
        logo: "/company_logos/sss.png",
        logo_dark: "/company_logos/sss_white.png",
      },
      {
        id: 6,
        name: "Company 6",
        logo: "/company_logos/startup_armenia.png",
        logo_dark: "/company_logos/startup_armenia_white.png",
      },
      {
        id: 7,
        name: "Company 7",
        logo: "/company_logos/The_House1.png",
        logo_dark: "/company_logos/The_House1_white.png",
      },
      {
        id: 8,
        name: "Company 8",
        logo: "/company_logos/Ustian.png",
        logo_dark: "/company_logos/Ustian_white.png",
      },
      {
        id: 9,
        name: "Company 9",
        logo: "/company_logos/Alpha1.png",
        logo_dark: "/company_logos/Alpha1_white.png",
      },
      {
        id: 10,
        name: "Company 10",
        logo: "/company_logos/armenian_online.png",
        logo_dark: "/company_logos/armenian_online_white.png",
      },
      {
        id: 11,
        name: "Company 11",
        logo: "/company_logos/ashkf.png",
        logo_dark: "/company_logos/ashkf_white.png",
      },
      {
        id: 12,
        name: "Company 12",
        logo: "/company_logos/Lavash.png",
        logo_dark: "/company_logos/Lavash_white.png",
      },
      {
        id: 13,
        name: "Company 13",
        logo: "/company_logos/Mccann.png",
        logo_dark: "/company_logos/Mccann_white.png",
      },
      {
        id: 14,
        name: "Company 14",
        logo: "/company_logos/rf.png",
        logo_dark: "/company_logos/rf_white.png",
      },
      {
        id: 15,
        name: "Company 15",
        logo: "/company_logos/Saroyan_House.png",
        logo_dark: "/company_logos/Saroyan_House_white.png",
      },
      {
        id: 16,
        name: "Company 16",
        logo: "/company_logos/MeaMeal1.png",
        logo_dark: "/company_logos/MeaMeal1_white.png",
      },
      {
        id: 17,
        name: "Company 17",
        logo: "/company_logos/TShaurma.png",
        logo_dark: "/company_logos/TShaurma_white.png",
      },
      {
        id: 18,
        name: "Company 3",
        logo: "/company_logos/MagicMall.png",
        logo_dark: "/company_logos/MagicMall_white.png",
        link: "/",
      },
    ],
    ActiveCompanyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: "/company_logos/PizzaAyo.png",
        logo_dark: "/company_logos/PizzaAyo_white.png",
        link: "/pizza-ayo",
      },
      {
        id: 2,
        name: "Company 2",
        logo: "/company_logos/Gazar.png",
        logo_dark: "/company_logos/Gazar_white.png",
        link: "/gazar",
      },
      {
        id: 3,
        name: "Company 4",
        logo: "/company_logos/CD.png",
        logo_dark: "/company_logos/CD_white.png",
        link: "/creator-deck",
      },
      {
        id: 4,
        name: "Company 5",
        logo: "/company_logos/automatr.png",
        logo_dark: "/company_logos/automatr_white.png",
        link: "/automatr",
      },
    ],
  },
  featureSection: {
    title: "Smart Product Development, From Start to Launch",
    description:
      "From ideation to deployment, we keep the process clear, collaborative, and focused on what drives value.",
    items: [
      {
        id: 1,
        title: "Tell Us What You Need",
        content:
          "We listen, ask the right questions, and define clear goals together.",
        image:
          "https://img.freepik.com/premium-photo/group-young-business-people-discussing-business-plan-modern-startup-office-building_530697-19191.jpg?uid=P1027369&ga=GA1.1.539549631.1725627705&semt=ais_hybrid&w=740",
      },
      {
        id: 2,
        title: "We Design the Right Solution",
        content:
          "Our team architects the solution based on your goals, budget, and timeline.",
        image:
          "https://img.freepik.com/premium-vector/background-abstract-gradient-design-featuring-glassmorphism-effect-website-landing-page_683971-178.jpg?uid=P1027369&ga=GA1.1.539549631.1725627705&semt=ais_hybrid&w=740",
      },
      {
        id: 3,
        title: "We Build and Launch",
        content:
          "Rapid iterations, tested releases, and scalable delivery.",
        image:
          "https://img.freepik.com/premium-photo/medium-shot-man-working-computer_23-2150287696.jpg?uid=P1027369&ga=GA1.1.539549631.1725627705&semt=ais_hybrid&w=740",
      },
      {
        id: 4,
        title: "We Evolve With You",
        content:
          "We stay involved for improvements, updates, and ongoing support.",
        image:
          "https://img.freepik.com/premium-photo/business-finance-data-analytics-graph-profit-finance-performance-virtual-screen_339673-502.jpg?uid=P1027369&ga=GA1.1.539549631.1725627705&semt=ais_hybrid&w=740",
      },
    ],
  },
  bentoSection: {
    title: "Purpose-Built Platforms That Deliver Results",
    description:
      "Explore how Weflex builds custom software that automates processes, connects your tools, and gives you the insights to scale with confidence.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Custom Software Development",
        description:
          "Build software that fits your business, not the other way around. We deliver fully tailored platforms built for performance, scale, and usability.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "System Integrations",
        description:
          "Unify your tools. We integrate CRMs, APIs, and third-party services to keep your systems running smoothly and efficiently.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[20, 30, 25, 45, 40, 55, 75]}
            toolTipValues={[
              1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
            ]}
            color="#ef233c"
          />
        ),
        title: "Real-Time Business Insights",
        description:
          "Get instant visibility into your operations with dashboards, analytics, and tailored insights that support smarter decisions.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Workflow Automation",
        description:
          "Automate the tedious. From lead follow-ups to data syncing, we build intelligent workflows that save time and boost productivity.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Enterprise-Ready by Default",
    description:
      "We build with security, scalability, and future growth in mind, so your product is ready to evolve from day one.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  size-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="size-full object-contain fill-accent"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
              />
            </motion.div>
          </div>
        ),

        title: "Advanced Task Security",
        description:
          "Safeguard your tasks with state-of-art encryption and secure access to your workflow data.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_10%)] -translate-y-20">
            <AnimatedBeamMultipleOutputDemo />
          </div>
        ),

        title: "Digital Transformation",
        description:
          "Modernize your business processes with innovative technology solutions that drive efficiency and growth",
      },
    ],
  },
  quoteSection: [
    {
      quote:
        "Weflex is one of the most flexible and professional IT partners we’ve worked with. They delivered two creative campaigns with Coca-Cola and Marvel, always on time and with a great attitude. Highly recommended.",
      author: {
        name: "Mary Matevosyan",
        role: "Head of BTL/Events, McCann Yerevan",
      },
    },
    {
      quote:
        "Weflex is a motivated team with a clear vision. Their commitment to quality and collaboration made our partnership smooth and productive.",
      author: {
        name: "Avag Simonyan",
        role: "Deputy Director, Renaissance Foundation Armenia",
      },
    },
  ],
  pricing: {
    title: "Professional Website Packages to Grow Your Business",
    description:
      "We build high-performance websites designed to grow your brand and boost your online sales. Fixed prices. Real results.",
    pricingItems: [
      {
        name: "Business Starter",
        price: "$1,500",
        features: [
          "Custom design (UI/UX)",
          "Mobile-optimized & responsive layout",
          "SEO-friendly site structure",
          "Basic animations & interactions",
          "Contact form & social links",
          "Delivery in 1-2 weeks",
        ],
        description:
          "Great for small businesses that need a professional online presence.",
        buttonText: "Contact Us",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
        link: "/contact",
      },
      {
        name: "E-Commerce Pro",
        price: "$6,500",
        features: [
          "Up to 12 custom-designed pages",
          "Blog or CMS integration",
          "Modern animations & premium UI",
          "SEO & speed optimization",
          "Google Analytics setup",
          "Secure checkout (Stripe, PayPal, IDRAM, Telcell, etc.)",
          "Easy-to-use admin dashboard",
          "Shipping, tax & inventory system",
         
          "1-month post-launch support",
        ],
        description:
          "Everything you need to start and scale your online store with confidence.",
        buttonText: "Contact Us",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
        link: "/contact",
      },
      {
        name: "E-Commerce Growth Plan",
        price: "$800/mo",
        features: [
          "Full e-commerce website launched by Month 3",
          "User system, product management, checkout",
          "A/B testing, analytics & performance optimization",
          "Marketing tools, loyalty options, SEO & content",
          "Multilingual support & UI/UX improvements",
          "Ongoing scaling, automation, and feature updates",
          "... see the full journey!",
        ],
        description:
          "12-month growth-focused plan with phased development, launch, and monthly optimization.",
        buttonText: "See Full Plan",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: true,
        link: "/growth-plan",
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Alex Rivera",
      role: "CTO at InnovateTech",
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      description: (
        <p>
          The AI-driven analytics from #QuantumInsights have revolutionized our
          product development cycle.
          <Highlight>
            Insights are now more accurate and faster than ever.
          </Highlight>{" "}
          A game-changer for tech companies.
        </p>
      ),
    },
    {
      id: "2",
      name: "Samantha Lee",
      role: "Marketing Director at NextGen Solutions",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      description: (
        <p>
          Implementing #AIStream&apos;s customer prediction model has
          drastically improved our targeting strategy.
          <Highlight>Seeing a 50% increase in conversion rates!</Highlight>{" "}
          Highly recommend their solutions.
        </p>
      ),
    },
    {
      id: "3",
      name: "Raj Patel",
      role: "Founder & CEO at StartUp Grid",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      description: (
        <p>
          As a startup, we need to move fast and stay ahead. #CodeAI&apos;s
          automated coding assistant helps us do just that.
          <Highlight>Our development speed has doubled.</Highlight> Essential
          tool for any startup.
        </p>
      ),
    },
    {
      id: "4",
      name: "Emily Chen",
      role: "Product Manager at Digital Wave",
      img: "https://randomuser.me/api/portraits/women/83.jpg",
      description: (
        <p>
          #VoiceGen&apos;s AI-driven voice synthesis has made creating global
          products a breeze.
          <Highlight>Localization is now seamless and efficient.</Highlight> A
          must-have for global product teams.
        </p>
      ),
    },
    {
      id: "5",
      name: "Michael Brown",
      role: "Data Scientist at FinTech Innovations",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      description: (
        <p>
          Leveraging #DataCrunch&apos;s AI for our financial models has given us
          an edge in predictive accuracy.
          <Highlight>
            Our investment strategies are now powered by real-time data
            analytics.
          </Highlight>{" "}
          Transformative for the finance industry.
        </p>
      ),
    },
    {
      id: "6",
      name: "Linda Wu",
      role: "VP of Operations at LogiChain Solutions",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      description: (
        <p>
          #LogiTech&apos;s supply chain optimization tools have drastically
          reduced our operational costs.
          <Highlight>
            Efficiency and accuracy in logistics have never been better.
          </Highlight>{" "}
        </p>
      ),
    },
    {
      id: "7",
      name: "Carlos Gomez",
      role: "Head of R&D at EcoInnovate",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      description: (
        <p>
          By integrating #GreenTech&apos;s sustainable energy solutions,
          we&apos;ve seen a significant reduction in carbon footprint.
          <Highlight>
            Leading the way in eco-friendly business practices.
          </Highlight>{" "}
          Pioneering change in the industry.
        </p>
      ),
    },
    {
      id: "8",
      name: "Aisha Khan",
      role: "Chief Marketing Officer at Fashion Forward",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      description: (
        <p>
          #TrendSetter&apos;s market analysis AI has transformed how we approach
          fashion trends.
          <Highlight>
            Our campaigns are now data-driven with higher customer engagement.
          </Highlight>{" "}
          Revolutionizing fashion marketing.
        </p>
      ),
    },
    {
      id: "9",
      name: "Tom Chen",
      role: "Director of IT at HealthTech Solutions",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      description: (
        <p>
          Implementing #MediCareAI in our patient care systems has improved
          patient outcomes significantly.
          <Highlight>
            Technology and healthcare working hand in hand for better health.
          </Highlight>{" "}
          A milestone in medical technology.
        </p>
      ),
    },
    {
      id: "10",
      name: "Sofia Patel",
      role: "CEO at EduTech Innovations",
      img: "https://randomuser.me/api/portraits/women/73.jpg",
      description: (
        <p>
          #LearnSmart&apos;s AI-driven personalized learning plans have doubled
          student performance metrics.
          <Highlight>
            Education tailored to every learner&apos;s needs.
          </Highlight>{" "}
          Transforming the educational landscape.
        </p>
      ),
    },
    {
      id: "11",
      name: "Jake Morrison",
      role: "CTO at SecureNet Tech",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
      description: (
        <p>
          With #CyberShield&apos;s AI-powered security systems, our data
          protection levels are unmatched.
          <Highlight>
            Ensuring safety and trust in digital spaces.
          </Highlight>{" "}
          Redefining cybersecurity standards.
        </p>
      ),
    },
    {
      id: "12",
      name: "Nadia Ali",
      role: "Product Manager at Creative Solutions",
      img: "https://randomuser.me/api/portraits/women/78.jpg",
      description: (
        <p>
          #DesignPro&apos;s AI has streamlined our creative process, enhancing
          productivity and innovation.
          <Highlight>Bringing creativity and technology together.</Highlight> A
          game-changer for creative industries.
        </p>
      ),
    },
    {
      id: "13",
      name: "Omar Farooq",
      role: "Founder at Startup Hub",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
      description: (
        <p>
          #VentureAI&apos;s insights into startup ecosystems have been
          invaluable for our growth and funding strategies.
          <Highlight>
            Empowering startups with data-driven decisions.
          </Highlight>{" "}
          A catalyst for startup success.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Weflex.am and our custom software development services. If you have any other questions, please don't hesitate to contact us.",
    faQitems: [
      {
        id: 1,
        question: "What types of software solutions does Weflex.am develop?",
        answer:
          "We develop a wide range of custom software solutions including web applications, mobile apps, enterprise software, e-commerce platforms, CRM systems, and automation tools. Our team specializes in creating tailored solutions that address your specific business challenges and objectives.",
      },
      {
        id: 2,
        question: "How does your development process work?",
        answer:
          "Our development process begins with a thorough consultation to understand your business needs. We then create a detailed project plan, design the solution architecture, develop the software iteratively with regular client feedback, conduct rigorous testing, and provide deployment and ongoing support. We follow agile methodologies to ensure flexibility and transparency throughout the project.",
      },
      {
        id: 3,
        question: "How do you ensure the security of our data and software?",
        answer:
          "We implement industry-standard security practices including secure coding standards, data encryption, regular security audits, and compliance with relevant regulations. Our development team stays updated on the latest security threats and best practices to ensure your software and data remain protected.",
      },
      {
        id: 4,
        question: "Can you integrate with our existing systems and tools?",
        answer:
          "Yes, we specialize in creating software that seamlessly integrates with your existing infrastructure. Whether you need to connect with legacy systems, third-party APIs, or enterprise software, our team has the expertise to ensure smooth integration and data flow across your entire technology ecosystem.",
      },
      {
        id: 5,
        question: "What is your pricing model for custom software development?",
        answer:
          "We offer flexible pricing models tailored to your project needs, including fixed-price contracts for well-defined projects and time-and-materials arrangements for more complex or evolving requirements. We provide detailed estimates after understanding your specific needs during our initial consultation.",
      },
      {
        id: 6,
        question:
          "How long does it typically take to develop a custom software solution?",
        answer:
          "Development timelines vary based on the complexity and scope of your project. Simple applications may take 2-3 months, while enterprise-level solutions can take 6+ months. During our discovery phase, we'll provide you with a realistic timeline based on your specific requirements and priorities.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Your Success Is Our Mission",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Start Growing Your Business Today",
      href: "/contact",
    },
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "/about" },
        { id: 2, title: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Plans",
      links: [
        // { id: 3, title: "Pricing", url: "/pricing" },
        { id: 4, title: "Growth Plan", url: "/growth-plan" },
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { id: 9, title: "Press", url: "#" },
    //     { id: 10, title: "Careers", url: "#" },
    //     { id: 11, title: "Newsletters", url: "#" },
    //     { id: 12, title: "More", url: "#" },
    //   ],
    // },
  ],
};

export type SiteConfig = typeof siteConfig;

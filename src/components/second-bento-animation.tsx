import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import Image from "next/image";

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <Image alt="Logo" src="/logo-white.png" width={400} height={400} className="fill-[#ef233c] object-contain size-10" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
           
           <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="icon"/>
           <Image width={30} height={30} src="/integrationIcons/paypal.svg" alt="icon"/>
           <Image width={40} height={40} src="/integrationIcons/stripe.svg" alt="icon"/>
          

            {/* <Icons.supabase /> */}
            {/* <Icons.figma /> */}
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            {/* <Icons.workos /> */}
            {/* <Icons.runwayml /> */}
           <Image width={40} height={40} src="/integrationIcons/mailchimp.png" alt="icon"/>
           <Image width={40} height={40} src="/integrationIcons/telegram.svg" alt="icon"/>
           <Image width={40} height={40} src="/integrationIcons/HubSpot.png" alt="icon"/>

            {/* <Icons.gemini /> */}
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
            
          >
           <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" alt="icon"/>
           <Image width={40} height={40} src="/integrationIcons/slack.png" alt="icon"/>
           <Image width={40} height={40} src="/integrationIcons/salesforce.png" alt="icon"/>

            {/* <Icons.vercel /> */}
            {/* <Icons.replit /> */}
            {/* <Icons.posthog /> */}
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

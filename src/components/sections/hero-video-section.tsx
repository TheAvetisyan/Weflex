import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10 container mx-auto">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://player.vimeo.com/video/394623715"
          thumbnailSrc="https://weflex.am/wp-content/uploads/2020/02/Thumb.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://player.vimeo.com/video/394623715"
          thumbnailSrc="https://weflex.am/wp-content/uploads/2020/02/Thumb.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}

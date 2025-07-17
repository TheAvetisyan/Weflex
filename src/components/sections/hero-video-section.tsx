import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10 container mx-auto">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://player.vimeo.com/video/394623715"
          thumbnailSrc="https://i.vimeocdn.com/video/860567331-3b6ee9bd78803193f0b8d542ad6a5dd8636006ff44b43f4c27c5a25d900f5b4e-d?mw=3900&mh=1120&q=70"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://player.vimeo.com/video/394623715"
          thumbnailSrc="https://i.vimeocdn.com/video/860567331-3b6ee9bd78803193f0b8d542ad6a5dd8636006ff44b43f4c27c5a25d900f5b4e-d?mw=3900&mh=1120&q=70"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}

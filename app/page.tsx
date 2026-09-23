import { Hero } from "@/components/sections/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { ExperienceSplit } from "@/components/sections/ExperienceSplit";
import { SocialProof } from "@/components/sections/SocialProof";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ReserveBanner } from "@/components/sections/ReserveBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <SignatureDishes />
      <ExperienceSplit />
      <SocialProof />
      <GalleryPreview />
      <ReserveBanner />
    </>
  );
}

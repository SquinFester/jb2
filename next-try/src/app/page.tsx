import BannerSection from "@/components/BannerSection";
import ContactSection from "@/components/ContactSection";
import OffersSection from "@/components/OffersSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BannerSection />
        <OffersSection />
        <SocialMediaSection />
        <ContactSection />
      </Suspense>
    </>
  );
}

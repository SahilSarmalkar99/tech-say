import { useRef } from "react";

import VideoIntro from "../components/home/VideoIntro";
import Hero from "../components/home/Hero";

import useVideoHeroAnimation from "../hooks/useVideoHeroAnimation";
import TrustedBrand from "../components/home/TrustedBrand";
import WorkResults from "../components/home/WorkResults";
import ContentSection from "../components/home/ContentSection";
import BrandingSection from "../components/home/BrandingSection";
import Testimonial from "../components/home/Testimonail";
import Footer from "../components/Footer";
import VideoCoverflow from "../components/home/VideoCoverflow";
import Navbar from "../components/Navbar";

export default function Home() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const heroRef = useRef(null);

  useVideoHeroAnimation(sectionRef, videoRef, overlayRef, heroRef);

  return (
    <>
      <section ref={sectionRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <VideoIntro videoRef={videoRef} overlayRef={overlayRef} />

          <Hero heroRef={heroRef} />
        </div>
      </section>

      <TrustedBrand />
      <WorkResults />
      <ContentSection />
      <BrandingSection />
      <VideoCoverflow />
      <Testimonial />
      <Footer />
    </>
  );
}

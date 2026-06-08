import { useRef } from "react";

import VideoIntro from "../components/home/VideoIntro";
import Hero from "../components/home/Hero";

import useVideoHeroAnimation from "../hooks/useVideoHeroAnimation";

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

      <section className="min-h-screen bg-zinc-950">
        <div className="max-w-7xl mx-auto py-32">
          <h2 className="text-white text-7xl font-black">Projects</h2>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useTextReveal from "../../hooks/useTextReveal";
import useFadeUpCards from "../../hooks/useFadeIn";

const videos = [
  { id: 1, src: "/videos/video1.mp4" },
  { id: 2, src: "/videos/video2.mp4" },
  { id: 3, src: "/videos/video3.mp4" },
  { id: 4, src: "/videos/video4.mp4" },
  { id: 5, src: "/videos/video5.mp4" },
];

export default function VideoCoverflow() {
  const [items, setItems] = useState(videos);

  const next = () => {
    setItems((prev) => {
      const arr = [...prev];
      const last = arr.pop();

      return [last, ...arr];
    });
  };

  const prev = () => {
    setItems((prev) => {
      const arr = [...prev];
      const first = arr.shift();

      return [...arr, first];
    });
  };

  const slots = [
    { x: -550, scale: 0.65, rotateY: 35, opacity: 0.25, zIndex: 10 },
    { x: -280, scale: 0.85, rotateY: 20, opacity: 0.8, zIndex: 20 },
    { x: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 50 },
    { x: 280, scale: 0.85, rotateY: -20, opacity: 0.8, zIndex: 20 },
    { x: 550, scale: 0.65, rotateY: -35, opacity: 0.25, zIndex: 10 },
  ];

  const textReveal = useTextReveal();
  const textReveal2 = useTextReveal();
  const  fadeIn = useFadeUpCards();

  return (
    <section
      ref={fadeIn}
      className="
      relative
      overflow-hidden
      flex
      items-center
      justify-center
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        w-[900px]
        h-[900px]
        rounded-full
        blur-[180px]
      "
      />

      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50 text-center">
        <h2 ref={textReveal}
          className="
      text-4xl
      md:text-6xl
      font-bold
      text-white
      mb-4
    "
        >
          Featured Work
        </h2>

        <p ref={textReveal2}
          className="
      text-white/70
      text-sm
      md:text-lg
      max-w-xl
      mx-auto
    "
        >
          Explore our latest projects, campaigns, and creative productions.
        </p>
      </div>

      {/* Carousel */}
      

      <div
        className="fade-card
        relative
        w-full
        h-[450px]
sm:h-[550px]
md:h-[650px]
lg:h-[700px]
        perspective-[2500px]
        mt-35
        md:mt-16
      "
      >
        {items.map((item, index) => {
          const slot = slots[index];

          const shouldPlay = index === 1 || index === 2 || index === 3;

          return (
            <motion.div
              key={item.id}
              layout
              animate={{
                x: slot.x,
                scale: slot.scale,
                rotateY: slot.rotateY,
                opacity: slot.opacity,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: slot.zIndex,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  bg-black
                  w-[180px]
                  h-[320px]
                  sm:w-[220px]
                  sm:h-[400px]
                  md:w-[280px]
                  md:h-[520px]
                "
              >
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay={shouldPlay}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {index !== 2 && (
                  <div className="absolute inset-0 " />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Prev */}

      <button
        onClick={prev}
        className="
          absolute
          left-3
          md:left-8
          z-50
          w-14
          h-14
          rounded-full
          bg-white/10
          backdrop-blur-lg
          border
          border-white/20
          text-white
          flex
          items-center
          justify-center
          mt-30
          md:mt-0
        "
      >
        <ChevronLeft />
      </button>

      {/* Next */}

      <button
        onClick={next}
        className="
          absolute
          right-3
          md:right-8
          mt-30
          md:mt-0
          z-50
          w-14
          h-14
          rounded-full
          bg-white/10
          backdrop-blur-lg
          border
          border-white/20
          text-white
          flex
          items-center
          justify-center
        "
      >
        <ChevronRight />
      </button>
    </section>
  );
}

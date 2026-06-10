import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    {
      x: -700,
      scale: 0.6,
      rotateY: 40,
      opacity: 0.2,
      zIndex: 10,
    },

    {
      x: -350,
      scale: 0.82,
      rotateY: 25,
      opacity: 0.8,
      zIndex: 20,
    },

    {
      x: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 50,
    },

    {
      x: 350,
      scale: 0.82,
      rotateY: -25,
      opacity: 0.8,
      zIndex: 20,
    },

    {
      x: 700,
      scale: 0.6,
      rotateY: -40,
      opacity: 0.2,
      zIndex: 10,
    },
  ];

  return (
    <section
      className="
      relative
      min-h-screen
      bg-[#12081f]
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
        bg-purple-700/20
        blur-[180px]
      "
      />

      {/* Carousel */}

      <div
        className="
        relative
        w-full
        h-[700px]
        perspective-[2500px]
      "
      >
        {items.map((item, index) => {
          const slot = slots[index];

          const shouldPlay =
            index === 1 ||
            index === 2 ||
            index === 3;

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
                  shadow-[0_30px_100px_rgba(0,0,0,.5)]
                  w-[180px]
                  h-[320px]
                  sm:w-[220px]
                  sm:h-[400px]
                  md:w-[280px]
                  md:h-[520px]
                  lg:w-[340px]
                  lg:h-[620px]
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
                  <div className="absolute inset-0 bg-black/20" />
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
          left-8
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
        <ChevronLeft />
      </button>

      {/* Next */}

      <button
        onClick={next}
        className="
          absolute
          right-8
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
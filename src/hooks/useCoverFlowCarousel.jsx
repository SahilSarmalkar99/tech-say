import { useEffect } from "react";
import gsap from "gsap";

const useCarousel = (cardsRef) => {
  useEffect(() => {
    const cards = cardsRef.current;

    if (!cards.length) return;

    const total = cards.length;
    let offset = 0;
    let frameId;

    const animate = () => {
      cards.forEach((card, i) => {
        let progress = ((i + offset) % total) / total;

        const angle = gsap.utils.mapRange(
          0,
          1,
          -1.1,
          1.1,
          progress
        );

        const radiusX = 900;
        const radiusZ = 2500;

        const x = Math.sin(angle) * radiusX;

        const z =
          -(Math.cos(angle) * radiusZ - radiusZ);

        const rotateY = -angle * 35;

        const scale =
          0.7 +
          ((Math.cos(angle) + 1) / 2) * 0.4;

        const opacity =
          0.4 +
          ((Math.cos(angle) + 1) / 2) * 0.6;

        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,

          x,
          y: Math.abs(angle),

          z,

          rotateY,

          scale,

          opacity,

          zIndex: Math.floor(scale * 100),
        });
      });

      offset += 0.003;

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [cardsRef]);
};

export default useCarousel;
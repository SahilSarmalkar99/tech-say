import { useLayoutEffect } from "react";
import gsap from "gsap";

const positions = [
  {
    x: -520,
    rotateY: 28,
    scale: 0.9,
    zIndex: 1,
  },

  {
    x: -340,
    rotateY: 18,
    scale: 0.95,
    zIndex: 2,
  },

  {
    x: -170,
    rotateY: 10,
    scale: 0.98,
    zIndex: 3,
  },

  {
    x: 0,
    rotateY: 0,
    scale: 1,
    zIndex: 4,
  },

  {
    x: 170,
    rotateY: -10,
    scale: 0.98,
    zIndex: 3,
  },

  {
    x: 340,
    rotateY: -18,
    scale: 0.95,
    zIndex: 2,
  },

  {
    x: 520,
    rotateY: -28,
    scale: 0.9,
    zIndex: 1,
  },
];

export default function useCoverflowCarousel(cardsRef) {
  useLayoutEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.set(card, positions[index]);
    });

    const interval = setInterval(() => {
      positions.unshift(positions.pop());

      cards.forEach((card, index) => {
        gsap.to(card, {
          ...positions[index],
          duration: 1.2,
          ease: "power3.inOut",
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
}
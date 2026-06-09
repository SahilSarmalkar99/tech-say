import { useRef } from "react";

import useCarousel from "../../hooks/useCoverFlowCarousel";
import { carouselImages } from "../../data/carouselData";

export default function Carousel() {
  const cardsRef = useRef([]);

  useCarousel(cardsRef);

  return (
    <div
      className="
      w-screen
      h-screen
      relative
      overflow-hidden
      mt-15
      [perspective:2500px]
      [transform-style:preserve-3d]
    "
    >
      {carouselImages.map((image, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="
            absolute
            w-[220px]
            h-[340px]
            rounded-[20px]
            overflow-hidden
            top-1/2
            left-1/2
            [transform-style:preserve-3d]
          "
        >
          <img
            src={image}
            alt=""
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>
      ))}
    </div>
  );
}
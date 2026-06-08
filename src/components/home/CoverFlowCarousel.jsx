import React from "react";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1558980394-0c6c9298a952?q=80&w=800&auto=format&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Carousel() {
  return (
    <div className="w-full flex justify-center py-20 overflow-hidden">
      <div
        className="
        stage
        relative
        w-full
        h-[500px]
        flex
        items-center
        justify-center
        perspective-[2000px]
      "
      >
        <div
          className="
          ring
          relative
          w-[320px]
          h-[420px]
          transform-style-preserve-3d
        "
        >
          {cards.map((card, index) => (
            <img
              key={index}
              src={card.img}
              alt=""
              className="
              absolute
              left-0
              top-0
              w-full
              h-full
              object-cover
              rounded-3xl
              border
              border-white/10
              shadow-2xl
              backface-hidden
              transition-all
              duration-300
            "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
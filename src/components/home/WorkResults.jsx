import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { workData } from "../../data/workData";
import useTextReveal from "../../hooks/useTextReveal";
import useFadeUpCards from "../../hooks/useFadeIn";

const filters = ["Production", "Case Study", "Graphics", "Website"];

export default function WorkResults() {
  const [active, setActive] = useState("Production");

  const items = workData[active];

  const largeCards = items.filter((item) => item.type === "large");
  const smallCards = items.filter((item) => item.type === "small");
  const textReveal = useTextReveal();
  const fadeIn = useFadeUpCards();
  return (
    <section ref={fadeIn} className="py-15 px-5 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 ref={textReveal} className="text-center text-3xl md:text-5xl font-light mb-12">
          Work That Delivers Results
        </h2>

        {/* Filters */}
        <div className="fade-card flex justify-center flex-wrap gap-3 md:gap-4 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`
        relative
        px-5 md:px-8
        py-2.5 md:py-3
        rounded-full
        text-sm md:text-base
        border
        transition-all duration-300
        hover:scale-105

        ${
          active === filter
            ? `
              bg-white
              text-black
              border-white
              shadow-lg
            `
            : `
              bg-white/5
              border-white/10
              hover:border-white/30
              hover:bg-white/10
            `
        }
      `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Top Cards */}
        <div className="fade-card grid md:grid-cols-2 gap-6 mb-6">
          {largeCards.map((card) => (
            <Card key={card.id} card={card} large />
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="fade-card grid grid-cols-2 md:grid-cols-4 gap-6">
          {smallCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        {/* CTA */}
        <div className="fade-card flex justify-center mt-12">
          <button
            className="
      group
      flex
      items-center
      gap-3
      px-8 md:px-10
      py-3 md:py-4
      rounded-full
      bg-white
      text-black
      font-medium
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
    "
          >
            View all our work
            <ArrowUpRight
              size={18}
              className="
        transition-transform
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ card, large = false }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl group

        ${large ? "h-[350px] md:h-[420px]" : "h-[260px] md:h-[500px]"}
      `}
    >
      <img
        src={card.image}
        alt={card.title}
        className="
          w-full h-full object-cover
          transition duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
    absolute
    left-4
    right-4
    bottom-4
    bg-white/10
    backdrop-blur-xl
    rounded-2xl
    px-5
    py-4

    opacity-0
    translate-y-6

    transition-all
    duration-500

    group-hover:opacity-100
    group-hover:translate-y-0
  "
      >
        <div className="flex items-center justify-between">
          <span>{card.title}</span>

          <div
            className="
    h-8 w-8
    rounded-full
    bg-white
    text-black
    flex items-center justify-center

    scale-75
    transition-all
    duration-300

    group-hover:scale-100
    group-hover:rotate-12
  "
          >
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

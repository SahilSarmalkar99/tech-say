import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { workData } from "../../data/workData";

const filters = [
  "Production",
  "Case Study",
  "Graphics",
  "Website",
];

export default function WorkResults() {
  const [active, setActive] = useState("Production");

  const items = workData[active];

  const largeCards = items.filter(item => item.type === "large");
  const smallCards = items.filter(item => item.type === "small");

  return (
    <section className="py-20 px-5 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-light mb-12">
          Work That Delivers Results
        </h2>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`
                px-8 py-3 rounded-full border
                transition-all duration-300

                ${
                  active === filter
                    ? "bg-white/20 border-white/30"
                    : "border-white/10 hover:border-white/30"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {largeCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              large
            />
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {smallCards.map((card) => (
            <Card
              key={card.id}
              card={card}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
            View all of our work
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

        ${
          large
            ? "h-[350px] md:h-[420px]"
            : "h-[260px] md:h-[500px]"
        }
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

      <div className="
        absolute
        left-4
        right-4
        bottom-4
        bg-white/10
        backdrop-blur-xl
        rounded-2xl
        px-5
        py-4
      ">
        <div className="flex items-center justify-between">
          <span>{card.title}</span>

          <div className="
            h-8 w-8
            rounded-full
            bg-white
            text-black
            flex items-center justify-center
          ">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
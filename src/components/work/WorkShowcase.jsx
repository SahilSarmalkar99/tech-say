import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/workPortfolio";
import DashedSeparator from "../DashedSeparator";
import useFadeUpCards from "../../hooks/useFadeIn";

export default function WorkShowcase() {
  const categories = Object.keys(portfolioData);

  const [activeCategory, setActiveCategory] = useState("Production");

  const subCategories = Object.keys(portfolioData[activeCategory]);

  const [activeSub, setActiveSub] = useState(subCategories[0]);

  const items = portfolioData[activeCategory][activeSub];

  const fadeIn = useFadeUpCards();

  const handleCategory = (category) => {
    setActiveCategory(category);

    setActiveSub(Object.keys(portfolioData[category])[0]);
  };

  return (
    <section ref={fadeIn} className="bg-[#4b3260] py-16">
      {/* MAIN FILTERS */}
      <div className="fade-card flex  flex-wrap justify-center gap-5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={` relative  px-10 py-4 rounded-full text-white font-medium border border-white/20 bg-white/5 shadow-[0_8px_20px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.12),0_20px_40px_rgba(0,0,0,0.5)] before:absolute  before:inset-[1px] before:rounded-full before:border before:border-white/10
    ${
      activeCategory === cat
        ? `
          bg-white/15
          border-white/40
          shadow-[0_0_20px_rgba(255,255,255,0.15),0_12px_30px_rgba(0,0,0,0.5)]
          -translate-y-1
        `
        : ""
    }
  `}
          >
            {cat}
          </button>
        ))}
      </div>

      <DashedSeparator />

      {/* SUB FILTERS */}
      <div className="fade-card flex justify-center flex-wrap gap-4 mb-12">
        {subCategories.map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSub(sub)}
            className={`
        px-5 py-2
        rounded-full
        text-white
        border
        transition-all
        duration-300

        ${
          activeSub === sub
            ? "border-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            : "border-white/30 hover:border-white/60"
        }
      `}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="fade-card max-w-6xl mx-auto px-4">
        <div className="grid gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                relative
                overflow-hidden
                rounded-[24px]
                group
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              <img
                src={item.thumbnail}
                alt=""
                className="
                  w-full
                  h-[250px]
                  md:h-[500px]
                  object-cover
                "
              />

              {/* Glass CTA */}
             <div
  className="
    absolute
    left-6
    right-6
    bottom-6

    rounded-2xl

    bg-white/10
    backdrop-blur-xl

    py-4

    flex
    items-center
    justify-center
    gap-3

    opacity-0
    translate-y-8

    transition-all
    duration-500
    ease-out

    group-hover:opacity-100
    group-hover:translate-y-0
  "
>
                <span>View Work</span>

                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/workPortfolio";

export default function WorkShowcase() {
  const categories = Object.keys(portfolioData);

  const [activeCategory, setActiveCategory] =
    useState("Production");

  const subCategories = Object.keys(
    portfolioData[activeCategory]
  );

  const [activeSub, setActiveSub] = useState(
    subCategories[0]
  );

  const items =
    portfolioData[activeCategory][activeSub];

  const handleCategory = (category) => {
    setActiveCategory(category);

    setActiveSub(
      Object.keys(portfolioData[category])[0]
    );
  };

  return (
    <section className="bg-[#4b3260] py-16">
      {/* MAIN FILTERS */}
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`
              px-10 py-4 rounded-full

              transition

              ${
                activeCategory === cat
                  ? "bg-white/20 border border-white/20"
                  : "border border-white/10"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SUB FILTERS */}
      <div className="flex justify-center flex-wrap gap-10 mb-12">
        {subCategories.map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSub(sub)}
            className={`
              text-white/70

              ${
                activeSub === sub
                  ? "text-white underline"
                  : ""
              }
            `}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                relative
                overflow-hidden
                rounded-[24px]
                group
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
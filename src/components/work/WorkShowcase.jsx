import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/workPortfolio";
import useFadeUpCards from "../../hooks/useFadeIn";

export default function WorkShowcase() {
  const fadeIn = useFadeUpCards();

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSub, setActiveSub] = useState("All");

  const categories = ["All", ...Object.keys(portfolioData)];

  const getFilteredItems = () => {
    let result = [];

    if (activeCategory === "All") {
      Object.values(portfolioData).forEach((category) => {
        Object.values(category).forEach((subItems) => {
          result.push(...subItems);
        });
      });

      return result;
    }

    const categoryData = portfolioData[activeCategory];

    if (!categoryData) return [];

    if (activeSub === "All") {
      Object.values(categoryData).forEach((subItems) => {
        result.push(...subItems);
      });

      return result;
    }

    return categoryData?.[activeSub] || [];
  };

  const items = getFilteredItems();

  return (
    <section
      ref={fadeIn}
      className=" py-20 lg:py-32"
    >
      <div className="max-w-[1700px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
          {/* LEFT SIDEBAR */}
          <aside
            className="
              lg:sticky
              lg:top-28
              self-start
            "
          >
            <h2 className="text-white text-3xl md:text-4xl font-light mb-12">
              Selected Work
            </h2>

            <div className="space-y-6">
  {categories.map((cat) => (
    <div key={cat}>
      {/* Category */}
      <button
        onClick={() => {
          setActiveCategory(cat);
          setActiveSub("All");
        }}
        className="
          flex
          items-center
          gap-4
          text-left
          group
        "
      >
        <span
          className={`
            w-2
            h-2
            rounded-full
            transition-all
            duration-300
            ${
              activeCategory === cat
                ? "bg-white scale-100"
                : "bg-white/20 scale-0"
            }
          `}
        />

        <span
          className={`
            text-xl
            transition-all
            duration-300
            ${
              activeCategory === cat
                ? "text-white"
                : "text-white/40 group-hover:text-white"
            }
          `}
        >
          {cat}
        </span>
      </button>

      {/* Subcategories directly below active category */}
      {cat !== "All" && activeCategory === cat && (
        <div className="ml-6 mt-4 border-l border-white/10 pl-5">
          <button
            onClick={() => setActiveSub("All")}
            className={`
              block
              mb-3
              text-sm
              transition-all
              ${
                activeSub === "All"
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }
            `}
          >
            All
          </button>

          {Object.keys(portfolioData[cat]).map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={`
                block
                mb-3
                text-sm
                transition-all
                ${
                  activeSub === sub
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }
              `}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

            
          </aside>

          {/* RIGHT CONTENT */}
          <div className="space-y-10 md:space-y-14">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  md:rounded-[36px]
                  cursor-pointer
                "
              >
                {/* Video */}
                <video
                  src={item.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="
                    w-full
                    aspect-video
                    object-cover
                    bg-black
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* Counter */}
                <div
                  className="
                    absolute
                    top-6
                    left-6
                    text-white/80
                    text-sm
                    md:text-base
                  "
                >
                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </div>

                {/* Bottom Glass CTA */}
                <div
                  className="
                    absolute
                    left-4
                    right-4
                    md:left-6
                    md:right-6
                    bottom-4
                    md:bottom-6

                    rounded-2xl

                    bg-white/10
                    backdrop-blur-xl

                    px-5
                    py-4

                    flex
                    items-center
                    justify-between

                    opacity-0
                    translate-y-8

                    transition-all
                    duration-500

                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <div>
                    <h3 className="text-white text-lg md:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-sm">
                      {item.category}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-white"
                  />
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-white/60 text-xl">
                  No projects found.
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
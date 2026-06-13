import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import FolderCard from "./FolderCard";

const projects = [
  {
    id: 1,
    title: "Mighty Buildings – sustainable 3D printed houses of the future",
    category: "Engineering & Manufacturing",
    country: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000",
  },
  {
    id: 2,
    title: "Luxury Jewelry E-Commerce Experience",
    category: "E-Commerce",
    country: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000",
  },
  {
    id: 3,
    title: "AI Powered Fintech Dashboard",
    category: "Fintech",
    country: "🇮🇳",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000",
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(slide);
  }, []);

  useEffect(() => {
    setProgress(0);

    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / 5000) * 100, 100));
    }, 16);

    return () => clearInterval(timer);
  }, [active]);

  const project = projects[active];

  const cardHeight = "h-[480px] sm:h-[540px] md:h-[620px] xl:h-[660px]";

  return (
    <section className="pt-30 md:pt-30">
      <div className="mx-auto max-w-[95vw] px-4">
        <div className="grid grid-cols-1 xl:grid-cols-[48%_52%] gap-6 xl:gap-8">
          {/* LEFT CARD */}

          <div className={cardHeight}>
            <FolderCard
              variant="left"
              fill="#463253"
              stroke="rgba(255,255,255,.2)"
            >
              <div
                className="h-full flex flex-col px-6 py-6
sm:px-8 sm:py-8
md:px-10 md:py-10
xl:px-12 xl:py-12"
              >
                <div className="flex-1 flex items-center pt-4">
                  <h2
                    className="
                text-[42px]
sm:text-[56px]
md:text-[72px]
lg:text-[85px]
xl:text-[105px]
                leading-[0.82]
                tracking-[-0.06em]
                font-black
                text-white
                uppercase
                "
                  >
                    OUR
                    <br />
                    BEST
                    <br />
                    WORKS
                  </h2>
                </div>

                <div className="border-t border-white/15 pt-8">
                  <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="flex items-end gap-3 sm:gap-6">
                      <h3 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
                        500+
                      </h3>

                      <div className="pb-2">
                        <p className="text-white text-sm leading-none">
                          PROJECTS
                        </p>

                        <p className="text-white text-sm leading-none mt-1">
                          DONE
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white flex items-center justify-center">
                        <ArrowDown size={20} />
                      </button>

                      <button
                        className="h-12 md:h-14
px-5 md:px-8
text-sm md:text-base rounded-full bg-[#F6C84C] font-semibold text-black"
                      >
                        ALL CASES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FolderCard>
          </div>

          {/* RIGHT CARD */}
          <div className={`${cardHeight} relative`}>
            <FolderCard variant="right" fill="white" stroke="rgba(0,0,0,.08)">
              <div className="h-full flex flex-col">
                {/* IMAGE */}

                <div
                  className="
  h-[58%] md:h-[63%]
  overflow-hidden
  shrink-0
  rounded-t-[28px]
  "
                >
                  <img
                    key={project.id}
                    src={project.image}
                    alt={project.title}
                    className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
        "
                  />
                </div>

                {/* CONTENT */}

                <div
                  className="
  h-[42%] md:h-[37%]
  bg-white
  px-5 py-5
sm:px-6 sm:py-6
md:px-8 md:py-6
xl:px-10
  flex
  flex-col
  rounded-b-[28px]
  "
                >
                  <div className="flex-1">
                    <div
                      className="flex items-center gap-4 text-[10px]
sm:text-[11px]
md:text-xs uppercase tracking-[0.15em] text-gray-500"
                    >
                      <span>{project.category}</span>
                    </div>

                    <div
                      className="h-[70px]
sm:h-[80px]
md:h-[100px] mt-4 overflow-hidden"
                    >
                      <h3
                        className="
            text-lg
sm:text-xl
md:text-2xl
xl:text-[30px]
            font-bold
            text-[#01012A]
            "
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <button className="mb-5 flex items-center gap-2 font-semibold text-[#01012A]">
                      View Project
                      <ArrowRight size={18} />
                    </button>

                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                      {projects.map((item, index) => (
                        <div
                          key={item.id}
                          className="h-[4px] overflow-hidden rounded-full bg-gray-200"
                        >
                          <div
                            className="h-full bg-[#3F2B4A]"
                            style={{
                              width:
                                index < active
                                  ? "100%"
                                  : index === active
                                    ? `${progress}%`
                                    : "0%",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FolderCard>
          </div>
        </div>
      </div>
    </section>
  );
}

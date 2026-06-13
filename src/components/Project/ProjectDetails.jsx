import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project Not Found
      </div>
    );
  }

  return (
    <main className=" text-white overflow-hidden">
      {/* HERO */}

      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 pb-10 md:pb-20">
            <h1 className="font-bold leading-none text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3 py-1.5
                    md:px-4 md:py-2
                    rounded-full
                    border border-white/30
                    backdrop-blur-md
                    text-xs md:text-sm
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Overview
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-zinc-300 leading-relaxed text-lg md:text-xl">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}

      {project.challenge && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-white/10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Challenge
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-zinc-400 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SOLUTION */}

      {project.solution && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-white/10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Solution
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-zinc-400 text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}

      {project.gallery?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl md:rounded-3xl"
              >
                <img
                  src={img}
                  alt={`${project.title}-${index}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}

      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
          <p className="text-zinc-500 text-sm uppercase tracking-[0.3em] mb-5">
            Next Project
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Explore More Work
          </h2>
        </div>
      </section>
    </main>
  );
}
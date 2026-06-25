import useFadeUpCards from "../../hooks/useFadeIn";
import useTextReveal from "../../hooks/useTextReveal";

export default function TeamSection({ team }) {
  const textReveal = useTextReveal();
  const fadeIn = useFadeUpCards();
  return (
    <section ref={fadeIn} className="py-10">
      {/* Header */}
      <div className="text-center text-white mb-12">

        <h2 ref={textReveal} className="mt-6 text-4xl md:text-6xl font-light">
          {team.name}
        </h2>
      </div>

      {/* Team Video */}
      <div className="fade-card max-w-6xl mx-auto px-4 mb-16">
        <video
          autoPlay
          muted
          loop
          loading="lazy"
          playsInline
          className="
            w-full
            h-[250px]
            md:h-[500px]
            object-cover
            rounded-3xl
          "
        >
          <source src={team.video} type="video/mp4" />
        </video>
      </div>

      {/* Team Members */}
      <div
        className="
          fade-card
          max-w-7xl
          mx-auto
          px-4
          flex
          flex-wrap
          justify-center
          gap-6
        "
      >
        {team.members.map((member) => (
          <div
            key={member.id}
            className="
 
              group
              w-[160px]
              sm:w-[180px]
              md:w-[200px]
              cursor-pointer
            "
          >
            {/* Image */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-full
                  h-[220px]
                  sm:h-[260px]
                  object-cover
                  grayscale
                  transition-all
                  duration-500
                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              />
            </div>

            {/* Info */}
            <div
              className="
                text-center
                mt-4
                opacity-0
                translate-y-3
                transition-all
                duration-500
                group-hover:opacity-100
                group-hover:translate-y-0
              "
            >
              <h3 className="text-lg text-white font-medium">
                {member.name}
              </h3>

              <p className="text-sm text-white/60">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
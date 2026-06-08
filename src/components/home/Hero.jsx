import CoverflowCarousel from "./CoverflowCarousel";

export default function Hero({ heroRef }) {
  return (
    <section
  ref={heroRef}
  className="
  absolute
  inset-0
  z-30

  flex
  flex-col
  items-center
  justify-center

  opacity-0
  "
>
      <CoverflowCarousel />

      <div className="text-center mt-16">
        <h1
          className="
          hero-title
          text-white
          text-6xl
          md:text-8xl
          font-black
          "
        >
          Creative Developer
        </h1>

        <p
          className="
          hero-subtitle
          text-white/70
          mt-4
          text-lg
          "
        >
          Building Modern Digital Experiences
        </p>
      </div>
    </section>
  );
}
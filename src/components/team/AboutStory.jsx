import DashedSeparator from "../DashedSeparator";

export default function AboutStory() {
  return (
    <section className="w-full bg-[#2c1638] text-white py-20">
      <div className=" mx-auto px-6">

        {/* Story */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Our Story
          </h2>

          <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-sm md:text-base">
            We started with a simple goal: helping brands build a meaningful
            digital presence. Through creativity, strategy, and innovation,
            we've transformed ideas into impactful experiences.
          </p>
        </div>

        {/* Separator */}
        <DashedSeparator />

        {/* Question */}
        <div className="text-center my-10">
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Are We Just Another Social Media Agency?
          </h3>

          <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-sm md:text-base">
            Not really. We focus on building authentic connections between
            brands and audiences through strategy-driven content, storytelling,
            and measurable growth.
          </p>
        </div>

        {/* Separator */}
        <DashedSeparator />

        {/* Founder Section */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-10
            items-center
            bg-white/5
            border
            border-white/10
            rounded-2xl
            overflow-hidden mt-10 max-w-6xl mx-auto my-10
          "
        >
          {/* Image */}
          <div className="h-full">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="
                w-full
                h-[300px]
                md:h-[450px]
                object-cover
              "
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              The Mind Behind It
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Every great brand begins with a vision. Our founder built this
              agency around the belief that creativity and strategy should work
              together to create memorable digital experiences that drive real
              business results.
            </p>
          </div>
        </div>

        {/* Bottom Separator */}
        <DashedSeparator />

      </div>
    </section>
  );
}
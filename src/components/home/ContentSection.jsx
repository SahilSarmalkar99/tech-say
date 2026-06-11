import { ArrowUpRight } from "lucide-react";

const topRow = [
  { id: 1, image: "https://i.pinimg.com/1200x/3f/97/48/3f9748b244b1076a7e86728c59a203b0.jpg", brand: "Tribalveda" },
  { id: 2, image: "https://i.pinimg.com/736x/75/47/90/7547904b84dc4baeddfc8cb8a7342137.jpg", brand: "Sugar.fit" },
  { id: 3, image: "https://i.pinimg.com/736x/95/35/a7/9535a7659fe5edb528ca82272d518dd9.jpg", brand: "Kyari" },
];

const bottomRow = [
  { id: 4, image: "https://i.pinimg.com/736x/ae/ae/48/aeae48bb532ab97e3165056a71cc22d0.jpg", brand: "Kyari" },
  { id: 5, image: "https://i.pinimg.com/736x/36/ea/23/36ea23d6473323af5e202b027bd0a4d2.jpg", brand: "Kenia" },
  { id: 6, image: "https://i.pinimg.com/1200x/3f/97/48/3f9748b244b1076a7e86728c59a203b0.jpg", brand: "FreshCon" },
  { id: 7, image: "https://i.pinimg.com/736x/75/47/90/7547904b84dc4baeddfc8cb8a7342137.jpg", brand: "Ugaoo" },
];

export default function ContentSection() {
  return (
    <section className="md:py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-light mb-16">
          Creating Content That Feels Real,
          <br className="hidden md:block" />
          Relatable And Impactful.
        </h2>

        {/* Top Row */}
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          {topRow.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center flex-wrap gap-6">
          {bottomRow.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentCard({ image, brand }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        group
        w-[220px]
        h-[330px]

        md:w-[230px]
        md:h-[340px]

        lg:w-[250px]
        lg:h-[370px]

        cursor-pointer
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={brand}
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Dark Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
        "
      />

      {/* Glass Label */}
      <div
        className="
          absolute
          left-4
          right-4
          bottom-4

          flex
          items-center
          justify-between

          px-5
          py-4

          rounded-2xl
          border border-white/10

          bg-white/10
          backdrop-blur-xl

          transition-all
          duration-300

          group-hover:bg-white/15
        "
      >
        <span className="font-medium text-sm md:text-base">
          {brand}
        </span>

        <div
          className="
            h-8
            w-8
            rounded-full

            bg-white
            text-black

            flex
            items-center
            justify-center

            transition-transform
            duration-300

            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
}
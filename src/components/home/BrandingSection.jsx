const brandingItems = [
  {
    id: 1,
    image: "/branding/bag.jpg",
    className: "row-span-2",
  },
  {
    id: 2,
    image: "/branding/stationary.jpg",
    className: "col-span-2",
  },
  {
    id: 3,
    image: "/branding/card.jpg",
    className: "col-span-2",
  },
  {
    id: 4,
    image: "/branding/logo.jpg",
    className: "col-span-3",
  },
  {
    id: 5,
    image: "/branding/stationary2.jpg",
    className: "",
  },
  {
    id: 6,
    image: "/branding/mobile.jpg",
    className: "",
  },
  {
    id: 7,
    image: "/branding/mug.jpg",
    className: "col-span-2",
  },
  {
    id: 8,
    image: "/branding/notebook.jpg",
    className: "",
  },
];

export default function BrandingSection() {
  return (
    <section className="py-24 px-4 text-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-center text-2xl md:text-4xl font-light mb-14">
      Designing Identities That Leave A Lasting Impression
    </h2>

    {/* Desktop */}
    <div className="hidden lg:grid grid-cols-[1fr_2.8fr_1fr] gap-4">

      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4">
        <Card
          image={brandingItems[0].image}
          className="h-[430px]"
        />

        <Card
          image={brandingItems[5].image}
          className="h-[240px]"
        />
      </div>

      {/* CENTER COLUMN */}
      <div className="flex flex-col gap-4">

        <Card
          image={brandingItems[1].image}
          className="h-[180px]"
        />

        <Card
          image={brandingItems[3].image}
          className="h-[180px]"
        />

        <Card
          image={brandingItems[6].image}
          className="h-[240px]"
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-4">

        <Card
          image={brandingItems[2].image}
          className="h-[180px]"
        />

        <Card
          image={brandingItems[4].image}
          className="h-[180px]"
        />

        <Card
          image={brandingItems[7].image}
          className="h-[240px]"
        />
      </div>
    </div>

    {/* Mobile / Tablet */}
    <div className="grid lg:hidden grid-cols-2 gap-4">
      {brandingItems.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          className="aspect-[4/3]"
        />
      ))}
    </div>
  </div>
</section>
  );
}

function Card({ image, className }) {
  return (
    <div
      className={`
        ${className}
        overflow-hidden
        rounded-[24px]
        group
        bg-white/5
      `}
    >
      <img
        src={image}
        alt=""
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105
        "
      />
    </div>
  );
}
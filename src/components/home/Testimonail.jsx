import React from "react";
import { Star } from "lucide-react";
import "../../styles/Testinomial.css"

const testimonials = [
  {
    name: "Anushka Sharma",
    location: "Mumbai, Maharashtra",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Virat Kohli",
    location: "Mumbai, Maharashtra",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Goli Beta",
    location: "Mumbai, Maharashtra",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jethalal Gada",
    location: "Mumbai, Maharashtra",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 text-white overflow-hidden">
      <h2 className="text-center text-3xl md:text-5xl mb-14">
        What Our Clients Think
      </h2>

      <div className="testimonialcarousel-trust">
        <div className="group-trust">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

        <div className="group-trust" aria-hidden>
          {testimonials.map((item, i) => (
            <TestimonialCard key={`copy-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

function TestimonialCard({ name, location, review }) {
  return (
    <div
      className="
      w-[340px]
      h-fit
      flex-shrink-0

      p-8

      rounded-[24px]

      border border-white/10

      bg-[linear-gradient(135deg,rgba(88,28,135,.28),rgba(255,255,255,.05))]
      backdrop-blur-xl

      transition-all
      duration-500

      hover:border-violet-400/30
      hover:-translate-y-1
    "
    >
      {/* Profile */}
      <div className="flex items-center gap-5 mb-8">
        <div
          className="
          h-20
          w-20
          rounded-full

          bg-gradient-to-br
          from-violet-400
          via-pink-400
          to-orange-300

          flex
          items-center
          justify-center

          text-3xl
          font-semibold
          text-black
        "
        >
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="text-[32px] leading-none font-light">
            {name}
          </h3>

          <p className="mt-2 text-sm text-white/40">
            {location}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="text-yellow-300 text-xl"
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p
        className="
        text-[15px]
        leading-7
        text-white/70
      "
      >
        {review}
      </p>
    </div>
  );
}

export default Testimonial;
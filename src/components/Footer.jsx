import { ArrowUpRight } from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-5xl leading-tight font-light max-w-xl">
              We don't just market,
              <br />
              We build brands that grow
            </h2>

            <button
              className="
                mt-12
                flex items-center justify-between
                gap-8
                px-8 py-4
                w-[280px]
                rounded-full
                border border-white/15
                bg-white/[0.02]
                backdrop-blur-xl
                hover:bg-white/[0.05]
                transition
              "
            >
              <span>Let's Connect</span>

              <div className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-y-12 gap-x-16">
            {[
              { value: "90+", label: "Happy Clients" },
              { value: "250+", label: "Projects Delivered" },
              { value: "10M+", label: "Views Generated" },
              { value: "5+", label: "Years Experience" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-5xl md:text-6xl font-light">
                  {item.value}
                </h3>

                <p className="mt-2 text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* BOTTOM FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-violet-500" />

            <span className="text-3xl font-light tracking-wide">
              SAY SOCIAL
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-10 text-white/80">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Contact</a>
          </nav>

          {/* CTA */}
          <button
            className="
              flex items-center justify-between
              gap-8
              px-8 py-4
              min-w-[260px]
              rounded-full
              border border-white/15
              bg-white/[0.02]
              backdrop-blur-xl
            "
          >
            <span>Contact Us Now</span>

            <div className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Socials */}
          <div className="flex gap-5">
            <a
              href="#"
              className="h-10 w-10 border border-white/20 rounded flex items-center justify-center"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="h-10 w-10 border border-white/20 rounded flex items-center justify-center"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="h-10 w-10 border border-white/20 rounded flex items-center justify-center"
            >
              <FaFacebookF size={18} />
            </a>
          </div>

          <p className="text-sm text-white/50 text-center">
            © 2026 Say Social. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
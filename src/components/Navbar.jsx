import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Case Study", path: "/case-study" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1B0E26]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 text-white"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 via-purple-400 to-white flex items-center justify-center text-black font-bold">
              S
            </div>

            <span className="text-2xl font-light tracking-wide">
              SAY SOCIAL
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <NavLink
            to="/contact"
            className="
              hidden md:flex
              items-center
              justify-center
              gap-8
              w-[280px]
              h-[46px]
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              text-white
              backdrop-blur-md
              hover:border-white/20
              transition-all
            "
          >
            <span className="text-lg">Contact Us</span>

            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight
                size={14}
                className="text-black"
              />
            </div>
          </NavLink>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen
              ? "max-h-[400px] py-6"
              : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-white/70"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-3
                flex
                items-center
                justify-between
                rounded-full
                border
                border-white/10
                px-5
                py-3
                text-white
              "
            >
              Contact Us

              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight
                  size={14}
                  className="text-black"
                />
              </div>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
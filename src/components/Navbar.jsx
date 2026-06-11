import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar({ visible = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 200
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Team",
      path: "/team",
    },
    {
      name: "Case Study",
      path: "/case-study",
    },
  ];

  const shouldShow = visible && showNavbar;

  return (
    <>
      <header
        className={`
          fixed
          left-0
          w-full
          z-[9999]
          px-4
          transition-all
          duration-500
          ease-out
          ${
            shouldShow
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          ${scrolled ? "top-3" : "top-5"}
        `}
      >
        <div
          className={`
            max-w-7xl
            mx-auto
            rounded-full
            border
            border-white/10
            bg-[#12091C]/80
            backdrop-blur-2xl
            shadow-[0_10px_50px_rgba(0,0,0,0.35)]
            transition-all
            duration-500
            ${scrolled ? "h-16" : "h-20"}
          `}
        >
          <div className="h-full px-8 flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-gradient-to-br
                  from-pink-400
                  via-purple-500
                  to-white
                  flex
                  items-center
                  justify-center
                  text-black
                  font-bold
                "
              >
                S
              </div>

              <span
                className="
                  text-white
                  text-xl
                  font-light
                  tracking-[0.18em]
                "
              >
                SAY SOCIAL
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                >
                  {({ isActive }) => (
                    <div
                      className={`
                        relative
                        text-sm
                        tracking-wide
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/60 hover:text-white"
                        }
                      `}
                    >
                      {link.name}

                      <span
                        className={`
                          absolute
                          -bottom-2
                          left-0
                          h-[2px]
                          bg-white
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-full"
                              : "w-0"
                          }
                        `}
                      />
                    </div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="
                hidden
                md:flex
                group
                items-center
                gap-4
                pl-3
                pr-5
                h-12
                rounded-full
                bg-white
                text-black
                font-medium
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-0.5
                hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]
              "
            >
              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={14} />
              </div>

              Contact Us
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="md:hidden text-white"
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          fixed
          z-[9999]
          top-24
          left-4
          right-4
          rounded-3xl
          border
          border-white/10
          bg-[#12091C]/95
          backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,0.35)]
          transition-all
          duration-500
          ${
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                text-lg
                text-white/70
                hover:text-white
                transition-colors
              "
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              mt-2
              flex
              items-center
              justify-between
              rounded-full
              bg-white
              px-5
              py-4
              text-black
              font-medium
            "
          >
            Contact Us

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center
              "
            >
              <ArrowUpRight size={14} />
            </div>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
import { useState, useRef, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [message, setMessage] = useState("Hi Nexa,");
const [editing, setEditing] = useState(false);

const textareaRef = useRef(null);

useEffect(() => {
  if (editing && textareaRef.current) {
    textareaRef.current.focus();

    const length = textareaRef.current.value.length;

    textareaRef.current.setSelectionRange(length, length);
  }
}, [editing]);

const heroTextClass = `
  text-[#DCCAB3]
  text-4xl
  md:text-6xl
  lg:text-7xl
  leading-[1.1]
  font-light
  tracking-tight
`;

  return (
    <section className="relative text-white overflow-hidden">
      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-white/[0.06]" />
      </div>

      {/* ================= HERO ================= */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden border-b border-white/10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/videos/contact.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col">
          {/* NAV */}
          <div className="flex justify-between items-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              NEXA
            </h1>

            <button
              className="
                h-14 w-14
                rounded-full
                border border-white/20
                flex items-center justify-center
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                transition-all duration-300
              "
            >
              <Menu size={24} />
            </button>
          </div>

          {/* HERO CONTENT */}
          <div className="flex-1 flex items-end pb-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="uppercase tracking-[0.3em] text-xs text-white/70">
                  Available for Projects
                </span>
              </div>

              <h2
                className="
                  text-[48px]
                  sm:text-[70px]
                  md:text-[90px]
                  lg:text-[120px]
                  leading-[0.9]
                  font-light
                  tracking-tight
                "
              >
                Let's build
                <br />
                something remarkable
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Message Intro */}
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Start a conversation
            </p>
          </div>

          <div className="lg:col-span-9 border-l border-white/10 pl-8 lg:pl-12">
            <div className="relative">
 <div className="lg:col-span-9 border-l border-white/10 pl-8 lg:pl-12">
  {!editing ? (
    <button
      onClick={() => setEditing(true)}
      className="
        text-left
        w-full
        cursor-text
      "
    >
      <h3 className={heroTextClass}>
  {message}
  <span className="blinking-cursor">|</span>
</h3>
    </button>
  ) : (
    <textarea
  ref={textareaRef}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className={`
    ${heroTextClass}
    w-full
    bg-transparent
    resize-none
    outline-none
    caret-[#DCCAB3]
    font-inherit
  `}
/>
  )}
</div>
</div>
          </div>
        </div>

        {/* Fields */}
        <div className="mt-24 grid md:grid-cols-2 gap-x-16 gap-y-14">
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-5">
              Your Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="
                w-full
                bg-transparent
                border-b border-white/10
                py-4
                text-xl
                outline-none
                transition-all
                focus:border-white
              "
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-5">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@company.com"
              className="
                w-full
                bg-transparent
                border-b border-white/10
                py-4
                text-xl
                outline-none
                transition-all
                focus:border-white
              "
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-5">
              Company
            </label>

            <input
              type="text"
              placeholder="Acme Inc."
              className="
                w-full
                bg-transparent
                border-b border-white/10
                py-4
                text-xl
                outline-none
                transition-all
                focus:border-white
              "
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-5">
              Budget
            </label>

            <input
              type="text"
              placeholder="$5k - $20k"
              className="
                w-full
                bg-transparent
                border-b border-white/10
                py-4
                text-xl
                outline-none
                transition-all
                focus:border-white
              "
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-24 flex justify-end">
          <button
            className="
              group
              flex items-center gap-4
              rounded-full
              bg-white
              text-black
              px-10
              py-5
              text-lg
              font-medium
              hover:scale-105
              transition-all duration-300
            "
          >
            Send Inquiry

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}
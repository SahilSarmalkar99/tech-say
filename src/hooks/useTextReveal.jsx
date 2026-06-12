import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function useTextReveal() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
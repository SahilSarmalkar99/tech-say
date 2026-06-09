import React from "react";
import TrustCarousel from "./TrustCarousel";

const TrustedBrand = () => {
  return (
    <section
      className="w-full md:mt-20 flex flex-col items-center justify-center px-6  overflow-hidden"
      id="trust"
    >
      <div className="max-w-[1000px] text-center flex flex-col items-center">
        {/* TAG */}
        <div className="px-5 py-2 mb-10 text-[14px] md:text-[18px] font-[font3] rounded-full border border-white/20 text-white/80">
          Our work has been trusted by
        </div>
      </div>
      <TrustCarousel />
    </section>

    
  );
};

export default TrustedBrand;

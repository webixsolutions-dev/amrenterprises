import React from "react";
import ChartTrading from "../../ui/ChartTrading";

const OurVission = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
        <p className="font-display text-xl sm:text-2xl md:text-3xl tracking-wide mb-4 md:mb-8">
          Our Vision
        </p>
        <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
          Explore our proven strategies designed to optimize performance and
          mitigate risks. From long-term holdings to aggressive day trading,
          learn how our expertise aligns with your investment style.
        </p>
        <div className="px-1 sm:px-2 md:px-4 lg:px-6">
          <ChartTrading />
        </div>
      </div>
    </section>
  );
};

export default OurVission;
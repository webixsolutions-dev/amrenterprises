import React from "react";
import ChartTrading from "../../ui/ChartTrading";

const OurVission = () => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-7xl mx-8">
        <p className="font-display text-2xl md:text-3xl  tracking-wide mb-8">
          Our Vision
        </p>
        <p className="text-white/60 text-lg md:text-md leading-relaxed mb-8">
          Explore our proven strategies designed to optimize performance and  mitigate risks. From long-term holdings to aggressive day trading, learn  how our expertise aligns with your investment style.
        </p>
        <div className="bg-white/5 rounded-xl p-4 md:p-6 lg:p-8">
          <ChartTrading />
        </div>
      </div>
    </section>
  );
};

export default OurVission;
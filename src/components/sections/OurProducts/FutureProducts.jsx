import React from "react";

const FutureExpansion = () => {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-blue-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Future Expansion
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
              Built for Future Growth
            </h2>

            <div className="w-24 h-[2px] bg-blue-500 mt-6 mb-8"></div>

            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mb-6">
              The BookToday product structure is designed to support
              additional approved BookToday services in the future while
              maintaining a consistent user experience.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
              Future enhancements will follow the approved product direction
              of AMR Enterprises without changing the platform's core
              purpose and identity.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&crop=center"
              alt="Future Expansion - Business Growth and Innovation"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl border border-gray-800"
            />

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FutureExpansion;
import React from "react";
import { Link } from "react-router-dom";

const ProductsCTA = () => {
  return (
    <section className="bg-[#080808] py-24 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-blue-500 uppercase tracking-[0.25em] text-sm font-semibold">
            Explore BookToday
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Discover BookToday
          </h2>

          <div className="w-24 h-[2px] bg-blue-500 mx-auto mt-6 mb-8"></div>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Learn more about BookToday, the official online booking platform
            owned and operated by AMR Enterprises, and explore its
            accommodation and travel-related booking services.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <Link
              to="/booked-today"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-black  transition-all duration-300"
            >
              Explore BookToday
            </Link>

            <Link
              to="/contact-us"
              className="px-8 py-4 border border-gray-700 hover:border-blue-500 text-white  transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;
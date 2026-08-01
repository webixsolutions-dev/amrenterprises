import React from "react";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="relative bg-black overflow-hidden py-28">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">

          {/* Breadcrumb */}
          <p className="text-blue-500 uppercase tracking-[0.3em] text-sm font-semibold">
            AMR ENTERPRISES
          </p>

          {/* Heading */}
          <h1 className="text-white text-5xl lg:text-7xl font-bold mt-5 leading-tight">
            Our <span className="text-blue-500">Products</span>
          </h1>

          {/* Line */}
          <div className="w-32 h-[2px] bg-blue-500 mt-6 mb-8"></div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-8 max-w-3xl">
            Discover the innovative digital products developed and managed by
            AMR Enterprises. Our products are designed to provide reliable,
            user-focused solutions while maintaining the highest standards of
            quality and performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/booktoday"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-black  transition duration-300"
            >
              Explore BookToday
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 border border-gray-600 hover:border-blue-500 text-white  transition duration-300"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
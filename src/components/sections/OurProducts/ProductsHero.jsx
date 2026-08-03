import React from "react";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="bg-black text-white min-h-[60vh] md:min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-16 md:py-0">
      <div className="container mx-auto px-2 sm:px-4 md:px-12">
        <div className="text-start border-l-4 border-brand pl-4 sm:pl-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our <span className="text-brand">Products</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mt-4 md:mt-6 leading-relaxed md:leading-8 text-sm sm:text-base md:text-lg">
            Digital products and business solutions managed by AMR Enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
import React from "react";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-4">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-start border-l-4 border-brand pl-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-brand">Products</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mt-6 leading-8 text-base md:text-lg">
            Digital products and business solutions managed by AMR Enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
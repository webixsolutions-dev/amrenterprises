import React from "react";
import { Link } from "react-router-dom";

const ProductsCTA = () => {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl md:text-3xl font-bold text-white mb-6">
            Get Started Today
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Ready to take control of your financial future? Contact us today to schedule a 
            consultation and learn more about how Amayra Enterprises Capital and Investment 
            can help you achieve your financial goals. Whether you're an individual investor, 
            a business owner, or an institutional client, we're here to support you every 
            step of the way.
          </p>

          <div className="mt-10">
            <Link
              to="/contact-us"
              className="inline-block bg-brand text-black font-semibold px-8 py-3 border-2 border-brand hover:bg-transparent hover:text-brand transition-all duration-300"
            >
              Schedule Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;
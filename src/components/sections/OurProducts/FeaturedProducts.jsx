import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    return (
        <section className="bg-black pt-20 mx-12">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-start">
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
                        <Link to="/products" className="hover:text-white transition">Our Products</Link>
                        <span>/</span>
                        <span className="text-white">BookToday</span>
                    </div>

                    <p className="text-4xl md:text-5xl lg:text-6xl  text-brand mb-6">
                        BookToday
                    </p>

                    <p className="text-gray-400 max-w-4xl mt-6 leading-8 text-base md:text-lg">
                        BookToday is an official product and trade name owned and operated by AMR Enterprises.
                    </p>

                    <p className="text-gray-400 max-w-4xl mt-4 leading-8 text-base md:text-lg">
                        BookToday is an online accommodation and travel-booking platform where customers can search,
                        compare, and book accommodations and travel-related services through a convenient digital platform.
                        BookToday is developed, managed, and maintained by AMR Enterprises.
                    </p>

                    <div className="w-full  h-[1px] bg-gray-700 mt-8 mb-8"></div>

                    <div className="grid md:grid-cols-2 gap-8 ">
                        <div >
                            <h3 className="text-brand text-xl font-bold mb-3">Mission</h3>
                            <p className="text-gray-400 leading-7">
                                To provide customers with a convenient and accessible way to search, compare, and book accommodation and travel-related services.
                            </p>
                        </div>
                        <div >
                            <h3 className="text-brand text-xl font-bold mb-3">Vision</h3>
                            <p className="text-gray-400 leading-7">
                                To support a reliable digital travel-booking experience that connects customers with suitable accommodation and travel options.
                            </p>
                        </div>

                    </div>
                    <div className="w-full  h-[1px] bg-gray-700 my-8 mb-8"></div>
                    

                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
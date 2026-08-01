import React from "react";
import { Link } from "react-router-dom";
import bookTodayLogo from "../../../assets/images/products-logo.png";

const FeaturedProducts = () => {
    return (
        <section className="bg-black py-24">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Heading */}
                <div className="mb-16">
                    <p className="text-blue-500 uppercase tracking-[0.25em] text-sm font-semibold">
                        Featured Product
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        BookToday
                    </h2>

                    <div className="w-full  h-[1px] bg-gray-600 mt-5 mb-6"></div>

                    <p className="text-gray-400 text-lg leading-8 max-w-3xl mt-8">
                        BookToday is an official product and trade name owned and operated
                        by AMR Enterprises. It is an online booking platform where customers
                        can search, compare and book accommodations and travel-related
                        services. BookToday is developed, managed and maintained by AMR
                        Enterprises.
                    </p>
                </div>

                {/* Product Card */}
                <div className="border border-gray-800 rounded-2xl bg-[#0d0d0d] hover:border-blue-500 transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">

                        {/* Left */}
                        <div>
                            <img
                                src={bookTodayLogo}
                                alt="BookToday Logo"
                                className="h-auto object-contain mb-8"
                            />

                            <h3 className="text-3xl font-bold text-white">
                                BookToday
                            </h3>

                            <p className="text-gray-400 leading-8 mt-6">
                                BookToday enables customers to search, compare and book
                                accommodations while supporting travel-related services through
                                a convenient online booking platform.
                            </p>

                            <Link
                                to="/booktoday"
                                className="inline-flex items-center mt-10 px-7 py-4 bg-blue-600 hover:bg-blue-700  text-black transition"
                            >
                                Explore BookToday
                            </Link>
                        </div>

                        {/* Right */}
                        <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
                            <h4 className="text-white text-2xl font-semibold mb-6">
                                Highlights
                            </h4>

                            <ul className="space-y-5 text-gray-400">
                                <li> Online Booking Platform</li>
                                <li> Accommodation Search</li>
                                <li> Accommodation Comparison</li>
                                <li> Accommodation Booking</li>
                                <li> Support for Travel-related Services</li>
                                <li> Developed, Managed & Maintained by AMR Enterprises</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
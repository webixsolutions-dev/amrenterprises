import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    return (
        <section className="bg-black pt-12 md:pt-20 px-4 sm:px-6 md:px-12 lg:mx-12">
            <div className="container mx-auto px-2 sm:px-4 md:px-12">
                <div className="text-start">
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
                        <Link to="/products" className="hover:text-white transition">Our Products</Link>
                        <span>/</span>
                        <span className="text-white">BookToday</span>
                    </div>

                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand mb-6">
                        BookToday
                    </p>

                    <p className="text-gray-400 max-w-4xl mt-4 md:mt-6 leading-relaxed md:leading-8 text-sm sm:text-base md:text-lg">
                        BookToday is an official product and trade name owned and operated by AMR Enterprises.
                    </p>

                    <p className="text-gray-400 max-w-4xl mt-4 leading-relaxed md:leading-8 text-sm sm:text-base md:text-lg">
                        BookToday is an online accommodation and travel-booking platform where customers can search,
                        compare, and book accommodations and travel-related services through a convenient digital platform.
                        BookToday is developed, managed, and maintained by AMR Enterprises.
                    </p>

                    <div className="w-full h-[1px] bg-gray-700 mt-6 mb-6 md:mt-8 md:mb-8"></div>

                    <div className="flex flex-col md:flex-row gap-0">
                        {/* Mission - Image Left, Content Right */}
                        <div className="flex flex-col md:flex-row md:w-1/2">
                            <div className="img md:w-1/2">
                                <img
                                    className="w-full h-[200px] md:h-[250px] object-cover"
                                    src="https://images.unsplash.com/photo-1719115067961-439b3e5fcc78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pc3Npb24lMjBsYXB0b3B8ZW58MHx8NHx8fDI%3D"
                                    alt="Mission"
                                />
                            </div>
                            <div className="flex flex-col items-start px-2 md:px-4 lg:px-6 py-4 md:py-0 md:w-1/2">
                                <h3 className="text-brand text-lg sm:text-xl font-bold mb-3">Mission</h3>
                                <p className="text-gray-300 leading-relaxed" style={{ lineHeight: '2.0' }}>
                                    To provide customers with a convenient and accessible way to search, compare, and book accommodation and travel-related services.
                                </p>
                            </div>
                        </div>

                        {/* Vision - Image Left, Content Right */}
                        <div className="flex flex-col md:flex-row md:w-1/2">
                            <div className="img md:w-1/2">
                                <img
                                    className="w-full h-[200px] md:h-[250px] object-cover"
                                    src="https://images.unsplash.com/photo-1583263496887-4e3046c78090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlzc2lvbnxlbnwwfHw0fHx8Mg%3D%3D"
                                    alt="Vision"
                                />
                            </div>
                            <div className="flex flex-col items-start px-2 md:px-4 lg:px-6 py-4 md:py-0 md:w-1/2">
                                <h3 className="text-brand text-lg sm:text-xl font-bold mb-3">Vision</h3>
                                <p className="text-gray-300 leading-relaxed" style={{ lineHeight: '2.0' }}>
                                    To support a reliable digital travel-booking experience that connects customers with suitable accommodation and travel options.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-700 my-6 md:my-8 mb-6 md:mb-8"></div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
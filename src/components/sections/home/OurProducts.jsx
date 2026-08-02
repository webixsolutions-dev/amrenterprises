import React from 'react'
import { Link } from 'react-router-dom'

const OurProducts = () => {
    return (
        <section className="py-20 bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-start">
                    <span className="text-white font-semibold tracking-widest text-xs sm:text-sm">
                        Our Products
                    </span>
                    <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-6"></div>

                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-brand font-bold mt-4">
                        Book Today
                    </p>

                    <p className="text-gray-400 max-w-4xl mt-6 leading-relaxed text-sm sm:text-base md:text-lg break-words">
                        BookToday is an official product and trade name owned and operated by AMR Enterprises.
                    </p>

                    <p className="text-gray-400 max-w-4xl mt-3 leading-relaxed text-sm sm:text-base md:text-lg break-words">
                        BookToday provides online accommodation and travel-booking services through a convenient digital platform where customers can search, compare, and book accommodations and travel-related services. BookToday is developed, managed, and maintained by AMR Enterprises.
                    </p>

                    <ul className="flex flex-wrap gap-4 sm:gap-6 mt-8">
                        <li className="text-brand text-xs sm:text-sm md:text-base font-medium flex items-center">
                            Online Booking Platform
                        </li>
                        <li className="text-brand text-xs sm:text-sm md:text-base font-medium flex items-center">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 inline-block"></span>
                            Hotel Booking
                        </li>
                        <li className="text-brand text-xs sm:text-sm md:text-base font-medium flex items-center">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 inline-block"></span>
                            Accommodation Booking
                        </li>
                        <li className="text-brand text-xs sm:text-sm md:text-base font-medium flex items-center">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 inline-block"></span>
                            Travel Booking
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default OurProducts
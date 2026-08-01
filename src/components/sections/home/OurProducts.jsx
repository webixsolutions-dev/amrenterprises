import React from 'react'
import { Link } from 'react-router-dom'
const OurProducts = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container  px-12">
                <div className="text-Start mb-12">
                    <span className="text-white font-semibold uppercase tracking-widest">
                        Our Products
                    </span>
                    <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8"></div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        BookToday
                    </h2>

                    <p className="text-gray-400 max-w-3xl  mt-6 leading-8">
                        BookToday is an official product and trade name owned and operated by
                        AMR Enterprises. It is an online booking platform where customers can
                        search, compare and book accommodations and travel-related services.
                        BookToday is developed, managed and maintained by AMR Enterprises.
                    </p>
                </div>

                <div className="flex justify-Start">
                    <Link
                        to="/booked-today"
                        className="bg-brand hover:bg-brand text-black px-8 py-4  transition duration-300"
                    >
                        Explore BookToday
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurProducts
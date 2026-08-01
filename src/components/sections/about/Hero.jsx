import React from 'react'
import { Link } from 'react-router-dom'
import Hero from "../../../assets/images/aboutHero.webp"
const AboutHero = () => {
    return (
        <section className="bg-black text-white min-h-screen flex items-center py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Left Side - Image */}
                <div className="order-2 md:order-1">
                    <img
                        src={Hero}
                        alt="Amayra Enterprises"
                        className="w-full h-auto object-cover shadow-2xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="order-1 md:order-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        WELCOME TO <br />
                        <span className="text-white">AMAYRA ENTERPRISES</span>
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                        We provide expert business and management consulting services to help
                        your company succeed.<br/>
                        Contact us today!

                    </p>

                

                    <Link
                        to="/contact-us"
                        className="inline-block bg-brand text-black font-semibold px-8 py-3  hover:bg-brand-dark transition-colors duration-300"
                    >
                        Find out more
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/images/invetment_hero.webp'
const InvestmentHero = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="order-2 md:order-1">
          <img
            src={HeroImage}
            alt="Investment Approach"
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            AMAYRA INVESTMENTS' <br />APPROACH.
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            By combining a thorough understanding of clients' financial goals and risk profiles
            with our expertise in active management and sustainable investing, we provide
            investment portfolios that are not only aligned with clients' objectives but also
            positioned to generate sustainable long-term returns.
          </p>

          <Link
            to="/contact-us"
            className="inline-block bg-brand text-black font-semibold px-10 py-4 border border-brand transition-all duration-300 hover:bg-transparent hover:text-brand hover:border-brand"
          >
            Find out more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InvestmentHero
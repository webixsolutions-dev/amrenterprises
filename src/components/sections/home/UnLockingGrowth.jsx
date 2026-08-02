import React from 'react'
import { Link } from 'react-router-dom'

const UnLockingGrowth = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-white">
            <h2 className="font-cabin text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl uppercase tracking-wide text-gray-300 mb-6 break-words">
              Unlocking Growth: Capital and Investment Strategies with Amayra Enterprises
            </h2>
            <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto break-words">
              In our consultation with Amayra Enterprises, we'll analyze your current business situation, 
              explore growth goals, and discuss challenges. We'll then tailor capital and investment strategies, 
              explore international opportunities, and discuss potential partnerships. We'll outline actionable 
              steps to drive your business forward.
            </p>
            <Link
              to="/contact-us"
              className="font-cabin font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider inline-block border-2 bg-brand border-brand text-black px-6 sm:px-8 py-3 hover:bg-transparent hover:text-brand transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnLockingGrowth
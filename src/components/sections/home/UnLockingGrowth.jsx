import React from 'react'
import { Link } from 'react-router-dom'

const UnLockingGrowth = () => {
  return (
    <section className="py-2 px-4 max-w-auto mx-auto bg-black">
      <div className="text-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-xl font-bold mb-6">
            Unlocking Growth: Capital and Investment Strategies with Amayra Enterprises
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
            In our consultation with Amayra Enterprises, we'll analyze your current business situation, 
            explore growth goals, and discuss challenges. We'll then tailor capital and investment strategies, 
            explore international opportunities, and discuss potential partnerships. We'll outline actionable 
            steps to drive your business forward.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-brand text-black font-semibold px-8 py-3  hover:bg-brand-dark transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UnLockingGrowth
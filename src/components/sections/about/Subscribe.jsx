import React from 'react'

const Subscribe = () => {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=60)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          SUBSCRIBE
        </h2>

        <p className="text-gray-400 text-sm my-4">
          Sign up to hear from us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w- mx-auto">
          <input
            type="email"
            placeholder="   contact@amrenterprises.com"
            className="flex-1 px-4 py-3  bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-brand transition-colors"
          />
          <button className="px-8 py-3 bg-brand text-black font-semibold  hover:bg-brand-dark transition-colors duration-300 whitespace-nowrap">
            Sign up
          </button>
        </div>


      </div>
    </section>
  )
}

export default Subscribe
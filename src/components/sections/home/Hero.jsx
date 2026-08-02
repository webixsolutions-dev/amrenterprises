import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br bg-black to-brand-dark text-white py-24 px-4 overflow-x-hidden">
      <div className="max-w-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-8 text-left border-l-2 border-white pl-4 sm:pl-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 break-words">
          Unlocking Your Business Success
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 break-words">
          At Amayra Enterprises, we are dedicated to guiding businesses towards sustainable
          growth through tailored solutions.
        </p>

        <Link
          to="/contact-us"
          className="inline-block bg-brand text-black font-semibold px-6 sm:px-8 py-3 border-2 border-brand hover:bg-transparent hover:text-brand transition-all duration-300 text-sm sm:text-base"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
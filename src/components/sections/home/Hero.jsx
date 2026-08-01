import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br bg-black to-brand-dark text-white py-24 px-4">
      <div className="max-w-3xl mx-8 text-left border-l-2 text-white pl-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Unlocking Your Business Success
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8">
          At Amayra Enterprises, we are dedicated to guiding businesses towards sustainable
          growth through tailored solutions.
        </p>

        <Link
          to="/contact-us"
          className="inline-block bg-brand text-black font-semibold px-8 py-3 hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
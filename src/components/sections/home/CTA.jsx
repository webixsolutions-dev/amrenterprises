import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center overflow-x-hidden">
      <div className="max-w-2xl mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">
          Get Started Today
        </p>
        <p className="text-white/90 mb-8 text-sm sm:text-base md:text-lg leading-relaxed break-words">
          Ready to take control of your financial future? Contact us today to schedule a
          consultation and learn more about how Amayra Enterprises Capitals and Investment can
          help you achieve your financial goals.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-brand text-black font-semibold px-6 sm:px-8 py-3 border-2 border-brand hover:bg-transparent hover:text-brand transition-all duration-300 text-sm sm:text-base"
        >
          Schedule Now
        </Link>
      </div>
    </section>
  )
}
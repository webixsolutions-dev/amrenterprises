import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-white/90 mb-8">
          Ready to take control of your financial future? Contact us today to schedule a
          consultation and learn more about how Amayra Enterprises Capitals and Investment can
          help you achieve your financial goals.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-brand text-black font-semibold px-8 py-3 "
        >
          Schedule Now
        </Link>
      </div>
    </section>
  )
}

import React from 'react'

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Content */}
        <div className="order-1">
          <h2 className="text-3xl md:text-3xl font-bold mb-6">
            ABOUT AMAYRA ENTERPRISES
          </h2>
         <div className="w-10/12 my-3 h-px bg-white"></div>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
            Welcome to Amayra Enterprises Capitals and Investment, where financial expertise meets personalized service.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            At Amayra, we believe that every investor deserves a partner who is committed to their financial success. Established with a vision to empower individuals and businesses to achieve their financial goals, we specialize in providing comprehensive capital management and investment solutions tailored to your unique needs.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            Our journey began with a simple yet profound mission: to deliver exceptional financial services with integrity, transparency, and a relentless dedication to client satisfaction. With a team of seasoned professionals boasting decades of collective experience in the financial industry, we combine expertise with innovation to offer a diverse range of investment strategies and wealth management solutions.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            What sets us apart is our unwavering commitment to understanding your aspirations, risk tolerance, and financial objectives. Whether you're planning for retirement, building your investment portfolio, or seeking strategic guidance for your business ventures, we take the time to listen, analyze, and devise personalized strategies designed to optimize your financial potential.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            Transparency is the cornerstone of our approach. We believe in fostering open, honest, and collaborative relationships with our clients, built on trust and mutual respect. Our transparent fee structure, clear communication, and unbiased advice ensure that you have the information and insight needed to make informed decisions about your financial future.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            At Amayra, we recognize that the financial landscape is constantly evolving. That's why we remain committed to staying ahead of the curve, continuously adapting our strategies to capitalize on emerging opportunities and mitigate potential risks. Whether it's navigating market fluctuations, identifying lucrative investment avenues, or optimizing your tax efficiency, our team is dedicated to providing proactive guidance and support every step of the way.
          </p>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            Beyond our commitment to excellence in financial management, we are deeply invested in giving back to the communities we serve. Through philanthropic initiatives and community outreach programs, we strive to make a positive impact and create a brighter future for generations to come.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Thank you for considering Amayra Enterprises Capitals and Investment as your trusted financial partner. We look forward to embarking on this journey together, guiding you towards financial prosperity and peace of mind.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="order-2">
          <img
            src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aG1ldGljc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="About Amayra Enterprises"
            className="w-full h-auto rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
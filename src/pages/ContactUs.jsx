import React from "react";
import { Helmet } from "react-helmet-async";
import CommonForm from "../components/ui/Form";

const ContactUs = () => {
  const hours = [
    ["Mon", "09:00 a.m. – 05:00 p.m."],
    ["Tue", "09:00 a.m. – 05:00 p.m."],
    ["Wed", "09:00 a.m. – 05:00 p.m."],
    ["Thu", "09:00 a.m. – 05:00 p.m."],
    ["Fri", "09:00 a.m. – 05:00 p.m."],
    ["Sat", "Closed"],
    ["Sun", "Closed"],
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Amayra Enterprises</title>
        <meta name="description" content="Get in touch with Amayra Enterprises - We'd love to hear from you" />
        <meta name="keywords" content="contact, email, phone, address, Amayra Enterprises" />
      </Helmet>

      <section className="bg-black text-white min-h-screen pt-32 md:pt-36 pb-24">
        <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">

          {/* ================= HEADER ================= */}
          <div className="mb-20">
            <h1 className="font-display text-3xl md:text-2xl lg:text-3xl tracking-tight">
              Contact Us
            </h1>

            <div className="w-full h-px bg-white/25 mt-8" />
          </div>

          {/* ================= MAIN GRID ================= */}
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">

            {/* ================= LEFT FORM ================= */}
            <div className="lg:sticky lg:top-28 lg:self-start">

              <p className="text-xl md:text-2xl lg:text-xl mb-12">
                Drop us a line!
              </p>

              <CommonForm />

            </div>

            {/* ================= RIGHT INFO ================= */}
            <div className="lg:pl-4 xl:pl-8">

              {/* Intro */}
              <div className="mb-16">
                <h2 className="text-xl md:text-2xl lg:text-3xl normal-case mb-5">
                  Better yet, see us in person!
                </h2>

                <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">
                  We love our customers, so feel free to visit during normal
                  business hours.
                </p>
              </div>

              {/* Company */}
              <div className="mb-16">

                <h3 className="text-2xl md:text-xl normal-case mb-6">
                  Amayra Enterprises
                </h3>

                <p className="text-white/65 text-lg md:text-xl leading-relaxed">
                  Unit # 1, 5009D 51 Street,
                  <br />
                  Barrhead, Alberta T7N 1L1, Canada
                </p>

                <div className="mt-7 space-y-4">

                  <a
                    href="tel:+17808001628"
                    className="block text-brand text-lg md:text-xl hover:underline"
                  >
                    +1 780-800-1628
                  </a>

                  <a
                    href="mailto:contact@amrenterprises.com"
                    className="block text-brand text-lg md:text-xl hover:underline"
                  >
                    contact@amrenterprises.com
                  </a>

                </div>
              </div>

              {/* Hours */}
              <div>

                <h3 className="text-2xl md:text-xl font-semibold mb-6">
                  Hours
                </h3>

                <div className="max-w-[520px]">

                  {hours.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center py-3 text-lg md:text-xl text-white/65 border-b border-white/10"
                    >
                      <span>{day}</span>
                      <span className="text-right">{time}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          </div>

          {/* ================= LOCATION MAP - FULL WIDTH ================= */}
          <div className="mt-24 -mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20">
            <div className="w-full h-[400px] md:h-[500px] border-t border-b border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Unit%20%231,%205009D%2051%20Street,%20Barrhead,%20Alberta%20T7N%201L1,%20Canada&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amayra Enterprises Location"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
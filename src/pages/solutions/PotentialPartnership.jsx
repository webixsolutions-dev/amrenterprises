import React from 'react';
import heroImg from '../../assets/images/partnership-hero.webp'

import img1 from '../../assets/images/international-1.webp';
import img2 from '../../assets/images/international-2.webp';
import img3 from '../../assets/images/international-3.webp';
import { Link } from 'react-router-dom';
const whyPartner = [
  {
    title: 'Expertise',
    description:
      'With decades of collective experience in the financial industry, our team brings a wealth of expertise and insight to the table. Whether you’re seeking strategic guidance, specialized knowledge, or access to innovative investment solutions, we have the skills and resources to add value to our partnership.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'At Amayra, client satisfaction is our top priority. We are dedicated to delivering exceptional service, tailored solutions, and personalized support to meet the unique needs of our clients. By partnering with us, you can leverage our client-centric approach to enhance your offerings and deepen client relationships.',
  },
  {
    title: 'Innovation',
    description:
      "In today's rapidly evolving financial landscape, innovation is key to staying ahead of the curve. We are committed to leveraging cutting-edge technology, data analytics, and research capabilities to drive innovation and create value for our clients and partners. Partnering with us gives you access to our innovative solutions and expertise, helping you differentiate yourself in the marketplace.",
  },
  {
    title: 'Global Reach',
    description:
      'With a presence in international markets, we offer global reach and access to a diverse range of investment opportunities. Whether you’re looking to expand your geographic footprint or access new markets, partnering with us can open doors to new possibilities and growth opportunities.',
  },
];

const partnershipInfo = [
  {
    title: 'Partnership Landscape',
    image: img1,

    description:
      'Analysis of potential partnership opportunities in target markets. Overview of industry trends and dynamics influencing partnership strategies. Discussion on the significance of strategic alliances for business growth.',
  },
  {
    title: 'Partnership Objectives',
    image: img2,

    description:
      'Identification of key partnership objectives and goals. Explanation of how partnerships support business expansion initiatives. Emphasis on mutual benefits and value proposition for potential partners.',
  },
  {
    title: 'Partner Criteria',
    image: img3,

    description:
      'Evaluation criteria for potential partners, including compatibility and capabilities. Importance of due diligence and relationship-building in partner selection. Overview of how Amayra Enterprises can assist in identifying and evaluating potential partners.',
  },
];

const opportunities = [
  {
    title: 'Financial Advisors and Wealth Managers',
    description:
      'Collaborate with us to enhance your client offerings, access specialized expertise, and leverage our investment solutions to grow your business and better serve your clients.',
  },
  {
    title: 'Institutional Partners',
    description:
      'Partner with us to access institutional-grade investment strategies, research, and risk management capabilities to optimize your investment portfolio and achieve your financial objectives.',
  },
  {
    title: 'Technology Providers',
    description:
      'Explore partnership opportunities to integrate our investment solutions, data feeds, and research tools into your technology platform, providing added value to your clients and enhancing user experience.',
  },
  {
    title: 'Strategic Alliances',
    description:
      'Forge strategic alliances with us to explore joint ventures, co-investment opportunities, and business development initiatives that leverage our respective strengths and capabilities.',
  },
];

const PotentialPartnership = () => {
  return (
    <section className="bg-black px-5 py-10 sm:px-8 md:px-[6%] md:py-16">

      {/* Hero */}
      <div className="grid grid-cols-1 mt-12 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Image */}
        <div className="w-full">
          <img
            className="h-[280px] w-full bg-[#111] sm:h-[350px] md:h-[420px] object-cover"
            src={heroImg}
            alt="Partnership Opportunities"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-xl font-semibold uppercase leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Explore Partnership Opportunities with Amayra Enterprise
          </h1>

          <div className="mt-6 h-px w-full bg-gray-500" />

          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            At Amayra Enterprises Capitals and Investment, we believe in
            the power of collaboration to drive mutual growth and success.
            We welcome opportunities to partner with like-minded
            organizations, professionals, and institutions who share our
            commitment to excellence, integrity, and client satisfaction.
          </p>

          <Link to="/contact-us">
            <button className="mt-6 px-6 py-3 bg-brand text-black font-semibold  hover:bg-brand/80 transition-all duration-300">
              Find Out More
            </button>
          </Link>
        </div>
      </div>
      {/* Why Partner */}
      {/* Why Partner */}
      <div className="mt-16 md:mt-24">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Content */}
          <div className="px-0 md:pr-12 lg:pr-20">

            <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
              Why Partner with Us?
            </h2>

            <div className="mt-5 h-px w-full bg-gray-500" />

            <div className="mt-10 space-y-12">

              {whyPartner.map((item, index) => (
                <div key={item.title}>

                  <h3 className="text-xl font-medium text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}
          <div className="mt-10 w-full md:mt-0">
            <img
              src={heroImg}
              alt="Why Partner With Us"
              className="h-[400px] w-full object-cover sm:h-[500px] md:h-[650px] lg:h-[700px]"
            />
          </div>

        </div>

      </div>
      {/* About Partnership */}
      {/* About Amayra Enterprises Partnership */}
      <div className="mt-16 md:mt-24">

        <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
          About Amayra Enterprises Partnership
        </h2>

        <div className="mt-5 h-px w-full bg-gray-500" />

        {/* 3 Items */}
        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-12">

          {partnershipInfo.map((item) => (
            <div key={item.title}>

              {/* Circle Image */}
              <div className="mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-full sm:max-w-[280px] md:max-w-none">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-xl font-medium text-white sm:text-2xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
      {/* Partnership Opportunities */}
      <div className="mt-16 md:mt-24">

        <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
          Partnership Opportunities
        </h2>

        <div className="mt-5 h-px w-full bg-gray-500" />

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* Left Image */}
          <div className="w-full">
            <img
              src={heroImg}
              alt="Partnership Opportunities"
              className="h-[350px] w-full object-cover sm:h-[450px] md:h-[600px] lg:h-[650px]"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-10 md:space-y-12">

            {opportunities.map((item, index) => (
              <div key={item.title}>


                <h3 className="mt-2 text-xl font-medium text-white sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Let's Partner Together */}
      <div className="mt-16 md:mt-24 mx-auto text-center">

        <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
          Let's Partner Together
        </h2>


        <p className="mt-6 max-w-6xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
          Whether you're a financial advisor, institution, technology
          provider, or industry partner, we invite you to explore
          partnership opportunities with Amayra Enterprises Capitals and
          Investment. Together, we can create synergies, drive innovation,
          and unlock new opportunities for growth and success.
        </p>

        <Link
          to="/contact-us"
          className="inline-block border mt-8 border-brand bg-brand px-7 py-3 text-sm font-medium uppercase tracking-wide text-black transition-all duration-300 hover:bg-black hover:text-brand"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
};

export default PotentialPartnership;
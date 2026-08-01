import React from 'react';
import aboutVission from '../../assets/images/aboutvission.png';
import img1 from '../../assets/images/international-1.webp';
import img2 from '../../assets/images/international-2.webp';
import img3 from '../../assets/images/international-3.webp';

const opportunities = [
  {
    title: 'Market Diversification',
    image: img1,
    description:
      'Partnering with Amayra Enterprises opens doors to new markets and geographies, reducing reliance on a single market and diversifying revenue streams. By expanding internationally, businesses can mitigate risks associated with economic downturns or market fluctuations in their home countries, ensuring greater stability and resilience.',
  },
  {
    title: 'Access to Growth Opportunities',
    image: img2,
    description:
      'International expansion with Amayra Enterprises provides access to untapped markets and emerging economies, offering businesses the opportunity to capitalize on new customer segments, industry trends, and growth potential. With our expertise and network, businesses can identify and pursue lucrative opportunities for expansion, driving long-term growth and profitability.',
  },
  {
    title: 'Enhanced Competitive Advantage',
    image: img3,
    description:
      'Leveraging international opportunities with Amayra Enterprises enables businesses to gain a competitive edge by expanding their footprint, strengthening brand presence, and accessing global talent pools. By establishing a global presence, businesses can enhance their credibility, innovation capabilities, and market positioning, solidifying their competitive advantage in the global marketplace.',
  },
];

const InternationalOptions = () => {
  return (
    <section className="bg-black px-5 py-10 sm:px-8 md:px-[6%] md:py-16">
      <div>
        <h1 className="text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          International Opportunities
        </h1>

        <p className="mt-6 max-w-2xl text-start text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
          Amayra Enterprises offers a gateway to international opportunities
          for businesses seeking to expand their presence beyond domestic
          borders. With our extensive network, market expertise, and strategic
          insights, we facilitate access to promising international markets,
          helping businesses identify and capitalize on growth.
        </p>
      </div>

      <div className="mt-14 sm:mt-16 md:mt-20">
        <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
          Unlock Your Business Potential
        </h2>

        <div className="mt-5 h-px w-full bg-gray-500" />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {opportunities.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white sm:text-xl">
                {item.title}
              </h3>

              <div className="mt-6 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 sm:mt-16 md:mt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
                Why Consider International Investing?
              </h2>

              <div className="mt-5 h-px w-full bg-gray-500" />

              <div className="mt-8 space-y-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                <p>
                  <span className="font-semibold text-white">Diversification:</span>{' '}
                  Investing internationally allows you to spread your risk across
                  different markets, sectors, and currencies, reducing the impact
                  of regional economic downturns or geopolitical events on your
                  portfolio.
                </p>

                <p>
                  <span className="font-semibold text-white">Growth Potential:</span>{' '}
                  Emerging markets offer tremendous growth potential, driven by
                  factors such as demographic trends, urbanization, and technological
                  advancements. By tapping into these markets, you can access
                  high-growth opportunities that may not be available domestically.
                </p>

                <p>
                  <span className="font-semibold text-white">Currency Exposure:</span>{' '}
                  Investing in international markets provides exposure to foreign
                  currencies, which can serve as a hedge against currency
                  fluctuations and enhance your portfolio's risk-adjusted returns.
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Innovation and Differentiated Opportunities:
                  </span>{' '}
                  International markets offer access to innovative companies,
                  disruptive technologies, and unique investment themes that may not
                  be prevalent in your home market.
                </p>

                <p>
                  By expanding your investment universe, you can uncover new sources
                  of alpha and enhance your portfolio's return potential.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl">
                Our Approach
              </h2>

              <div className="mt-5 h-px w-full bg-gray-500" />

              <div className="mt-8 space-y-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                <p>
                  <span className="font-semibold text-white">Comprehensive Research:</span>{' '}
                  Our team conducts rigorous research and analysis to identify
                  attractive international investment opportunities across asset
                  classes, sectors, and regions.
                </p>

                <p>
                  We leverage both quantitative and qualitative methodologies to
                  evaluate market dynamics, competitive landscapes, and growth
                  prospects, ensuring that we select investments that align with your
                  objectives and risk profile.
                </p>

                <p>
                  <span className="font-semibold text-white">Risk Management:</span>{' '}
                  Investing internationally comes with its own set of risks,
                  including currency risk, political risk, and regulatory risk. We
                  employ sophisticated risk management techniques to mitigate these
                  risks and protect your portfolio against downside volatility,
                  while also seeking to capitalize on upside opportunities.
                </p>

                <p>
                  <span className="font-semibold text-white">Active Management:</span>{' '}
                  We believe in the power of active management to add value and
                  outperform passive benchmarks in international markets.
                </p>

                <p>
                  Our experienced portfolio managers leverage their expertise,
                  insights, and global network to make informed investment decisions
                  and navigate evolving market conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:sticky lg:top-28">
            <img
              src={aboutVission}
              alt="International Investing"
              className="h-[1050px] w-full max-w-2xl rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalOptions;
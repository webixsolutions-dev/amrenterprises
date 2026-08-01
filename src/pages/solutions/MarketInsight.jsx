import React from 'react';
import img from '../../assets/images/market-insight.webp'
import Card from '../../components/ui/Card'

const insights = [
  {
    title: 'Current Market Trends',
    number: '01',
    description:
      'Overview of prevailing trends shaping the industry. Analysis of shifts in consumer behavior and preferences. Examination of market dynamics influencing business strategies.',
  },
  {
    title: 'Growth Opportunities',
    number: '02',
    description:
      'Identification of key growth areas and emerging markets. Exploration of untapped opportunities for expansion. How the company can capitalize on market growth trends.',
  },
  {
    title: 'Competitive Landscape',
    number: '03',
    description:
      "Assessment of competitors' strategies and market positioning. Analysis of competitors' strengths, weaknesses, opportunities, and threats. Insights into competitor offerings and potential areas of differentiation.",
  },
];

const otherInsights = [
  {
    title: 'Global Economic Trends',
    description:
      'Stay ahead of global economic trends with our comprehensive analysis of key indicators, including GDP growth, inflation rates, employment figures, and central bank policies. Our experts monitor macroeconomic data from around the world to identify emerging opportunities and potential risks.',
  },
  {
    title: 'Market Volatility Management',
    description:
      "Volatility is an inherent feature of financial markets, but it doesn't have to derail your investment strategy. Our team employs sophisticated risk management techniques to help you navigate market volatility with confidence. From asset allocation strategies to hedging techniques, we offer personalized solutions to protect and grow your wealth in any market environment.",
  },
  {
    title: 'Emerging Markets Opportunities',
    description:
      'Unlock the potential of emerging markets with our in-depth analysis of global investment opportunities. Whether you are interested in frontier economies or rapidly growing regions, our research provides valuable insights into market dynamics, regulatory environments, and investment trends, helping you identify high-potential opportunities for growth.',
  },
  {
    title: 'Environmental, Social, and Governance (ESG) Investing',
    description:
      'As sustainability and social responsibility become increasingly important considerations for investors, we offer expert guidance on ESG investing. Our comprehensive analysis evaluates companies based on environmental impact, social responsibility, and corporate governance practices, helping you align your investments with your values while maximizing long-term returns.',
  },
];

const MarketInsight = () => {
  return (
    <section className="bg-black px-5 py-10 sm:px-8 md:px-[6%] md:py-16">

      {/* Hero */}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 mt-12">

        {/* Left Image */}
        <div className="w-full">
          <img
            src={img}
            alt="Market Insights"
            className="h-[200px] w-full object-cover sm:h-[250px] md:h-[320px] lg:h-[400px]"
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Hello
          </span>

          <h1 className="mt-3 text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Market Insights at AE
          </h1>

          <div className="mt-6 h-px w-full bg-gray-500" />

          <p className="mt-6 max-w-4xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            Market insights are crucial at Amayra Enterprises because they
            provide valuable information and understanding of the market
            landscape, trends, and dynamics that directly impact our clients'
            businesses.
          </p>
        </div>

      </div>

      {/* About */}
      <div className="mt-14 sm:mt-16 md:mt-20">

        <h2 className="text-xl font-semibold uppercase text-white sm:text-xl md:text-xl lg:text-2xl">
          About Amayra Marketing Insights
        </h2>

        <div className="mt-5 h-px w-full bg-gray-500" />

        {/* 3 Cards */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">

          {insights.map((item, index) => (
            <Card
              key={item.number}
              variant="outline"
              className={`px-0 md:px-8 ${index !== insights.length - 1
                ? 'md:border-r md:border-gray-600'
                : ''
                }`}
            >
              <Card.Title as="h3" className="text-brand text-xl sm:text-2xl mb-0 leading-snug">
                {item.title}
              </Card.Title>

              <Card.Text className="mt-6 leading-7">
                {item.description}
              </Card.Text>
            </Card>
          ))}

        </div>
      </div>

      {/* Other Market Insights */}
      <div className="mt-14 sm:mt-16 md:mt-20">

        <h2 className="text-2xl font-semibold uppercase text-white sm:text-2xl md:text-3xl">
          Other Market Insights at AE That Can Help Clients
        </h2>

        <div className="mt-5 h-px w-full bg-gray-500" />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[35%_65%] lg:gap-12">

          {/* Left Image - Only One */}
          <div className="w-full">
            <img
              src={img}
              alt="Market Insights"
              className="sticky top-8 h-[280px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
            />
          </div>

          {/* Right Content - All Insights */}
          <div className="space-y-10 md:space-y-12">

            {otherInsights.map((item, index) => (
              <Card key={item.title} variant="outline">
                <Card.Number>0{index + 1}</Card.Number>

                <Card.Title as="h3" className="mt-2 text-xl sm:text-2xl md:text-3xl font-medium mb-0 leading-snug">
                  {item.title}
                </Card.Title>

                <Card.Text className="mt-5 md:text-lg md:leading-8">
                  {item.description}
                </Card.Text>
              </Card>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};

export default MarketInsight;

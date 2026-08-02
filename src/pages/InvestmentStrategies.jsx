import { Helmet } from 'react-helmet-async'
import InvestmentHero from "../components/sections/investment/Hero";
import KeyStrategy from "../components/sections/investment/KeyStrategy";
import TransFormSec from "../components/sections/investment/TransFormSec";
import WhyChoose from "../components/sections/investment/WhyChoose";

export default function InvestmentStrategies() {
  return (
    <>
      <Helmet>
        <title>Investment Strategies | Amayra Enterprises</title>
        <meta name="description" content="Explore our investment strategies and solutions for sustainable growth and financial success" />
        <meta name="keywords" content="investment strategies, financial growth, investment solutions, wealth management" />
      </Helmet>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <InvestmentHero />
        <TransFormSec />
        <KeyStrategy />
        <WhyChoose />
      </div>
    </>
  );
}
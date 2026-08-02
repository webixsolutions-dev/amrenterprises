import InvestmentHero from "../components/sections/investment/Hero";
import KeyStrategy from "../components/sections/investment/KeyStrategy";
import TransFormSec from "../components/sections/investment/TransFormSec";
import WhyChoose from "../components/sections/investment/WhyChoose";

export default function InvestmentStrategies() {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <InvestmentHero />
        <TransFormSec />
        <KeyStrategy />
        <WhyChoose />
      </div>
    </>
  );
}
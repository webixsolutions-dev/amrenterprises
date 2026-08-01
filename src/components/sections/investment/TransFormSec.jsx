import React from 'react'
import { Link } from 'react-router-dom'
import Investmentoverview from '../../../assets/images/investment-overview.webp'
import InvetmentSolution from '../../../assets/images/investment-solutions.webp'


const categories = [
  {

    title: 'Amayra Investment overview',
    image: Investmentoverview,
    description: 'Amayra Investments employs a diversified, fundamental approach to investment, emphasizing long-term value creation and risk management. Our active management strategy, coupled with rigorous fundamental analysis, allows us to identify undervalued assets and capitalize on market opportunities while mitigating risk. With a client-centric focus, we tailor investment solutions to meet individual financial goals and preferences, integrating sustainable investing principles for long-term success. '
  },
  {

    title: 'Tailored solutions to the clients',
    image: InvetmentSolution,
    description: " Amayra Investments specializes in providing tailored investment solutions designed to meet the unique financial goals and objectives of our clients. Through a personalized approach, we carefully consider individual risk tolerance, time horizon, and investment preferences to craft customized portfolios that align with each client's specific needs "
  }
]

const TransFormSec = () => {
  return (
    <section className="bg-black text-gray-400  px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold text-white text-start mx-8 pt-10 mb-4">
          Transform Your Business Strategy Today
        </h3>
        <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8 mx-8"></div>




        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <div
              key={i}
              className="overflow-hidden  group flex flex-col"
            >
              {/* Title on top */}
              <div className="py-4 text-start ">
                <h4 className="text-xl font-semibold text-white">
                  {category.title}
                </h4>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-56 object-cover "
                />
              </div>

              {/* Description */}
              <div className="py-6 flex-1">
                <p className="text-white-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default TransFormSec
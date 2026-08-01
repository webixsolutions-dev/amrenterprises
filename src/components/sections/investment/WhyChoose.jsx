import React from 'react'
import { Link } from 'react-router-dom'

const WhyChoose = () => {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className=" mx-auto">
                {/* Heading */}
                <div className="text-start mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        MAXIMIZE YOUR BUSINESS POTENTIAL
                    </h2>
                    <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8"></div>
                </div>

                {/* Sections - Flex Layout */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Why Choose */}
                    <div className="lg:w-4/6 px-8">
                        <h3 className="text-2xl md:text-2xl font-semibold text-white mb-8">
                            Why Choose Amayra Enterprises for Investment Strategies?
                        </h3>

                        <div >
                            <p className="text-gray-400 leading-relaxed text-sm">
                                <span className="font-bold">Expertise:</span> Our team of financial experts brings extensive experience and knowledge in investment management,
                                asset allocation, and risk management, enabling us to deliver tailored investment strategies that
                                meet our clients' unique needs and objectives.
                            </p>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                <span className="font-bold">Personalized Approach:</span> We take a personalized approach to investment strategy, taking the time to understand each client's
                                financial goals, risk tolerance, and investment preferences. We then tailor our recommendations to
                                align with their individual circumstances and aspirations.
                            </p>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                <span className="font-bold">Transparency:</span> Transparency is paramount in our client relationships. We provide clear and transparent communication
                                throughout the investment process, keeping clients informed of our strategies, performance, and any
                                changes or developments that may impact their portfolios.
                            </p>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                <span className="font-bold">Commitment to Success:</span> At Amayra Enterprises, we are committed to our clients' success. We strive to deliver investment
                                strategies that not only meet their financial goals but also provide peace of mind and confidence
                                in their financial future.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - CTA */}
                    <div className="lg:w-2/6 flex flex-col justify-center px-3">
                        <div className=" p-8 lg:p-10">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                                Ready to Optimize Your Investment Strategy?
                            </h3>


                            <p className="text-white text-base leading-relaxed mb-8">
                                Contact us today to learn more about our investment strategies and how Amayra Enterprises can help
                                you achieve your long-term financial goals and aspirations.
                            </p>
                            <Link
                                to="/contact-us"
                                className="inline-block bg-brand text-black font-semibold px-8 py-3  hover:bg-brand-dark transition-colors duration-300 text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
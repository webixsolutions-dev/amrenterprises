import React from "react";
import Portfolio from '../../../assets/images/portfolio.webp'
const PortfolioManagement = () => {
    return (
        <section className="bg-black text-white px-6 md:px-12 py-16 md:py-20">
            <div className="max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <div className="w-full">
                        <img
                            src={Portfolio}
                            alt="Customized Portfolio Management"
                            className="w-full h-[320px] md:h-[450px] object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="font-display text-3xl md:text-5xl lg:text-4xl font-bold leading-tight mb-10">
                            CUSTOMIZED
                            <br />
                            PORTFOLIO
                            <br />
                            MANAGEMENT
                        </h2>

                        <p className="text-white/60 text-xl md:text-2xl leading-relaxed">
                            Let us manage your portfolio with a tailored approach
                            that reflects your risk tolerance and investment
                            objectives. We provide continuous portfolio monitoring
                            and adjustments based on market conditions.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PortfolioManagement;
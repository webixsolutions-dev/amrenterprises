import React from "react";  
import ChartTrading from "../../ui/ChartTrading";
const MarketAnalysis = () => {
    return (
        <section className="bg-black text-white px-6 md:px-12 py-16 md:py-20">
            <div className="max-w-7xl mx-auto">

                <div className="mb-14">
                    <h2 className="font-display text-xl md:text-2xl font-bold tracking-wide">
                        MARKET ANALYSIS
                    </h2>

                    <div className="w-full h-px bg-white/30 mt-7"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <div className="w-full aspect-video overflow-hidden rounded-lg">
                        <iframe
                            title="Market Analysis Video"
                            src="https://player.vimeo.com/video/946725342?h=f600487716"
                            className="w-full h-full"
                            frameBorder="0"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div>
                        <p className="text-white/60 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                            Gain insights through our comprehensive market
                            analyses that keep you ahead of trends. Our experts
                            deliver regular updates and forecasts, ensuring
                            you're always informed.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarketAnalysis;
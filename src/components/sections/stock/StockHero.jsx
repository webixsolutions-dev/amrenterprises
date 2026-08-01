import React from "react";
import StockHeroImage from "../../../assets/images/stockHero.png";

const StockHero = () => {
    return (
        <>
            <section className="bg-brand-navy text-white">

                {/* Image at Top */}
                <div className="w-full">
                    <img
                        src={StockHeroImage}
                        alt="Stock market hero background"
                        className="w-full h-[100px] md:h-[250px] lg:h-[250px] object-cover"
                    />
                </div>

               

            </section>
        </>
    );
};

export default StockHero;
import HeroImg from '../../../assets/images/capital_Hero.webp';

function Hero() {
    return (
        <section className="bg-black px-5 py-10 sm:px-8 sm:py-12 md:px-[6%] md:py-16 lg:py-20">
            <h1 className="text-xl font-semibold uppercase leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Capital Allocation
            </h1>

            <div className="mt-3 mb-7 h-px w-full bg-gray-500 sm:mt-5 sm:mb-9 md:mt-6 md:mb-10" />

            <div className="w-full overflow-hidden">
                <img
                    src={HeroImg}
                    alt="Capital Allocation"
                    className="h-auto w-full object-cover"
                />
            </div>

            <p className="mt-6 max-w-5xl text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-8">
                Capital allocation refers to the strategic process of distributing
                financial resources among various investment opportunities or
                business activities. It involves determining how to deploy capital
                effectively to maximize returns while managing risk. By allocating
                capital wisely, businesses can optimize their investment portfolios,
                fund growth initiatives, and enhance shareholder value.
            </p>
        </section>
    );
}

export default Hero;
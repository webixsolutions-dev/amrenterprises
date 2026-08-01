import React from 'react';
import img1 from '../../../assets/images/capital-services.webp';
import img2 from '../../../assets/images/capitalservices-managment.webp';
import img3 from '../../../assets/images/capital-Financial-analysis.webp';
import img4 from '../../../assets/images/risk-managment-capital-allocations.webp';
import Card from '../../ui/Card';
const services = [
    {
        title: 'Strategic Investment Planning',
        img: img1,
        description:
            "This involves evaluating various factors such as market trends, industry dynamics, and risk-return profiles to prioritize investments that align with clients' financial goals and objectives. By strategically allocating capital to high-potential ventures or asset classes, AE aims to optimize returns and mitigate risks for clients. ",
    },
    {
        title: 'Diversified Portfolio Management',
        img: img2,
        description: " Another way AE executes capital allocation is through diversified portfolio management. By spreading investments across different asset classes, sectors, and geographic regions, AE helps clients build well-balanced portfolios that can withstand market volatility and economic uncertainties. This diversification strategy aims to minimize the impact of any single investment's underperformance while maximizing overall portfolio returns ",
    },
    {
        title: 'Financial Analysis',
        img: img3,
        description:
            " Leveraging our expertise, we conduct thorough financial analyses tailored to each business's unique circumstances. These analyses provide invaluable insights into the current financial standing, highlight potential investment opportunities, and assist in delineating the optimal capital allocation across diverse projects and endeavors. ",
    },
    {
        title: 'Risk Assessment',
        img: img4,
        description:
            ' Our comprehensive risk assessments meticulously scrutinize the potential risks and uncertainties entwined with various investment avenues. By identifying and mitigating these risks, we furnish businesses with the confidence to make prudent and well-informed investment choices. ',
    },
];

const OurServices = () => {
    return (
        <section className="bg-black px-5 py-10 sm:px-8 md:px-[6%] md:py-16">

            <h1 className="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Our Services
            </h1>

            <div className="mt-5 mb-8 h-px w-full bg-gray-500 sm:mt-6 sm:mb-10 md:mt-8 md:mb-12" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {services.map((service, index) => (
                    <Card key={index}>
                        <Card.Title as="h2" className="text-xl sm:text-2xl mb-0">
                            {service.title}
                        </Card.Title>

                        <Card.Image
                            src={service.img}
                            alt={service.title}
                            wrapperClassName="flex justify-start py-2 sm:py-4"
                            className="h-52 w-full max-w-md object-contain sm:h-60 md:h-64"
                        />

                        <Card.Text className="md:text-base">
                            {service.description}
                        </Card.Text>
                    </Card>
                ))}

            </div>

        </section>
    );
};

export default OurServices;

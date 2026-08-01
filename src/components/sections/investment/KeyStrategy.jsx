import React from 'react'
import Key1 from '../../../assets/images/key1.webp'
import Key2 from '../../../assets/images/key2.webp'
import Key3 from '../../../assets/images/key3.webp'
import Key4 from '../../../assets/images/key4.webp'
import Key5 from '../../../assets/images/key5.webp'
import Key6 from '../../../assets/images/key6.webp'
import Card from '../../ui/Card'

const strategies = [
    {
        id: 1,
        title: 'Diversification',
        description: 'One of the fundamental principles of investing is diversification. By spreading investments across different asset classes, industries, and geographic regions, clients can reduce risk and potentially enhance returns. Our experts work closely with clients to develop diversified investment portfolios that balance risk and reward based on their risk tolerance and investment objectives.',
        image: Key1
    },
    {
        id: 2,
        title: 'Asset Allocation',
        description: "Asset allocation is another critical aspect of investment strategy. Our team analyzes clients' financial goals, time horizon, and risk tolerance to determine the optimal mix of assets, such as stocks, bonds, real estate, and alternative investments. By strategically allocating assets, we aim to maximize returns while minimizing volatility and downside risk. ",
        image: Key2
    },
    {
        id: 3,
        title: 'Active Management',
        description: "In addition to passive investment strategies, we also offer active management services for clients seeking more hands-on and dynamic portfolio management. Our experienced portfolio managers actively monitor market trends, economic indicators, and investment opportunities to make timely adjustments to clients' portfolios and capitalize on emerging trends and opportunities. ",
        image: Key3
    },
    {
        id: 4,
        title: 'Risk Management',
        description: "Managing risk is paramount in investment strategy. We employ sophisticated risk management techniques to identify, assess, and mitigate risks associated with clients' investment portfolios. Whether it's market risk, credit risk, or geopolitical risk, our team employs a proactive approach to risk management to protect clients' capital and preserve wealth. ",
        image: Key4
    },
    {
        id: 5,
        title: 'Tax Efficiency',
        description: "Tax efficiency is an integral part of investment strategy. Our experts help clients optimize their investment portfolios for tax efficiency by utilizing tax-advantaged accounts, implementing tax-loss harvesting strategies, and structuring investments in a tax-efficient manner. By minimizing tax liabilities, we aim to enhance after-tax returns and maximize the value of clients' investment portfolios. ",
        image: Key5
    },
    {
        id: 6,
        title: 'Long-Term Focus',
        description: "At Amayra Enterprises, we emphasize the importance of taking a long-term view when it comes to investment strategy. We encourage clients to focus on their long-term financial goals and objectives rather than short-term market fluctuations. By staying disciplined and adhering to a long-term investment strategy, clients can weather market volatility and achieve their financial aspirations over time. ",
        image: Key6
    }
]

const KeyStrategy = () => {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl ">
                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-bold text-white text-start mb-4">
                    Key investment strategies with Amayra Enterprises
                </h3>
                <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8"></div>

                <div className="grid md:grid-cols-3 gap-8 px-6">
                    {strategies.map((strategy) => (
                        <Card
                            key={strategy.id}
                            className="overflow-hidden group flex flex-col"
                        >
                            <Card.Title as="h4" className="text-xl mb-3">
                                {strategy.title}
                            </Card.Title>

                            <Card.Image
                                src={strategy.image}
                                alt={strategy.title}
                                wrapperClassName="overflow-hidden"
                                className="w-full h-56 object-cover"
                            />

                            <Card.Body className="py-6 flex-1">
                                <Card.Text>{strategy.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KeyStrategy

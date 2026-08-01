import Card from '../../ui/Card'

const services = [
  {
    title: 'Wealth Management',
    text: 'From investment planning and portfolio management to retirement planning and estate planning, our wealth management services are designed to help you grow and protect your wealth over the long term.',
  },
  {
    title: 'Financial Planning',
    text: "Whether you're saving for a home, funding your child's education, or planning for retirement, our comprehensive financial planning services provide the roadmap you need to achieve your goals with confidence.",
  },
  {
    title: 'Investment Advisory',
    text: 'Gain access to our expert investment advice and guidance, backed by thorough research, analysis, and market insights.',
  },
  {
    title: 'Business Consulting',
    text: "If you're a business owner, our business consulting services can help you optimize your operations, manage risk, and drive growth.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-black px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-start mb-12 text-white">Our Services</h2>
      <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-2 mb-8"></div>

      <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 gap-0">
        {services.map((item, index) => (
          <Card
            key={item.title}
            variant="outline"
            className={`p-6 sm:p-8 flex flex-col justify-center items-start ${index % 2 === 0 && index < services.length - 1 ? 'sm:border-r border-gray-700' : ''
              } ${index < services.length - 2 ? 'border-b border-gray-700' : ''
              } ${index >= services.length - 2 ? 'sm:border-b-0' : ''
              }`}
          >
            <Card.Title as="h3" className="text-lg sm:text-xl mb-3">
              {item.title}
            </Card.Title>
            <Card.Text className="leading-relaxed w-full sm:w-3/4 lg:w-1/2">
              {item.text}
            </Card.Text>
          </Card>
        ))}
      </div>
    </section>
  )
}

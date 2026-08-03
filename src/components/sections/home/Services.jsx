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
    <section className="py-12 md:py-16 lg:py-20 bg-black px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-start mb-4 text-white">Our Services</h2>
      <div className="w-full max-w-5xl h-[1px] bg-gray-700 mb-8"></div>
      <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 gap-4 sm:gap-0">
        {services.map((item) => (
          <Card
            key={item.title}
            variant="outline"
            className="p-5 text-brand sm:p-8 flex flex-col justify-center items-start w-full"
          >
            <Card.Title as="h3" className="text-base sm:text-lg md:text-xl normal-case text-brand mb-3">
              {item.title}
            </Card.Title>
            <Card.Text className="leading-relaxed w-full">
              {item.text}
            </Card.Text>
          </Card>
        ))}
      </div>
    </section>
  )
}
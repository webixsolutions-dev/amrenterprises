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
    <section className="py-20 bg-black  max-w-7xl mx-12">
      <h2 className="text-3xl font-bold text-start mb-4 text-white  mx-12">Our Services</h2>
      <div className="w-full max-w-5xl h-[1px] bg-gray-700 mb-8  mx-12 "></div>
      <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 gap-0 ">
        {services.map((item) => (
          <Card
            key={item.title}
            variant="outline"
            className="p-6 text-brand sm:p-8 flex flex-col justify-center items-start w-full"
          >
            <Card.Title as="h3" className="text-lg  normal-case text-brand sm:text-xl mb-3">
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
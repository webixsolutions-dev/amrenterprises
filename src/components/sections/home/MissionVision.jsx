import MissionIimg from '../../../assets/images/ourMission-1.webp'
import OurVission from "../../../assets/images/ourVission.webp"
import Card from '../../ui/Card'

const items = [
  {
    title: 'Our Mission',
    text: 'At Amayra Enterprises, our mission is to empower businesses to achieve sustainable growth and success by providing innovative solutions tailored to their unique needs. Through strategic guidance, industry expertise, and collaborative partnerships, we strive to unlock new opportunities, drive operational excellence, and create long-term value for our clients.',
    img: MissionIimg
  },
  {
    title: 'Our Vision',
    text: 'Our vision at Amayra Enterprises is to be the leading partner of choice for businesses seeking to thrive in a dynamic and competitive marketplace. We envision a future where every business, regardless of size or industry, has the tools, resources, and support needed to realize its full potential and make a positive impact on the world.',
    img: OurVission
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-12">
          <span className="font-cabin font-bold text-[22px] uppercase tracking-wide text-gray-300 break-words">
            Who We Are at Amayra Enterprises
          </span>
          <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item) => (
            <Card key={item.title} className="p-4 sm:p-6 lg:p-8">
              <Card.Image
                src={item.img}
                alt={item.title}
                wrapperClassName="mb-6"
                className="w-full h-64 sm:h-80 lg:h-100 object-cover rounded-lg"
              />
              <Card.Title as="h3" className="text-lg sm:text-xl mb-4 text-white">
                {item.title}
              </Card.Title>
              <Card.Text className="leading-relaxed text-sm sm:text-base text-gray-300">
                {item.text}
              </Card.Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
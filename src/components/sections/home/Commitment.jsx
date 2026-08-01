import React from 'react'
import img1 from '../../../assets/images/expertise.webp'
import img2 from '../../../assets/images/transparency.webp'
import img3 from '../../../assets/images/customization.webp'
import img4 from '../../../assets/images/partnership.webp'
import Card from '../../ui/Card'

const commitments = [
  {
    title: 'Expertise',
    image: img1,
    text: ' Benefit from the expertise of our seasoned professionals who bring years of experience and deep industry knowledge to every client relationship. ',
  },
  {
    title: 'Transparency',
    image: img2,
    text: "  We believe in transparent communication and clear, straightforward advice. With us, you'll always know where you stand and have a clear understanding of your financial options. ",
  },
  {
    title: 'Customization',
    image: img3,
    text: ' Your financial goals are unique, and so are our solutions. We tailor our services to your specific needs, preferences, and long-term objectives, ensuring that every plan is as individual as you are. ',
  },
  {
    title: 'Partnership',
    image: img4,
    text: " When you choose Amayra, you're not just a client – you're a valued partner. We're committed to building lasting relationships based on trust, integrity, and mutual respect.",
  },
]

export default function Commitment() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-start mb-10">Our Commitment to You</h2>
        <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {commitments.map((item) => (
            <Card key={item.title} className="p-6 shadow-sm">
              <Card.Title as="h3" className="text-lg mb-3">
                {item.title}
              </Card.Title>
              <Card.Image
                src={item.image}
                alt={item.title}
                wrapperClassName="mb-4"
                className="w-full h-100 object-cover"
              />
              <Card.Text className="text-gray-500">{item.text}</Card.Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react";
import Card from "../../ui/Card";
import CardGrid from "../../ui/CardGrid";

const features = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=800&fit=crop&crop=center",
    title: "Accommodation Search",
    description:
      "Search accommodation options through a convenient online booking platform.",
  },
  {
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=800&fit=crop&crop=center",
    title: "Accommodation Comparison",
    description:
      "Compare accommodation options to help find a suitable choice.",
  },
  {
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=800&fit=crop&crop=center",
    title: "Accommodation Booking",
    description:
      "Book accommodation through a simple and reliable digital platform.",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=800&fit=crop&crop=center",
    title: "Travel-related Services",
    description:
      "Support for travel-related services within the BookToday platform.",
  },
];

const WhyChooseBookToday = () => {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-blue-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
            Why Choose BookToday
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Designed for a Better Booking Experience
          </h2>

          <div className="w-24 h-[2px] bg-blue-500 mt-6 mb-8"></div>

          <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
            BookToday provides a convenient online platform where customers can
            search, compare and book accommodations while supporting
            travel-related services.
          </p>
        </div>

        {/* Cards - 1 column mobile, 2 columns tablet, 2 columns large screens */}
        <CardGrid preset="1-2-2">
          {features.map((item, index) => (
            <Card key={index} variant="bordered" className="p-6 sm:p-8">
              <Card.Image
                src={item.image}
                alt={item.title}
                wrapperClassName="w-full h-48 sm:h-56 md:h-64 overflow-hidden mb-6"
              />
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card>
          ))}
        </CardGrid>
      </div>
    </section>
  );
};

export default WhyChooseBookToday;

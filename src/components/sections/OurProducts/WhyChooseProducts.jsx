import React from "react";

const WhyChooseBookToday = () => {
  const sections = [
    {
      title: "Key Services Offered",
      items: [
        "Accommodation search",
        "Accommodation comparison",
        "Accommodation booking",
        "Hotel booking",
        "Travel-related booking services",
      ],
      showBullets: true,
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=300&fit=crop",
    },
    {
      title: "Benefits of Using the Platform",
      items: [
        "Convenient online access",
        "Ability to search and compare available options",
        "A streamlined accommodation and travel-booking experience",
        "A platform developed, managed, and maintained by AMR Enterprises.",
      ],
      showBullets: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=300&fit=crop",
    },
    {
      title: "Future Expansion Plans",
      items: [
        "BookToday is structured to support additional travel-related services as they are approved by AMR Enterprises.",
        "Specific future services and timelines will be added only after formal confirmation.",
      ],
      showBullets: false,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop",
    },
  ];

  return (
    <section className="px-2 sm:px-4 lg:px-8 mx-4 sm:mx-6 lg:mx-12 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {sections.map((section, index) => (
            <div key={index} className="overflow-hidden">
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-lg sm:text-xl md:text-xl font-bold text-brand mb-3 sm:mb-4">
                  {section.title}
                </p>

                <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden my-2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    style={{ border: 'none', borderRadius: '0' }}
                  />
                </div>

                <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base lg:text-lg">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      {section.showBullets && (
                        <span className="min-w-1.5 sm:min-w-2 h-1.5 sm:h-2 bg-white rounded-full mt-2 inline-block"></span>
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/20 my-6 sm:my-8"></div>

      <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl">
        AMR Enterprises is the parent company. BookToday is one of its official products and trade names.
      </p>

      <div className="w-full h-[1px] bg-white/20 my-6 sm:my-8"></div>
    </section>
  );
};

export default WhyChooseBookToday;
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
    },
    {
      title: "Target Customers",
      items: [
        "Individuals, families, business travellers, and other customers seeking accommodation and travel-booking services.",
      ],
      showBullets: false,
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
    },
    {
      title: "Future Expansion Plans",
      items: [
        "BookToday is structured to support additional travel-related services as they are approved by AMR Enterprises.",
        "Specific future services and timelines will be added only after formal confirmation.",
      ],
      showBullets: false,
    },
  ];

  // Pair them: [0,1] and [2,3]
  const pairs = [
    [sections[0], sections[1]],
    [sections[2], sections[3]],
  ];

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-12 mx-12">
      <div className="container mx-auto">
        {pairs.map((pair, pairIndex) => (
          <div key={pairIndex} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
              {pair.map((section, index) => {
                const globalIndex = pairIndex * 2 + index;
                return (
                  <div
                    key={globalIndex}
                    className={`max-w-full p-8 md:p-10 lg:p-12 relative ${index === 0 ? "md:border-r border-white/20" : ""
                      } ${pairIndex === 0 ? "border-b border-white/20 md:border-b-0" : ""}`}
                  >
                    <p className="text-xl sm:text-xl md:text-2xl font-bold text-brand mb-6">
                      {section.title}
                    </p>

                    <ul className="space-y-3 text-gray-300 text-base sm:text-lg">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {section.showBullets && (
                            <span className="min-w-2 h-2 bg-white rounded-full mt-2.5 inline-block"></span>
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            {/* White divider between pairs */}
            {pairIndex < pairs.length - 1 && (
              <div className="w-full h-[1px] bg-white/20 my-0"></div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-white/20 my-8"></div>
      <p className="text-gray-400 text-base md:text-lg max-w-xl">
        AMR Enterprises is the parent company. BookToday is one of its official products and trade names.
      </p>
      <div className="w-full h-[1px] bg-white/20 my-8"></div>

    </section>
  );
};

export default WhyChooseBookToday;
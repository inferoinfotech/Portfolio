export default function OneOnOneCallSection() {
  const callItems = [
    {
      number: "01",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "salmagundi maroon coast spanker aye gangway hail-shot chain.",
      ],
      image: "../images/MY EXPERIENCE About-3.png",
    },
    {
      number: "02",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "salmagundi maroon coast spanker aye gangway hail-shot chain.",
      ],
      image: "../images/work-call-2.png",
    },
    {
      number: "03",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "salmagundi maroon coast spanker aye gangway hail-shot chain.",
      ],
      image: "../images/work-call-1.jpg",
    },
  ]

  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight sm:leading-tight md:leading-[100%] tracking-tight md:tracking-[-2%]">
            What you get on 1-on-1 call?
          </h2>
        </div>

        {/* Call Items */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 xl:space-y-44">
          {callItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:items-center`}
            >
              {/* Content Section */}
              <div className="w-full lg:w-1/2 order-2 lg:order-none">
                {/* Number and Label */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/50 block mb-2">
                    {item.number}
                  </span>
                  <p className="text-white/50 text-base sm:text-lg md:text-xl lg:text-[24px] font-normal tracking-wide">
                    {item.label}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  {item.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-medium flex items-start leading-relaxed"
                    >
                      <span className="text-white mr-3 mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="bg-[#FDC0C5] text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full font-medium text-base sm:text-lg md:text-xl lg:text-[22px] tracking-tight hover:bg-[#f8a8b0] transition-colors duration-300 w-full sm:w-auto">
                  Book a free call
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 order-1 lg:order-none">
                <div className="rounded-2xl overflow-hidden w-full max-w-[606px] mx-auto aspect-square">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Call item ${item.number}`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

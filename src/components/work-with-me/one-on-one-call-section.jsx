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
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] 2xl:text-[64px] leading-tight sm:leading-tight md:leading-[110%] lg:leading-[100%] tracking-tight md:tracking-[-1%] lg:tracking-[-2%]">
            What you get on 1-on-1 call?
          </h2>
        </div>

        {/* Call Items */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          {callItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } lg:items-center`}
            >
              {/* Content Section */}
              <div className="w-full lg:w-1/2 order-2 lg:order-none">
                {/* Number and Label */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/50 block mb-1 sm:mb-2">
                    {item.number}
                  </span>
                  <p className="text-white/50 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal tracking-wide uppercase">
                    {item.label}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-[110%] lg:leading-[100%]">
                  {item.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-7 md:mb-8">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-medium flex items-start leading-relaxed"
                    >
                      <span className="text-white mr-2 sm:mr-3 mt-1 flex-shrink-0 text-lg">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="bg-[#FDC0C5] cursor-pointer text-black px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-full font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] tracking-tight hover:bg-[#f8a8b0] transition-colors duration-300 w-full sm:w-auto">
                  Book a free call
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 order-1 lg:order-none hidden md:block">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-none mx-auto">
                  <div className="aspect-square w-full">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`Call item ${item.number}`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

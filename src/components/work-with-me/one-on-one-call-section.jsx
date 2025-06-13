import { Dot } from "lucide-react"

export default function OneOnOneCallSection() {
  const callItems = [
    {
      number: "01",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "Salmagundi maroon coast spanker aye gangway hail-shot chain.",
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
    <section className="w-full bg-black py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-2 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-white font-bold text-4xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight sm:leading-tight md:leading-[110%] lg:leading-[100%] tracking-tight md:tracking-[-1%] lg:tracking-[-2%] text-center ">
            What you get on 1-on-1 call?
          </h2>
        </div>

        {/* Call Items */}
        <div className="space-y-10 md:space-y-20 lg:space-y-24 xl:space-y-32">
          {callItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col text-center lg:text-left gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 
        ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
            >
              {/* Content Section */}
              <div className="w-full lg:w-1/2 order-2 lg:order-none lg:p-0">
                {/* Number and Label */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <span className="text-[64px]  font-bold text-white/50 block mb-1 md:mb-4 text-center lg:text-left">
                    {item.number}
                  </span>
                  <p className="text-white/50 text-[24px] md:text-3xl leading-[100%] tracking-[-0.02em] text-center lg:text-left">
                    {item.label}
                  </p>
                </div>

                {/* Title */}

                <div className="p-4 md:p-0">
                  <h3 className="text-white text-[24px] md:text-3xl xl:text-5xl font-bold mb-6 md:mb-6 leading-9 md:leading-16 tracking-[-0.02em] text-center lg:text-left">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3 mb-6 sm:mb-7 md:mb-8 list-disc list-outside text-white text-justify lg:pl-5">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-[20px] md:text-3xl lg:text-xl xl:text-[22px] font-medium leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA Button */}
                <button className="bg-white text-black hidden sm:block sm:bg-[#FDC0C5] sm:hover:bg-[#f8a8b0] sm:text-black cursor-pointer px-7 py-4  md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-[20px] md:rounded-[50px] font-medium text-[20px] md:text-lg lg:text-xl xl:text-[22px] tracking-tight transition-colors duration-300 mt-2 lg:mt-10">
                  Book a free call
                </button>
                <button className="bg-white w-full sm:hidden text-black sm:bg-[#FDC0C5] sm:hover:bg-[#f8a8b0] sm:text-black cursor-pointer px-7 py-4  md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-[20px] md:rounded-[50px] font-medium text-[20px] md:text-lg lg:text-xl xl:text-[22px] tracking-tight transition-colors duration-300 mt-2 lg:mt-10">
                  Book a free call
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2  justify-center hidden md:flex">
                <div
                  className={`w-[606px] h-[606px] rounded-[30px] overflow-hidden ${item.number === "02" ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                >
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

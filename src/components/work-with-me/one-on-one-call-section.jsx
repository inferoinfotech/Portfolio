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
      image: "../images/MY EXPERIENCE About-3.png ",
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
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white font-bold text-[64px] leading-[100%] tracking-[-2%]">What you get on 1-on-1 call?</h2>
        </div>

        <div className="space-y-28">
          {callItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-white/50 mb-4">{item.number}</span>
                  <p className="text-white/50 text-[24px] font-normal tracking-wider">{item.label}</p>
                </div>
                <h3 className="text-white text-5xl font-bold mb-6">{item.title}</h3>
                <ul className="space-y-2 mb-8">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-white text-[24px] font-medium flex items-start">
                      <span className="text-[#Fff] mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#FDC0C5] text-black px-12 py-5 rounded-full font-medium text-[22px] tracking-[-3%] text-center">
                  Book a free call
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden w-[606px] h-[606px]">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Call item ${item.number}`}
                    className="w-full h-full object-cover object-center"
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

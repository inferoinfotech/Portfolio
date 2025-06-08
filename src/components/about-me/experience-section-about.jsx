const experiences = [
  {
    title: "How it all started",
    image: "../images/MY EXPERIENCE About-1.jpg",
    alt: "Working on laptop",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast. On cup gold tales execution ketch her. Hogshead hail-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot piracy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
    ],
  },
  {
    title: "Secret to success",
    image: "../images/MY EXPERIENCE About-2.jpg",
    alt: "Reading a book",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch her. Hogshead haul-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
    ],
  },
  {
    title: "My journey as a freelancer",
    image: "../images/MY EXPERIENCE About-3.png",
    alt: "Working at desk",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch her. Hogshead haul-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
    ],
  },
]

export default function ExperienceSectionAbout() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-sm md:text-base lg:text-[20px] leading-[118px] font-medium tracking-[0.4em] text-center uppercase">
              MY EXPERIENCE
            </p>
          </div>
        </div>

        {/* Dynamic Experience Items */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {experiences.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight lg:leading-[70px] font-medium mb-6 md:mb-8 lg:mb-[62px]">
                  {item.title}
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {item.paragraphs.map((para, idx) => (
                    <p
                      className="font-normal text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed tracking-[-0.01em] text-black text-opacity-70 text-justify"
                      key={idx}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2 hidden md:flex">
                <div className="rounded-2xl md:rounded-[32px] overflow-hidden w-full max-w-[400px] md:max-w-[480px] h-[300px] md:h-[400px] lg:h-[480px]">
                  <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

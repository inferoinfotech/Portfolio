const experiences = [
  {
    title: "How it all started",
    image: "../images/MY EXPERIENCE About-1.jpg",
    alt: "Working on laptop",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast. On cup gold tales execution ketch her. Hogshead hail-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot piracy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen."
    ]
  },
  {
    title: "Secret to success",
    image: "../images/MY EXPERIENCE About-2.jpg",
    alt: "Reading a book",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch her. Hogshead haul-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen."
    ]
  },
  {
    title: "My journey as a freelancer",
    image: "../images/MY EXPERIENCE About-3.png",
    alt: "Working at desk",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch her. Hogshead haul-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen."
    ]
  }
];

export default function ExperienceSectionAbout() {
  return (
    <section className="w-full bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <p className="text-black text-sm font-medium tracking-widest">MY EXPERIENCE</p>
          </div>
        </div>

        {/* Dynamic Experience Items */}
        <div className="space-y-24">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
            >
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl lg:text-[64px] leading-[90px] font-medium mb-6">{item.title}</h2>
                <div className="space-y-4">
                  {item.paragraphs.map((para, idx) => (
                    <p className="font-normal text-2xl leading-11 tracking-[-0.03em] text-[#000000]" key={idx}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

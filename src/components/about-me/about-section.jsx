"use client";

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white relative h-auto">
      <div className="container mx-auto flex flex-col relative z-20 lg:flex-row items-center gap-32">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="font-medium text-[24px] leading-[100%] tracking-[0]">Who is</p>
            </div>
            <h1 className="font-bold text-[128px] leading-[100%] tracking-[0]">
              <span className="text-[#FDC0C5]">Saleh</span> Bilal?
            </h1>
          </div>
          <p className="font-normal text-[32px] leading-[45px] tracking-[0] text-white">
            Pirate ipsum arrgh bounty warp jack. Sails ensign cup ballast spyglass execution lateen nipperkin american.
            Man spot line prey schooner no shiver brace weigh. Fer fleet yard chandler roger coxswain swab rig boatswain yarr.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className=" rounded-tl-3xl rounded-bl-3xl overflow-hidden w-full h-full">
            <div className="relative w-full h-[900px] z-10">
              <img
                src="../images/About-banner-img.png"
                alt="Saleh Bilal"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[#FDC0C5] h-[695px] w-[890px] absolute right-0 top-1/8 rounded-tl-4xl rounded-bl-4xl z-10"></div>
      </div>
    </section>
  );
}




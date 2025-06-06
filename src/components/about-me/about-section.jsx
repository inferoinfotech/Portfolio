"use client"

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white relative h-fit">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-32 px-4 md:px-6 relative z-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-6 md:mb-8 lg:mb-12">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="font-medium text-base md:text-lg lg:text-[24px] leading-[100%] tracking-[0]">Who is</p>
            </div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[128px] leading-[100%] tracking-[0]">
              <span className="text-[#FDC0C5]">Saleh</span> Bilal?
            </h1>
          </div>
          <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed md:leading-[45px] tracking-[0] text-white">
            Pirate ipsum arrgh bounty warp jack. Sails ensign cup ballast spyglass execution lateen nipperkin american.
            Man spot line prey schooner no shiver brace weigh. Fer fleet yard chandler roger coxswain swab rig boatswain
            yarr.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
          <div className="rounded-2xl md:rounded-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl overflow-hidden w-full h-full">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[900px] z-10">
              <img src="../images/About-banner-img.png" alt="Saleh Bilal" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Pink Background Element */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <div className="bg-[#FDC0C5] h-[300px] w-[200px] sm:h-[400px] sm:w-[300px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[700px] xl:h-[695px] xl:w-[890px] rounded-tl-4xl rounded-bl-4xl"></div>
      </div>
    </section>
  )
}

"use client"

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white relative h-fit py-0 md:py-[75px] lg:py-0 xl:py-0">
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Content */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="font-medium text-base md:text-lg leading-[100%] tracking-[0]">Who is</p> 
            </div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[100%] tracking-[0] mb-6 md:mb-8">
              <span className="text-[#FDC0C5]">Saleh</span> Bilal?
            </h1>
            <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed tracking-[0] text-white max-w-md mx-auto">
              Pirate ipsum arrgh bounty warp jack. Sails ensign cup ballast spyglass execution lateen nipperkin
              american. Man spot line prey schooner no shiver brace weigh. Fer fleet yard chandler roger coxswain swab
              rig boatswain yarr.
            </p>
          </div>

          {/* Image with Pink Background */}
          <div className="relative w-full max-w-sm mx-auto">
            {/* Pink Background */}
            <div className="bg-[#FDC0C5] rounded-t-3xl md:rounded-[40px] md:p-6 h-[350px] sm:h-[500px] md:h-[550px] -z-10">
              <div className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden -mb-8 md:-mb-12">
                <img
                  src="../images/About-banner-img.png"
                  alt="Saleh Bilal"
                  className="w-full h-full object-cover  absolute -bottom- z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-32">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-4 xl:pr-8">
            <div className="mb-6 lg:mb-8 xl:mb-12">
              <div className="flex items-center space-x-2 mb-3 lg:mb-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <p className="font-medium text-lg lg:text-xl xl:text-[24px] leading-[100%] tracking-[0]">Who is</p>
              </div>
              <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-[120px] tracking-[0]">
                <span className="text-[#FDC0C5]">Saleh </span>Bilal?
              </h1>
            </div>
            <p className="font-normal text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] lg:pr-16 leading-relaxed lg:leading-[1.4] xl:leading-[45px] tracking-[0] text-white/80">
              Pirate ipsum arrgh bounty warp jack. Sails ensign cup ballast spyglass execution lateen nipperkin
              american. Man spot line prey schooner no shiver brace weigh. Fer fleet yard chandler roger coxswain swab
              rig boatswain yarr.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-tl-3xl rounded-bl-3xl overflow-hidden w-full h-full">
              <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px] z-10">
                <img src="../images/About-banner-img.png" alt="Saleh Bilal" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pink Background Element - Desktop Only */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <div className="bg-[#FDC0C5] h-[450px] w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[700px] 2xl:h-[695px] 2xl:w-[890px] rounded-tl-4xl rounded-bl-4xl"></div>
      </div>
    </section>
  )
}

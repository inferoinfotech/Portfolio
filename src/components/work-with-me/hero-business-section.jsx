export default function HeroBusinessSection() {
  return (
    <section className="relative w-full min-h-screen bg-black py-6 md:py-12">
      <div className="container mx-auto relative px-4 md:px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat overflow-hidden rounded-[20px] md:rounded-[30px]"
          style={{
            backgroundImage: "url('/images/MY EXPERIENCE About-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-[20px] md:rounded-[30px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-4">
          <div className="max-w-full md:max-w-4xl">
            <h1 className="text-white font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-[110%] md:leading-[100%] mb-4 md:mb-[30px]">
              Turning your business into
              <br />
              <span className="text-[#FDC0C5]">money-making</span> machine
            </h1>

            <p className="text-white/80 font-normal text-[16px] md:text-[20px] lg:text-[24px] leading-[140%] md:leading-[45px] tracking-[-1%] md:tracking-[-3%] text-left md:text-justify mb-6 md:mb-[28px] lg:max-w-3xl">
              Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast.
              On cup gold tales execution ketch her. Hogshead hail-shot hang jennys starboard.  Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper.  Brethren chandler a pink chain cutlass.
            </p>

            <div className="flex flex-row gap-3 md:gap-4">
              <button className="bg-white cursor-pointer text-black px-6 md:px-12 py-3 md:py-6 rounded-full font-medium text-[16px] md:text-[18px] lg:text-[22px] tracking-[-1%] md:tracking-[-3%] hover:cursor-pointer text-center hover:bg-gray-100 transition-colors w-full md:w-auto">
                Let's work together
              </button>
              <button className="border-2 cursor-pointer border-white text-white px-6 md:px-12 py-3 md:py-6 rounded-full font-medium text-[16px] md:text-[22px] hover:bg-white hover:text-black hover:cursor-pointer transition-colors w-full md:w-auto">
                Schedule a free call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

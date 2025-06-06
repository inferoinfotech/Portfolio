export default function VisionSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="mx-auto px-4 md:px-6">
        {/* Vision pill */}
        <div className="flex justify-center mb-6 md:mb-9">
          <div className="bg-[#FDC0C5] rounded-[30px] px-4 md:px-6 py-2">
            <span className="text-[#242424] text-lg md:text-xl lg:text-[24px] leading-[25px] font-medium tracking-[-0.03em] capitalize">
              My Vision
            </span>
          </div>
        </div>

        {/* Vision text */}
        <div className="container mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="max-w-6xl text-center mx-auto">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[70px] font-medium tracking-[-0.03em] text-center">
              Pirate ipsum arrgh bounty warp jack. Or lass landlubbr spanker dead league coast. Pirate ipsum arrgh
              bounty warp jack. Or lass landlubbr spanker dead league coast.
            </p>
          </div>
        </div>

        {/* Image with button */}
        <div className="relative rounded-2xl md:rounded-3xl lg:rounded-tl-3xl lg:rounded-tr-3xl overflow-hidden">
          <img
            src="../images/MyVision-About.png"
            alt="Saleh reading"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Portfolio button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-gradient-to-r from-[#FDC0C5] via-white/40 to-white/40 backdrop-blur-2xl text-white font-medium text-lg md:text-xl lg:text-2xl tracking-[-0.03em] capitalize px-6 md:px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              Visit my portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FinalCTASection() {
  return (
    <section className="w-full bg-black py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main CTA */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 h-[300px] md:h-[400px] lg:h-[598px]">
          <div className="relative w-full h-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/work-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center z-10 px-4">
                <h2 className="text-white text-2xl cursor-pointer md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
                  Let's build something together
                </h2>
                <button className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-9 py-3 rounded-full font-normal text-sm md:text-base hover:opacity-90 transition-opacity">
                  Let's have a Free call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTAs - Stack on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
          {/* First Card */}
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-cover bg-center h-[250px] md:h-[300px] lg:h-[378px]"
            style={{ backgroundImage: "url('../images/work-img-1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
              <div>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Change the system</h3>
                <p className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal">
                  Giving best services across the globe
                </p>
                <button className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-9 py-3 rounded-full font-normal text-sm md:text-base hover:opacity-90 transition-opacity">
                  Meet Saleh Bilal
                </button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[250px] md:h-[300px] lg:h-[378px] bg-cover bg-center"
            style={{ backgroundImage: "url('../images/work-img-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
              <div>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Time to level up</h3>
                <p className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal">
                  Giving best services across the globe
                </p>
                <button className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-9 py-3 rounded-full font-normal text-sm md:text-base hover:opacity-90 transition-opacity">
                  Visit portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

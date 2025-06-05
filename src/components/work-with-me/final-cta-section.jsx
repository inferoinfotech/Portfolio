export default function FinalCTASection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto">
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden mb-8 h-[598px]">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/videos/work-video.mp4" type="video/mp4" />
                </video>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center z-10">
              <h2 className="text-white text-6xl md:text-5xl font-boldd mb-8">
                Let's build something together
              </h2>
              <button className="backdrop-blur-[40px] bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-9 py-3 rounded-full font-normal">
                Let's have a Free call
              </button>
            </div>
          </div>
        </div>


        {/* Bottom CTAs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Card */}
          <div
            className="relative rounded-3xl overflow-hidden  bg-cover bg-center h-[378px]"
            style={{ backgroundImage: "url('../images/work-img-1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50 flex text-start items-center px-10">
              <div className="">
                <h3 className="text-white text-4xl font-bold mb-2">Change the system</h3>
                <p className="text-white/70 mb-6 text-[20px] font-normal">Giving best services across the globe</p>
                <button className="backdrop-blur-[40px] bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-9 py-3 rounded-full font-normal">
                  Meet Saleh Bilal
                </button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="relative rounded-3xl overflow-hidden h-[378px] bg-cover bg-center"
            style={{ backgroundImage: "url('../images/work-img-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50 flex text-start items-center px-10">
              <div className="">
                <h3 className="text-white text-4xl font-bold mb-2">Time to level up</h3>
                <p className="text-white/70 mb-6 text-[20px] font-normal">Giving best services across the globe</p>
                <button className="backdrop-blur-[40px] bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-9 py-3 rounded-full font-normal">
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

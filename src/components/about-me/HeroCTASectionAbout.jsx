"use client"

export default function HeroCTASectionAbout() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/About-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Linear Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(180deg, 
              rgba(82, 77, 77, 0.8) 0%, 
              rgba(11, 11, 11, 0.9) 52.14%, 
              rgba(0, 0, 0, 1) 86%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold mb-6 md:mb-8 lg:mb-12 leading-tight">
          Get the guidance
          <br />
          <span className="text-[#FDC0C5]">you need to grow</span>
        </h1>

        {/* CTA Button */}
        <button className="bg-[#FDC0C5] hover:bg-[#f8a8b0] text-black font-medium px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-4 lg:px-16 lg:py-5 xl:px-20 xl:py-5 rounded-full text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:scale-105 shadow-lg">
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  )
}

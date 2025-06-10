"use client"

export default function HeroCTASectionAbout() {
  return (

    <section className="bg-black pt-5">
      <div className="relative w-full h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden rounded-t-[30px]">


        {/* Background Video */}
        <div className="absolute inset-0 z-0 ">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/About-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Linear Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(360deg, #000000 16.18%, rgba(11, 11, 11, 0.86) 54.41%, rgba(39, 37, 37, 0.521417) 76.21%, rgba(82, 77, 77, 0) 92.65%)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold mb-6 md:mb-8 lg:mb-12 leading-tight">
            Get the guidance
            <br />
            you need to grow
          </h1>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#FDC0C5] via-white/40 to-white/40 backdrop-blur-2xl text-white cursor-pointer font-medium text-lg md:text-xl lg:text-2xl tracking-[-0.03em] capitalize px-6 md:px-9 py-7 rounded-full shadow-lg hover:opacity-90 transition">
            Meet Saleh Bilal
          </button>
        </div>
      </div>
    </section>
  )
}

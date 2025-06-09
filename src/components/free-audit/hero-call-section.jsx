export default function HeroCallSection() {
  return (
    <section className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-t-[15px] sm:rounded-t-[20px] md:rounded-t-[30px] lg:rounded-t-[40px]"
        style={{
          backgroundImage: "url('../images/MyVision-About.png')",
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <button className="bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,_255,_255,_0.4)_89.2%)] cursor-pointer backdrop-blur-[40px] text-white px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-sm xs:text-base sm:text-lg md:text-xl font-medium transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 active:scale-95">
          Book Your Free Call
        </button>
      </div>
    </section>
  )
}

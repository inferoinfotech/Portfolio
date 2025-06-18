export default function HeroCallSection() {
  return (
    <div className="bg-black">
      <section className="relative w-auto h-[364px] rounded-t-[30px] sm:rounded-t-[30px] md:rounded-t-[30px] lg:rounded-t-[40px] xs:w-[390px] xs:h-[364px] sm:w-full sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] overflow-hidden !bg-black mx-auto">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 bg-no-repeat rounded-t-[30px] sm:rounded-t-[30px] md:rounded-t-[30px] lg:rounded-t-[40px]"
          style={{
            backgroundImage: "url('../images/Top-read-Banner.png')",
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <button className="bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,_255,_255,_0.4)_89.2%)] cursor-pointer backdrop-blur-[40px] text-white px-4 py-4 xs:px-5 xs:py-3 sm:px-6 sm:py-3 md:px-8 md:py-6 lg:px-10  xl:py-10 rounded-full text-sm xs:text-base sm:text-lg md:text-xl lg:text-[24px] font-medium transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 active:scale-95">
            Book Your Free Call
          </button>
        </div>
      </section>
    </div>

  )
}

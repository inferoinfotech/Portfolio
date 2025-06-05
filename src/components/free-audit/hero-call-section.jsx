export default function HeroCallSection() {
  return (
    <section className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-t-[20px] md:rounded-t-[40px]"
        style={{
          backgroundImage: "url('../images/MyVision-About.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <button className="bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,_255,_255,_0.4)_89.2%)] backdrop-blur-[40px] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-colors shadow-lg hover:opacity-90">
          Book Your Free Call
        </button>
      </div>
    </section>
  )
}

export default function HeroCallSection() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-t-[40px]"
        style={{
          backgroundImage: "url('../images/MyVision-About.png')",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <button className="bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,_255,_255,_0.4)_89.2%)] backdrop-blur-[40px] text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg">
          Book Your Free Call
        </button>
      </div>
    </section>
  )
}

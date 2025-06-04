"use client"

export default function HeroCTASectionAbout() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image - Placed at lower z-index */}
            <div className="absolute inset-0 z-0">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/videos/About-video.mp4" type="video/mp4" />

                </video>
            </div>

            {/* Linear Gradient Overlay - Higher z-index */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `linear-gradient(180deg, 
                        rgba(82, 77, 77, 0.8) 0%, 
                        rgba(11, 11, 11, 0.9) 52.14%, 
                        rgba(0, 0, 0, 1) 86%)`,
                }}
            ></div>

            {/* Content - Highest z-index */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold mb-8 lg:mb-12">
                    Get the guidance
                    <br />
                    <span className="text-[#FDC0C5]">you need to grow</span>
                </h1>

                {/* CTA Button */}
                <button className="bg-[#FDC0C5] hover:bg-[#f8a8b0] text-black font-medium px-8 py-4 lg:px-20 lg:py-5 rounded-full text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Schedule a Free Consultation
                </button>
            </div>
        </section>
    )
}
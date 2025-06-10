"use client"

export default function HeroCTASection() {
    return (
        <section className="relative w-full h-[50vh] lg:min-h-screen flex items-center rounded-t-[30px] justify-center overflow-hidden">
            {/* Background Image - Placed at lower z-index */}
            <div className="absolute inset-0 z-0 rounded-t-[30px]">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-t-[30px]">
                    <source src="/videos/home-cta-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Linear Gradient Overlay - Higher z-index */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `linear-gradient(180deg, 
                        rgba(82, 77, 77, 0.3) 10%, 
                        rgba(11, 11, 11, 0.9) 75.14%, 
                        rgba(0, 0, 0, 1) 86%)`,
                }}
            ></div>

            {/* Content - Highest z-index */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold mb-8 lg:mb-12">
                    Get the guidance
                    <br />
                    you need to grow
                </h1>

                {/* CTA Button */}
                <button className="bg-[#FDC0C5] hover:cursor-pointer hover:bg-[#f8a8b0] text-black text-[10px] lg:text-[22px]  font-medium px-8 py-4 lg:px-20 lg:py-6 rounded-full text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Schedule a Free Consultation
                </button>
            </div>
        </section>
    )
}  
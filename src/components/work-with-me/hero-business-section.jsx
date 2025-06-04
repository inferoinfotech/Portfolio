export default function HeroBusinessSectionAlt() {
    return (
        <section className="relative w-full min-h-screen bg-black py-12">
            <div className="container mx-auto relative">
                {/* Background Image - Now relative to container */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[30px]"
                    style={{
                        backgroundImage: "url('/images/MY EXPERIENCE About-1.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 grid items-center min-h-screen px-16">
                    <div className="max-w-2xl">
                        <h1 className="text-white font-bold text-[64px] leading-[100%] tracking-[-2%]">
                            Turning your business into
                            <br />
                            <span className="text-[#FDC0C5]">money-making machine</span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                            Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch
                            her. Hogshead hail-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul
                            jib red killick just clipper. Brethren chandler a pink chain cutlass.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                                Let's work together
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
                                Schedule a free call
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

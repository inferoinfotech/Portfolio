import { Play } from "lucide-react"

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-black overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 container mx-auto h-full rounded-4xl overflow-hidden">
                <video className="w-full h-full object-cover opacity-60" autoPlay muted loop playsInline>
                    <source src="/videos/video-background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-[1540px] h-full px-4 flex flex-col justify-center">
                <div className="max-w-2xl ms-20">
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Reach your
                        <br />
                        Biggest goals
                        <br />
                        faster with
                        <br />
                        my winning
                        <br />
                        strategies
                    </h1>
                    <p className="text-white/80 mt-6 text-lg md:text-4xl max-w-7xl">
                        Pirate ipsum arrgh bounty warp jack. Line nest tails belaying nipper. Boatswain just overhaul gangplank
                        bounty mutiny
                    </p>

                    <div className="absolute mt-12 flex items-center bg-black space-x-6">
                        <button className="border border-white text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                            HIRE AN EXPERT
                        </button>
                        <button className="flex items-center space-x-3 group">
                            <div className="bg-pink-300 rounded-full p-3 flex items-center justify-center group-hover:bg-pink-400 transition-colors duration-300">
                                <Play className="w-5 h-5 text-black fill-black" />
                            </div>
                            <span className="text-white font-medium">WATCH VIDEO</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

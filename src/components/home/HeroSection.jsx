"use client"

import { Play } from "lucide-react"

export default function HeroSection() {
    return (
        <div className="h-screen w-full bg-black flex items-center justify-center p-4">
            <div className="relative container h-[600px] md:h-[700px] lg:h-[800px]">
                {/* Background Video with Custom Clip Path */}
                <div
                    className="absolute inset-0 w-auto h-full rounded-4xl overflow-hidden"
                    style={{
                        clipPath: "path('M0,40 Q0,0 40,0 H1570 Q1600,0 1600,30 V738 Q1600,768 1570,800 H658 Q655,739 652.5,699 T654,606 V755 Q656,676 641,661 T575,648 H50 Q0,648 0,600 Z')",
                    }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full rounded-4xl object-cover"
                    >
                        <source src="/videos/Home-banner-video.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
                    <div className="container">
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
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

                        {/* Description Text */}
                        <p className="text-white/90 text-base md:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed">
                            Pirate ipsum arrgh bounty warp jack. Line nest tails belaying nipper. Boatswain just overhaul gangplank
                            bounty mutiny
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            {/* Hire Expert Button */}
                            <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                                HIRE AN EXPERT
                            </button>
                            {/* Watch Video Button */}
                            <button className="flex items-center gap-3 md:gap-4 text-white hover:opacity-80 transition-opacity duration-300">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDC0C5] rounded-full flex items-center justify-center">
                                    <Play className="w-4 h-4 md:w-6 md:h-6 text-white ml-1" fill="white" />
                                </div>
                                <span className="text-xs md:text-sm font-semibold tracking-wider">WATCH VIDEO</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

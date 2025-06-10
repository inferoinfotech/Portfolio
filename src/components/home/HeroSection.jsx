"use client"

import { Play } from 'lucide-react'

export default function HeroSection() {
    return (
        <div className="min-h-screen w-full bg-black flex items-center justify-center pb-16 xl:py-4 p-4">
            <div className="relative flex items-center container min-h-[920px]">
                {/* Background with exact SVG Clip Path for XL+ screens, simple video for smaller screens */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {/* XL+ version with clipPath */}
                    <svg
                        viewBox="0 0 1280 767"
                        preserveAspectRatio="none"
                        className="hidden xl:block absolute inset-0 w-full h-full overflow-hidden"
                    >
                        <defs>
                            <clipPath id="heroClip">
                                <path d="
                    M30,0
                    H1250
                    Q1280,0 1280,30
                    V737
                    Q1280,767 1250,767
                    H660
                    Q630,767 630,737
                    V640
                    Q630,610 600,610
                    H30
                    Q0,610 0,580
                    V30
                    Q0,0 30,0
                    Z" />
                            </clipPath>
                        </defs>

                        <foreignObject
                            width="1280"
                            height="767"
                            clipPath="url(#heroClip)"
                            className="w-full h-full"
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/videos/Home-banner-video.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/30" />
                        </foreignObject>
                    </svg>

                    {/* Mobile to Large screens version without clipPath */}
                    <div className="xl:hidden absolute inset-0 w-full h-full rounded-3xl md:rounded-3xl overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/videos/Home-banner-video.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/30" />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full md:px-16 lg:px-20">
                    <div className="container">
                        <h1 className="text-5xl mt-20 xl:mt-20 max-w-lg md:text-5xl lg:text-6xl 2xl:text-[80px] font-medium text-white leading-11 xl:leading-[70px] mb-6 text-center md:text-left">
                            Reach your
                            Biggest goals
                            faster with
                            my winning
                            strategies
                        </h1>
                        <p className="text-[#FFFFFF]/80 text-2xl lg:text-3xl xl:text-4xl font-medium mb-8 max-w-5xl leading-8 xl:leading-12 text-center md:text-left">
                            Pirate ipsum arrgh bounty warp jack. Line nest tails belaying nipper. Boatswain just overhaul gangplank
                            bounty mutiny
                        </p>

                        <div className="flex flex-row items-center xl:items-start sm:items-center mt-20 xl:mt-56 2xl:mt-44 gap-4 sm:gap-12 justify-center xl:justify-start mb-0">
                            <button className="border border-white text-white px-4 py-4 md:px-16 md:py-8 text-[10px] lg:text-[15px] tracking-[2] hover:bg-white hover:cursor-pointer hover:text-black transition-all duration-300">
                                HIRE AN EXPERT
                            </button>
                            <a
                                href="https://www.youtube.com/shorts/GuNAShUVSz4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 md:gap-4 hover:cursor-pointer text-white hover:opacity-80 transition-opacity duration-300"
                            >
                                <div className="w-9 h-9 md:w-[76px] md:h-[76px] bg-[#FDC0C5] rounded-full flex items-center justify-center">
                                    <Play className="w-4 h-4 text-white ml-1" fill="white" />
                                </div>
                                <span className="text-[10px] md:text-base font-semibold tracking-[2]">WATCH VIDEO</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
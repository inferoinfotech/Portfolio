export default function WhyWorkWithMeSection() {
    return (
        <section className="py-10 lg:py-24 px-4 lg:px-8 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-4xl lg:text-[64px] font-medium text-black mb-6 lg:mb-10 text-center lg:text-left">
                            Why work with me?
                        </h2>

                        {/* Mobile: Combined text content */}
                        <div className="lg:hidden text-center">
                            <p className="text-[#000000B2] text-xl lg:text-base leading-relaxed mb-8">
                                Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast. On cup gold tales execution
                                ketch her. Hogshead hail-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man
                                keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.
                                <br />
                                <br />
                                Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot piracy. Scourge brethren deck aye
                                ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man.
                            </p>
                        </div>

                        {/* Desktop: Separate paragraphs */}
                        <div className="hidden lg:block">
                            <p className="text-[#000000B2] text-2xl leading-10 text-justify max-w-2xl mb-8">
                                Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast. On cup gold tales execution
                                ketch her. Hogshead hail-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man
                                keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.
                            </p>
                        </div>

                        {/* Statistics */}
                        <div className="flex items-start justify-center lg:justify-start gap-12 lg:gap-28 mb-8">
                            {/* Upwork Stat */}
                            <div className="text-center">
                                <div className="text-4xl lg:text-[64px] font-bold text-black mb-2 lg:mb-7">98%</div>
                                <div className="flex items-center justify-center gap-2">
                                    <img src="/images/upworkicon.png" alt="Upwork Icon" className="w-5 h-5 lg:w-7 lg:h-7" />
                                    <span className="text-[#969696] text-base lg:text-3xl">Upwork</span>
                                </div>
                            </div>

                            {/* Freelancer Stat */}
                            <div className="text-center">
                                <div className="text-4xl lg:text-[64px] font-bold text-black mb-2 lg:mb-7">99.7%</div>
                                <div className="flex items-center justify-center gap-2">
                                    <img src="/images/freelancericon.png" alt="Freelancer Icon" className="w-6 h-6 lg:w-10 lg:h-10" />
                                    <span className="text-[#969696] text-base lg:text-3xl">Freelancer</span>
                                </div>
                            </div>
                        </div>

                        {/* Desktop: Second paragraph */}
                        <div className="hidden lg:block">
                            <p className="text-[#000000B2] text-2xl leading-10 text-justify max-w-2xl">
                                Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot piracy. Scourge brethren deck aye
                                ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man.
                            </p>
                        </div>

                        {/* CTA Buttons - Mobile */}
                        <div className="flex flex-col gap-4 lg:hidden">
                            <button className="w-full bg-black text-white py-4 rounded-[20px] font-medium hover:bg-gray-800 transition-colors">
                                Hire me
                            </button>
                            <button className="w-full bg-gray-200 text-black py-4 rounded-[20px] font-medium hover:bg-gray-300 transition-colors">
                                Schedule a free call
                            </button>
                        </div>
                    </div>

                    {/* Right Image - Hidden on mobile */}
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="rounded-3xl max-w-[737px] h-[737px] overflow-hidden">
                            <img
                                src="/images/MY EXPERIENCE About-1.jpg"
                                alt="Saleh working on laptop"
                                className="w-full h-full object-cover scale-125"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Buttons - Desktop */}
                <div className="hidden lg:flex lg:justify-end lg:mt-8">
                    <div className="flex flex-col gap-4 w-full ps-6 max-w-1/2">
                        <button className="w-full hover:cursor-pointer bg-black text-white py-4 rounded-[20px] text-[25px] font-medium hover:bg-gray-800 transition-colors">
                            Hire me
                        </button>
                        <button className="w-full hover:cursor-pointer bg-[#EDEDEDB2] text-black py-4 rounded-[20px] text-[25px] font-medium hover:bg-gray-200 transition-colors">
                            Schedule a free call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

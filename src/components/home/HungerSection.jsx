import { Play } from "lucide-react"


export default function HungerSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-2 xl:px-0 mx-auto">
                {/* Top Section */}
                <h1 className="text-black text-2xl md:text-4xl xl:text-[64px] mb-5 lg:mb-10 pr-20 lg:pr-0 lg:max-w-2xl leading-tight text-start font-bold">Do you have a hunger
                    to increase the
                    quality of your life?</h1>
                <div className="relative">
                    <div className="grid lg:grid-cols-3 gap-8 mb-3 lg:mb-2">
                        <div className="lg:col-span-2 order-2 lg:order-1">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-full max-h-[686px] rounded-3xl overflow-hidden">
                                    <img
                                        src="/images/Profileimage.jpg"
                                        alt="Portrait of Saleh Bilal"
                                        width={320}
                                        height={400}
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                    <div className="absolute lg:hidden inset-0"
                                        style={{ background: "linear-gradient(0deg, #E87E89 10.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 order-1 lg:order-2">
                            {/* Right - Content */}
                            <div className="flex flex-col lg:justify-center justify-start space-y-2 lg:space-y-6 xl:ms-10 lg:p-5">
                                <p className="text-[#969696] text-base lg:text-[28px] font-medium leading-tight lg:leading-relaxed mb-5 lg:mb-10">
                                    We believe progress equals happiness. And no matter where you're looking to excel, we're here to help you
                                    forge your pathway to power. Meet the man who's spent over 45 years creating breakthroughs and
                                    transforming lives.
                                </p>
                                <button className="bg-[#F5F5F5] w-max xl:w-2xs hover:cursor-pointer hover:bg-[#F5F5F5]/80 text-black font-bold px-5 py-3 md:py-5 xl:px-5 xl:py-8 rounded-full text-[10px] md:text-base xl:text-[25px] transition-colors">
                                    Meet Saleh Bilal
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute hidden lg:block lg:right-[22.5%] lg:bottom-[26.5%] xl:right-[24.5%] xl:bottom-[26%]  2xl:right-[26.3%] 2xl:bottom-[26%] z-20 ">
                        <img src="/images/Joiner.png" alt="vector" />
                    </div>

                    {/* Bottom Section */}
                    <div className="grid lg:grid-cols-3 gap-5 items-center">
                        {/* Left - Worked With */}
                        <div className="lg:col-span-2 hidden lg:block">
                            <div className="rounded-3xl">
                                <h3 className="text-xl lg:text-[35px] font-normal text-[#383838] mb-6">Worked with</h3>
                                <div className="grid grid-cols-4 gap-10 items-center">
                                    {/* Company Logo 1 */}
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/mediumlogo.png"
                                            alt="Company logo"
                                            className="lg:w-40 lg:h-40 w-28 h-28 object-cover"
                                        />
                                    </div>

                                    {/* Company Logo 2 */}
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/firebaselogo.png"
                                            alt="Company logo"
                                            className="lg:w-40 lg:h-40 w-28 h-28 object-cover"
                                        />
                                    </div>

                                    {/* Company Logo 3 */}
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/adobelogo.png"
                                            alt="Adobe logo"
                                            className="lg:w-32 w-24 lg:h-32 h-24 object-cover"
                                        />
                                    </div>

                                    {/* Company Logo 4 */}
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/stacklogo.png"
                                            alt="Figma logo"
                                            className="lg:w-40 lg:h-40 w-28 h-28 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative min-h-[200px] lg:w-[555px] lg:h-[371px] rounded-[40px] overflow-hidden cursor-pointer group">
                                    {/* Video Element */}
                                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                        <source src="/videos/Work-Home-Video.mp4" type="video/mp4" />
                                    </video>
                                    {/* Gradient Overlay */}
                                    <div className="absolute hidden lg:block inset-0"
                                        style={{ background: "linear-gradient(124.89deg, #FDC0C5 18.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                    <div className="absolute lg:hidden inset-0"
                                        style={{ background: "linear-gradient(180deg, #E87E89 18.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                    {/* Button Overlay Container */}
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                                        {/* Glassmorphism Button */}
                                        <button className="relative flex items-center hover:cursor-pointer space-x-3 bg-white/10 backdrop-blur-3xl rounded-full px-8 py-6 xl:px-12 xl:py-9 group-hover:bg-white/30 transition-all duration-300 border border-white/20 shadow-lg">
                                            {/* Play Icon */}
                                            <div className="flex items-center justify-center">
                                                <Play className="lg:w-5 w-3 lg:h-5 h-3 text-white fill-white drop-shadow-sm" />
                                            </div>
                                            {/* Text */}
                                            <span className="text-white font-medium text-[10px] lg:text-[25px] tracking-wide  drop-shadow-sm">Watch Video</span>
                                            {/* Additional blur background for enhanced effect */}
                                            <div className="absolute inset-0 bg-white/10 backdrop-blur-[40px] rounded-full -z-10"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

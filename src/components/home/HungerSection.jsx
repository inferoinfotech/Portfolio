"use client"

export default function HungerSection() {
    return (
        <section className="min-h-screen bg-gray-50 py-12 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Desktop Layout */}
                <div className="hidden lg:block relative">
                    <div className="grid grid-cols-2 gap-16 items-start">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <h1 className="text-4xl xl:text-5xl font-bold text-black leading-tight">
                                Do you have a hunger to increase the quality of your life?
                            </h1>

                            {/* Portrait Image with Text */}
                            <div className="relative">
                                <div className="bg-pink-300 rounded-3xl p-8 pb-0 overflow-hidden">
                                    <img
                                        src="/placeholder.svg?height=400&width=300"
                                        alt="Portrait"
                                        className="w-full h-80 object-cover object-top"
                                    />
                                </div>

                                {/* Text Card */}
                                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-lg max-w-xs z-10">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        We believe progress equals happiness. And no matter where you're looking to excel, we're here to
                                        help you forge your pathway to power. Meet the man who's spent over 45 years creating breakthroughs
                                        and transforming lives.
                                    </p>
                                    <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        Meet Saleh Bilal
                                    </button>
                                </div>
                            </div>

                            {/* Worked With Section */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <p className="text-gray-600 text-sm mb-4">Worked with</p>
                                <div className="flex items-center gap-6">
                                    {/* Company Logos - Using placeholder circles and shapes */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-black rounded-full"></div>
                                        <div className="w-4 h-8 bg-black rounded-full"></div>
                                    </div>
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                        <div className="w-6 h-6 bg-orange-600 rounded-sm"></div>
                                    </div>
                                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                                        A
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                                        <div className="w-3 h-3 bg-red-400 rounded-sm"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative">
                            <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                                <img src="/placeholder.svg?height=400&width=500" alt="Workspace" className="w-full h-80 object-cover" />
                                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all">
                                    <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full px-6 py-3 flex items-center gap-2 transition-all">
                                        <div className="w-0 h-0 border-l-[8px] border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                                        <span className="text-gray-800 font-medium">Watch Video</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Connecting Bridge Element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                            {/* Main Bridge Shape */}
                            <svg width="120" height="80" viewBox="0 0 120 80" className="text-pink-200">
                                <path
                                    d="M10 40 Q35 10, 60 40 Q85 70, 110 40"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    className="opacity-60"
                                />
                                <path
                                    d="M10 40 Q35 70, 60 40 Q85 10, 110 40"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="none"
                                    className="opacity-60"
                                />
                            </svg>

                            {/* Center Connection Point */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-white shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-8">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-black leading-tight">
                        Do you have a hunger to increase the quality of your life?
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                        We believe progress equals happiness. And no matter where you're looking to excel, we're here to help you
                        forge your pathway to power.
                    </p>

                    {/* Meet Button */}
                    <button className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-colors">
                        Meet Saleh Bilal
                    </button>

                    {/* Portrait Image */}
                    <div className="bg-pink-300 rounded-3xl p-6 pb-0 overflow-hidden">
                        <img
                            src="/placeholder.svg?height=400&width=300"
                            alt="Portrait"
                            className="w-full h-80 object-cover object-top rounded-t-2xl"
                        />
                    </div>

                    {/* Video Image */}
                    <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                        <img src="/placeholder.svg?height=300&width=400" alt="Workspace" className="w-full h-60 object-cover" />
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                            <div className="bg-white bg-opacity-90 rounded-full px-4 py-2 flex items-center gap-2">
                                <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                                <span className="text-gray-800 text-sm font-medium">Watch Video</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

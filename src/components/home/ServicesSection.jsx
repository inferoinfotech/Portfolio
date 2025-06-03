"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const services = [
    "COPYWRITING",
    "SOCIAL MEDIA",
    "STORYWRITING",
    "DIGITAL MARKETING",
    "UX WRITER",
    "STORYTELLER",
    "BRAND STRATEGIST",
    "SAAS SPECIALIST",
]

export default function ServicesSection() {
    const [hoveredService, setHoveredService] = useState(null)

    return (
        <section className="h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="flex justify-center pt-12 pb-8">
                <div className="flex items-center gap-6">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <h2 className="text-xl font-medium tracking-[7] uppercase">Services</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-20">
                {/* Left Side - Services List */}
                <div className="flex flex-col justify-center pl-16 lg:pl-0">
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer flex items-center"
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <h3
                                    className={`text-4xl lg:text-5xl xl:text-[64px] font-bold transition-colors duration-300 ${hoveredService === index
                                        ? "text-[#FDC0C5]"
                                        : hoveredService !== null
                                            ? "text-[#B2B2B2]/50"
                                            : "text-[#B2B2B2]"
                                        }`}
                                >
                                    {service}
                                </h3>
                                <button
                                    className={`bg-[#FDC0C5] flex items-center text-black px-6 py-2 rounded-full text-base font-normal transition-all duration-300 ${hoveredService === index
                                        ? "opacity-100 translate-x-0 ml-4"
                                        : "opacity-0 -translate-x-4 pointer-events-none absolute right-1/6"
                                        }`}
                                >
                                    See more <ChevronRight className="w-4 h-4 ms-2" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Static Image */}
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <img
                            src="./images/professional-man.png"
                            alt="Professional working on laptop"
                            className="w-[690px] h-[690px] rounded-4xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
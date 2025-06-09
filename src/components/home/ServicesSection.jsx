"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import ServiceModal from "../model/service-modal"

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
    const [selectedService, setSelectedService] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSeeMore = (service) => {
        setSelectedService(service)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedService(null)
    }

    return (
        <>
            <section className="lg:min-h-screen bg-black text-white flex flex-col">
                {/* Header */}
                <div className="flex justify-center pt-12 lg:pb-8">
                    <div className="flex items-center gap-6">
                        <div className="lg:w-3 lg:h-3 w-1.5 h-1.5 bg-white rounded-full"></div>
                        <h2 className="text-xs lg:text-xl font-medium tracking-[7] lg:tracking-[10] uppercase">Services</h2>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto lg:mt-20 py-10">
                    {/* Left Side - Services List */}
                    <div className="flex flex-col justify-center px-6 lg:px-0">
                        <div className="space-y-4 lg:space-y-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer flex items-center justify-center lg:justify-start"
                                    onMouseEnter={() => setHoveredService(index)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    <h3
                                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-[60px] md:ps-5 2xl:ps-2 font-bold transition-colors duration-300 ${hoveredService === index
                                            ? "text-[#FDC0C5]"
                                            : hoveredService !== null
                                                ? "text-[#B2B2B2]/50"
                                                : "text-[#B2B2B2]"
                                            }`}
                                        onClick={() => handleSeeMore(service)}
                                    >
                                        {service}
                                    </h3>
                                    <button
                                        onClick={() => handleSeeMore(service)}
                                        className={`bg-[#FDC0C5] hover:cursor-pointer hidden xl:flex items-center text-black px-4 py-1 lg:px-6 lg:py-2 rounded-full text-sm lg:text-base font-normal transition-all duration-300 ${hoveredService === index
                                            ? "opacity-100 translate-x-0 ml-2 lg:ml-4"
                                            : "opacity-0 -translate-x-4 pointer-events-none absolute right-1/6"
                                            }`}
                                    >
                                        See more <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 ms-1 lg:ms-2" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Static Image (hidden on mobile) */}
                    <div className="hidden lg:flex items-center justify-center">
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

            {/* Service Modal */}
            <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
        </>
    )
}

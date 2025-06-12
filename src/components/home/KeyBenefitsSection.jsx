"use client"

import { TrendingUp, Target, Zap, Globe, BarChart3, Settings } from "lucide-react"

const benefits = [
    {
        id: 1,
        icon: TrendingUp,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 2,
        icon: Target,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 3,
        icon: Zap,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 4,
        icon: Globe,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 5,
        icon: BarChart3,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
    {
        id: 6,
        icon: Settings,
        title: "Innovative problem solving",
        description:
            "Ability to approach challenges with creative solutions that set projects apart, ensuring fresh ideas drive success in a competitive landscape.",
    },
]

export default function KeyBenefitsSection() {
    return (
        <section className="py-24 px-4 lg:px-8 bg-white">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-3 mb-8">
                        <div className="lg:w-3 lg:h-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                        <h2 className="text-[10px] lg:text-xl font-medium  tracking-[5] lg:tracking-[10] uppercase">Key Benefits</h2>
                    </div>

                    <h1 className="text-[40px] lg:text-5xl xl:text-8xl font-medium text-black leading-tight">
                        Create a competitive edge
                    </h1>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {benefits.map((benefit) => {
                        const IconComponent = benefit.icon
                        return (
                            <div key={benefit.id} className="text-center lg:text-left">
                                {/* Icon */}
                                <div className="flex justify-center lg:justify-start mb-6">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#D9D9D966] rounded-2xl flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-[28px] font-medium text-black mb-4 leading-tight">{benefit.title}</h3>

                                {/* Description */}
                                <p className="text-black/70 text-base leading-5 px-14 lg:px-0 font-normal lg:leading-7 lg:text-[26px] lg:max-w-10/12">{benefit.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

"use client"

import Image from "next/image"

export default function PressSection() {
    return (
        <section className="w-full py-10 bg-white border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    {/* Title */}
                    <h3 className="text-[40px] font-medium text-black mb-6">
                        YOU MIGHT HAVE SEEN ME ON
                    </h3>

                    {/* Logos Grid */}
                    <div className="w-full container mx-auto">
                        <div className="flex justify-center">
                            <img
                                src='../images/pressimage.png'
                                alt='press'
                                width={120}
                                height={40}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
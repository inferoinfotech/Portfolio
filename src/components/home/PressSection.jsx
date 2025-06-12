"use client"

import Image from "next/image"

export default function PressSection() {
    return (
        <section className="w-full pb-10 bg-white">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col items-center">
                    {/* Title */}
                    <h3 className="text-base md:text-2xl lg:text-[40px] font-medium text-black mb-6">
                        You Might Have Seen Me On
                    </h3>

                    {/* Logos Grid */}
                    <div className="w-full container mx-auto">
                        <div className="flex justify-center">
                            <img
                                src='../images/pressimage.png'
                                alt='press'
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
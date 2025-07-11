"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ServiceModal from "../model/service-modal";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";

const services = [
  "COPYWRITING",
  "SOCIAL MEDIA",
  "STORYWRITING",
  "DIGITAL MARKETING",
  "UX WRITER",
  "STORYTELLER",
  "BRAND STRATEGIST",
  "SAAS SPECIALIST",
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="lg:min-h-screen lg:py-10 xl:py-12 bg-black text-white flex flex-col"
      >
        <div className="max-w-container mx-auto w-full px-4">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center pt-4 lg:pb-8"
          >
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="lg:w-3 lg:h-3 w-1.5 h-1.5 bg-white rounded-full"
              />
              <h2 className="text-xs lg:text-xl font-medium tracking-[7] lg:tracking-[10] uppercase">
                Services
              </h2>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 xl:mt-2 py-4 justify-between"
          >
            {/* Left Side - Services List */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-col justify-center lg:px-0"
            >
              <div className="space-y-4 lg:space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer flex items-center justify-center lg:justify-start"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <motion.h3
                      whileHover={{ scale: 1.02 }}
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[50px] font-bold transition-colors duration-300 ${
                        hoveredService === index
                          ? "text-[#FDC0C5]"
                          : hoveredService !== null
                          ? "text-[#B2B2B2]/50"
                          : "text-[#B2B2B2]"
                      }`}
                      onClick={() => handleSeeMore(service)}
                    >
                      {service}
                    </motion.h3>
                    <button
                      onClick={() => handleSeeMore(service)}
                      className={`bg-[#FDC0C5] hover:cursor-pointer hidden xl:flex items-center text-black px-4 py-1 lg:px-6 lg:py-2 rounded-full text-sm lg:text-base font-normal transition-all duration-300 ${
                        hoveredService === index
                          ? "opacity-100 ml-2 lg:ml-4"
                          : "opacity-0"
                      }`}
                    >
                      See more{" "}
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 ms-1 lg:ms-2" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Static Image (hidden on mobile) */}
            <motion.div
              variants={slideInRight}
              className="hidden lg:flex items-center justify-end"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative p-3"
              >
                <img
                  src="./images/professional-man.png"
                  alt="Professional working on laptop"
                  className="xl:w-[590px] w-[450px] h-[450px] xl:h-[590px] rounded-4xl object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  );
}

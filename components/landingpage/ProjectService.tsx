"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "mechanical", label: "Mechanical CAD" },
  { id: "civil", label: "Civil Engineering" },
  { id: "IT", label: "IT & Technology" },
];

type TabId = "mechanical" | "civil" | "IT";

const content: Record<
  TabId,
  {
title: React.ReactElement;
    description: string;
    points: string[];
    image: string;
  }
> = {
  mechanical: {
    title: (
      <>
        Mechanical <br /> Design
      </>
    ),
    description:
      "Product development and machine design solutions for manufacturing industries.",
    points: ["Product Design", "3D Modeling", "Simulation", "Prototyping"],
    image: "/images/tiger.svg",
  },
  civil: {
    title: (
      <>
        Civil & <br /> Architecture
      </>
    ),
    description:
      "Comprehensive design solutions for construction and infrastructure projects.",
    points: [
      "Architectural Design",
      "Structural Analysis",
      "Interior Design",
      "Project Planning",
    ],
    image: "/images/image.png",
  },
  IT: {
    title: (
      <>
        Software <br /> Development
      </>
    ),
    description:
      "Custom web and mobile applications built with cutting-edge technologies.",
    points: [
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "UI/UX Design",
    ],
    image: "/images/Rectangle1.svg",
  },
};

export default function ProjectService() {
  const [activeTab, setActiveTab] = useState<TabId>("mechanical");
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const switchToNextTab = () => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id as TabId);
  };

  useEffect(() => {
    if (isManual && intervalRef.current) clearTimeout(intervalRef.current);

    intervalRef.current = setTimeout(() => {
      setIsManual(false);
      switchToNextTab();
    }, 10000);

    return () => clearTimeout(intervalRef.current!);
  }, [activeTab, isManual]);

  const handleTabClick = (id: TabId) => {
    setIsManual(true);
    setActiveTab(id);
  };

  return (
    <section className="relative flex flex-col items-center justify-between px-4 sm:px-6 md:px-10 py-6 bg-[#030030] text-white overflow-hidden h-[95vh] min-h-[520px]">
      {/* === Glows === */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[250px] sm:w-[300px] md:w-[400px] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              50% 50% at 20% 50%,
              rgba(217, 39, 233, 0.45) 0%,
              rgba(85, 78, 229, 0) 100%
            )
          `,
          filter: "blur(120px)",
          opacity: 0.8,
        }}
      ></div>

      <div
        className="absolute top-0 bottom-0 right-0 w-[250px] sm:w-[300px] md:w-[400px] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              50% 50% at 80% 50%,
              rgba(62, 0, 254, 0.45) 0%,
              rgba(85, 78, 229, 0) 100%
            )
          `,
          filter: "blur(120px)",
          opacity: 0.8,
        }}
      ></div>

      {/* === Heading === */}
      <div className="text-center max-w-2xl relative z-10 px-4 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 leading-snug">
          Our Project Services
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
          From Mechanical CAD to Civil and IT — our programs are designed by
          industry experts and backed by real project experience.
        </p>
      </div>

      {/* === Tabs === */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 border-b border-gray-700 pb-1 relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id as TabId)}
            className={`relative pb-1 text-sm sm:text-base font-medium transition-colors ${
              activeTab === tab.id ? "text-white" : "text-gray-400"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* === Content === */}
      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-6 px-4 z-10 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-center justify-between w-full gap-6"
          >
            {/* === Text === */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                {content[activeTab].title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-md">
                {content[activeTab].description}
              </p>
              <ul className="text-gray-300 text-xs sm:text-sm md:text-base space-y-1 list-disc list-inside">
                {content[activeTab].points.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="mt-3 py-2 px-3 md:py-2.5 bg-[#380DBD] text-white rounded-lg font-medium transition-all duration-300 w-32 sm:w-36 hover:bg-[linear-gradient(291.92deg,#3200FF_-8.85%,#9A00FF_87.4%)]">
                View Projects
              </button>
            </div>

            {/* === Image === */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <Image
                src={content[activeTab].image}
                alt={String(content[activeTab].title)}
                width={380}
                height={260}
                className="object-contain w-[200px] sm:w-[260px] md:w-[340px] lg:w-[400px] xl:w-[420px] mt-4 lg:mt-0 drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaClock, FaLayerGroup } from "react-icons/fa"; // icons for duration/modules

const categories = [
  "Mechanical CAD",
  "Civil Engineering",
  "Electrical Engineering",
  "IT & Technology",
];
const courses: Record<string, Array<any>> = {
  "Mechanical CAD": [
    {
      level: "Beginner to Advanced",
      levelColor: "bg-blue-100 text-blue-600",
      title: "SolidWorks Essentials",
      description:
        "Master SolidWorks, CATIA, 3D Modeling & Simulation for real projects.",
      duration: "6 Months",
      modules: "5 Modules",
      tags: ["SolidWorks", "CATIA", "AutoCAD", "Fusion 360"],
      link: "#",
      image: "/images/Rectangle1.svg",
    },
    {
      level: "All Levels",
      levelColor: "bg-pink-100 text-pink-600",
      title: "CATIA V5",
      description: "Advanced surface modeling and complex product design.",
      duration: "6 Months",
      modules: "5 Modules",
      tags: ["CATIA", "Product Design", "Simulation"],
      link: "#",
      image: "/images/Rectangle2.svg",
    },
    {
      level: "Intermediate",
      levelColor: "bg-yellow-100 text-yellow-600",
      title: "AutoCAD Mechanical",
      description:
        "Technical drawing, sheet metal, and machine component design.",
      duration: "4 Months",
      modules: "6 Modules",
      tags: ["AutoCAD", "Mechanical Drafting", "Sheet Metal"],
      link: "#",
      image: "/images/Rectangle3.svg",
    },
    {
      level: "All Levels",
      levelColor: "bg-green-100 text-green-600",
      title: "Fusion 360",
      description: "Cloud-based CAD/CAM/CAE software for 3D product design.",
      duration: "5 Months",
      modules: "5 Modules",
      tags: ["Fusion 360", "3D Modeling", "Simulation"],
      link: "#",
      image: "/images/Rectangle4.svg",
    },
    {
      level: "Advanced",
      levelColor: "bg-purple-100 text-purple-600",
      title: "Creo Parametric",
      description: "Industry-standard CAD for mechanical engineers.",
      duration: "5 Months",
      modules: "6 Modules",
      tags: ["Creo", "Modeling", "Assemblies"],
      link: "#",
      image: "/images/Rectangle1.svg",
    },
  ],

  "Civil Engineering": [
    {
      level: "Beginner",
      levelColor: "bg-blue-100 text-blue-600",
      title: "STAAD Pro",
      description: "Structural analysis and design for buildings and bridges.",
      duration: "5 Months",
      modules: "5 Modules",
      tags: ["STAAD Pro", "Structures", "Load Analysis"],
      link: "#",
      image: "/images/Rectangle2.svg",
    },
    {
      level: "Intermediate",
      levelColor: "bg-yellow-100 text-yellow-600",
      title: "AutoCAD Civil 3D",
      description: "Design and simulate civil infrastructure projects.",
      duration: "4 Months",
      modules: "6 Modules",
      tags: ["AutoCAD", "Civil 3D", "Surveying", "GIS"],
      link: "#",
      image: "/images/Rectangle3.svg",
    },
    {
      level: "Intermediate",
      levelColor: "bg-yellow-100 text-yellow-600",
      title: "Revit Structure",
      description: "Building Information Modeling (BIM) software for structural design.",
      duration: "5 Months",
      modules: "5 Modules",
      tags: ["Revit", "BIM", "Structures"],
      link: "#",
      image: "/images/Rectangle4.svg",
    },
    {
      level: "Advanced",
      levelColor: "bg-purple-100 text-purple-600",
      title: "Civil 3D Surveying",
      description: "Topography, survey data analysis, and alignment design.",
      duration: "3 Months",
      modules: "4 Modules",
      tags: ["Surveying", "Civil 3D", "Topography"],
      link: "#",
      image: "/images/Rectangle1.svg",
    },
    {
      level: "All Levels",
      levelColor: "bg-pink-100 text-pink-600",
      title: "Bridge Design",
      description: "Structural design for bridges using advanced CAD tools.",
      duration: "6 Months",
      modules: "6 Modules",
      tags: ["Bridge", "Design", "Structures"],
      link: "#",
      image: "/images/Rectangle2.svg",
    },
  ],

  "Electrical Engineering": [
    {
      level: "Beginner",
      levelColor: "bg-blue-100 text-blue-600",
      title: "Basics of Electrical Circuits",
      description: "Learn voltage, current, and circuit fundamentals.",
      duration: "3 Months",
      modules: "4 Modules",
      tags: ["Circuits", "Voltage", "Current"],
      link: "#",
      image: "/images/Rectangle3.svg",
    },
    {
      level: "Intermediate",
      levelColor: "bg-yellow-100 text-yellow-600",
      title: "Power Systems",
      description: "Transmission, distribution, and power generation concepts.",
      duration: "5 Months",
      modules: "5 Modules",
      tags: ["Power", "Generation", "Distribution"],
      link: "#",
      image: "/images/Rectangle4.svg",
    },
    {
      level: "All Levels",
      levelColor: "bg-green-100 text-green-600",
      title: "Electrical Machines",
      description: "Learn DC and AC machines and their applications.",
      duration: "4 Months",
      modules: "5 Modules",
      tags: ["Machines", "AC", "DC"],
      link: "#",
      image: "/images/Rectangle1.svg",
    },
    {
      level: "Advanced",
      levelColor: "bg-purple-100 text-purple-600",
      title: "Control Systems",
      description: "Study system dynamics, controllers, and stability.",
      duration: "6 Months",
      modules: "6 Modules",
      tags: ["Control", "Feedback", "Automation"],
      link: "#",
      image: "/images/Rectangle2.svg",
    },
    {
      level: "All Levels",
      levelColor: "bg-pink-100 text-pink-600",
      title: "Renewable Energy",
      description: "Solar, wind, and other renewable energy systems.",
      duration: "4 Months",
      modules: "5 Modules",
      tags: ["Solar", "Wind", "Energy"],
      link: "#",
      image: "/images/Rectangle3.svg",
    },
  ],

  "IT & Technology": [
    {
      level: "Beginner",
      levelColor: "bg-blue-100 text-blue-600",
      title: "Introduction to Programming",
      description: "Learn Python programming from scratch.",
      duration: "3 Months",
      modules: "4 Modules",
      tags: ["Python", "Programming", "Basics"],
      link: "#",
      image: "/images/Rectangle4.svg",
    },
    {
      level: "Intermediate",
      levelColor: "bg-yellow-100 text-yellow-600",
      title: "Web Development",
      description: "HTML, CSS, JavaScript, and modern frameworks.",
      duration: "5 Months",
      modules: "6 Modules",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      link: "#",
      image: "/images/Rectangle1.svg",
    },
    {
      level: "All Levels",
      levelColor: "bg-green-100 text-green-600",
      title: "Data Science",
      description: "Learn Python, Pandas, NumPy, and data analysis.",
      duration: "6 Months",
      modules: "6 Modules",
      tags: ["Python", "Data Analysis", "Machine Learning"],
      link: "#",
      image: "/images/Rectangle2.svg",
    },
    {
      level: "Advanced",
      levelColor: "bg-purple-100 text-purple-600",
      title: "Cloud Computing",
      description: "AWS, Azure, and cloud deployment concepts.",
      duration: "5 Months",
      modules: "5 Modules",
      tags: ["Cloud", "AWS", "Azure"],
      link: "#",
      image: "/images/Rectangle3.svg",
    },
    {
      level: "Beginner",
      levelColor: "bg-pink-100 text-pink-600",
      title: "Python Advanced",
      description: "Advanced Python programming and projects.",
      duration: "6 Months",
      modules: "6 Modules",
      tags: ["Python", "OOP", "Projects"],
      link: "#",
      image: "/images/Rectangle1.svg",
    },
  ],
};


export default function FutureReady() {
  const [activeTab, setActiveTab] = useState("Mechanical CAD");
  const visibleCards = courses[activeTab] || [];

  return (
    <section className="font-inter tracking-wide m-2 pt-15" id="mech">
      <div className="max-w-6xl mx-auto ">
        {/* Heading + Description */}
        <div className="bg-white max-w-6xl mx-auto p-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Future-Ready Courses
          </h2>
          <p className="mt-4 mb-12 text-gray-600 max-w-3xl text-sm leading-relaxed">
            From Mechanical CAD to Civil, Electrical, and IT — our programs are
            designed by industry experts and backed by real project experience.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 text-base font-medium border-b border-gray-200">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 transition cursor-pointer ${
                  activeTab === tab
                    ? "border-b-2 border-purple-600 text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Beige section full width */}
      <div className="bg-[#F5F4EC] w-full">
        <div className="max-w-6xl mx-auto  pb-12 pt-10">
          {/* Horizontal scroll carousel */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 max-w-6xl mx-auto ">
            {visibleCards.map((course, idx) => (
              <div key={idx} className="flex-shrink-0 w-70">
                <CourseCard course={course} index={idx} />
              </div>
            ))}
          </div>

          {/* Browse button */}
          <div className="mt-8 max-w-6xl mx-auto ">
            <button className="px-5 py-3 rounded-lg border border-purple-600 text-purple-600  text-sm hover:bg-purple-50">
              Browse All Training Programs
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}

function CourseCard({ course, index }: { course: any; index: number }) {
  // Cycle images: Rectangle1.png → Rectangle4.png
  const imageNumber = (index % 4) + 1;
 const imageSrc = course.image || `/images/Rectangle${(index % 4) + 1}.png`;


  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col h-full" >
      {/* Image */}
      
      <div className="p-3">
        <div className="relative w-full h-44 rounded-lg overflow-hidden bg-gray-100">
          <Image src={imageSrc} alt={course.title} fill className="object-cover" />
          <span
            className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${course.levelColor}`}
          >
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-3">{course.title}</h3>
        {/* Description with 2-line ellipsis */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-2 overflow-hidden">
          {course.description}
        </p>

        {/* Duration & Modules with icons */}
        <ul className="flex flex-col gap-2 text-gray-500 text-sm mb-4">
          <li className="flex items-center gap-2">
            <FaClock className="text-gray-400" /> {course.duration}
          </li>
          <li className="flex items-center gap-2">
            <FaLayerGroup className="text-gray-400" /> {course.modules}
          </li>
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag: string, idx: number) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Learn More */}
        <div className="mt-auto">
          <a
            href={course.link}
            className="text-purple-600 font-semibold text-sm hover:underline flex items-center gap-2"
          >
            <span>Learn More</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

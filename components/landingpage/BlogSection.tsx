"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    category: "Beginner to Advanced",
    title: "Top 10 CAD software every mechanical engineer should master",
    desc: "Read More",
    image: "/images/Rectangle1.svg",
    color: "bg-[#E9F2FF] text-blue-800",
  },
  {
    id: 2,
    category: "Civil Engineering",
    title: "AI and Machine Learning in Civil Engineering: Future Trends",
    desc: "Read More",
    image: "/images/Rectangle4.svg",
    color: "bg-[#E9F2FF] text-purple-800",
  },
  {
    id: 3,
    category: "IT & Software",
    title: "Web Development Roadmap 2024: From Beginner to Professional",
    desc: "Read More",
    image: "/images/Rectangle2.svg",
    color: "bg-[#E9F2FF] text-green-800",
  },
  {
    id: 4,
    category: "IT & Software",
    title: "Top 10 CAD Software Every Mechanical Engineer Should Master",
    desc: "Read More",
    image: "/images/Rectangle3.svg",
    color: "bg-[#E9F2FF] text-yellow-800",
  },
];

export default function BlogSection() {
  const [selected, setSelected] = useState(blogs[0]);

  return (
    <section className="font-inter tracking-wide p-4">
      <div className="max-w-[66rem] mx-auto ">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h2 className="text-[40px] font-bold text-gray-900 tracking-tighter">
            Latest from Our Blog
          </h2>
           <button
              className="mt-8 border border-[3200FF] text-[3200FF]  px-4  py-2 rounded-[10px] transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(291.92deg, #3200FF -8.85%, #9A00FF 87.4%)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "black";
                e.currentTarget.style.color = "black";
              }}
            >
              View Projects
            </button>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Blog */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden mb-4">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>
            {/* 🔹 Category Badge with same background */}
            <span
              className={`inline-block text-xs md:text-sm font-medium px-3 py-1 rounded-full ${selected.color}`}
            >
              {selected.category}
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2 leading-snug">
              {selected.title}
            </h3>
            <a
              href="#"
              className="text-purple-600 font-medium mt-4 inline-block text-sm md:text-base"
            >
              {selected.desc}
            </a>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1 scrollbar-hide">
            {blogs.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelected(b)}
                className="cursor-pointer bg-white rounded-xl shadow-sm flex gap-3 p-3 hover:shadow-md transition"
              >
                <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  {/* 🔹 Sidebar Badge with same background */}
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${b.color}`}
                  >
                    {b.category}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-800 mt-1 leading-snug line-clamp-2">
                    {b.title}
                  </h4>
                  <span className="text-purple-600 text-xs font-medium mt-1">
                    {b.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar utility */}
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

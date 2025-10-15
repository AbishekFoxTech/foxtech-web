// app/components/Shaping.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Shaping = () => {
  const stats = [
    { number: 500, text: "Students Trained", suffix: "+" },
    { number: 100, text: "Projects Delivered", suffix: "+" },
    { number: 95, text: "Placement Rate", suffix: "%" },
    { number: 4, text: "Core Disciplines", suffix: "" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000; // 2 sec
            const increment = Math.ceil(end / (duration / 16));

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
            }, 16); // ~60fps
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, stats]);

  return (
    <section className="w-full px-6 py-16 bg-white p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Shaping Talent, <br /> Driving Innovation
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Foxtech is a comprehensive software training institute with a
            difference — we don’t just teach, we build. Our students learn
            through hands-on experience while our project teams deliver real
            solutions for businesses across industries.
          </p>

          <button className="mt-6 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition">
            Discover More About Us
          </button>
        </div>

        {/* Right Video with Badge and Shadow */}
        <div className="relative flex flex-col items-center">
          {/* 3D Video */}
          <video
            src="/img/logo-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-72 md:w-80 lg:w-116 object-contain relative z-10"
          />

          {/* Badge on Top Right */}
          <div className="absolute top-20 right-20 z-10 bg-white/30 backdrop-blur-md rounded-full p-4 shadow-md">
            <Image
              src="/img/c3.png"
              alt="Badge"
              width={80}
              height={80}
              className="w-16 md:w-20"
            />
          </div>

          {/* Shadow below video */}
          <Image
            src="/img/sh1.png"
            alt="Shadow"
            width={250}
            height={80}
            className="absolute -bottom-0 w-48 md:w-64 z-0"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div
        ref={sectionRef}
        className="mt-16 flex flex-wrap justify-between text-center max-w-6xl mx-auto "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-[1px] rounded-[10px] max-w-[200px] flex-1"
            style={{
              background:
                "linear-gradient(169.58deg, #C3AFFF 2.78%, #FFFFFF 113.31%)",
            }}
          >
            <div className="rounded-[10px] bg-white py-6 px-8">
              <h3 className="text-2xl font-bold text-indigo-900">
                {counts[index]}
                {item.suffix}
              </h3>
              <p className="mt-2 text-sm text-gray-700 font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shaping;

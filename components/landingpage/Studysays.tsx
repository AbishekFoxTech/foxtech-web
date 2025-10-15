"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Ann Marry",
    role: "UI/UX Designer",
    image: "/img/s1.png",
    profile: "/img/s1.png",
  },
  {
    name: "Arjun Das",
    role: "Software Engineer",
    image: "/img/s2.png",
    profile: "/img/s2.png",
  },
  {
    name: "Akana Tom",
    role: "Software Engineer",
    image: "/img/s3.png",
    profile: "/img/s3.png",
  },
];

const resources = [
  {
    icon: "/img/sa1.png",
    title: "Free Tutorials",
    description: "Step-by-step guides and tutorials",
    label: "50+ tutorials",
  },
  {
    icon: "/img/sa2.png",
    title: "Video Courses",
    description: "Comprehensive video learning modules",
    label: "200+ videos",
  },
  {
    icon: "/img/sa3.png",
    title: "Industry Reports",
    description: "Latest trends and market insights",
    label: "25+ reports",
  },
];

const Study = () => {
  return (
    <section className="py-20 bg-white p-4" id="success">
      <div className="max-w-6xl mx-auto ">
        {/* 🎓 Section 1: Student Testimonials */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#190653] mb-8">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-[3px] overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* 🎥 Background Image */}
              <Image
                src={t.image}
                alt={t.name}
                width={400}
                height={250}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* ▶ Pure White Play Button (SVG) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-7 h-7"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* 👤 Name & Profile */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={t.profile}
                    alt={`${t.name} profile`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-white drop-shadow-lg">
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-sm opacity-90">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📘 Section 2: Stay Ahead of the Curve */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#190653] mb-4">
          Stay Ahead of the Curve
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Get free tutorials, industry tips, and insights from our experts. Stay
          updated with the latest in engineering and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((r, i) => (
            <div
              key={i}
              className="border border-[#E6E1C7] rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="mb-6">
                <Image
                  src={r.icon}
                  alt={r.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#190653] mb-3">
                {r.title}
              </h3>
              <p className="text-gray-600 mb-4">{r.description}</p>
              <span className="text-sm font-medium text-[#171717] bg-[#FFF6DF] px-3 py-1 rounded-[5px] inline-block">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Study;

import Image from "next/image";


const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience",
    icon: "/img/c1.png", // ✅ Replace with your icon path
  },
  {
    title: "Hands-On Learning",
    description: "Work on live projects while mastering theoretical concepts",
    icon: "/img/c2.png", // ✅ Replace with your icon path
  },
  {
    title: "Industry Recognition",
    description: "Certifications valued by top companies worldwide",
    icon: "/img/c3.png", // ✅ Replace with your icon path
  },
];

const Learn = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] p-4">
      <div className="max-w-[66rem] mx-auto  text-center">
        {/* Heading */}
        <h2 className="text-[40px] font-bold text-gray-900 tracking-tighter text-left pb-10">
          Learning focused on your goals
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-30 h-30 relative bg-[#FAF9F6] rounded-[100px] mb-5">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2D1B69] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learn;

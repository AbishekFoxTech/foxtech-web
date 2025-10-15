const Engineering = () => {
  return (
    <section className="bg-[#190653] text-white py-20 p-4">
      <div className="max-w-6xl mx-auto ">
        {/* Heading Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Engineering Ideas Into Reality
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mb-16">
          Our project division delivers solutions that blend creativity,
          technical expertise, and innovation. From mobile apps to product
          design, Foxtech is a trusted partner for businesses.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Software Development */}
          <div className="bg-[#4D43FE] p-10 rounded-[3px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-200 mb-6">
                Custom web and mobile applications built with cutting-edge
                technologies.
              </p>
              <ul className="list-disc list-inside text-gray-100 space-y-2">
                <li>Web Applications</li>
                <li>Mobile Apps</li>
                <li>API Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <button className="mt-8 border border-white text-white px-4 py-2 rounded-[10px] hover:bg-white hover:text-[#4D43FE] transition-colors duration-300">
              View Projects
            </button>
          </div>

          {/* Mechanical Design */}
          <div className="bg-[#B5EF85] text-black p-10 rounded-[3px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mechanical Design</h3>
              <p className="text-gray-800 mb-6">
                Product development and machine design solutions for
                manufacturing industries.
              </p>
              <ul className="list-disc list-inside text-gray-900 space-y-2">
                <li>Product Design</li>
                <li>3D Modeling</li>
                <li>Simulation</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <button className="mt-8 border border-black text-black px-4 py-2 rounded-[10px] hover:bg-black hover:text-[#B5EF85] transition-colors duration-300">
              View Projects
            </button>
          </div>

          {/* Civil & Architecture */}
          <div className="bg-[#E72BE7] p-10 rounded-[3px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-4">Civil & Architecture</h3>
              <p className="text-pink-100 mb-6">
                Comprehensive design solutions for construction and
                infrastructure projects.
              </p>
              <ul className="list-disc list-inside text-pink-50 space-y-2">
                <li>Architectural Design</li>
                <li>Structural Analysis</li>
                <li>Interior Design</li>
                <li>Project Planning</li>
              </ul>
            </div>
            <button className="mt-8 border border-white text-white px-4 py-2 rounded-[10px] hover:bg-white hover:text-[#E72BE7] transition-colors duration-300">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;

"use client";


const Engineering = () => {
  return (
    <section className="bg-[#190653] text-white py-20 p-4">
      <div className="max-w-[66rem] mx-auto ">
        {/* Heading Section */}
        <h2 className="text-[40px] font-bold text-white-900 tracking-tighter">
          Engineering Ideas Into Reality
        </h2>
        <p className="text-[16px] text-gray-300 max-w-3xl mb-16">
          Our project division delivers solutions that blend creativity, <br />
          technical expertise, and innovation. From mobile apps to product <br />
          design, Foxtech is a trusted partner for businesses.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Software Development */}
          <div className="bg-[#4D43FE] p-10 rounded-[3px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-3xl font-bold mb-4 ">Software Development</h3>
              <p className="text-gray-200 mb-6">
                Custom web and mobile applications built with cutting-edge
                technologies.
              </p>
              <ul className="list-disc list-inside text-gray-100 pt-5">
                <li>Web Applications</li>
                <li>Mobile Apps</li>
                <li>API Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <button
              className="mt-8 border border-white text-white w-max px-4 py-2 rounded-[10px] transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(291.92deg, #3200FF -8.85%, #9A00FF 87.4%)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "white";
                e.currentTarget.style.color = "white";
              }}
            >
              View Projects
            </button>

          </div>

          {/* Mechanical Design */}
          <div className="bg-[#B5EF85] text-black p-10 rounded-[3px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-3xl font-bold mb-4">Mechanical Design</h3>
              <p className="text-gray-800 mb-6">
                Product development and machine design solutions for
                manufacturing industries.
              </p>
              <ul className="list-disc list-inside text-gray-900 pt-5">
                <li>Product Design</li>
                <li>3D Modeling</li>
                <li>Simulation</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <button
              className="mt-8 border border-black text-black w-max px-4  py-2 rounded-[10px] transition-all duration-300"
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

          {/* Civil & Architecture */}
          <div className="bg-[#E72BE7] p-10 rounded-[3px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-3xl font-bold mb-4">Civil & Architecture</h3>
              <p className="text-pink-100 mb-6">
                Comprehensive design solutions for construction and
                infrastructure projects.
              </p>
              <ul className="list-disc list-inside text-pink-50 pt-5">
                <li>Architectural Design</li>
                <li>Structural Analysis</li>
                <li>Interior Design</li>
                <li>Project Planning</li>
              </ul>
            </div>
           <button
              className="mt-8 border border-white w-max text-white px-4 py-2 rounded-[10px] transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(291.92deg, #3200FF -8.85%, #9A00FF 87.4%)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "white";
                e.currentTarget.style.color = "white";
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;

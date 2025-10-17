"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnrollCourse() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-16">
      <div className="max-w-[66rem] mx-auto  items-center pb-5">
        <div className="relative bg-gradient-to-r from-[#9A00FF] to-[#3200FF] text-white overflow-hidden rounded-[5px] shadow-xl flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-16 xl:px-24 pt-10 pb-10">
          
          {/* === Left Content === */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tighter">
              Ready to Learn <br className="hidden sm:block" /> or Build with Us?
            </h1>
            <p className="mt-4 text-[18px] sm:text-[18px] text-white/90 max-w-lg mx-auto lg:mx-0">
              Get in touch to start your journey with Fortech. <br />
               Whether you want to enroll in a course or discuss a <br />
                project, we're here to help.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#">
                <span className="px-6 py-3 bg-white text-purple-700 rounded-md font-semibold hover:bg-gradient-to-r from-[#9A00FF] to-[#3200FF] hover:text-white transition text-center inline-block whitespace-nowrap transform hover:-translate-y-0.5">
                  Enroll in a Course
                </span>
              </Link>
              <Link href="#">
                <span className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-gradient-to-r from-[#9A00FF] to-[#3200FF] hover:text-white transition text-center inline-block whitespace-nowrap transform hover:-translate-y-0.5 hover:border-0">
                  Request Project Consultation
                </span>
              </Link>
            </div>
          </div>

          {/* === Right Image Section === */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px]">
              {/* Main Woman Image */}
              <Image
                src="/images/group.svg"
                alt="Woman"
                width={400}
                height={400}
                className="relative z-10 w-full h-auto"
                priority
              />
              
              {/* Decorative Elements */}
              <Image
                src="/images/vector1.svg"
                alt="Flower"
                width={60}
                height={60}
                className="absolute top-8 -right-6 sm:-right-10 w-8 sm:w-10 md:w-12 animate-rotate-slow"
              />
              <Image
                src="/images/vector2.svg"
                alt="Plus Icon"
                width={10}
                height={10}
                className="absolute bottom-15 left-[-20] w-6 sm:w-6 sm:left-0 opacity-90 animate-rotate-anticlock"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Animations === */}
      <style jsx global>{`
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-rotate-slow {
          animation: rotate-slow 10s linear infinite;
        }

        @keyframes rotate-anticlock {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-rotate-anticlock {
          animation: rotate-anticlock 10s linear infinite;
        }
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative bg-[#FFFDF2] overflow-hidden w-full lg:pt-35">
			{/* === Hero Container === */}
			<div className="containerss overflow-hidden">
				<div className="max-w-[66rem] mx-auto relative z-30 flex flex-col-reverse lg:flex-row items-center">

					{/* === Text Content (Left) === */}
					<div className="flex-1 text-center lg:text-left pb-10">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-[#1b0736]  tracking-tighter">
							Learn. <span>Build.</span> Lead
							<br /> with Foxtech
						</h1>

						<p className="mt-5 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
							Industry-focused training and real-world  <br />project execution under one roof.
						</p>

						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
							<Link
								href="#"
								className="px-8 py-4 text-white rounded-md shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
								style={{
									background: "linear-gradient(291.92deg, #3200FF -8.85%, #9A00FF 87.4%)",
								}}
							>
								Explore Courses
							</Link>

							<Link
								href="#"
								className="px-8 py-4 border-2 border-purple-700 text-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition transform hover:-translate-y-0.5"
							>
								View Our Projects
							</Link>
						</div>
					</div>

					{/* === Hero Image Side (Right) === */}
					<div className="flex-1 flex justify-center items-center relative mt-12 md:mt-16 lg:mt-20">

						{/* ✅ Background Vector */}
						<Image
							src="/vector-bg.png"
							alt="Background Vector"
							width={500}
							height={900}
							className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[70%] md:w-[65%] lg:w-[90%] opacity-90"
							priority
						/>

						{/* ✅ Vector Left */}
						<div className="absolute left-[-10] md:-left-10 lg:-left-16 top-1/2 -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[260px] opacity-90">
							<Image src="/vector-l.png" alt="Left Vector" width={260} height={260} className="w-full h-auto" />
						</div>

						{/* ✅ Hero Wrapper (to anchor vectors) */}
						<div className="relative inline-block">
							{/* === Main Hero Image === */}
							<Image
								src="/hero.svg"
								alt="Hero Characters"
								height={500}
								width={600}
								priority
								className="object-contain z-10 w-[80vw] sm:w-[420px] md:w-[500px] lg:w-[550px] h-auto"
							/>

							{/* ✅ Vector Right — locked to hero image */}
							<div className="absolute top-1/2 -translate-y-1/2 right-[-17%] sm:right-[-18%] md:right-[-20%] lg:right-[-27%] w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px] z-[-90]">
								<Image
									src="/vector-r.png"
									alt="Right Vector"
									width={250}
									height={250}
									className="w-full h-auto"
								/>
							</div>

							{/* ✅ Floating Pen */}
							<div className="absolute top-[15%] left-[-10%] sm:left-[-8%] md:left-[-6%] lg:left-[-15%] animate-float-down w-[60px] sm:w-[80px] md:w-[90px] lg:w-[100px] z-20">
								<Image src="/pen.png" alt="Pen" width={100} height={100} className="w-full h-auto" />
							</div>

							{/* ✅ Floating Book */}
							<div className="absolute top-[3%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[-5%] animate-float-up w-[50px] sm:w-[60px] md:w-[70px] lg:w-[60px] z-20">
								<Image src="/book.png" alt="Book" width={80} height={80} className="w-full h-auto" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* === Partners Section === */}
			<div className="text-center bg-white w-full py-16">
				<p className="text-gray-800 text-[15px]">
					We collaborate with 50+{" "}
					<span className="text-purple-700 font-semibold">
						leading universities and companies
					</span>
				</p>

				<div className="mt-6 flex flex-wrap items-center justify-center gap-10 opacity-90">
					<Image src="/img/MIT.png" alt="MIT" width={120} height={40} />
					<Image src="/img/harvard.png" alt="Harvard" width={120} height={40} />
					<Image src="/img/berkeley.webp" alt="Berkeley" width={120} height={40} />
					<Image src="/img/google.png" alt="Google Cloud" width={120} height={40} />
					<Image src="/img/Cambridge.png" alt="Cambridge" width={120} height={40} />
					<Image src="/img/columbia.png" alt="Columbia" width={120} height={40} />
				</div>
			</div>
		</section>
	);
}

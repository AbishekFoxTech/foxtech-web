"use client";
import React from "react";

export default function Footer() {
	return (
		<footer className="bg-[#07011B] text-gray-300 font-inter pt-6" id="contact">
			<div className="container max-w-[76rem] mx-auto px-6 md:px-20 pt-14 pb-8">
				{/* Top Section */}
				<div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-20 border-b border-gray-800 pb-6 mb-12 justify-between pb-15">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<img
							src="/img/Group3.svg"
							alt="Foxtech Logo"
							width={160}
							height={20}
						/>
					</div>

					{/* Phone */}
					<div className="flex items-center gap-3">
						<img
							src="/img/Vector.svg"
							alt="Phone Icon"
							style={{
								width: "20px",
								height: "20px",
								// Needed to respect width & height
							}} />
						<div
							className="flex items-center  text-white font-[500]"
							style={{

								fontSize: "30px", // custom font size
							}}
						>



							+91 9487552280
						</div>


					</div>


					{/* Email */}
					<div className="flex items-center  text-white gap-3"

					>

						<img
							src="/img/Frame.svg"
							alt="Email Icon"
							className="" style={
								{
									width: "24px",
									height: "24px",

								}
							}
						/>
						<div className="text-sm
						" style={{

								fontSize: "20px", // custom font size
							}}> manage@foxtechsolutions.com</div>
					</div>
				</div>

				{/* Middle Grid Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-30 mb-20">
					{/* Training Programs */}
					<div>
						<h4 className="text-white mb-4 text-[16px] font-[600] tracking-wide">
							Training Programs
						</h4>
						<ul className="space-y-2 text-white text-[13px]">
							<li>Mechanical CAD</li>
							<li>Civil Engineering</li>
							<li>Electrical Engineering</li>
							<li>IT & Technology</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white mb-4 text-[16px]  font-bold tracking-wide">
							Quick Links
						</h4>
						<ul className="space-y-2 text-white text-[13px]">
							<li>Project Services</li>
							<li>About Us</li>
							<li>Success Stories</li>
							<li>Contact</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-white mb-4 text-[16px]  tracking-wide font-bold">
							Services
						</h4>
						<ul className="space-y-2  text-white text-[13px]">
							<li>Software Development</li>
							<li>Civil & Architecture</li>
							<li>Mechanical Design</li>
						</ul>
					</div>

					{/* Contact Us */}
					<div>
						<h4 className="text-white mb-4 text-[16px] font-bold  tracking-wide">
							Contact Us
						</h4>
						<p className="text-sm text-[13px] leading-relaxed text-white">
							Foxtech Third Floor,Yehova Complex,
							Foxtech,Market Road,Marthandam,
							Nallur Kanniyakumari Distict Tamil Nadu 629165<br />

						</p>
					</div>
				</div>

				{/* Stay Updated */}
				<div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-center">
					<div>
						<h3 className="text-white mb-2 text-md  tracking-wide text-[24px]">
							Stay Updated
						</h3>
						<p className="text-[13px] text-[ #FFFFFF] mb-4 leading-relaxed font-thin">
							Get the latest updates on new courses, industry trends, and success stories.
						</p>
					</div>

					<div className="flex items-center w-full max-w-md">
						<input
							type="email"
							placeholder="Your Email Address"
							className="bg-[#120A27] text-gray-300 text-sm px-4 py-4 w-full rounded-l-md focus:outline-none placeholder-gray-500"
						/>
						<button
							className="bg-[#4B22F5] hover:bg-[#5E33FF] text-white text-sm font-medium px-6 py-4 rounded-r-md transition-colors duration-300"
						>
							Subscribe
						</button>
					</div>

				</div>

				{/* Bottom Section */}
				<div className=" pt-6 flex flex-col md:flex-row gap-5 justify-between items-center text-xs text-white">
					<div className="flex gap-3">
						{/* Left */}
						<p>© 2025 Foxtech Inc.</p>

						{/* Center Links */}

						<a href="#" className="hover:text-indigo-400 transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-indigo-400 transition-colors">
							Terms & Conditions
						</a>
					</div>


					{/* Right Social Icons */}
					<div className="flex gap-10 mt-4 md:mt-0 ">
						<a href="#">
							<img
								src="/img/facebook-f.svg"
								alt="Facebook"
								className="w-4 h-4 hover:opacity-80 transition-opacity"
							/>
						</a>
						<a href="#">
							<img
								src="/img/Vector (1).svg"
								alt="Twitter"
								className="w-4 h-4 hover:opacity-80 transition-opacity"
							/>
						</a>
						<a href="#">
							<img
								src="/img/Vector (2).svg"
								alt="Instagram"
								className="w-4 h-4 hover:opacity-80 transition-opacity"
							/>
						</a>
						<a href="#">
							<img
								src="/img/youtube.svg"
								alt="YouTube"
								className="w-4 h-4 hover:opacity-80 transition-opacity"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

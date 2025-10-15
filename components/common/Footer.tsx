"use client";
import React from "react";

export default function Footer() {
	return (
		<footer className="bg-[#0B0516] text-gray-300 font-inter p-6" id="contact">
			<div className="container max-w-7xl mx-auto px-6 md:px-20 py-14">
				{/* Top Section */}
				<div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-20 border-b border-gray-800 pb-6 mb-12 justify-between">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<img
							src="/img/Group3.svg"
							alt="Foxtech Logo"
							width={124}
							height={124}
						/>
					</div>

					{/* Phone */}
					<div className="flex items-center gap-3">
						<img
							src="/img/Vector.svg"
							alt="Phone Icon"
							style={{
								width: "14px",
								height: "14px",
								// Needed to respect width & height
							}} />
						<div
							className="flex items-center  text-white"
							style={{

								fontSize: "20px", // custom font size
							}}
						>
							+91 7025080044
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
									width: "20px",
									height: "20px",
									
								}
							}
						/>
						<div className="text-sm
						" style={{

								fontSize: "20px", // custom font size
							}}> foxtech077@gmail.org</div>
					</div>
				</div>

				{/* Middle Grid Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 mb-14">
					{/* Training Programs */}
					<div>
						<h4 className="text-white mb-4 text-sm font-bold tracking-wide">
							Training Programs
						</h4>
						<ul className="space-y-2 text-white text-[12px]">
							<li>Mechanical CAD</li>
							<li>Civil Engineering</li>
							<li>Electrical Engineering</li>
							<li>IT & Technology</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white mb-4 text-sm  font-bold tracking-wide">
							Quick Links
						</h4>
						<ul className="space-y-2 text-white text-[12px]">
							<li>Project Services</li>
							<li>About Us</li>
							<li>Success Stories</li>
							<li>Contact</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-white mb-4 text-sm  tracking-wide font-bold">
							Services
						</h4>
						<ul className="space-y-2  text-white text-[12px]">
							<li>Software Development</li>
							<li>Civil & Architecture</li>
							<li>Mechanical Design</li>
						</ul>
					</div>

					{/* Contact Us */}
					<div>
						<h4 className="text-white mb-4 text-sm font-bold  tracking-wide">
							Contact Us
						</h4>
						<p className="text-sm text-[12px] leading-relaxed text-white">
							Foxtech Third Floor,Yehova Complex,
							Foxtech,Market Road,Marthandam,
							Nallur Kanniyakumari Distict Tamil Nadu 629165<br />
							
						</p>
					</div>
				</div>

				{/* Stay Updated */}
				<div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-center">
					<div>
						<h3 className="text-white mb-2 text-md  tracking-wide text-xl font-bold">
							Stay Updated
						</h3>
						<p className="text-sm text-white mb-4 leading-relaxed">
							Get the latest updates on new courses, industry trends, and success stories.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row ">
						<input
							type="email"
							placeholder="Your Email Address"
							className="bg-[#10081D] border border-none text-gray-300 text-sm px-4 py-3 rounded-lg sm:w-60 focus:outline-none"
						/>
						<button className="bg-[#380DBD] rounded-sm hover:bg-gradient-to-r from-[#9A00FF] to-[#3200FF]  text-white px-6 py-2 text-sm font-medium transition-all">
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
					<div className="flex gap-10 mt-4 md:mt-0">
						<a href="#">
							<img
								src="/img/facebook-f.svg"
								alt="Facebook"
								className="w-3 h-3 hover:opacity-80 transition-opacity"
							/>
						</a>
						<a href="#">
							<img
								src="/img/Vector (1).svg"
								alt="Twitter"
								className="w-3 h-3 hover:opacity-80 transition-opacity"
							/>
						</a>
						<a href="#">
							<img
								src="/img/Vector (2).svg"
								alt="Instagram"
								className="w-3 h-3 hover:opacity-80 transition-opacity"
							/>
						</a>
						<a href="#">
							<img
								src="/img/youtube.svg"
								alt="YouTube"
								className="w-3 h-3 hover:opacity-80 transition-opacity"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

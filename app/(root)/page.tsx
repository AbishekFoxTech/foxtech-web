import FutureReady from "@/components/landingpage/FutureReady";
import Hero from "@/components/landingpage/Hero";

import BlogSection from "@/components/landingpage/BlogSection";

import Learn from "@/components/landingpage/LearningFocused";
import Engineering from "@/components/landingpage/EngineeringIdeas";
import Study from "@/components/landingpage/Studysays"
import Shaping from "@/components/landingpage/ShapingTalent";
import EnrollCourse from "@/components/landingpage/EnrollCourse";
import ProjectService from "@/components/landingpage/ProjectService";

export default function Home() {
	return (
		<>
			<Hero />
			<ProjectService />
			<FutureReady />
			<Shaping />
			<Learn />
			<Engineering />
			<Study />
			<BlogSection/>
			<EnrollCourse/>
			



		</>
	);
}

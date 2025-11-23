import { HeroSection } from "@/components/HeroSections";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { EducationSection } from "@/components/EducationSection";
import { AwardsSection } from "@/components/ActivitiesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
	return (
		<div className="relative">
			<ScrollProgress />
			<Navigation />
			<main>
				<SectionWrapper id="hero">
					<HeroSection />
				</SectionWrapper>
				<SectionWrapper id="about">
					<AboutSection />
				</SectionWrapper>
				<SectionWrapper id="tech">
					<TechStackSection />
				</SectionWrapper>
				<SectionWrapper id="experience">
					<ExperienceSection />
				</SectionWrapper>
				<SectionWrapper id="projects">
					<ProjectsSection />
				</SectionWrapper>
				<SectionWrapper id="skills">
					<SkillsSection />
				</SectionWrapper>
				<SectionWrapper id="activities">
					<AwardsSection />
				</SectionWrapper>
				<SectionWrapper id="education">
					<EducationSection />
				</SectionWrapper>
				<SectionWrapper id="contact">
					<ContactSection />
				</SectionWrapper>
			</main>
			<Footer />
		</div>
	);
}

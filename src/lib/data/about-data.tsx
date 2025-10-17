import { Code2, Palette, Zap, LucideIcon } from "lucide-react";

export interface AboutCard {
	icon: LucideIcon;
	iconColor: string;
	borderColor: string;
	hoverBorderColor: string;
	bgGradient: string;
	bgHover: string;
	title: string;
	description: string;
}

export interface AboutBio {
	mainText: string;
	secondaryText: string;
}

export const aboutCards: AboutCard[] = [
	{
		icon: Code2,
		iconColor: "text-emerald-400",
		borderColor: "border-emerald-500/20",
		hoverBorderColor: "hover:border-emerald-500/40",
		bgGradient: "from-emerald-500 via-emerald-500/50",
		bgHover: "group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
		title: "API Architect",
		description:
			"Designing RESTful that are secure, consistent, and built to scale — with a strong emphasis on clean contracts and efficient service communication.",
	},
	{
		icon: Palette,
		iconColor: "text-cyan-400",
		borderColor: "border-cyan-500/20",
		hoverBorderColor: "hover:border-cyan-500/40",
		bgGradient: "from-cyan-500 via-cyan-500/50",
		bgHover: "group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40",
		title: "Database Expert",
		description:
			"Designing efficient schemas, optimizing queries, and ensuring data integrity across relational and NoSQL systems. Experienced with PostgreSQL, SQLite, and MongoDB.",
	},
	{
		icon: Zap,
		iconColor: "text-blue-400",
		borderColor: "border-blue-500/20",
		hoverBorderColor: "hover:border-blue-500/40",
		bgGradient: "from-blue-500 via-blue-500/50",
		bgHover: "group-hover:bg-blue-500/20 group-hover:border-blue-500/40",
		title: "System Designer",
		description:
			"Engineering distributed architectures with a focus on microservices, caching strategies, and fault tolerance — ensuring reliability and performance under heavy workloads.",
	},
];

export const aboutBio: AboutBio = {
	mainText:
		"I’m a backend engineer passionate about designing scalable systems. I specialize in building reliable APIs, architecting robust databases, and optimizing infrastructure for real-world workloads — always with a focus on clean design, maintainability, and performance.",
	secondaryText:
		"Recently, I’ve been diving into blockchain technologies, exploring how decentralized architectures and smart contracts can shape the next generation of backend systems. Outside of coding, I enjoy contributing to open-source projects, learning new system design paradigms, and staying curious about how distributed systems evolve.",
};

export const aboutSection = {
	sectionNumber: "01",
	sectionLabel: "ABOUT",
	title: {
		main: "Building",
		highlight: "systems",
	},
};

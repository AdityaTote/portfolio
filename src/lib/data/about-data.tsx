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
		"I build backend systems that are fast, stable, and built with intention. Over time, I’ve stepped into AI engineering—working on inference pipelines, agentic workflows, and the infrastructure needed to make modern models actually usable in production. I like operating where backend engineering meets emerging AI tech, turning ideas into systems that hold up under real load.",
	secondaryText:
		"Lately, I’ve been exploring decentralized systems and how blockchain primitives can reshape backend design. Smart contracts, distributed coordination, on-chain logic—there’s something fascinating in how these models rethink trust, scale, and system boundaries. Outside of that, I’m usually experimenting with new AI tooling, digging into open-source ideas, and staying curious about how infrastructure is evolving.",
};

export const aboutSection = {
	sectionNumber: "01",
	sectionLabel: "ABOUT",
	title: {
		main: "$ whoami",
	},
};

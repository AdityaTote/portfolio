import {
	Cloud,
	Code2,
	Database,
	GitBranch,
	Layers,
	Wrench,
} from "lucide-react";
import {
	BunIcon,
	CloudflareIcon,
	DockerIcon,
	HonoIcon,
	PostgresIcon,
	PrismaIcon,
	TSIcon,
} from "@/icons";

export const techStack = [
	{ name: "TypeScript", icon: <TSIcon />, delay: 0 },
	{ name: "Hono", icon: <HonoIcon />, delay: 0.1 },
	{ name: "PostgreSQL", icon: <PostgresIcon />, delay: 0.12 },
	{ name: "Cloudflare", icon: <CloudflareIcon />, delay: 0.14 },
	{ name: "Bun", icon: <BunIcon />, delay: 0.16 },
	{ name: "Prisma", icon: <PrismaIcon />, delay: 0.22 },
	{ name: "Docker", icon: <DockerIcon />, delay: 0.22 },
];

interface SkillCategory {
	title: string;
	icon: typeof Code2;
	skills: string[];
	color: string;
	textClass: string;
	borderClass: string;
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Backend Development",
		icon: Code2,
		skills: [
			"Node.js / Bun / Hono / Express.js",
			"Python / FastAPI / Flask",
			"RESTful APIs / WebSockets",
			"PostgreSQL / SQLite / MongoDB",
			"Drizzle ORM / Prisma",
			"JWT / OAuth2.0",
			"Microservices / Clean Architecture",
		],
		color: "from-blue-500/20 to-cyan-500/20",
		textClass: "group-hover/tag:text-blue-400",
		borderClass: "border-blue-500/20 group-hover/tag:border-blue-500/50",
	},
	{
		title: "DevOps & Infrastructure",
		icon: Cloud,
		skills: [
			"AWS (EC2, S3, CloudFront)",
			"Cloudflare Workers / Vercel",
			"Google Cloud (Vertex AI, Firebase)",
			"Docker / NGINX / PM2",
			"CI/CD (GitHub Actions)",
			"Redis Caching",
		],
		color: "from-orange-500/20 to-red-500/20",
		textClass: "group-hover/tag:text-orange-400",
		borderClass: "border-orange-500/20 group-hover/tag:border-orange-500/50",
	},
	{
		title: "Web3 & Blockchain",
		icon: GitBranch,
		skills: [
			"Solidity / Foundry",
			"Ethereum / Solana",
			"Ethers.js / Wagmi / Viem",
			"Smart Contract Development",
			"Wallet Integration (MetaMask, Phantom)",
			"IPFS / Alchemy",
			"Decentralized Auth & dApp Development",
		],
		color: "from-indigo-500/20 to-violet-500/20",
		textClass: "group-hover/tag:text-indigo-400",
		borderClass: "border-indigo-500/20 group-hover/tag:border-indigo-500/50",
	},
	{
		title: "Frontend Development",
		icon: Layers,
		skills: [
			"TypeScript",
			"React / Next.js / Tanstack Start",
			"React Native / Expo",
			"TanStack Query",
			"Tailwind CSS / shadcn-ui",
			"State Management (Zustand)",
		],
		color: "from-purple-500/20 to-pink-500/20",
		textClass: "group-hover/tag:text-pink-400",
		borderClass: "border-pink-500/20 group-hover/tag:border-pink-500/50",
	},
	{
		title: "Database & ORM",
		icon: Database,
		skills: [
			"PostgreSQL",
			"Turso (libSQL)",
			"MongoDB / Mongoose",
			"Drizzle ORM / Prisma",
			"Database Design & Optimization",
			"Database Migrations & Optimization",
		],
		color: "from-green-500/20 to-emerald-500/20",
		textClass: "group-hover/tag:text-emerald-400",
		borderClass: "border-emerald-500/20 group-hover/tag:border-emerald-500/50",
	},
	{
		title: "Tools & Utilities",
		icon: Wrench,
		skills: [
			"Git / GitHub / Postman",
			"Google Agent Development Kit (ADK)",
			"Vertex AI / Gemini Models",
			"Model Context Protocol (MCP)",
			"Better Auth / NextAuth",
			"Zod Schema Validation",
			"VS Code / Docker Compose / ngrok",
			"Shell Scripting",
		],
		color: "from-yellow-500/20 to-amber-500/20",
		textClass: "group-hover/tag:text-yellow-400",
		borderClass: "border-yellow-500/20 group-hover/tag:border-yellow-500/50",
	},
];

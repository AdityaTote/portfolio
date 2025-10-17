import { Project } from "@/types/projects";

export const web2Projects: Project[] = [
	{
		title: "HiFi – AI-Native Personal Finance Agent",
		tagline: "AI-driven finance assistant built with FastAPI and Vertex AI.",
		label: "Breakthrough Concept Winner – Google Cloud & Hack2Skill (Fi Money)",
		description:
			"Collaborative project built with a 3-member team. " +
			"Developed an AI agent that helps users understand and manage finances — like ChatGPT for your bank account. " +
			"Led backend development using FastAPI and integrated Google Agent Development Kit (ADK) for multi-agent workflows. " +
			"Deployed AI models on Vertex AI with secure data storage on Firebase.",
		tech: ["FastAPI", "Google Agent Development Kit", "Vertex AI", "Firebase"],
		featured: true,
		category: "web2",
		collaboration: true,
		link: "https://web.hifi.click",
		github: "https://github.com/HiFinance-pvt/repositories",
	},
	{
		title: "Untangle – AI-Powered Document Simplifier",
		tagline:
			"AI assistant that explains complex legal documents in simple terms.",
		label: "Rookie House Project",
		description:
			"Collaborated on a 4 member group project to build an AI-driven platform that helps users understand legal documents through summaries and interactive chat. " +
			"Developed the backend using Hono and Drizzle ORM, deployed on Cloudflare Workers with Turso as the database. " +
			"Integrated Google Agent Development Kit (ADK) and Gemini models for document parsing and risk analysis. " +
			"Implemented secure API design and scalable agent workflows for real-time text interpretation.",
		tech: [
			"Hono",
			"Drizzle ORM",
			"Turso (libSQL)",
			"Cloudflare Workers",
			"Google ADK",
			"Gemini Models",
			"TypeScript",
		],
		featured: true,
		category: "web2",
		link: "https://untangle.rookie.house",
		github: "https://github.com/rookie-house/untangle",
		collaboration: true,
	},
	{
		title: "Splitwise MCP Server",
		tagline: "Model Context Protocol server bridging AI agents with Splitwise.",
		label: "HiFinance Pvt.",
		description:
			"Built an MCP (Model Context Protocol) server enabling AI agents to interact with the Splitwise API for expense and group management. " +
			"Implemented authentication, expense creation, and data retrieval endpoints with strict schema validation using zod. " +
			"Developed and deployed on Cloudflare Workers using TypeScript and Wrangler, optimized for reliability and low-latency responses.",
		tech: [
			"Cloudflare Workers",
			"TypeScript",
			"Wrangler",
			"zod",
			"Model Context Protocol (MCP)",
			"Splitwise API",
		],
		featured: true,
		category: "web2",
		link: "https://splitwise-mcp.hifi.click",
		github: "https://github.com/HiFinance-pvt/splitwise-mcp",
		collaboration: false,
	},
	{
		title: "SecondBrain",
		tagline: "Personal knowledge management system with smart search.",
		description:
			"Built a platform to organize and retrieve digital content using semantic search. " +
			"Designed REST APIs with Flask and MongoDB, and a responsive Next.js frontend with NextAuth authentication. " +
			"Implemented tagging, bookmarking, and fast custom search for efficient information recall.",
		tech: ["Flask", "MongoDB", "Next.js", "NextAuth"],
		featured: false,
		category: "web2",
		collaboration: false,
		github: "https://github.com/AdityaTote/SecondBrain",
	},
	{
		title: "PYQ App — Mobile Question Paper Viewer",
		tagline:
			"Expo app for browsing & viewing past-question papers by semester & subject.",
		label: "Expo / University Tool",
		description:
			"Developed a mobile-first app (React Native / Expo) for Mechanical Engineering students to easily browse past-year question papers. " +
			"Organized papers by semester, subject, and year, with in-app viewing, bookmarking, and offline support. " +
			"Built using Expo Router + TypeScript, optimized for both mobile & web, with lightweight UI and responsive navigation.",
		tech: [
			"Expo",
			"React Native",
			"TypeScript",
			"Expo Router",
			"PDF Viewer / WebView",
			"Offline / Bookmarking",
		],
		featured: true,
		category: "web2",
		github: "https://github.com/AdityaTote/pyq-app",
		collaboration: false,
	},
	{
		title: "Discord Bot with URL Shortener",
		tagline: "Discord bot integrated with Express server to shorten URLs.",
		label: "Personal / Open Source",
		description:
			"Built a full-stack Discord bot that lets users generate short URLs via commands in Discord. " +
			"Developed an Express.js backend with REST API endpoints and MongoDB for persistent storage. " +
			"Bot built using Discord.js v14, with commands parsing, URL validation, and nanoid-based unique ID generation. " +
			"Deployed integration between bot and server for seamless user experience.",
		tech: [
			"Node.js",
			"Express.js",
			"Discord.js v14",
			"MongoDB",
			"Mongoose",
			"nanoid",
			"JavaScript",
		],
		featured: false,
		category: "web2",
		github: "https://github.com/AdityaTote/discord-bot",
		collaboration: false,
	},
];

export const web3Projects: Project[] = [
	{
		title: "Dagent – Decentralized AI Agent Marketplace",
		tagline: "On-chain marketplace for AI agents with staking and rewards.",
		label: "ETHGlobal Delhi 2025",
		description:
			"Built with a 4-member team at ETHGlobal Delhi. " +
			"Developed a decentralized marketplace enabling AI agent listing, staking, and on-chain rewards. " +
			"Implemented Solidity contracts for Agent Registry and Staking using Foundry on Sepolia. " +
			"Led backend APIs with Hono and PostgreSQL on Cloudflare Workers, integrating Wagmi + ethers.js for wallet connectivity.",
		tech: [
			"Next.js",
			"Solidity",
			"Foundry",
			"Hono",
			"PostgreSQL",
			"Wagmi",
			"ethers.js",
			"Better Auth",
			"Cloudflare Workers",
		],
		featured: true,
		category: "web3",
		collaboration: true,
		link: "https://dagent.rookie.house",
		github: "https://github.com/orgs/d-agent/repositories",
	},
	{
		title: "BonkBot – Web3 Transaction Platform",
		tagline: "Automated Solana wallet generation and transaction management.",
		description:
			"Developed a platform that auto-generates Solana wallets and manages secure blockchain transactions. " +
			"Built APIs using Hono on Cloudflare Workers and integrated Solana Web3.js for on-chain operations. " +
			"Used Turso + SQLite + Drizzle ORM for key management and transaction tracking, and built a responsive frontend with TanStack Start.",
		tech: [
			"Hono",
			"TanStack Start",
			"Turso",
			"SQLite",
			"Drizzle",
			"Solana Web3.js",
			"Cloudflare Workers",
		],
		featured: true,
		category: "web3",
		collaboration: false,
		link: "https://bonk-bot.adityatote.tech",
		github: "https://github.com/AdityaTote/bonk-bot",
	},
	{
		title: "Ethereum Wallet Adapter",
		tagline: "Reusable wallet integration module for Ethereum dApps.",
		description:
			"Built a modular Ethereum wallet adapter supporting MetaMask, WalletConnect, and multiple accounts. " +
			"Implemented transaction signing and network switching using Wagmi + Viem. " +
			"Designed a responsive dApp UI for secure authentication and real-time wallet state tracking.",
		tech: [
			"Next.js",
			"TypeScript",
			"Wagmi",
			"Viem",
			"TanStack Query",
			"Tailwind CSS",
		],
		featured: true,
		category: "web3",
		collaboration: false,
		link: "https://eth-wallet-adapter.adityatote.tech",
		github: "https://github.com/AdityaTote/eth-wallet-adapter",
	},
	{
		title: "CourseHub – Full-Stack Course Selling Platform",
		tagline: "E-learning platform with blockchain-based payments.",
		description:
			"Built with a teammate as a hybrid Web2/Web3 course-selling platform. " +
			"Integrated Solana for decentralized payments and implemented REST APIs for course management using Node.js + Express.js. " +
			"Managed PostgreSQL database and optimized media delivery using AWS S3 and CloudFront CDN.",
		tech: [
			"React",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"Solana",
			"AWS S3",
			"CloudFront",
		],
		featured: true,
		category: "web3",
		collaboration: true,
		github: "https://github.com/AdityaTote/coursehub",
	},
	{
		title: "Solana Token Platform",
		tagline: "Create & manage SPL tokens on Solana with an intuitive React UI.",
		description:
			"Built a comprehensive web app for launching SPL tokens and managing wallet operations on Solana Devnet. " +
			"Implemented token creation (Token-2022), metadata configuration, airdrops, SOL transfers, balance checks, and message signing via Phantom wallet. " +
			"Built in React + TypeScript, using Solana Web3.js, SPL-Token, and wallet-adapter libraries. " +
			"Styled with Tailwind CSS + shadcn/ui, and deployed with Vite for fast frontend experience.",
		tech: [
			"React",
			"TypeScript",
			"Vite",
			"Tailwind CSS",
			"Solana Web3.js",
			"SPL-Token",
			"Wallet-Adapter React",
			"Framer Motion",
			"Radix UI / shadcn/ui",
		],
		featured: false,
		category: "web3",
		github: "https://github.com/AdityaTote/solana-token-platform",
		collaboration: false,
	},
	{
		title: "Web3 Wallet (ETH + SOL)",
		tagline:
			"Full-stack wallet demo with mnemonic, balances & transfer support.",
		label: "Demo / Learning Project",
		description:
			"Built a wallet app that derives Ethereum and Solana accounts from a BIP-39 mnemonic, shows ETH balances via Alchemy, and sends ETH via an Express backend. " +
			"Frontend in React + Vite + Tailwind CSS; backend built with Express and Alchemy SDK for Sepolia interactions. " +
			"Uses ethers.js, @solana/web3.js, bip39, ed25519-hd-key, and tweetnacl for key derivation and crypto flows.",
		tech: [
			"React",
			"Vite",
			"Tailwind CSS",
			"Express.js",
			"ethers.js",
			"@solana/web3.js",
			"bip39",
			"ed25519-hd-key",
			"Alchemy SDK",
			"JavaScript",
		],
		featured: false,
		category: "web3",
		github: "https://github.com/AdityaTote/web3-wallet",
		collaboration: false,
	},
];

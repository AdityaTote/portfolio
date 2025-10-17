"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { web2Projects, web3Projects } from "@/lib/data";
import { useState } from "react";
import type { Project } from "@/types/projects";

export const ProjectsSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.08),transparent_50%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto">
				<motion.div
					className="mb-20 max-w-4xl"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="font-mono text-xs text-cyan-400">
						03 <span className="text-muted-foreground">— SELECTED WORK</span>
					</span>
					<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
						Featured <span className="text-cyan-400">projects</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl font-mono">
						<span className="text-cyan-400">{"//"} </span>Full-stack
						applications spanning Web3, AI, and modern cloud infrastructure.
					</p>
				</motion.div>
				{renderProjects(web2Projects, "Web2")}
				{renderProjects(web3Projects, "Web3")}
			</div>
		</section>
	);
};

const ProjectCard = ({
	project,
	index,
	category,
}: {
	project: Project;
	index: number;
	category: string;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const isWeb3 = category === "Web3";
	const maxLength = 180;
	const shouldTruncate = project.description.length > maxLength;
	const displayDescription =
		!isExpanded && shouldTruncate
			? project.description.slice(0, maxLength) + "..."
			: project.description;

	return (
		<motion.div
			initial={{ opacity: 0, x: 30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className={project.featured ? "w-[700px]" : "w-[500px]"}
		>
			<Card
				className={`
					group relative overflow-hidden cursor-pointer h-full min-h-[400px]
					bg-[#0d1117] transition-all duration-500
					${
						isWeb3
							? "border-emerald-500/20 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
							: "border-gray-800 hover:border-cyan-500/40"
					}
					${project.featured ? "p-12" : "p-8"}
				`}
			>
				{isWeb3 && (
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_60%)]" />
				)}

				{project.link && (
					<div className="absolute top-4 right-4 flex items-center gap-2">
						<div
							className={`w-2 h-2 rounded-full animate-pulse ${
								isWeb3 ? "bg-emerald-400" : "bg-cyan-400"
							}`}
						/>
						<span
							className={`text-xs font-mono ${
								isWeb3 ? "text-emerald-400" : "text-cyan-400"
							}`}
						>
							LIVE
						</span>
					</div>
				)}

				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]" />

				<div className="relative space-y-6 flex flex-col h-full">
					<div className="space-y-3 flex-1">
						<div className="space-y-2">
							<h3
								className={`font-bold font-mono group-hover:text-emerald-400 transition-colors duration-300 ${
									project.featured ? "text-2xl md:text-3xl" : "text-xl"
								}`}
							>
								{project.title}
							</h3>
							<p
								className={`text-sm font-mono italic ${
									isWeb3 ? "text-emerald-400/80" : "text-cyan-400/80"
								}`}
							>
								{project.tagline}
							</p>
							{project.label && (
								<span className="inline-block text-xs px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
									{project.label}
								</span>
							)}
						</div>
						<p
							className={`text-muted-foreground leading-relaxed ${
								project.featured ? "text-base" : "text-sm"
							}`}
						>
							{displayDescription}
							{shouldTruncate && (
								<button
									onClick={() => setIsExpanded(!isExpanded)}
									className="ml-2 text-emerald-400 hover:text-emerald-300 font-mono text-sm transition-colors"
								>
									{isExpanded ? "Show less" : "Read more"}
								</button>
							)}
						</p>
					</div>

					<div className="flex flex-wrap gap-2">
						{project.tech.map((tech, i) => (
							<span
								key={i}
								className={`text-xs px-3 py-1.5 bg-gray-900 border text-foreground font-mono tracking-wide transition-colors ${
									isWeb3
										? "border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5"
										: "border-gray-800 hover:border-cyan-500/40"
								}`}
							>
								{tech}
							</span>
						))}
					</div>

					<div className="flex items-center gap-3 pt-4">
						{project.link && (
							<motion.a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center gap-2 px-4 py-2 border transition-colors duration-300 font-mono text-sm ${
									isWeb3
										? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20"
										: "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<ExternalLink className="h-4 w-4" />
								View Live
							</motion.a>
						)}
						{project.github && (
							<motion.a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors duration-300 font-mono text-sm text-muted-foreground hover:text-foreground"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Github className="h-4 w-4" />
								Source
							</motion.a>
						)}
					</div>
				</div>
			</Card>
		</motion.div>
	);
};

const renderProjects = (projectList: Project[], category: string) => (
	<div className="mb-20">
		<motion.div
			className="mb-8"
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<h3 className="text-3xl font-bold font-mono">
				<span
					className={category === "Web2" ? "text-emerald-400" : "text-cyan-400"}
				>
					{category}
				</span>{" "}
				Projects
			</h3>
		</motion.div>

		<div className="overflow-x-auto overflow-y-visible pb-8 -mx-6 px-6 scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
			<div className="flex gap-6 min-w-max">
				{projectList.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						index={index}
						category={category}
					/>
				))}
			</div>
		</div>
	</div>
);

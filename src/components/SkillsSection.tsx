"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills-data";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d] overflow-hidden">
			{/* Refined grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
				className="mb-20"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase">
					04 — Skills
				</span>
				<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 font-mono">
					Technical <span className="text-emerald-400">Arsenal</span>
				</h2>
				<p className="text-xl text-muted-foreground max-w-2xl">
					Core technologies and frameworks I leverage to build scalable, high-performance systems.
				</p>
			</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillCategories.map((category, index) => (
						<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className="group relative"
				>
					<div className="relative h-full bg-[#0d1117] border border-gray-800 rounded-lg p-6 hover:border-emerald-500/40 transition-all duration-500 flex flex-col">
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_70%)] rounded-lg" />
						
						<div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-800/50 relative">
						<div className="p-3 rounded-md bg-gray-900 border border-gray-800">
							<category.icon className="w-6 h-6 text-muted-foreground group-hover:text-emerald-400 transition-colors duration-300" />
						</div>
							<div className="flex-1">
								<h3 className="font-bold text-lg text-foreground tracking-tight font-mono">
									{category.title}
								</h3>
								<div className="flex items-center gap-2 mt-1">
									<div className="h-1 w-full rounded-full bg-gray-800 overflow-hidden">
										<div
											className={cn(
												"h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
												category.textClass.replace("text-", "bg-")
											)}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-wrap gap-1.5 relative">
							{category.skills
								.flatMap((s) => s.split(" / "))
								.map((skill, skillIndex) => (
									<div
										key={skillIndex}
										className={cn(
											"px-2.5 py-1.5 rounded text-xs font-mono border transition-all duration-300 group/tag cursor-default bg-gray-900",
											category.borderClass,
											"hover:bg-opacity-100"
										)}
									>
										<span
											className={cn(
												"text-muted-foreground transition-colors duration-300 group-hover/tag:text-foreground",
												category.textClass
											)}
										>
											{skill}
										</span>
									</div>
							))}
						</div>
					</div>
				</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

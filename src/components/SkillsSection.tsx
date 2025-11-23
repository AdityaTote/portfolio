"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills-data";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d] overflow-hidden">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center gap-3 mb-6">
						<div className="h-[1px] w-12 bg-emerald-500/50" />
						<span className="font-mono text-xs tracking-[0.2em] text-emerald-400 uppercase">
							System Diagnostics
						</span>
						<div className="h-[1px] flex-1 bg-emerald-500/10" />
					</div>

					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
								Technical <span className="text-emerald-400">Expertise</span>
							</h2>
							<p className="text-muted-foreground max-w-xl text-lg">
								Analyzing active modules and proficiency levels across system
								architecture.
							</p>
						</div>
						<div className="font-mono text-xs text-emerald-500/60 border border-emerald-500/20 px-4 py-2 rounded bg-emerald-500/5">
							<div>STATUS: ONLINE</div>
							<div>MODULES: {skillCategories.length} ACTIVE</div>
						</div>
					</div>
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
							<div
								className={cn(
									"absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-lg",
									category.color
								)}
							/>
							<div className="relative h-full bg-[#0d1117] border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors duration-300 flex flex-col">
								<div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-800/50">
									<div
										className={cn(
											"p-3 rounded-md bg-gradient-to-br border border-white/5",
											category.color
										)}
									>
										<category.icon className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="font-bold text-lg text-foreground tracking-tight">
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

								<div className="flex flex-wrap gap-1.5">
									{category.skills
										.flatMap((s) => s.split(" / "))
										.map((skill, skillIndex) => (
											<div
												key={skillIndex}
											className={cn(
												"px-2 py-1 rounded text-[10px] font-mono border transition-all duration-300 group/tag cursor-default bg-[#0a0f0d]/50",
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

								<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
									<div className="flex gap-1">
										<div className="w-1 h-1 bg-foreground rounded-full" />
										<div className="w-1 h-1 bg-foreground rounded-full" />
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/lib/data";
import { Card } from "@/components/ui/card";

export const SkillsSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="mb-20 text-center max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400">
						04 — Skills
					</span>
					<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
						Technical Expertise
					</h2>
					<p className="text-xl text-muted-foreground">
						A comprehensive overview of my technical skills and proficiency
						levels across different domains.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
						>
							<Card className="p-6 bg-[#0d1117] border-gray-800 hover:border-emerald-500/40 transition-all duration-500 group h-full relative overflow-hidden">
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_70%)]" />
								<div className="relative flex items-center gap-3 mb-6">
									<div
										className={`p-2.5 bg-emerald-500/10 group-hover:scale-110 transition-transform duration-300 border border-gray-800 group-hover:border-emerald-500/40`}
									>
										<category.icon className="h-5 w-5 text-emerald-400" />
									</div>
									<h3 className="text-lg font-bold">{category.title}</h3>
								</div>

								<div className="relative space-y-3">
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.4,
												delay: categoryIndex * 0.1 + skillIndex * 0.05,
											}}
										>
											<span className="text-sm font-medium text-foreground font-mono">
												{skill}
											</span>
										</motion.div>
									))}
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

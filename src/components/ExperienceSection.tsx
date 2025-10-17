"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";
import { Card } from "@/components/ui/card";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export const ExperienceSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase">
						02 — Experience
					</span>
					<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
						Professional Journey
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl">
						Building products and leading teams across different scales and
						industries.
					</p>
				</motion.div>

				<motion.div
					className="space-y-8"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					{experiences.map((exp, index) => (
						<motion.div key={index} variants={item}>
							<Card className="p-8 md:p-10 bg-[#0d1117] border-gray-800 hover:border-emerald-500/40 transition-all duration-500 group relative overflow-hidden">
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_70%)]" />

								<div className="relative">
									<div className="grid md:grid-cols-12 gap-6 md:gap-8">
										<div className="md:col-span-4 space-y-4">
											<div className="flex items-start gap-3">
												<div className="p-2 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-gray-800 group-hover:border-emerald-500/40 transition-colors duration-300">
													<Briefcase className="h-5 w-5 text-emerald-400" />
												</div>
												<div className="flex-1">
													<h3 className="text-2xl font-bold mb-1">
														{exp.company}
													</h3>
													<p className="text-lg font-medium text-foreground/80">
														{exp.position}
													</p>
												</div>
											</div>

											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<Calendar className="h-4 w-4" />
												<span>{exp.duration}</span>
											</div>

											<div className="text-sm text-muted-foreground">
												{exp.location}
											</div>
										</div>

										<div className="md:col-span-8 space-y-6">
											<ul className="space-y-3">
												{exp.achievements.map((achievement, i) => (
													<li
														key={i}
														className="flex gap-3 text-muted-foreground leading-relaxed"
													>
														<span className="text-foreground font-bold mt-1">
															•
														</span>
														<span>{achievement}</span>
													</li>
												))}
											</ul>

											<div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
												{exp.technologies.map((tech, i) => (
													<span
														key={i}
														className="text-xs px-3 py-1.5 bg-gray-900 border border-gray-800 text-foreground/80 font-medium font-mono tracking-wide hover:border-emerald-500/40 transition-colors"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

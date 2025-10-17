"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { Card } from "@/components/ui/card";

export const EducationSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="mb-20 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400">
						06 — Education
					</span>
					<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
						Learning & Growth
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Continuous learning through formal education and professional
						certifications.
					</p>
				</motion.div>

				<div className="flex justify-center">
					<motion.div
						className="max-w-4xl w-full space-y-8"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						{education.map((edu, index) => (
							<Card
								key={index}
								className="p-8 bg-[#0d1117] border-gray-800 hover:border-blue-500/40 transition-all duration-500 group relative overflow-hidden"
							>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_70%)]" />
								<div className="relative flex items-start gap-4 mb-6">
									<div className="p-3 bg-blue-500/10 group-hover:bg-blue-500/20 border border-gray-800 group-hover:border-blue-500/40 transition-colors duration-300">
										<GraduationCap className="h-6 w-6 text-blue-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold mb-2 font-mono">
											{edu.degree}
										</h3>
										<p className="text-lg font-medium text-foreground/80 mb-1 font-mono">
											{edu.institution}
										</p>
										<div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
											<span>{edu.duration}</span>
											<span>•</span>
											<span>{edu.location}</span>
										</div>
									</div>
								</div>

								<p className="text-muted-foreground leading-relaxed mb-6">
									{edu.description}
								</p>

								<div className="space-y-2">
									{edu.achievements.map((achievement, i) => (
										<div key={i} className="flex items-center gap-2">
											<span className="text-foreground font-bold">✓</span>
											<span className="text-sm text-muted-foreground">
												{achievement}
											</span>
										</div>
									))}
								</div>
							</Card>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

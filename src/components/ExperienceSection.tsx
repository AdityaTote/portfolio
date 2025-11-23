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
		<section className="py-24 px-6 relative bg-[#0a0f0d]">
		<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
		<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="mb-16"
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
			className="grid md:grid-cols-2 gap-5"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-100px" }}
		>
					{experiences.map((exp, index) => (
						<motion.div key={index} variants={item}>
							<Card className="p-5 bg-[#0d1117] border-gray-800 hover:border-emerald-500/40 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_70%)]" />

				<div className="relative flex-1 flex flex-col space-y-3">
					{/* Header */}
					<div className="flex items-start gap-2.5">
						<div className="p-2 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-gray-800 group-hover:border-emerald-500/40 transition-colors duration-300 flex-shrink-0">
							<Briefcase className="h-4 w-4 text-emerald-400" />
						</div>
						<div className="flex-1 min-w-0">
							<h3 className="text-xl font-bold mb-0.5 truncate">
								{exp.company}
							</h3>
							<p className="text-base font-medium text-foreground/80 line-clamp-1">
								{exp.position}
							</p>
						</div>
					</div>

					{/* Meta info */}
					<div className="flex flex-col gap-1 text-sm text-muted-foreground">
						<div className="flex items-center gap-1.5">
							<Calendar className="h-4 w-4" />
							<span>{exp.duration}</span>
						</div>
						<div className="pl-6">{exp.location}</div>
					</div>

					{/* Achievements */}
					<ul className="space-y-2 flex-1">
						{exp.achievements.map((achievement, i) => (
							<li
								key={i}
								className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
							>
								<span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
								<span className="line-clamp-2">{achievement}</span>
							</li>
						))}
					</ul>

					{/* Technologies */}
					<div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800">
						{exp.technologies.slice(0, 6).map((tech, i) => (
							<span
								key={i}
								className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 text-foreground/70 font-mono tracking-wide hover:border-emerald-500/40 transition-colors"
							>
								{tech}
							</span>
						))}
						{exp.technologies.length > 6 && (
							<span className="text-xs px-2 py-1 text-muted-foreground">
								+{exp.technologies.length - 6}
							</span>
						)}
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

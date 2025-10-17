"use client";

import { motion } from "motion/react";
import { awards } from "@/lib/data";
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

export const AwardsSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400">
						07 — Achievements
					</span>
					<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
						Awards & Recognition
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl">
						Competitions, hackathons, and milestones throughout my academic and
						professional journey.
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 gap-6"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					{awards.map((award, index) => (
						<motion.div key={index} variants={item} className="md:col-span-1">
							<Card className="group relative overflow-hidden bg-[#0d1117] border-gray-800 hover:border-cyan-500/40 transition-all duration-500 p-8 h-full">
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_70%)]" />

								<div className="relative h-full flex flex-col">
									{award.imageUrl && (
										<div className="overflow-hidden rounded-lg mb-6 -mx-8 -mt-8 h-56 md:h-64 relative">
											<img
												src={award.imageUrl}
												alt={award.title}
												className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
											/>
										</div>
									)}

									<div className="flex items-start gap-4 mb-6">
										<div className="p-3 bg-cyan-500/10 group-hover:bg-cyan-500/20 border border-gray-800 group-hover:border-cyan-500/40 transition-colors duration-300 flex-shrink-0">
											<award.icon className="h-6 w-6 text-cyan-400" />
										</div>
										<div className="text-sm font-bold text-muted-foreground pt-3 font-mono">
											{award.year}
										</div>
									</div>

									<div className="space-y-3 flex-grow">
										<div>
											<h3 className="text-2xl font-bold mb-2 group-hover:text-foreground/80 transition-colors duration-300 font-mono">
												{award.title}
											</h3>
											<div className="text-sm font-medium text-foreground/70 mb-3 font-mono">
												{award.category}
											</div>
										</div>

										<p className="text-base text-muted-foreground leading-relaxed">
											{award.description}
										</p>
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

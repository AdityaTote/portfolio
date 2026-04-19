"use client";

import { motion } from "framer-motion";
import { aboutBio, aboutSection } from "@/lib/data";


export const AboutSection = () => {
	return (
		<section className="py-24 px-6 relative bg-[#0a0f0d]">
		<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
		<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />

			<div className="max-w-4xl mx-auto relative">
				<motion.div
					className="mb-16"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex items-center justify-center gap-4 mb-8">
						<span className="font-mono text-xs text-emerald-400">
							{aboutSection.sectionNumber}
						</span>
						<div className="h-px flex-1 max-w-16 bg-gradient-to-r from-emerald-500/50 to-transparent" />
						<span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
							{aboutSection.sectionLabel}
						</span>
						<div className="h-px flex-1 max-w-16 bg-gradient-to-l from-emerald-500/50 to-transparent" />
					</div>
					<h2 className="text-4xl md:text-6xl font-bold text-center font-mono">
						<span className="text-emerald-400">$</span>{" "}
						<span className="text-foreground">whoami</span>
					</h2>
				</motion.div>

				<motion.div
					className="space-y-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="text-center">
						<p className="text-xl text-muted-foreground leading-relaxed">
							{aboutBio.mainText} {aboutBio.secondaryText}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

"use client";

import { motion } from "motion/react";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative py-12 px-6 border-t border-gray-800 bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
			<div className="max-w-7xl mx-auto relative">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-sm text-muted-foreground font-mono"
					>
						<span className="text-emerald-400">{"//"}</span> © {currentYear}{" "}
						Aditya Tote. All rights reserved.
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-2xl font-bold tracking-tight font-mono text-emerald-400"
					>
						AT
					</motion.div>
				</div>
			</div>
		</footer>
	);
};

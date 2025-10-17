"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export const TechStackSection = () => {
	return (
		<section className="py-32 px-6 relative overflow-hidden bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative">
				<div className="grid lg:grid-cols-12 gap-16 items-center">
					<motion.div
						className="lg:col-span-5"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="font-mono text-xs text-emerald-400">
							03 <span className="text-muted-foreground">— CORE STACK</span>
						</span>
						<h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
							Current
							<br />
							<span className="text-emerald-400">Tech Stack</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-md font-mono">
							<span className="text-emerald-400">{"//"} </span>Primary tools I
							use for building scalable systems
						</p>
					</motion.div>

					<div className="lg:col-span-7">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{techStack.map((tech, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
									whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: tech.delay,
										ease: "easeOut",
									}}
									whileHover={{
										scale: 1.06,
										rotate: 1,
										y: -4,
										transition: { duration: 0.3, ease: "easeOut" },
									}}
									className={`
                    flex flex-col items-center gap-5 p-10
                    bg-[#0d1117] border border-gray-800
                    hover:border-emerald-500/50 hover:bg-emerald-500/[0.07]
                    hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
                    transition-all duration-300 cursor-default
                    relative group overflow-hidden rounded-sm
                    ${index % 3 === 1 ? "mt-8" : ""}
                    ${index % 3 === 2 ? "mt-4" : ""}
                  `}
								>
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]" />

									<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
									<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />

									<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
									<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />

									<motion.span
										className="text-5xl relative z-10 filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_4px_12px_rgba(16,185,129,0.5)] transition-all duration-300"
										whileHover={{ scale: 1.15, rotate: 5 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
									>
										{tech.icon}
									</motion.span>
									<span className="text-sm font-mono tracking-wide text-muted-foreground group-hover:text-emerald-400 transition-colors duration-300 relative z-10 font-medium">
										{tech.name}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

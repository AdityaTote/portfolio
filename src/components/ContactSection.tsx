"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { socials } from "@/lib/data";

export const ContactSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-12 gap-16 items-center">
					<motion.div
						className="lg:col-span-7 space-y-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="font-mono text-xs text-emerald-400">
							05 <span className="text-muted-foreground">— GET IN TOUCH</span>
						</span>

						<div className="space-y-4">
							<div className="font-mono text-sm text-muted-foreground">
								<span className="text-emerald-400">{"//"}</span> Available for
								collaboration
							</div>
							<h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95]">
								Let&apos;s build
								<br />
								<span className="text-emerald-400">together</span>
							</h2>
						</div>

						<div className="font-mono text-sm space-y-2 text-muted-foreground ml-4 border-l-2 border-emerald-500/30 pl-6">
							<p className="text-base">
								<span className="text-cyan-400">const</span>{" "}
								<span className="text-foreground">openToWork</span> ={" "}
								<span className="text-emerald-400">true</span>;
							</p>
							<p className="text-sm">
								<span className="text-emerald-400">{"//"} </span>Discussing
								backend architecture, system design, or new projects
							</p>
						</div>
					</motion.div>

					<motion.div
						className="lg:col-span-5 space-y-6"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="space-y-4">
							{socials.map((social, index) => (
								<motion.a
									key={index}
									href={social.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 p-4 bg-[#0d1117] border border-gray-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 group relative"
									whileHover={{ x: 8 }}
									transition={{ duration: 0.2 }}
								>
									<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-full bg-emerald-500 transition-all duration-300" />

									<div className="p-2 bg-emerald-500/10 border border-gray-800 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/20 transition-colors duration-300">
										<social.icon className="h-5 w-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
									</div>
									<div className="flex-1 font-mono">
										<div className="text-xs text-muted-foreground">
											{social.label}
										</div>
										<div className="text-sm font-medium">{social.handle}</div>
									</div>
									<div className="text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
										connect()
									</div>
								</motion.a>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 }}
							className="mt-8 p-4 bg-[#0d1117] border border-gray-800 font-mono text-xs space-y-2"
						>
							<div className="flex items-center gap-2 text-muted-foreground">
								<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
								<span>
									Status: <span className="text-emerald-400">Available</span>
								</span>
							</div>
							<div className="text-muted-foreground">
								Response time: <span className="text-cyan-400">~24h</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { aboutBio, aboutSection } from "@/lib/data";
import { Code2, Database, Zap } from "lucide-react";

const highlights = [
	{
		icon: Code2,
		label: "API Design",
		color: "text-emerald-400",
		bgColor: "bg-emerald-500/10",
		borderColor: "border-emerald-500/20",
	},
	{
		icon: Database,
		label: "Database Expert",
		color: "text-cyan-400",
		bgColor: "bg-cyan-500/10",
		borderColor: "border-cyan-500/20",
	},
	{
		icon: Zap,
		label: "System Design",
		color: "text-blue-400",
		bgColor: "bg-blue-500/10",
		borderColor: "border-blue-500/20",
	},
];

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
					<div className="text-center space-y-4">
						<p className="text-xl text-muted-foreground leading-relaxed">
							{aboutBio.mainText}
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 pt-6">
						{highlights.map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={item.label}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
								>
									<div
										className={`flex items-center gap-3 px-5 py-3 ${item.bgColor} ${item.borderColor} border rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
									>
										<Icon className={`h-5 w-5 ${item.color}`} />
										<span className="text-sm font-medium text-foreground">
											{item.label}
										</span>
									</div>
								</motion.div>
							);
						})}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="pt-8"
					>
						<Card className="p-6 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent border-emerald-500/20">
							<div className="flex items-start gap-4">
								<div className="text-3xl">🚀</div>
								<div className="space-y-2">
									<p className="text-base text-muted-foreground leading-relaxed">
										{aboutBio.secondaryText}
									</p>
								</div>
							</div>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { aboutCards, aboutBio, aboutSection } from "@/lib/data";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
	return (
		<section className="py-32 px-6 relative bg-[#0a0f0d]">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
			<div className="max-w-7xl mx-auto relative">
				<div className="grid lg:grid-cols-12 gap-16">
					<motion.div
						className="lg:col-span-5 space-y-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-2">
							<span className="font-mono text-xs text-emerald-400">
								{aboutSection.sectionNumber}{" "}
								<span className="text-muted-foreground">
									— {aboutSection.sectionLabel}
								</span>
							</span>
							<h2 className="text-5xl md:text-6xl font-bold leading-tight">
								{aboutSection.title.main}
								<br />
								<span className="text-emerald-400">
									{aboutSection.title.highlight}
								</span>
							</h2>
						</div>
					</motion.div>

					<motion.div
						className="lg:col-span-7 space-y-12"
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
					>
						{aboutCards.map((card, index) => {
							const Icon = card.icon;
							const mlClass =
								index === 0
									? ""
									: index === 1
									? "ml-0 md:ml-16"
									: "ml-0 md:ml-8";

							return (
								<motion.div
									key={card.title}
									variants={item}
									className={`relative ${mlClass}`}
								>
									<Card
										className={`p-8 bg-[#0d1117] border-gray-800 ${card.hoverBorderColor} transition-all duration-500 group relative overflow-hidden`}
									>
										<div
											className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
												card.bgGradient.includes("emerald")
													? "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"
													: card.bgGradient.includes("cyan")
													? "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]"
													: "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"
											}`}
										/>
										<div
											className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${card.bgGradient} to-transparent`}
										/>
										<div className="relative flex items-start gap-6">
											<div
												className={`p-3 ${card.iconColor.replace(
													"text-",
													"bg-"
												)}/10 ${card.borderColor} border ${
													card.bgHover
												} transition-colors duration-500`}
											>
												<Icon className={`h-6 w-6 ${card.iconColor}`} />
											</div>
											<div className="space-y-3 flex-1">
												<h3 className="text-2xl font-semibold font-mono">
													{card.title}
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													{card.description}
												</p>
											</div>
										</div>
									</Card>
								</motion.div>
							);
						})}
					</motion.div>
				</div>

				<motion.div
					className="mt-24 max-w-3xl ml-auto space-y-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<p className="text-xl leading-relaxed text-muted-foreground border-l-2 border-emerald-500/50 pl-8">
						{aboutBio.mainText}
					</p>
					<p className="text-lg leading-relaxed text-muted-foreground/70 pl-8 font-mono">
						<span className="text-emerald-400">$</span> {aboutBio.secondaryText}
					</p>
				</motion.div>
			</div>
		</section>
	);
};

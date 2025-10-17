"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { heroData } from "@/lib/data";

export const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
			<div className="absolute inset-0 bg-[#0a0f0d]" />

			<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

			<div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto w-full relative z-10">
				<div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="inline-flex items-center gap-1.5 font-mono text-sm"
						>
							<span className="text-emerald-400">~</span>
							<span className="text-muted-foreground">
								{heroData.terminal.prompt}
							</span>
							<span className="text-muted-foreground">_</span>
						</motion.div>

						<div className="space-y-3">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
								className="font-mono text-sm text-muted-foreground"
							>
								<span className="text-emerald-400">{"//"}</span> {heroData.role}
							</motion.div>
							<motion.h1
								className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight text-foreground"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.7 }}
							>
								{heroData.name}
							</motion.h1>
						</div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.6 }}
							className="space-y-1.5"
						>
							<div className="font-mono text-sm">
								<span className="text-cyan-400">const</span>{" "}
								<span className="text-foreground">expertise</span>{" "}
								<span className="text-muted-foreground">= [</span>
							</div>
							<div className="ml-4 font-mono text-sm space-y-0.5">
								{heroData.expertise.map((item, index) => (
									<div key={index} className="text-emerald-400">
										&quot;{item}&quot;
										{index < heroData.expertise.length - 1 ? "," : ""}
									</div>
								))}
							</div>
							<div className="font-mono text-sm text-muted-foreground">];</div>
						</motion.div>
						<motion.div
							className="flex gap-4 pt-2"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9, duration: 0.6 }}
						>
							<Button
								size="lg"
								className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-sm"
								asChild
							>
								<a href="#contact">
									<Mail className="mr-2 h-4 w-4" />
									{heroData.buttons.primary.text}
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-gray-700 bg-transparent hover:bg-gray-900 hover:border-gray-600 text-foreground font-mono text-sm"
								asChild
							>
								<a
									href={heroData.buttons.secondary.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{heroData.buttons.secondary.text}
								</a>
							</Button>
						</motion.div>
					</motion.div>

					<motion.div
						className="hidden lg:block"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
					>
						<div className="bg-[#0d1117] border border-gray-800 shadow-2xl rounded-lg overflow-hidden">
							<div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-800 bg-[#161b22]">
								<div className="flex gap-2">
									<div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
									<div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
									<div className="w-3 h-3 rounded-full bg-[#27c93f]" />
								</div>
								<span className="text-xs text-gray-400 font-mono ml-1">
									{heroData.terminal.username}
								</span>
							</div>

							<div className="p-5 font-mono text-sm space-y-5">
								<div className="flex gap-2">
									<span className="text-emerald-400">$</span>
									<span className="text-gray-200">cat system_stats.log</span>
								</div>
								<div className="text-gray-400 space-y-1.5 text-xs">
									<div className="flex justify-between">
										<span>Requests/sec:</span>
										<span className="text-emerald-400 font-semibold">
											{heroData.stats.requestsPerSec}
										</span>
									</div>
									<div className="flex justify-between">
										<span>Latency (p99):</span>
										<span className="text-emerald-400 font-semibold">
											{heroData.stats.latency}
										</span>
									</div>
									<div className="flex justify-between">
										<span>Uptime:</span>
										<span className="text-emerald-400 font-semibold">
											{heroData.stats.uptime}
										</span>
									</div>
									<div className="flex justify-between">
										<span>Active users:</span>
										<span className="text-emerald-400 font-semibold">
											{heroData.stats.activeUsers}
										</span>
									</div>
								</div>
								<div className="flex gap-2">
									<span className="text-emerald-400">$</span>
									<span className="text-gray-200 animate-pulse">_</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

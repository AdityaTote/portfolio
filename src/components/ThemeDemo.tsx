"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import {
	animationVariants,
	getTransition,
	terminalWindowStyle,
	generateTerminalPrompt,
	terminalColors,
} from "@/lib/theme-utils";

export const ThemeDemo = () => {
	return (
		<section className="py-32 px-6 relative">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					{...animationVariants.fadeInUp}
					transition={getTransition("slow")}
				>
					<h2 className="text-5xl font-bold mb-4">
						Theme System <span className="text-primary">Demo</span>
					</h2>
					<p className="text-muted-foreground font-mono">
						{generateTerminalPrompt("/demo")}
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					<motion.div
						className="bg-card border border-border p-6 hover:border-primary/40 transition-colors"
						{...animationVariants.fadeIn}
						transition={getTransition("normal")}
						whileHover={{ y: -8 }}
					>
						<div className="mb-4">
							<Palette className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-bold mb-2">5 Theme Presets</h3>
						<p className="text-sm text-muted-foreground">
							Switch between Terminal Green, Matrix, Cyber Blue, Neon Purple,
							and Hacker Red instantly.
						</p>
					</motion.div>

					<motion.div
						className="bg-card border border-border p-6 hover:border-primary/40 transition-colors"
						{...animationVariants.fadeIn}
						transition={getTransition("normal")}
						whileHover={{ y: -8 }}
					>
						<div className="mb-4">
							<Code2 className="h-8 w-8 text-secondary" />
						</div>
						<h3 className="text-xl font-bold mb-2">Terminal Style</h3>
						<p className="text-sm text-muted-foreground">
							Code-first design with syntax highlighting and terminal
							aesthetics.
						</p>
					</motion.div>

					<motion.div
						className="bg-card border border-border p-6 hover:border-primary/40 transition-colors"
						{...animationVariants.fadeIn}
						transition={getTransition("normal")}
						whileHover={{ y: -8 }}
					>
						<div className="mb-4">
							<Zap className="h-8 w-8 text-accent" />
						</div>
						<h3 className="text-xl font-bold mb-2">Persistent Storage</h3>
						<p className="text-sm text-muted-foreground">
							Your theme choice is saved and restored automatically.
						</p>
					</motion.div>
				</div>

				<motion.div
					className="mt-16"
					{...animationVariants.scale}
					transition={getTransition("slow")}
				>
					<div className="bg-card border border-border shadow-lg rounded-lg overflow-hidden">
						<div className={terminalWindowStyle.header}>
							<div className="flex gap-2">
								{terminalWindowStyle.dots.map((dot, i) => (
									<div key={i} className={dot.className} />
								))}
							</div>
							<span className="text-xs text-muted-foreground font-mono ml-2">
								theme-demo.tsx
							</span>
						</div>

						<div className={terminalWindowStyle.content}>
							<div className="space-y-2">
								<div className="flex gap-2">
									<span className="text-primary">$</span>
									<span>cat theme-config.ts</span>
								</div>
								<div className="ml-4 space-y-1 text-muted-foreground">
									<div>
										<span className="text-secondary">const</span>{" "}
										<span className="text-foreground">theme</span>{" "}
										<span>=</span> <span className="text-accent">{"{"}</span>
									</div>
									<div className="ml-4">
										<span className="text-primary">&quot;primary&quot;</span>
										<span>:</span>{" "}
										<span className="text-primary">
											&quot;hsl(142, 70%, 50%)&quot;
										</span>
										<span>,</span>
									</div>
									<div className="ml-4">
										<span className="text-primary">&quot;effects&quot;</span>
										<span>:</span>{" "}
										<span className="text-primary">
											&quot;terminal-glow&quot;
										</span>
									</div>
									<div>
										<span className="text-accent">{"}"}</span>
										<span>;</span>
									</div>
								</div>
								<div className="flex gap-2 mt-4">
									<span className="text-primary">$</span>
									<motion.span
										animate={{ opacity: [1, 0, 1] }}
										transition={{
											duration: 1.2,
											repeat: Infinity,
										}}
									>
										_
									</motion.span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="mt-12 flex justify-center gap-6 flex-wrap"
					{...animationVariants.fadeIn}
					transition={getTransition("slow")}
				>
					<div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
						<div
							className="w-2 h-2 rounded-full animate-pulse"
							style={{ backgroundColor: terminalColors.success }}
						/>
						<span className="text-xs font-mono">System Active</span>
					</div>
					<div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
						<div
							className="w-2 h-2 rounded-full animate-pulse"
							style={{ backgroundColor: terminalColors.warning }}
						/>
						<span className="text-xs font-mono">Theme Loaded</span>
					</div>
					<div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
						<div
							className="w-2 h-2 rounded-full"
							style={{ backgroundColor: terminalColors.error }}
						/>
						<span className="text-xs font-mono">Ready to Deploy</span>
					</div>
				</motion.div>

				<motion.div
					className="mt-16 p-6 bg-muted/50 border border-border rounded-lg"
					{...animationVariants.fadeInUp}
					transition={getTransition("verySlow")}
				>
					<div className="font-mono text-sm space-y-2">
						<div className="text-primary">Quick Start</div>
						<div className="text-muted-foreground">
							1. Add <span className="text-accent">&lt;ThemeProvider&gt;</span>{" "}
							to layout.tsx
						</div>
						<div className="text-muted-foreground">
							2. Add{" "}
							<span className="text-accent">&lt;ThemeSwitcher /&gt;</span> to
							page.tsx
						</div>
						<div className="text-muted-foreground">
							3. Click the palette button to switch themes
						</div>
						<div className="text-muted-foreground mt-4">
							See THEME_SYSTEM.md for full documentation
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

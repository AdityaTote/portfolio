"use client";

import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { useNavigationStore } from "@/store/navigation-store";
import { GithubIcon } from "@/icons/github-icon";

export const Navigation = () => {
	const { scrollYProgress } = useScroll();
	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 0.1],
		["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
	);

	const { mobileMenuOpen, activeSection, toggleMobileMenu, scrollToSection } =
		useNavigationStore();

	const navItems = [
		{ label: "About", id: "about" },
		{ label: "Tech-stack", id: "tech" },
		{ label: "Experience", id: "experience" },
		{ label: "Projects", id: "projects" },
		{ label: "Skills", id: "skills" },
		{ label: "Activities", id: "activities" },
		{ label: "Education", id: "education" },
		{ label: "Contact", id: "contact" },
	];

	return (
		<>
			<motion.nav
				className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
				style={{
					backgroundColor,
					borderColor: useTransform(
						scrollYProgress,
						[0, 0.1],
						["rgba(10, 15, 13, 0)", "rgba(31, 41, 55, 0.5)"]
					),
				}}
			>
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<motion.button
							onClick={() => scrollToSection("hero")}
							className="text-xl font-bold tracking-tight font-mono text-emerald-400 hover:text-emerald-500 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							AT
						</motion.button>

						<div className="hidden lg:flex items-center gap-6">
							{navItems.map((item, index) => (
								<motion.button
									key={index}
									onClick={() => scrollToSection(item.id)}
									className={`text-sm font-medium font-mono transition-colors ${
										activeSection === item.id
											? "text-emerald-400"
											: "text-muted-foreground hover:text-emerald-400"
									}`}
									whileHover={{ y: -2 }}
									whileTap={{ y: 0 }}
								>
									{item.label}
								</motion.button>
							))}
						</div>

						<div className="flex items-center gap-2">
							<motion.a
								href="https://github.com/AdityaTote/portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="hidden lg:flex items-center justify-center w-12 h-12 text-muted-foreground hover:text-emerald-400 transition-colors"
								whileHover={{ scale: 1.15 }}
								whileTap={{ scale: 0.95 }}
								aria-label="View GitHub repository"
							>
								<div className="w-12 h-12">
									<GithubIcon />
								</div>
							</motion.a>
							<Button
								variant="ghost"
								size="icon"
								className="lg:hidden"
								onClick={toggleMobileMenu}
							>
								{mobileMenuOpen ? (
									<X className="h-5 w-5" />
								) : (
									<Menu className="h-5 w-5" />
								)}
								<span className="sr-only">Toggle menu</span>
							</Button>
						</div>
					</div>
				</div>
			</motion.nav>

			<motion.div
				className="fixed inset-0 z-40 lg:hidden"
				initial={false}
				animate={{
					opacity: mobileMenuOpen ? 1 : 0,
					pointerEvents: mobileMenuOpen ? "auto" : "none",
				}}
				transition={{ duration: 0.2 }}
			>
				<motion.div
					className="absolute inset-0 bg-[#0a0f0d]/98 backdrop-blur-md border-r border-gray-800"
					onClick={toggleMobileMenu}
				/>

				<motion.div
					className="absolute top-20 left-0 right-0 bottom-0 overflow-y-auto"
					initial={{ y: -20 }}
					animate={{ y: mobileMenuOpen ? 0 : -20 }}
					transition={{ duration: 0.3 }}
				>
					<div className="px-6 py-8 space-y-4">
						{navItems.map((item, index) => (
							<motion.button
								key={index}
								onClick={() => scrollToSection(item.id)}
								className={`block w-full text-left text-2xl font-bold font-mono transition-colors py-3 border-b border-gray-800 ${
									activeSection === item.id
										? "text-emerald-400"
										: "text-muted-foreground hover:text-emerald-400"
								}`}
								initial={{ opacity: 0, x: -20 }}
								animate={{
									opacity: mobileMenuOpen ? 1 : 0,
									x: mobileMenuOpen ? 0 : -20,
								}}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileTap={{ scale: 0.98 }}
							>
								{item.label}
							</motion.button>
						))}
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};

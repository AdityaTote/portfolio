"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollProgress = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const updateScrollProgress = () => {
			const scrollPx = document.documentElement.scrollTop;
			const winHeightPx =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrolled = (scrollPx / winHeightPx) * 100;
			setScrollProgress(scrolled);
		};

		window.addEventListener("scroll", updateScrollProgress);
		return () => window.removeEventListener("scroll", updateScrollProgress);
	}, []);

	return (
		<AnimatePresence>
			{scrollProgress > 0 && (
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: scrollProgress / 100 }}
					exit={{ scaleX: 0 }}
					className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 origin-left z-50"
					style={{ transformOrigin: "0%" }}
				/>
			)}
		</AnimatePresence>
	);
};

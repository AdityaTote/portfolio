"use client";

import { useEffect, useRef } from "react";
import { useNavigationStore } from "@/store/navigation-store";

interface SectionWrapperProps {
	id: string;
	children: React.ReactNode;
	className?: string;
}

export const SectionWrapper = ({
	id,
	children,
	className = "",
}: SectionWrapperProps) => {
	const sectionRef = useRef<HTMLElement>(null);
	const setActiveSection = useNavigationStore(
		(state) => state.setActiveSection
	);

	useEffect(() => {
		const currentRef = sectionRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				});
			},
			{
				threshold: 0.3,
				rootMargin: "-100px 0px -50% 0px",
			}
		);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [id, setActiveSection]);

	return (
		<section id={id} ref={sectionRef} className={className}>
			{children}
		</section>
	);
};

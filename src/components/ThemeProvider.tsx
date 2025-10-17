"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import {
	themePresets,
	ThemePreset,
	applyThemePreset,
} from "@/lib/theme-config";

type ThemeContextType = {
	currentTheme: ThemePreset;
	setTheme: (theme: ThemePreset) => void;
	availableThemes: typeof themePresets;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [currentTheme, setCurrentTheme] = useState<ThemePreset>("terminal");

	useEffect(() => {
		const savedTheme = localStorage.getItem("portfolio-theme") as ThemePreset;
		if (savedTheme && themePresets[savedTheme]) {
			setCurrentTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		const theme = applyThemePreset(currentTheme);
		const root = document.documentElement;

		root.style.setProperty("--theme-primary", theme.colors.primary.main);
		root.style.setProperty("--theme-primary-glow", theme.colors.primary.glow);

		root.style.setProperty("--theme-secondary", theme.colors.secondary.main);
		root.style.setProperty("--theme-accent", theme.colors.accent.main);

		localStorage.setItem("portfolio-theme", currentTheme);
	}, [currentTheme]);

	const setTheme = (theme: ThemePreset) => {
		setCurrentTheme(theme);
	};

	return (
		<ThemeContext.Provider
			value={{
				currentTheme,
				setTheme,
				availableThemes: themePresets,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}

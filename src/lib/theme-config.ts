export const themeConfig = {
	brand: {
		name: "Alex Morgan",
		tagline: "Backend Engineer",
		domain: "alexmorgan.dev",
	},

	colors: {
		primary: {
			main: "hsl(142, 70%, 50%)",
			glow: "rgba(34, 197, 94, 0.3)",
			hover: "hsl(142, 70%, 45%)",
		},
		secondary: {
			main: "hsl(45, 100%, 60%)",
			glow: "rgba(251, 191, 36, 0.3)",
		},
		accent: {
			main: "hsl(200, 100%, 60%)",
			glow: "rgba(56, 189, 248, 0.3)",
		},
		terminal: {
			background: "hsl(220, 13%, 18%)",
			text: "hsl(142, 70%, 50%)",
			dim: "hsl(220, 9%, 46%)",
		},
	},

	typography: {
		fonts: {
			sans: "var(--font-geist-sans)",
			mono: "var(--font-geist-mono)",
		},
		sizes: {
			hero: "clamp(2.5rem, 8vw, 6rem)",
			title: "clamp(2rem, 5vw, 4rem)",
			subtitle: "clamp(1.5rem, 3vw, 2.5rem)",
			body: "1rem",
			small: "0.875rem",
			tiny: "0.75rem",
		},
	},

	animations: {
		fast: "0.2s",
		normal: "0.3s",
		slow: "0.8s",
		verySlow: "1.2s",
		scanLine: "8s",
		terminalBlink: "1.2s",
	},

	effects: {
		terminalShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
		cardGlow: "0 0 30px rgba(34, 197, 94, 0.1)",
		borderGlow: "0 0 10px rgba(34, 197, 94, 0.2)",
		spotlight:
			"radial-gradient(ellipse at center, hsl(142 70% 50% / 0.08), transparent 70%)",
	},

	layout: {
		maxWidth: "1280px",
		padding: {
			mobile: "1.5rem",
			desktop: "2rem",
		},
		sectionSpacing: {
			small: "4rem",
			medium: "8rem",
			large: "12rem",
		},
	},

	terminal: {
		prompt: "~",
		path: "/portfolio",
		user: "backend@server",
		cursor: "_",
		colors: {
			red: "#ef4444",
			yellow: "#eab308",
			green: "#22c55e",
		},
	},

	syntax: {
		keyword: "var(--color-secondary)",
		string: "var(--color-primary)",
		operator: "var(--color-muted-foreground)",
		bracket: "var(--color-accent)",
		comment: "var(--color-primary)",
		function: "var(--color-accent)",
	},
} as const;

export const themePresets = {
	terminal: {
		primary: "hsl(142, 70%, 50%)",
		name: "Terminal Green",
	},
	matrix: {
		primary: "hsl(120, 100%, 50%)",
		name: "Matrix",
	},
	cyberBlue: {
		primary: "hsl(200, 100%, 60%)",
		name: "Cyber Blue",
	},
	neonPurple: {
		primary: "hsl(280, 100%, 65%)",
		name: "Neon Purple",
	},
	hackerRed: {
		primary: "hsl(0, 100%, 60%)",
		name: "Hacker Red",
	},
} as const;

export const getTheme = () => themeConfig;

export const applyThemePreset = (preset: keyof typeof themePresets) => {
	return {
		...themeConfig,
		colors: {
			...themeConfig.colors,
			primary: {
				...themeConfig.colors.primary,
				main: themePresets[preset].primary,
			},
		},
	};
};

export type ThemeConfig = typeof themeConfig;
export type ThemePreset = keyof typeof themePresets;

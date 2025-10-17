import { themeConfig } from "./theme-config";

export const getSyntaxColors = () => themeConfig.syntax;

export const getAnimationDuration = (
	speed: keyof typeof themeConfig.animations
) => themeConfig.animations[speed];

export const getEffect = (effect: keyof typeof themeConfig.effects) =>
	themeConfig.effects[effect];

export const getTypographySize = (
	size: keyof typeof themeConfig.typography.sizes
) => themeConfig.typography.sizes[size];

export const getSpacing = (
	size: keyof typeof themeConfig.layout.sectionSpacing
) => themeConfig.layout.sectionSpacing[size];

export const getTerminalConfig = () => themeConfig.terminal;

export const generateTerminalPrompt = (customPath?: string) => {
	const { prompt, path } = themeConfig.terminal;
	return `${prompt} ${customPath || path}`;
};

export const generateCodeComment = (text: string) => {
	return `${themeConfig.terminal.cursor} ${text}`;
};

export const getColorWithOpacity = (color: string, opacity: number): string => {
	if (color.startsWith("hsl(")) {
		return color.replace("hsl(", "hsla(").replace(")", `, ${opacity})`);
	}
	if (color.startsWith("rgb(")) {
		return color.replace("rgb(", "rgba(").replace(")", `, ${opacity})`);
	}
	return color;
};

export const generateGlowEffect = (color: string, intensity = 0.3) => {
	return {
		boxShadow: `0 0 20px ${getColorWithOpacity(color, intensity)}`,
	};
};

export const getResponsivePadding = () => {
	const { mobile, desktop } = themeConfig.layout.padding;
	return {
		padding: mobile,
		"@media (min-width: 768px)": {
			padding: desktop,
		},
	};
};

export const terminalColors = {
	success: themeConfig.terminal.colors.green,
	warning: themeConfig.terminal.colors.yellow,
	error: themeConfig.terminal.colors.red,
};

export const animationVariants = {
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
	fadeInUp: {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 30 },
	},
	fadeInDown: {
		initial: { opacity: 0, y: -30 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -30 },
	},
	fadeInLeft: {
		initial: { opacity: 0, x: -30 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -30 },
	},
	fadeInRight: {
		initial: { opacity: 0, x: 30 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 30 },
	},
	scale: {
		initial: { opacity: 0, scale: 0.95 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	},
	terminalBlink: {
		animate: {
			opacity: [1, 0, 1],
		},
		transition: {
			duration: parseFloat(themeConfig.animations.terminalBlink),
			repeat: Infinity,
		},
	},
};

export const getTransition = (
	speed: keyof typeof themeConfig.animations = "normal"
) => ({
	duration: parseFloat(themeConfig.animations[speed]),
	ease: "easeOut" as const,
});

export const highlightCode = (code: string) => {
	const keywords = ["const", "let", "var", "function", "return", "if", "else"];

	let highlighted = code;

	keywords.forEach((keyword) => {
		highlighted = highlighted.replace(
			new RegExp(`\\b${keyword}\\b`, "g"),
			`<span class="text-secondary">${keyword}</span>`
		);
	});

	highlighted = highlighted.replace(
		/"([^"]*)"/g,
		'<span class="text-primary">"$1"</span>'
	);

	highlighted = highlighted.replace(
		/\/\/(.*?)$/gm,
		'<span class="text-primary">// $1</span>'
	);

	return highlighted;
};

export const terminalWindowStyle = {
	header: "flex items-center gap-2 px-4 py-3 border-b border-border bg-muted",
	dots: [
		{ className: "w-3 h-3 rounded-full bg-destructive/80" },
		{ className: "w-3 h-3 rounded-full bg-accent/50" },
		{ className: "w-3 h-3 rounded-full bg-primary/80" },
	],
	content: "p-6 font-mono text-sm space-y-2",
};

export const codeBlockClasses = {
	wrapper: "bg-card border border-border rounded-lg overflow-hidden",
	header:
		"px-4 py-2 border-b border-border bg-muted text-xs font-mono text-muted-foreground",
	content: "p-4 font-mono text-sm overflow-x-auto",
	line: "hover:bg-muted/50 transition-colors",
};

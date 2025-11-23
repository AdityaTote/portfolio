import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ThemeProvider as ColorThemeProvider } from "@/components/ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Aditya Tote - Backend Developer",
	description:
		"Portfolio of Aditya Tote - Software engineer specializing in Go, Python, and cloud technologies. Building scalable backend systems and distributed applications.",
	keywords: [
		"software engineer",
		"backend developer",
		"python",
		"aws",
		"microservices",
		"api development",
	],
	authors: [{ name: "Aditya Tote" }],
	icons: [
		{
			rel: "icon",
			url: "/svg/favicon-light.svg",
			media: "(prefers-color-scheme: light)",
		},
		{
			rel: "icon",
			url: "/svg/favicon-dark.svg",
			media: "(prefers-color-scheme: dark)",
		},
	],
	openGraph: {
		title: "Aditya Tote - Software Engineer & Backend Developer",
		description:
			"Portfolio of Aditya Tote - Software engineer specializing in building scalable backend systems.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<ColorThemeProvider>
						{children}
						<Toaster />
					</ColorThemeProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

export interface Project {
	title: string;
	tagline: string;
	description: string;
	tech: string[];
	category: "web2" | "web3";
	featured: boolean;
	collaboration: boolean;
	label?: string;
	link?: string;
	github?: string;
}

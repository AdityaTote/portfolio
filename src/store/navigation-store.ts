import { create } from "zustand";

interface NavigationState {
	activeSection: string;
	mobileMenuOpen: boolean;
	setActiveSection: (section: string) => void;
	setMobileMenuOpen: (open: boolean) => void;
	toggleMobileMenu: () => void;
	scrollToSection: (sectionId: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
	activeSection: "hero",
	mobileMenuOpen: false,

	setActiveSection: (section: string) => set({ activeSection: section }),

	setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),

	toggleMobileMenu: () =>
		set((state: NavigationState) => ({
			mobileMenuOpen: !state.mobileMenuOpen,
		})),

	scrollToSection: (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			set({ mobileMenuOpen: false, activeSection: sectionId });
		}
	},
}));

/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
	content: [
		"./index.html",
		"./src/*.{js,ts,jsx,tsx}",
		"./src/components/*.{jsx}",
	],
	darkMode: "class", // Enables class-based dark mode
	theme: {
		extend: {
			colors: {
				// Define complementary light mode colors
				light: {
					background: "#f9f9f9",
					text: "#1a1a1a",
					primary: "#4a90e2",
					secondary: "#f5a623",
					accent: "#50e3c2",
					muted: "#e0e0e0",
				},
				dark: {
					background: "#1a1a1a",
					text: "#f9f9f9",
					primary: "#4a90e2",
					secondary: "#f5a623",
					accent: "#50e3c2",
					muted: "#333333",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				montserrat: ["montserrat"],
			},
		},
	},
	plugins: [tailwindScrollbar],
};

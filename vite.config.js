import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: "/", // Ensure this is correct for local development
	build: {
		assetsDir: "assets", // Ensure assets are placed in the correct directory
		// Removed invalid property `outputDirectory`
	},
});

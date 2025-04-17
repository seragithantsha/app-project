import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/app-project/", // Replace with your repository name
	plugins: [react(), tailwindcss()],
});

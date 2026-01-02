import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		coverage: {
			enabled: true,
			exclude: ["**/*.css", "**/*.d.ts", "*.config.mjs", ".next", "src/test/**"],
			reportsDirectory: ".coverage",
		},
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
	},
});

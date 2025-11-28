import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		coverage: {
			exclude: ["*.config.mjs", ".next", "**/*.d.ts", "src/test/**"],
		},
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
	},
});

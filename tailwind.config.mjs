import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	experimental: {
		optimizeUniversalDefaults: true,
	},
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
export default tailwindConfig;

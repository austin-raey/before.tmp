/** @type {import('postcss-load-config').Config} */
const postcssConfig = {
	plugins: {
		tailwindcss: {},
		...(process.env.NODE_ENV === "production" && {
			"postcss-lightningcss": {
				browsers: "defaults",
			},
		}),
	},
};

export default postcssConfig;

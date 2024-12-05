/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		inlineCss: true, // Requires next@canary
		ppr: true, // Requires next@canary
		reactCompiler: {
			compilationMode: "annotation",
		},
	},
};

export default nextConfig;

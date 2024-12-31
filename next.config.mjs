/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		inlineCss: true,
		// ppr: true, // Requires next@canary
		reactCompiler: true,
	},
};

export default nextConfig;

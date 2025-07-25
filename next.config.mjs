/** @type {import('next').NextConfig} */
const nextConfig = {
	// assetPrefix: "/v1", // Consider adding this if running multiple instances of Next.js on the same host.

	experimental: {
		inlineCss: true,
		// ppr: true, // Requires next@canary
		reactCompiler: true,
	},
};

export default nextConfig;

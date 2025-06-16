/** @type {import('next').NextConfig} */
const nextConfig = {
	// assetPrefix: "/v1", // Consider adding this if running multiple instances of Next.js on the same host.

	eslint: {
		/**
		 * When using Docker with Next.js, you probably do not want to bundle
		 * eslint and eslint plugins into the image to save on size and reduce the
		 * attack surface.
		 *
		 * With image layering, you could remove this configuration and simply copy the
		 * build artifacts to the final image. If your workflow requires you to copy `node_modules` however,
		 * this is something to consider.
		 */
		ignoreDuringBuilds: true,
	},

	experimental: {
		inlineCss: true,
		// ppr: true, // Requires next@canary
		reactCompiler: true,
	},
};

export default nextConfig;

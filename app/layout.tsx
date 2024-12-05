import type { Metadata } from "next";

import localFont from "next/font/local";

import "./layout.css";

export const metadata: Metadata = {
	description: "Before.tmp",
	title: "Before.tmp",
};

/**
 * TODO: Keep an eye on this for developments.
 * Lighthouse LCP leaves a lot to be desired this very minimal setup with a custom font.
 *
 * One thing that could help is inlining CSS.
 *
 * {@linkcode https://nextjs.org/docs/app/building-your-application/optimizing/fonts|Link: Next.js Docs on Implementing Fonts}
 * {@linkcode https://github.com/vercel/next.js/discussions/59989#discussioncomment-9697445|Link: Good Discussion on this}
 */
const GeistSans = localFont({
	display: "swap",
	preload: true,
	src: "./fonts/GeistSans[wght].woff2",
	variable: "--font-geist-sans",
});

type Props = Readonly<{
	children: React.ReactNode;
}>;
export default function Layout(props: Props) {
	return (
		<html className={`${GeistSans.variable} dark:bg-black dark:text-white`} lang="en">
			<body className="dark:bg-black dark:text-white">{props.children}</body>
		</html>
	);
}

import type { Metadata } from "next";

import localFont from "next/font/local";

import "~/styles/global.css";

export const metadata: Metadata = {
	description:
		"A minimal, production-ready Next.js starter template with sensible defaults, best practices, and zero bloat. Start building immediately.",
	title: "Before.tmp - Next.js Starter Template",
};

const GeistSans = localFont({
	display: "swap",
	preload: true,
	src: "./fonts/Geist[wght].woff2",
});

type Props = Readonly<{
	children: React.ReactNode;
}>;
export default function Layout(props: Props) {
	return (
		<html className={`${GeistSans.className} dark:bg-black dark:text-white`} lang="en">
			<body>{props.children}</body>
		</html>
	);
}

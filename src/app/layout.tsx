import type { Metadata } from "next";

import { Atkinson_Hyperlegible, Crimson_Pro } from "next/font/google";

import "~/styles/tailwind.css";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-atkinson-hyperlegible",
	weight: ["400", "700"],
});
const crimsonPro = Crimson_Pro({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-crimson-pro",
});

export const metadata: Metadata = {
	description: "Copied from the Before.tmp template repository.",
	title: "Before.tmp",
};

export default function RootLayout(props: Partial<LayoutProps<"/">>) {
	return (
		<html className={`${atkinsonHyperlegible.variable} ${crimsonPro.variable} bg-black`} lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta content="#000000" name="theme-color" />
			</head>
			<body className="tracking-tight antialiased">{props.children}</body>
		</html>
	);
}

import type { Metadata } from "next";

import { Atkinson_Hyperlegible_Next, Crimson_Pro } from "next/font/google";

import "~/styles/tailwind.css";

const atkinsonHyperlegible = Atkinson_Hyperlegible_Next({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-atkinson-hyperlegible",
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
		<html className={`${atkinsonHyperlegible.variable} ${crimsonPro.variable}`} lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta content="#000000" name="theme-color" />
			</head>
			<body className="tracking-tight antialiased">{props.children}</body>
		</html>
	);
}

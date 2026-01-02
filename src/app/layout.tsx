import type { Metadata } from "next";

import "~/styles/global.css";

export const metadata: Metadata = {
	description: "Copied from the Before.tmp template repository.",
	title: "Before.tmp",
};

export default function RootLayout(props: Partial<LayoutProps<"/">>) {
	return (
		<html lang="en">
			<body className="antialiased">{props.children}</body>
		</html>
	);
}

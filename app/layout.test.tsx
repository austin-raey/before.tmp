import { render } from "@testing-library/react";

import Layout from "./layout";

describe("app / layout.tsx", () => {
	it("smoke test", () => {
		expect(() => Layout({ children: "Hello World" })).not.toThrow();
	});

	it("should render children", () => {
		const children = "Hello World";
		const { getByText } = render(<Layout>{children}</Layout>, { container: document });
		expect(getByText(children)).toBeVisible();
	});
});

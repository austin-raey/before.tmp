import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Layout from "./layout";

describe("app / layout.tsx", () => {
	test("smoke", () => {
		expect(() => Layout({ children: "Hello World" })).not.toThrow();
	});

	test("should render children", () => {
		const children = "Hello World";
		const { getByText } = render(<Layout>{children}</Layout>, { container: document });
		expect(getByText(children)).toBeDefined();
	});
});

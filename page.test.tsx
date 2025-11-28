import { describe, expect, test } from "vitest";

import Page from "./page";

describe("app / page.tsx", () => {
	test("smoke", () => {
		expect(() => Page()).not.toThrow();
	});
});

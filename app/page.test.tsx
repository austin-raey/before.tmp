import Page from "./page";

describe("app / page.tsx", () => {
	it("smoke", () => {
		expect(() => Page()).not.toThrow();
	});
});

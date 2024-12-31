import { vi } from "vitest";

vi.mock("next/font/local", async () => ({
	default: () => ({
		variable: "var(--mock-local-font)",
	}),
}));

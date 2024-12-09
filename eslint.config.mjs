import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier/recommended";
import reactCompiler from "eslint-plugin-react-compiler";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

export default ts.config(
	eslint.configs.recommended,
	...ts.configs.recommended,
	{
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
		},
	},
	...compat.extends("next/core-web-vitals"),
	...compat.extends("next/typescript"),
	{
		plugins: {
			"react-compiler": reactCompiler,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
	prettier,
	...tailwind.configs["flat/recommended"],
	unicorn.configs["flat/recommended"],
	{
		rules: {
			"unicorn/prevent-abbreviations": [
				"error",
				{
					replacements: {
						env: false,
						props: false,
					},
				},
			],
		},
	},
	perfectionist.configs["recommended-natural"],
	{ ignores: [".next/", "coverage/", "node_modules/"] },
);

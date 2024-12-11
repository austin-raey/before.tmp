import { includeIgnoreFile } from "@eslint/compat";
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
const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),

	eslint.configs.recommended,
	...ts.configs.recommended,
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		plugins: {
			"react-compiler": reactCompiler,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
	unicorn.configs["flat/recommended"],
	perfectionist.configs["recommended-natural"],
	...tailwind.configs["flat/recommended"],
	prettier,
	{
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
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
);

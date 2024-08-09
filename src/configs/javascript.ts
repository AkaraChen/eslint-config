import type { Linter } from "eslint";
import globals from "globals";
import unusedImports from "eslint-plugin-unused-imports";

export const javascript: Linter.Config[] = [
    {
        name: "akarachen/javascript",
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                sourceType: "module",
            },
            sourceType: "module",
        },
        plugins: {
            "unused-imports": unusedImports,
        },
    },
    {},
];

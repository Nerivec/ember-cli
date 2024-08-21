import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: ["./eslint.config.mjs", "dist", "tmp"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            parserOptions: {
                project: true,
            },
        },
        rules: {
            complexity: ["warn", 25],
            "max-params": ["error", 10],
            "@typescript-eslint/no-floating-promises": "error",
        },
    }
);

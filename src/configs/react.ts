import type { Linter, ESLint } from 'eslint';
import type { ConfigResolver } from './types';

export const react: ConfigResolver = async (opts) => {
    const { enabled } = opts.react;
    if (!enabled) return;
    const reactRefresh = await import('eslint-plugin-react-refresh').then(
        (m) => m.default,
    );
    const reactCompiler = await import('eslint-plugin-react-compiler').then(
        (m) => m.default,
    );
    const reactHook = await import('eslint-plugin-react-hooks').then(
        (m) => m.default,
    );
    const eslintReact = await import('@eslint-react/eslint-plugin').then(
        (m) => m.default,
    );
    return [
        {
            name: 'akrc/react-refresh',
            plugins: {
                'react-refresh': reactRefresh as ESLint.Plugin,
            },
            rules: {
                'react-refresh/only-export-components': 'warn',
            },
        },
        {
            name: 'akrc/react-compiler',
            plugins: {
                'react-compiler': reactCompiler as ESLint.Plugin,
            },
            rules: {
                'react-compiler/react-compiler': 'error',
            },
        },
        {
            name: 'akrc/react-hooks',
            plugins: {
                'react-hooks': reactHook as ESLint.Plugin,
            },
            rules: {
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
            },
        },
        {
            name: 'eslint-react/recommended',
            ...(eslintReact.configs.recommended as unknown as Linter.Config),
        },
    ];
};

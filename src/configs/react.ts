import type { Linter, ESLint } from 'eslint';
// @ts-expect-error the deps is just not typed
import reactRefresh from 'eslint-plugin-react-refresh';
// @ts-expect-error the deps is just not typed
import reactCompiler from 'eslint-plugin-react-compiler';
// @ts-expect-error the deps is just not typed
import reactHook from 'eslint-plugin-react-hooks';
import eslintReact from '@eslint-react/eslint-plugin';
import type { ConfigResolver } from './types';

export const react: ConfigResolver = (): Array<Linter.Config | undefined> => {
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

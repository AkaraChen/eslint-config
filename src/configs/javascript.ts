import type { Linter } from 'eslint';
import globals from 'globals';
import js from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import unicorn from 'eslint-plugin-unicorn';
import { sources } from '../constants';
import importx from 'eslint-plugin-import-x';
import type { ConfigResolver } from './types';

export const javascript: ConfigResolver = () => {
    return [
        {
            name: 'eslint/js-recommended',
            files: [sources.js],
            ...js.configs.recommended,
        },
        {
            name: 'akrc/js-setup',
            files: [sources.js, sources.ts],
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
                },
            },
        },
        {
            name: 'unicorn/recommended',
            ...unicorn.configs['flat/recommended'],
            files: [sources.js, sources.ts],
        },
        {
            name: 'akrc/unused-imports',
            files: [sources.js, sources.ts],
            plugins: {
                'unused-imports': unusedImports,
            },
            rules: {
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': 'error',
            },
        },
        importx.flatConfigs.recommended as Linter.Config,
    ];
};

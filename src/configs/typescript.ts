import type { Linter } from 'eslint';
import * as ts from 'typescript-eslint';
import js from '@eslint/js';
import { match } from 'ts-pattern';
import importx from 'eslint-plugin-import-x';
import { sources } from '../constants';
import type { ConfigResolver } from './types';

export const typescript: ConfigResolver = (options) => {
    const { enabled } = options.ts;
    if (!enabled) return;
    const preset = match(options.ts)
        .with(
            { typeChecked: true, strict: true },
            () => ts.configs.strictTypeChecked,
        )
        .with(
            { typeChecked: true, strict: false },
            () => ts.configs.recommendedTypeChecked,
        )
        .with({ typeChecked: false, strict: true }, () => ts.configs.strict)
        .with(
            { typeChecked: false, strict: false },
            () => ts.configs.recommended,
        )
        .exhaustive() as Linter.Config[];
    return [
        ts.configs.base,
        {
            name: 'akrc/typescript',
            files: [sources.ts],
            rules: { ...js.configs.recommended.rules },
        },
        ts.configs.eslintRecommended,
        ...ts.config({
            name: 'tseslint/base',
            extends: preset,
            files: [sources.ts],
            languageOptions: {
                parserOptions: {
                    project: true,
                },
            },
        }),
        {
            name: 'import-x/typescript',
            ...importx.flatConfigs.typescript,
        },
    ] as Linter.Config[];
};

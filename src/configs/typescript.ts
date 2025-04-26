import type { Linter } from 'eslint';
import { match } from 'ts-pattern';
import { sources } from '../constants';
import type { ConfigResolver } from './types';

export const typescript: ConfigResolver = async (options) => {
    const { enabled } = options.ts;
    if (!enabled) return;
    const ts = await import('typescript-eslint').then((m) => m.default);
    const importx = await import('eslint-plugin-import-x').then(
        (m) => m.default,
    );
    const js = await import('@eslint/js').then((m) => m.default);
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

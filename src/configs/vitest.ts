import type { ConfigResolver } from './types';
import eslintVitest from '@vitest/eslint-plugin';

export const vitest: ConfigResolver = (options) => {
    const { enabled } = options.vitest;
    if (!enabled) return;
    return [
        {
            files: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
            ...eslintVitest.configs.recommended,
        },
    ];
};

import type { ConfigResolver } from './types';

export const vitest: ConfigResolver = async (options) => {
    const { enabled } = options.vitest;
    if (!enabled) return;
    const vitest = await import('@vitest/eslint-plugin').then((m) => m.default);
    return [
        {
            files: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
            ...vitest.configs.recommended,
        },
    ];
};

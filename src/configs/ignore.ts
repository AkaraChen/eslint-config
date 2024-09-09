import type { ConfigResolver } from './types';

export const ignores: ConfigResolver = (options) => {
    return [
        {
            name: 'akrc/ignore',
            ignores: ['**/dist/**', '**/*.d.ts', ...options.ignores],
        },
    ];
};

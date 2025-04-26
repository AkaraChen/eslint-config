import type { ConfigResolver } from './types';

export const tailwindcss: ConfigResolver = async (options) => {
    const { enabled, callee } = options.tailwind;
    if (!enabled) return;
    const tailwind = await import('eslint-plugin-tailwindcss').then(
        (m) => m.default,
    );
    return [
        ...tailwind.configs['flat/recommended'],
        {
            name: 'akrc/tailwindcss',
            settings: {
                tailwindcss: {
                    callee: callee,
                },
            },
        },
    ];
};

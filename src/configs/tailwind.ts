import tailwind from 'eslint-plugin-tailwindcss';
import type { ConfigResolver } from './types';

export const tailwindcss: ConfigResolver = (options) => {
    const { enabled, callee } = options.tailwind;
    if (!enabled) return;
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

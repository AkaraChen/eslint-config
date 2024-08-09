import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entryPoints: ['./src/index.ts', './src/auto.ts'],
        format: 'esm',
        dts: true,
    },
    {
        entryPoints: ['./src/cli.ts'],
        format: 'esm',
    },
]);

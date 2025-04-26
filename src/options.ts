import { defu } from 'defu';
import { isPackageListed } from 'local-pkg';
import { satisfiesSemver } from '@/utils/local-pkg';

export interface BaseOptions {
    enabled: boolean;
}

export interface TypeScriptOptions extends BaseOptions {
    strict: boolean;
    typeChecked: boolean;
}

export interface ReactOptions extends BaseOptions {
    dom: boolean;
    native: boolean;
}

export interface TailwindOptions extends BaseOptions {
    enabled: boolean;
    callee: string[];
}

export interface VitestOptions extends BaseOptions {
    enabled: boolean;
}

export interface Options {
    ts: TypeScriptOptions;
    react: ReactOptions;
    tailwind: TailwindOptions;
    vitest: VitestOptions;
    ignores: string[];
}

export const mergeDefaultOptions = async (
    options?: Partial<Options>,
): Promise<Options> => {
    const defaults: Options = {
        ts: {
            enabled: true,
            strict: true,
            typeChecked: true,
        },
        react: {
            enabled: await isPackageListed('react'),
            dom: await isPackageListed('react-dom'),
            native: await isPackageListed('react-native'),
        },
        tailwind: {
            enabled: await satisfiesSemver('tailwindcss', '<4.0.0'),
            callee: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
        },
        vitest: {
            enabled: await isPackageListed('vitest'),
        },
        ignores: [],
    };
    return defu(options, defaults);
};

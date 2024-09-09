import { defu } from 'defu';
import { isPackageListed } from 'local-pkg';

export interface TypeScriptOptions {
    strict: boolean;
    typeChecked: boolean;
}

export interface ReactOptions {
    enabled: boolean;
    dom: boolean;
    native: boolean;
}

export interface TailwindOptions {
    enabled: boolean;
    callee: string[];
}

export interface Options {
    strict: boolean;
    ts: TypeScriptOptions;
    react: ReactOptions;
    tailwind: TailwindOptions;
    ignores: string[];
}

export const mergeDefaultOptions = async (
    options?: Partial<Options>,
): Promise<Options> => {
    const defaults: Options = {
        strict: false,
        ts: {
            strict: true,
            typeChecked: true,
        },
        react: {
            enabled: await isPackageListed('react'),
            dom: await isPackageListed('react-dom'),
            native: await isPackageListed('react-native'),
        },
        tailwind: {
            enabled: await isPackageListed('tailwindcss'),
            callee: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
        },
        ignores: [],
    };
    return defu(options, defaults);
};

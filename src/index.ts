import '../eslint-typegen.d';
import { composer } from 'eslint-flat-config-utils';
import {
    javascript,
    typescript,
    ignores,
    tailwindcss,
    react,
    vitest,
} from './configs';
import { mergeDefaultOptions, type Options } from './options';

async function akrc(input?: Options) {
    const options = await mergeDefaultOptions(input);
    return composer(
        ignores(options),
        javascript(options),
        typescript(options),
        tailwindcss(options),
        react(options),
        vitest(options),
    );
}

export default akrc;

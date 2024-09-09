import type { Linter } from 'eslint';
import type { Options } from '../options';

export type ConfigResolver = (
    options: Options,
) => Array<Linter.Config | undefined> | false | undefined;

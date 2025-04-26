import type { Linter } from 'eslint';
import type { Options } from '../options';

type PromiseLike<T> = T | Promise<T>;
type NullValue = undefined | false | null;
type ArrayLike<T> = Array<T> | T[];

export type ConfigResolver = (
    options: Options,
) => PromiseLike<ArrayLike<Linter.Config | NullValue> | NullValue>;

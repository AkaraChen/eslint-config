/// <reference path="./eslint-typegen.d.ts" />

import typegen from 'eslint-typegen';
import akrc from './dist/index.js';

const config = await akrc();

export default typegen(config);

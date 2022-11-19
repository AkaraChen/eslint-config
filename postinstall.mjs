import fs from 'node:fs';
import path from 'node:path';

const currentDirectionary = process.env.INIT_CWD;

fs.writeFileSync(
    path.resolve(currentDirectionary, './.eslintrc.json'),
    JSON.stringify({extends: ['akrc']})
);

fs.writeFileSync(
    path.resolve(currentDirectionary, './.prettierrc.json'),
    JSON.stringify({
        tabWidth: 4,
        singleQuote: true,
        bracketSpacing: false,
        endOfLine: 'auto',
        trailingComma: 'none',
        bracketSameLine: true,
        arrowParens: 'avoid'
    })
);

const packageJSONPath = path.resolve(currentDirectionary, './package.json');

const packageJSON = JSON.parse(
    fs.readFileSync(packageJSONPath).toString()
);

packageJSON.scripts.lint = 'eslint --ext .js,.ts,.vue,.tsx,.jsx,.cjs,.mjs --fix .';

console.log(packageJSON);

fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 4));

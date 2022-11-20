import fs from 'node:fs';
import path from 'node:path';

const currentDirectionary = process.env.INIT_CWD;

const eslintConfig = path.resolve(currentDirectionary, './.eslintrc.json');

if (!fs.existsSync(eslintConfig)) {
    fs.writeFileSync(
        eslintConfig,
        JSON.stringify({extends: ['akrc']}, null, 4)
    );
}

const packageJSONPath = path.resolve(currentDirectionary, './package.json');

const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath).toString());

if (packageJSON.scripts.lint) {
    packageJSON.scripts.lint =
        'eslint --ext .js,.ts,.vue,.tsx,.jsx,.cjs,.mjs --fix .';
}

fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 4));

import fs from 'node:fs';
import path from 'node:path';

const currentDirectionary = process.env.INIT_CWD;

const configPath = (name) => path.resolve(currentDirectionary, name);

const configList = [
    configPath('./.eslintrc.json'),
    configPath('./eslintrc'),
    configPath('./eslintrc.js')
]

const noConfig = configList.every(config => !fs.existsSync(config))

if (noConfig) {
    fs.writeFileSync(
        configPath('./eslintrc.json'),
        JSON.stringify({extends: ['akrc']}, null, 4)
    );
}

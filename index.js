// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:unicorn/all', 'airbnb-base/legacy'],
    overrides: [
        {
            files: '*.vue',
            parser: 'vue-eslint-parser',
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/html-indent': ['error', 4],
                'unicorn/prevent-abbreviations': [
                    'error',
                    {
                        allowList: {
                            ref: true
                        }
                    }
                ]
            },
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        {
            files: '*.test.ts',
            rules: {
                'no-loop-func': 'off',
                'no-undef': 'off'
            }
        },
        {
            files: ['.**.js', '**.config.js'],
            rules: {
                'unicorn/prefer-module': 'off'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed'],
        'linebreak-style': 'off',
        'consistent-return': 'off',
        'func-names': 'off',
        'no-param-reassign': 'error',
        'no-restricted-syntax': 'off',
        'unicorn/no-keyword-prefix': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-console': 'off',
        'no-return-await': 'off',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    env: true
                }
            }
        ],
        'unicorn/filename-case': 'off',
        'no-plusplus': 'off',
        'unicorn/no-null': 'off',
        'no-restricted-globals': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off'
    },
    settings: {
        'import/resolver': {
            typescript: true
        }
    }
};

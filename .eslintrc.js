module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react'],

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            settings: {
                react: {
                    version: 'detect',
                },
                'import/resolver': {
                    node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                        paths: ['src'],
                    },
                    typescript: {
                        project: './tsconfig.json',
                        paths: ['src'],
                    },
                },
            },
            plugins: ['import', '@typescript-eslint'],
            extends: [
                'airbnb',
                'airbnb-typescript',
                'airbnb/hooks',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],

            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
                sourceType: 'module',
            },

            rules: {
                semi: 2,
                'import/no-unresolved': 'error',
                // 'import/no-named-as-default-member': 'off',
                'import/order': [
                    'error',
                    {
                        groups: [
                            'builtin', // Built-in imports-manager (come from NodeJS native) go first
                            'external', // <- External imports-manager
                            'internal', // <- Absolute imports-manager
                            ['sibling', 'parent'], // <- Relative imports-manager, the sibling and parent types they can be mingled together
                            'index', // <- index imports-manager
                            'unknown', // <- unknown
                        ],
                        pathGroups: [
                            {
                                pattern: 'react',
                                group: 'external',
                                position: 'before',
                            },
                        ],
                        'newlines-between': 'always',
                        alphabetize: {
                            /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                            order: 'asc',
                            /* ignore case. Options: [true, false] */
                            caseInsensitive: true,
                        },
                    },
                ],
                'no-restricted-syntax': 0,
                'import/extensions': 0,
                'jsx-a11y/iframe-has-title': 0,
                'iframe-has-title': 0,
                'no-bitwise': 0,
                'import/no-extraneous-dependencies': 0,
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/no-var-requires': 0,
                'import/no-cycle': 0,
                'eslint-disable-next-line jsort/sort-imports': 0,
                'import/prefer-default-export': 0,
                'eslint-disable-next-line import/prefer-default-export': 0,
                'eslint-disable-next-line jsx-a11y/alt-text': 0,
                'eslint-disable-next-line no-restricted-syntax': 0,
                'no-multiple-empty-lines': 0,
                'react/jsx-props-no-spreading': 0,
                'react/button-has-type': 0,
                'vue/max-attributes-per-line': 0,
                '@typescript-eslint/no-use-before-define': 0,
                'no-empty': 0,
                'default-case': 0,
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/no-unused-vars': 0,
                '@typescript-eslint/no-shadow': 0,
                'jsx-a11y/no-noninteractive-element-interactions': 0,
                'array-callback-return': 0,
                'jsx-a11y/click-events-have-key-events': 0,
                'jsx-a11y/no-static-element-interactions': 0,
                'react-hooks/exhaustive-deps': 0,
                '@typescript-eslint/default-param-last': 0,
                'react/destructuring-assignment': 0,
                'no-param-reassign': 0,
                '@typescript-eslint/ban-ts-comment': 0,
                '@typescript-eslint/naming-convention': 0,
                'no-underscore-dangle': 0,
                '@typescript-eslint/ban-types': 0,
                '@typescript-eslint/explicit-member-accessibility': 0,
                'react/jsx-filename-extension': 0,
                'react/prop-types': 0,
                'consistent-return': 0,
                '@typescript-eslint/no-unused-expressions': 0,
                'react/no-children-prop': 0,
                'no-plusplus': 0,
                'linebreak-style': 0,
                'prefer-regex-literals': 0,
                'no-case-declarations': 0,
                'class-methods-use-this': 0,
                'react/require-default-props': 0,
                'no-mixed-operators': 0,
                'no-nested-ternary': 0,
                'react-hooks/rules-of-hooks': 0,
                'react/jsx-no-useless-fragment': 0,
                'react/no-array-index-key': 0,
                'max-len': 0,
                '@typescript-eslint/no-empty-interface': 0,
            },
        },
    ],
};

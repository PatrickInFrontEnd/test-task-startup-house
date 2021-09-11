module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.ts', '.tsx'] },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/extensions': [0, { extensions: ['.ts', '.tsx'] }],
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.ts',
                    '.tsx',
                    '.js',
                    '.jsx',
                    '.svg',
                    '.png',
                    '.jpg',
                    '.jpeg',
                ],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    },
}

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'immutable',
    ],
    rules: {
        'no-console': 0,
        indent: ['error', 4],
        'immutable/no-mutation': 'error',
    },
};

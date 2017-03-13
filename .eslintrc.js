module.exports = {
    extends: ['airbnb', 'prettier'],
    installedESLint: true,
    plugins: ['import', 'prettier'],
    rules: {
        'no-console': 0,
        'import/newline-after-import': 0,
		'no-underscore-dangle': 0,
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                tabWidth: 4,
                bracketSpacing: true
            }
        ]
    },
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
        jest: true
    }
};

module.exports = {
    extends: ["airbnb", "prettier", "prettier/flowtype", "prettier/react"],
    installedESLint: true,
    plugins: ["import", "prettier"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "prettier/prettier": [
            "error",
            {
                trailingComma: "es5",
                singleQuote: true,
                tabWidth: 4,
                bracketSpacing: true
            }
        ]
    },
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: "module"
    },
    env: {
        es6: true,
        node: true,
        jest: true
    }
};

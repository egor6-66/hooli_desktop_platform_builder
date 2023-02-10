module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    overrides: [
        {
            files: ['*.ts', "*.tsx"],
            options: {
                printWidth: 120,
            }
        }
    ]
};
const prettierOptions = {
  arrowParens: "always",
  trailingComma: "all",
  singleQuote: true,
};

module.exports = {
  extends: [
    'prettier',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
};

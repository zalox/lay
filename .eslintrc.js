const prettierOptions = {
  arrowParens: "always",
  trailingComma: "all",
  singleQuote: true,
};

module.exports = {
  extends: [
    'airbnb',
    'prettier',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'prettier',
    'react',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
};


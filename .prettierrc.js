// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.test.js',
      options: {
        semi: true,
      },
    },
    {
      files: ['*.html', 'legacy/**/*.js'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};

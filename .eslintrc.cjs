// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': 'warn',
//   },
// }

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    // Additional rules or overrides can be added here
    'react-refresh/only-export-components': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

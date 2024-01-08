module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // ... (your existing rules)

    'react/prop-types': 'error', // Add this line to enforce prop type validation
  },
};

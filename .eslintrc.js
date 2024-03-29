module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
  },
  plugins: ['react', '@next/eslint-plugin-next', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
};

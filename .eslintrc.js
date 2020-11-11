module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    // 禁用console.log
    'no-console': 0,
    // 禁用默认为export default
    'import/prefer-default-export': 0,
    'func-names': 0,
    'import/no-unresolved': 0,
  },
};

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base','prettier',
  ],
  plugins: [ 'prettier' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
  },
};

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  extends: ['standard'],
  rules: {
    'comma-dangle': [
      'error',
      { functions: 'never', arrays: 'always-multiline', objects: 'always-multiline' },
    ],
    'max-len': ['warn', { code: 100, comments: 120 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'prefer-const': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { named: 'never' }],
  },
  ignorePatterns: ['node_modules'],
};

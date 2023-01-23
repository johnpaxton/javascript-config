module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    // requireConfigFile: false,
  },
  extends: ['standard', 'standard-with-typescript'],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, { MemberExpression: 1 }],
    'max-len': ['error', { code: 90, comments: 120 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'prefer-const': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'semi' },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/promise-function-async': ['off'],
    'no-void': ['off'],
  },
  ignorePatterns: ['node_modules'],
};

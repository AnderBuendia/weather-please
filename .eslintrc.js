module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'prettier',
    'airbnb-base/legacy',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-body-style': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', 140],
    'no-underscore-dangle': 'off',
  },
};

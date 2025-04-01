module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'airbnb', // Airbnb style guide
    'airbnb-typescript', // Airbnb + TypeScript support
    'plugin:react/recommended', // React-specific linting rules
    'plugin:@typescript-eslint/recommended', // TypeScript linting
    'plugin:prettier/recommended', // Enables Prettier rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Required for TypeScript linting
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'], // Enforce Prettier formatting
    'react/react-in-jsx-scope': 'off', // Next.js & React 18 don't need React in scope
    'react/prop-types': 'off', // TypeScript handles prop validation
    'import/prefer-default-export': 'off', // Allow named exports
    'no-console': 'warn', // Warn about console logs
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'], // Warn for unused variables
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  settings: { react: { version: 'detect' } },
};

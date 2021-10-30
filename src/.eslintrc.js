module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    semi: 'off',
    'react-hooks/exhaustive-deps': ['off'],
    '@typescript-eslint/no-extra-semi': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 0,
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-trailing-spaces': 'error',
  },
  env: {
    jest: true,
  },
};

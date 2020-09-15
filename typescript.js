module.exports = {
  extends: [
    './non-rules-config.js',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-use-before-define': 'off'
  }
}
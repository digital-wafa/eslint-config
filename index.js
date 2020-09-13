module.exports = {
  "parser": 'babel-eslint',
  "rules": {
    "no-unused-vars": "error",
  },
  "overrides": [
    {
      "files": ["**/*.ts?(x)"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "error"
      }
    }
  ]
}

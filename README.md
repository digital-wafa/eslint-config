## What it does

Lints jsx,js,tsx,ts based on the latest standards

## Installing

```
npm install @digital-wafa/eslint-config --save-dev
```

It highly recommend extending the base config if you are using `create-react-app` if you don't skip this config :

```json
{
  "extends": ["react-app"]
}
```

## Usage

Add this config to your `.eslintrc` :

```json
{
  "extends": [
    "@digital-wafa/eslint-config"
  ],
  "rules": {
    /* custom rules */
  }
}
```

## Other configs

This config also exposes a few other configs that I use often and pull in as needed.

You can use them standalone:

```json
{
  "extends": [
    "@digital-wafa/eslint-config/<config-name>",
  ]
}
```
Or in combination with the base config (recommended)

```json
{
  "extends": [
    "@digital-wafa/eslint-config",
    "@digital-wafa/eslint-config/<config-name>",
  ]
}
```

## Example of highly customized config

```json
{
  "extends": [
    "@digital-wafa/eslint-config",
    "@digital-wafa/eslint-config/react",
    "@digital-wafa/eslint-config/typescript"
  ],
  "rules": {
    /* custom rules */
  },
}
```

When working with `TypeScript`, you'll need to provide an overrides object for rules that should only target TypeScript files.

```json
{
  /* your base config */
  "overrides": [
    {
      "files": [
        "**/*.ts?(x)"
      ],
      "rules": {
        /* custom rules */
      }
    }
  ]
}
```

You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint ./src/*",
  "lint:fix": "eslint ./src/* --fix"
},
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

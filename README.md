![wafa eslint config](images/logo.jpeg)
# Eslint-config  ![npm version](https://img.shields.io/npm/v/@digital-wafa/eslint-config)

A shared eslint configuration to use in digital wafa projects

***

## Installing

```
npm install @digital-wafa/eslint-config --save-dev
```

It highly recommend extending the base config if you are using `create-react-app` if you don't skip this config :

```javascript
{
  "extends": ["react-app"]
}
```

## Usage

Add this config to your `.eslintrc` :

```javascript
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

```javascript
{
  "extends": [
    "@digital-wafa/eslint-config/<config-name>",
  ]
}
```
Or in combination with the base config (recommended)

```javascript
{
  "extends": [
    "@digital-wafa/eslint-config",
    "@digital-wafa/eslint-config/<config-name>",
  ]
}
```

## Example of highly customized config

```javascript
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

```javascript
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

```javascript
{
  "scripts": {
    "lint": "eslint ./src/*",
    "lint:fix": "eslint ./src/* --fix"
  },
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

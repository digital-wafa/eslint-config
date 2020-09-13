## Eslint Configuration

Create-react-app settings for ESLint Configuration

## What it does

Lints jsx,js,tsx,ts based on the latest standards

## Installing

It's usually best to install this locally once per project, that you can override rules according to your team needs

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install @digital-wafa/eslint-config --save-dev
```
 
3. It highly recommend extending the base config if you don't have any module Eslint yet.

```json
{
  "extends": ["react-app"]
}
```

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": 
  [
    "...",
    "@digital-wafa/eslint-config"
  ]
}
```
5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint ./src/*",
  "lint:fix": "eslint ./src/* --fix"
},
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

## Full exemple to overrides @digital-wafa/eslint-config rules including Typescript

You'll need to provide an overrides object for rules that should only target TypeScript files :

```json
{
  "extends": ["react-app", "@digital-wafa/eslint-config"],
  "rules": {
    "no-unused-vars": "error"
  },
  "overrides": [
    {
      "files": [
        "**/*.ts?(x)"
      ],
      "rules": {
        "@typescript-eslint/no-unused-vars": "warn"
      }
    }
  ]
}
```
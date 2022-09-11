# Testing React with Jest and React Testing Library (RTL)

## Part 1 - Writing TDD By Simple create-react-app

Create React App Official Site [https://create-react-app.dev/](https://create-react-app.dev/)

Testing Library Which Query Should I Use [https://testing-library.com/docs/queries/about/#priority](https://testing-library.com/docs/queries/about/#priority)

W3C Role Definitions [https://www.w3.org/TR/wai-aria/#role_definitions](https://www.w3.org/TR/wai-aria/#role_definitions)

jest dom GitHub page [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Part 2 - install ESLint, Prettier, ESLint Plugin for Testing Library, ESLint Plugin for Jest DOM:

install eslint, prettier

```sh
npm i -D eslint
npm create @eslint/config

npm i -D prettier

npm i -D eslint-config-prettier
```

.prettierrc.json

```javascript
{
  "tabWidth": 2,
  "singleQuote": true
}

```

ESLint Plugin for Testing Library
[https://github.com/testing-library/eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

ESLint Plugin for Jest DOM
[https://github.com/testing-library/eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)

.eslintrc.json :

```javascript
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/dom"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "testing-library", "jest-dom"],

  "rules": {
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error"
  }
}

```

User settings.json Location in VS-Code
[https://code.visualstudio.com/docs/getstarted/settings#\_settings-file-locations](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)

.vscode > settings.json :

```javascript
{
  "eslint.validate": [
    "typescript",
    "typescriptreact",
    "javascript",
    "javascriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

```

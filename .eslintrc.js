const path = require('path');
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType:  'module',
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "no-unused-vars": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/interface-name-prefix": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowTypedFunctionExpressions: true }
    ],
    "require-await": "error",
    "react/prop-types": ["off", { "extensions": [".tsx"] }],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts"] }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx", ".d.ts"]
      }
    }
  }
};

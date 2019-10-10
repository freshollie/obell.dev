module.exports = {
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "import"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }], // tsx extension for typescript
    "react/prop-types": ["off"], // No proptypes for typescript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ]
  }
};

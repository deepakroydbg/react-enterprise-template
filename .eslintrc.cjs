module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["react", "react-hooks", "@typescript-eslint"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],

  rules: {
    "no-console": "warn",
    "no-unused-vars": "off",

    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": "warn",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    "prefer-const": "error",
    "no-var": "error"
  },
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // removes warning for '$' undefined when working with jQuery
    // https://stackoverflow.com/a/39511584
    jquery: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // https://stackoverflow.com/a/71384607
    // note you must disable the base rule
    // as it can report incorrect error

    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
};

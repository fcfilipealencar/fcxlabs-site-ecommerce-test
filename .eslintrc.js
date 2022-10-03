const eslintConfig = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    globals: {
        React: true,
        jsdom: true,
        JSX: true,
        BodyInit: true,
        RequestInfo: true,
        RequestInit: true,
    },
    settings: {
        react: {
            version: "detect",
            // version: "latest",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
            },
        },
    },
    plugins: ["@typescript-eslint", "jest"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "plugin:react-hooks/recommended",
        "plugin:cypress/recommended",
        "next",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        // "@typescript-eslint/no-explicit-any": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        ],
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
        "no-nested-ternary": "off",
        "no-console": "off",
        "react/no-array-index-key": "off",
        "import/prefer-default-export": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/no-unknown-property": [
            2,
            {
                ignore: ["jsx"],
            },
        ],
    },
};

module.exports = eslintConfig;

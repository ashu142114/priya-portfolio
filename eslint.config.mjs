import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;

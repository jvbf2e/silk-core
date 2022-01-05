/**
 * selling ESLint 规则
 *
 * 依赖版本：
 *   
    "@babel/eslint-parser": "^7.16.5",
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "@vue/eslint-config-standard": "^6.1.0",
    "@vue/eslint-config-typescript": "^10.0.0",
    "eslint": "^8.6.0",
    "eslint-config-next": "^12.0.7",
    "eslint-config-react-app": "^7.0.0",
    "eslint-config-taro": "^3.3.19",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "eslint-plugin-vue": "^8.2.0"
  
 *
 */

const vueRules = require("../rules/vue-common.js");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended",
    "./base.js",
    "./typescript.js",
  ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  plugins: ["vue"],
  rules: Object.assign({}, vueRules),
};

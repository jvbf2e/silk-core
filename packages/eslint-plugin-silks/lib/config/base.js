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
    "eslint-plugin-vue": "^8.2.0",
    "typescript": "^4.5.4"
  
 *
 */

var common = require('../rules/common.js')

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: Object.assign({}, common),
}

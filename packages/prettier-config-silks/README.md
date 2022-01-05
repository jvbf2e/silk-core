## Prettier 规范

是毛线前端 Prettier 规范

#### 安装

```shell
npm install prettier-config-silks -D
# OR
yarn add prettier-config-silks --dev
```

#### 使用

##### 方法 1. 修改 package.json

```json
// 编辑您项目package.json加上下面这一行
{
  ...
  "prettier": "prettier-config-silks",
  ...
}
```

##### 方法 2. 创建/修改本地.prettierrc.js 文件

```js
// 编辑.prettierrc.js
module.exports = {
  ...require("prettier-config-silks"),
  semi: false,
};
```

:::caution
如果项目之前安装过 Prettier 相关的包，建议卸载，避免引入不必要的包。如`prettier`等，直接在 package.json 搜索**prettier**，相关的包全部卸载
:::

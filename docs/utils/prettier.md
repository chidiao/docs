# Prettier

## 我的配置

.prettierrc

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

## 默认配置

[options](https://prettier.io/docs/en/options.html)

```json
{
  "printWidth": 80, // 单行长度
  "tabWidth": 2, // 缩进单位
  "useTabs": false, // 缩进方式
  "semi": true, // 末尾分号
  "singleQuote": false, // 单引号
  "quoteProps": "as-needed", // 对象key引号
  "jsxSingleQuote": false, // jsx单引号
  "trailingComma": "es5", // 尾随逗号
  "bracketSpacing": true, // 对象空格 eg: { foo: bar }
  "bracketSameLine": false, // 多行属性尾标签同行
  "arrowParens": "always", // 箭头函数单参数括号 eg: (x) => x
  "rangeStart": 0,
  "rangeEnd": Infinity,
  "parser": null,
  "filepath": null,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css", // 空白敏感度
  "vueIndentScriptAndStyle": false, // vue 缩进
  "endOfLine": "lf", // 结束行形式
  "embeddedLanguageFormatting": "auto", // 引用代码格式化
  "singleAttributePerLine": false // 一个属性占一行
}
```

## 缩进

默认使用 2 个空格缩进

tab 缩进在不同编辑器中表现可能不同

空格缩进在不同编辑器中表现相同

## 尾随逗号

```json
{
  "trailingComma": "none"
}

// es5：es5中合法的尾随逗号
// all：所有合法的尾随逗号
let obj = {
  a: 1,
  b: 2,
}

// none: 不保留尾随逗号
let obj = {
  a: 1,
  b: 2
}
```

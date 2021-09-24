# 配置

## 常用配置

### jsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"],
  "include": ["src/**/*"]
}
```

### .prettierrc

```json
// 常用配置
{
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}

// 默认配置
{
  "printWidth": 80,
  // 换行长度
  "tabWidth": 2,
  // 缩进大小
  "useTabs": false,
  // 缩进方式，Prettier使用空格来对齐
  "semi": true,
  // 结尾是否跟分号
  "singleQuote": false,
  // 是否使用单引号
  "trailingComma": "es5",
  // 行尾是否跟随逗号：es5|none|all
  "bracketSpacing": true,
  // { 大括号留空 }
  "jsxBracketSameLine": false,
  // JSX标签闭合位置
  "arrowParens": "always",
  // 箭头函数带小括号：always|avoid
  "vueIndentScriptAndStyle": false,
  // vue <script> <style> 内容统一缩进，(false => Vetur)
  "endOfLine": "lf"
  // lf|crlf|cr|auto
}
```

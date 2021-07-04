# vscode

## prettier

[文档](https://prettier.io/docs/en/index.html)

```json
// .prettierrc

// 常用值
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "arrowParens": "avoid"
}

// 默认值
{
  "printWidth": 80,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}

// Prettier使用空格来对齐
```



## 问题

### vscode 禁止运行脚本

管理员身份运行命令

```bash
set-ExecutionPolicy RemoteSigned
```


# 配置

## Prettier

- [Prettier](https://prettier.io/)

- [Options](https://prettier.io/docs/en/options.html)

```json
// .prettierrc
// .prettierrc.json
{
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

## Jsconfig

```json
// jsconfig.json
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

## vscode

### 禁止运行脚本

管理员身份运行 vscode

```bash
# 执行
set-ExecutionPolicy RemoteSigned

# 查验
get-ExecutionPolicy
# Restricted
# RemoteSigned
```

### Auto Closing Tags

auto closing tags

### Linked Editing

auto rename tags

### Bracket Pair Colorization

括号对着色

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

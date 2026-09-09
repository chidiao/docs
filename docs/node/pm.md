# 包管理工具

## 常用命令

| npm                         | yarn                 | pnpm       |
| --------------------------- | -------------------- | ---------- |
| npm init [-y]               | yarn init            | pn init    |
| npm install                 | yarn                 | pn i       |
| npm install pkg [-D] [-g]   | yarn add pkg         | pn add pkg |
| npm uninstall pkg [-D] [-g] | yarn rm pkg          | pn rm pkg  |
| npm update pkg [-g]         | yarn up pkg [global] | pn up pkg  |
| npm run dev                 | yarn dev             | pn dev     |
| npm list [-g]               | yarn list [global]   | pn list    |

## pnpm

[pnpm](https://pnpm.io/)

### 执行器

```sh
# 本地执行
# 执行本地安装包，行不通就报错结束

npm exec pkg
pnpm exec pkg

# 简写
pn pkg

```

```sh
# 临时执行
# 优先本地执行，行不通就临时下载执行（全局缓存）

npx pkg
pnpm dlx pkg


# 简写
pnx pkg
```

## 对比

| 包管理工具 | 推出年份 | 代表作           | 现状                            |
| :--------- | :------- | :--------------- | :------------------------------ |
| **npm**    | 2010     | Node.js 官方自带 | 最老牌，用户最多，但速度慢      |
| **yarn**   | 2016     | Facebook 推出    | 当时比 npm 快，但现在优势不明显 |
| **pnpm**   | 2017     | 新一代           | **最快！最省硬盘！** 目前趋势   |
| **bun**    | 2022     | 超新星           | 不仅包管理，还是运行时，潜力股  |

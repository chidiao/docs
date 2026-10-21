---
name: link-entry
description: 以链接罗列的文档（收藏夹、IDE 插件、资源清单等）的条目展示规范：标题、链接、简介、其他（可选）。新增或修改此类清单前必读。
---

# 链接条目

用于收藏夹（`/nav/`）、IDE 插件（`/nav/ide-plugin`）等以链接罗列的文档。

## 结构

每个条目由四部分组成，顺序固定：

1. **标题** — 三级标题 `### <标题>`，用简短名称。
2. **链接** — `[名称](地址)`；名称可用站点/项目的正式称呼，与标题可不同。
3. **简介** — 一句话说明用途或特点。
4. **其他（可选）** — 配置片段、补充说明、相关链接等，按需追加。

## 示例

```md
### Prettier

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

代码格式化工具，统一代码风格，支持保存自动格式化。
```

带「其他」的示例：

```md
### UnoCSS

[UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

UnoCSS 原子化 CSS 的编辑器支持，提示、补全与高亮。

[插件文档](https://unocss.dev/integrations/vscode)

需 `uno.config.ts` 才会生效，找不到配置时插件自动禁用。
```

## 约定

- 一个文件只放同一类目；条目较多时用 `##` 做二级分类，很大时再拆分为 `/xx/index` 与 `/xx/<类目>` 子页。
- 条目之间空一行，不再向下嵌套标题。

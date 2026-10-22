---
name: nav-sidebar
description: 本项目（VitePress）顶部导航（nav）与侧栏（sidebar）的配置规则：sidebar 组织与合并、nav 显隐与公用约定、新增目录流程。修改 nav/sidebar 前必读。
---

# 网站导航配置

## 规则

1. **都有 sidebar，nav 根据配置显示与否**
   - 每个目录都提供并注册 `sidebar.ts`；是否出现在顶部 nav，在 `docs/.vitepress/nav.ts` 按需配置，与 sidebar 是否注册无关。

2. **qa 与 root 的 layout 独立**
   - 根站点：`docs/.vitepress/nav.ts`（顶部导航）+ `docs/.vitepress/sidebar.ts`（侧栏）。
   - `qa`：独立的 `docs/.vitepress/qaNav.ts`，由 `theme/QaNav.vue`、`theme/QaNavScreen.vue` 在 `qa/` 路径下渲染，不进入根 nav。

3. **`qa`、`me` 不展示 nav 入口**
   - `qa` 走独立导航（见规则 2）。
   - `me` 有 sidebar，但不在 nav 注册。

## 新增目录流程

1. 在目录内新建 `sidebar.ts`，按约定导出（导出命名 `items` 以便被复用）：

   ```ts
   import type { DefaultTheme } from 'vitepress'

   export const items: DefaultTheme.SidebarItem[] = [
     { text: '分组', items: [{ text: '页面', link: '/<dir>/<page>' }] }
   ]

   export default { '/<dir>/': items } satisfies DefaultTheme.Sidebar
   ```

2. 在 `docs/.vitepress/sidebar.ts` 中 `import` 并 `...spread` 合入。
3. 按需在 `docs/.vitepress/nav.ts` 注册入口。
4. 若需与同类目录公用 sidebar，见下方约定。

## Sidebar 约定

- 每个目录一个 `sidebar.ts`，导出命名 `items` 与默认路由表 `{ '/<dir>/': items }`。
- 子目录可各自维护 `sidebar.ts`，由父级 `import` 后 `...spread` 合并（见 `js/sidebar.ts`、`vue/sidebar.ts`、`qa/sidebar.ts`）。
- 隐藏目录（`me`）同样提供并注册 sidebar，仅不写入 nav。
- **公用 sidebar**：每个目录各自维护 `sidebar.ts`（配置不搬到别处）；宿主目录 `import { items as <child> }` 后合并进自己的 `items`，再把同一组 `items` 映射到多个路由 key。
  - `wx`（小程序）→ `uni/sidebar.ts` 合并 `wx` 的 `items`，映射 `'/uni/'`、`'/wx/'`。
  - `dart`、`getx` → `flutter/sidebar.ts` 合并二者的 `items`，映射 `'/flutter/'`、`'/dart/'`、`'/getx/'`。
  - `skills` → `nav/sidebar.ts` 合并 `skills` 的 `items`，映射 `'/nav/'`、`'/skills/'`（收藏夹组在上）。
- 链接使用绝对路径（如 `/code/git`），目录首页用带斜杠的 `/xxx/`。

## Root sidebar 导入排序

`docs/.vitepress/sidebar.ts` 的导入按分组整理：

1. 按分组聚合，同组导入相邻，组间空一行。
2. 同组内，**公用 sidebar 的宿主目录**（有 nav 入口者）排在前面，其余随意。
3. 末尾 `sidebar` 合并（`...spread`）沿用相同顺序，但不保留空行。

分组顺序：语言基础 → Web 前端 → 跨端开发 → 工具（`code`）→ 收藏夹（`nav`）→ 隐藏 / 独立（`me`、`qa`）。

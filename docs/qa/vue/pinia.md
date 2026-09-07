# Pinia

## Pinia 是什么？

是 Vue3 的官方状态管理库，用于替代 Vuex ，是 Vuex 的升级版。

## 与 Vuex 的区别？

### API 更简洁

Vuex 强制区分 **同步 mutations** 和 **异步 actions**，而 Pinia 完全移除了 mutations。

官方文档明确规定 mutation

- 必须是同步函数
- 修改 state 的唯一方式

社区编码习惯，常量化管理。这是从 Flux/Redux 生态迁移过来的编码习惯。

- 通常只更新 state ，不做多余的逻辑操作
- mutation 名使用大写或常量，可以直观的区分 mutation 和普通方法

Vuex 更新状态需要 commit 调用 mutaition 来更新 state ，Pinia 可以直接对 state 进行修改。

### TypeScript支持

Pinia 在编写时即提供完整的类型推断

### 模块化

Pinia 中每个 `defineStore` 创建的 store 天然就是独立模块，支持在 store 之间互相导入使用，没有 Vuex 中 modules 嵌套导致的命名空间和访问路径问题。

### 体积极小

约 1KB

Pinia 的轻量设计使其对应用性能影响极小，特别适合对加载速度敏感的项目。

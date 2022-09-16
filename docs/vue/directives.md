# Directives

## 内置指令

| 指令      | 作用                       |
| --------- | -------------------------- |
| v-text    | 绑定文本                   |
| v-html    | 绑定 `innerHTML`           |
| v-show    | 控制元素可见性，`display`  |
| v-if      | 控制元素渲染               |
| v-else-if |                            |
| v-else    |                            |
| v-for     | 列表渲染                   |
| v-on      | 事件监听，`@`              |
| v-bind    | 动态绑定参数               |
| v-model   | 双向绑定                   |
| v-slot    | 插槽，`#`                  |
| v-pre     | 跳过编译，原样显示         |
| v-once    | 只渲染一次                 |
| v-memo    |                            |
| v-cloak   | 非构建环境下，解决闪烁问题 |

### v-for

```html
<div v-for="(item, index) in items" :key="item.id">{{ item.name }}</div>
<div v-for="(value, key, index) in object">{{ key }} : {{ value }}</div>
```

### v-cloak

```scss
[v-cloak] {
  display: none;
}
```

```html
<div v-cloak>{{ message }}</div>
```

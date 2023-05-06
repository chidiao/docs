# v-for

## v-for

::: code-group

```html [arr]
<div v-for="(item, index) in items">{{ item.name }}</div>

<div v-for="n in 10">{{ n }}</div>

<template v-for="item in items">
  <li>{{ item.msg }}</li>
</template>
```

```html [obj]
<!-- 顺序：Object.keys() -->
<div v-for="(value, key, index) in obj">{{ key }}: {{ value }}</div>
```

:::

## v-for 和 v-if

::: warning

同时使用 `v-if` 和 `v-for` 是不推荐的

:::

vue2 中 `v-for` 的优先级更高。

vue3 中 `v-if` 的优先级更高，它甚至无法访问到实例，报错。

正确的做法是用计算属性处理。

::: code-group

```html [vue3]
<!-- undefined -->
<li v-for="todo in todos" v-if="todo.show">{{ todo.name }}</li>

<!-- 不明所以 -->
<template v-for="todo in todos">
  <li v-if="todo.show">{{ todo.name }}</li>
</template>
```

:::

## key

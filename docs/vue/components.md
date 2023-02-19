# 组件

## 注册

```js
// 全局注册
app.component('Blog', Blog)

// 局部注册
export default {
  components: {
    Blog
  }
}
```

## 插槽

默认内容

```html
<!-- MyBtn -->
<button class="my-btn">
  <slot>默认值</slot>
</button>

<!-- 使用 -->
<MyBtn>按钮</MyBtn>
```

具名插槽

```html
<!-- BaseLayout -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- 使用 -->
<BaseLayout>
  <template v-slot:header></template>
  <template v-slot:default></template>
  <template v-slot:footer></template>
</BaseLayout>

<!-- 简写 -->
<BaseLayout>
  <template #header></template>
  <template #default></template>
  <template #footer></template>
</BaseLayout>
```

## 注入

::: code-group

```js [父]
import { provide } from 'vue'

provide('count', count)
provide('blog', blog)
```

```js [子]
import { inject } from 'vue'

let myCount = inject('count')
let myBlog = inject('blog')
```

```js [全局]
import { createApp } from 'vue'

let app = createApp({})
app.provide('msg', 'hello')
```

:::

## 动态组件

```html
<component :is="active"></component>
```

include 需要缓存的组件

exclude 不需要缓存的组件

```html
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```

## 异步组件

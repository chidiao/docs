# CSS

## scoped

作用域

`scoped` 会在该组件的所有元素和子组件的根元素上添加指纹 id，在满足条件的情况下子组件的根元素也可以受控，方便实现布局等功能

```html
<div class="parent" data-v-xxx>
  <header data-v-xxx></header>

  <!-- 子组件 -->
  <div class="child" data-v-xxx>
    <header></header>
    <div></div>
    <footer></footer>
  </div>

  <footer data-v-xxx></footer>
</div>
```

```vue
<style scoped>
header {
  color: red;
}

.parent footer {
  color: blue;
}

/* 编译结果 */
header[data-v-xxx] {
  color: red;
}

.parent footer[data-v-xxx] {
  color: blue;
}
</style>
```

样式穿透

`:deep()` 伪类选择器

```vue
<style scoped>
:deep(header) {
  color: red;
}

.parent :deep(footer) {
  color: blue;
}

/* 编译结果 */
[data-v-xxx] header {
  color: red;
}

.parent[data-v-xxx] footer {
  color: blue;
}
</style>
```

## v-bind

样式绑定，动态变量

```vue
<script setup>
const color = ref('red')
const theme = ref({
  color: 'red'
})
</script>

<style>
.box {
  color: v-bind(color);
  color: v-bind('theme.color');
}
</style>
```

## Class

对象语法

键为类名，值为 `boolean` 值

```html
<div :class="classObject"></div>
```

```js
const classObject = {
  active: isActive,
  'text-danger': hasError
}
```

数组语法

元素为返回类名的变量，表达式，对象语法

```html
<div :class="classArray"></div>
```

```js
const classArray = [activeClass, errorClass, isActive ? 'active' : '', classObject]
```

## Style

对象语法

```html
<div :style="styleObject"></div>
```

```js
const styleObject = {
  color: 'red',
  fontSize: '13px'
}
```

数组语法

元素为对象语法

```html
<div :style="styleArray"></div>
```

```js
const styleArray = [styleObject1, styleObject2, styleObject3]
```

# 样式

## class

### 对象语法

```html
<div :class="{ active: Boolean }"></div>

<div :class="{ active: Boolean, 'text-danger': Boolean }"></div>

<div :class="classObject"></div>
```

```js
let classObject = {
  className1: Boolean,
  className2: Boolean,
  className3: Boolean
}
```



### 数组语法

数组元素可以是变量、三元表达式、对象，当然也可以随意混合

```html
<div :class="[var1, var2, ...]">变量的值才是className，不实用</div>

<div :class="[Boolean ? active : '', ...]">三元表达式</div>

<div :class="[{ active: Boolean }, ...]">对象</div>
```



### 组件继承

[关于继承](./component.md#attrs)

```html
<template>
  <div :class="$attrs.class">
    我要继承
  </div>
  <div>
    我不要继承
  </div>
</template>
```



## style

### 对象语法

CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<div :style="styleObject"></div>
```

```js
let styleObject = {
  color: 'red',
  fontSize: '13px'
}
```



### 数组语法

```html
<div :style="[baseStyles, overridingStyles]"></div>
```


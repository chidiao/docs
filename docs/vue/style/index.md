# 类与样式

## Class

### 对象语法

对象语法返回类名

```html
<div :class="{ active: isActive, 'text-danger': hasError }"></div>

<div :class="classObject"></div>
```

```js
// 类名作为键名
const classObject = {
  active: isActive,
  'text-danger': hasError
}
```

### 数组语法

元素为返回类名的【变量、表达式、对象语法】

```html
<!-- 类名变量或对象语法 -->
<div :class="[className, classObject]"></div>

<!-- 表达式 -->
<div :class="[isActive ? 'active' : '']"></div>

<div :class="classArray"></div>
```

对象语法可以作为数组语法的子元素，混用时数组语法套对象语法即可

```html
<!-- 数组一把梭 -->
<div :class="['staticClass', className, classObject, getClass()]"></div>
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

数组语法可以合并 style，靠后的覆盖靠前的

```html
<div :style="styleArray"></div>
```

```js
// 覆盖合并
const styleArray = [baseStyles, overridingStyles]
```

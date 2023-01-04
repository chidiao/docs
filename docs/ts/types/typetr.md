# 类型转换

显示转换：`String()` 、`Number()` 、`Boolean()`

```js
let str = String(value)
let num = Number(value)
let bl = Boolean(value)
```

数字类型

```js
// Number() 是严格的，它只容忍首尾空白字符
let num = Number(' 100 ') // 100
let num = Number('100px') // NaN

// parse() 容忍首位空白字符，并且转换到不能转换为止
let num = parseInt('100px') // 100
let num = parseFloat('12.5em') // 12.5
let num = parseInt('12.3') // 12
let num = parseFloat('12.3.4') // 12.3

let num = parseInt('a123') // NaN，首位就停止了
```

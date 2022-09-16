# 数据类型

## 数据类型

8 种 基本数据类型

7 种 原始类型

1 种 引用类型

| 类型        | 值                                      | 描述                                          |
| ----------- | --------------------------------------- | --------------------------------------------- |
| `string`    |                                         | 字符串                                        |
| `number`    | `Infinity` 、`-Infinity` 、`NaN` 、数字 | 整数和浮点数，超出 `±(2^53-1)` 会出现精度问题 |
| `bigint`    | 任意长度的整数                          | 仅在少数特殊领域才会用到，`ES10` 才加入       |
| `boolean`   | `true` 和 `false`                       | 布尔型，逻辑类型                              |
| `symbol`    |                                         | 表示唯一的标识符                              |
| `null`      | `null`                                  | 无、空、值未知                                |
| `undefined` | `undefined`                             | 未被赋值                                      |
| `object`    |                                         | 对象                                          |

## 类型判断

### typeof

```js
typeof x

typeof null // 'object'
// JS 的错误，为了兼容性而被保留，历史遗留问题

typeof alert // 'function'
// function 而不是 object，技术不正确，但好用，历史遗留问题
```

### isArray

```js
Array.isArray([]) // true
Array.isArray({}) // false
```

## 类型转换

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

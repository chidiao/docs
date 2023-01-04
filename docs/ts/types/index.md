# 基本数据类型

`JavaScript` 中有 8 种基本数据类型，7 种原始数据类型，1 种引用数据类型(复杂数据类型)。

## Number

数字。整数和浮点数。超出安全整数范围会出现精度问题。

特殊值：`Infinity` 、`-Infinity` 、`NaN`

## BigInt

任意长度的整数。

## String

字符串。

## Boolean

`true` 和 `false`

## null

无、空、值未知。

`null` 是独立的类型，`null` 也是其唯一的值。

```js
typeof null // 'object'
```

## undefined

未被赋值。

`undefined` 是独立的类型，`undefined` 也是其唯一的值。

```js
let x // 声明但未被赋值
typeof x // 'undefined'
```

## Symbol

唯一标识符。

## Object

对象。

# Number

数字。包括整数和浮点数，但都是以浮点数形式进行存储的。

特殊值：`Infinity` 、`-Infinity` 、`NaN`

```ts
let age: number = 18
```

## toString(base)

进制转换

返回给定(进制)的字符串

```js
num.toString(base)

let num = 255

num.toString() // '255'
num.toString(16) // 'ff'
num.toString(2) // '11111111'
```

## parseInt()

返回一个整数

从左到右，解析到无法解析为止

```js
parseInt('100px') // 100
parseInt('12.3.4') // 12

parseInt('$100') // NaN
```

## parseFloat()

返回一个浮点数

```js
parseFloat('12.5em') // 12.5
parseFloat('12.3.4') // 12.3
```

## 精度损失

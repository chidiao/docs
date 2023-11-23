# Number

数字。包括整数和浮点数，但都是以浮点数形式进行存储的。

特殊值：`Infinity` 、`-Infinity` 、`NaN`

```js
let num = 255
```

## Number

### toString()

`num.toString(base)` 将 `num` 转换成 `base` 进制的字符串

```js
num.toString(16) //	'ff'
num.toString(2) // '11111111'

num.toString() // '255'
```

### toFixed()

`num.toFixed(n)` 将 `num` 转换成四舍五入到 `n` 位小数的字符串

### Number()

转换成 `number`

只适用于纯数字的字符串

```js
let str = '123'

console.log(+str) // 123
console.log(Number(str)) //	123
```

### parseInt()

返回一个整数

从左到右，解析到无法解析为止

```js
parseInt('100px') // 100
parseInt('12.3.4') // 12

parseInt('$100') // NaN
```

### parseFloat()

返回一个浮点数

```js
parseFloat('12.5em') // 12.5
parseFloat('12.3.4') // 12.3
```

### isFinite()

### isNaN()

## Math

[Math](../math)

## 精度损失

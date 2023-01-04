# Number

数字：包括整数和小数，但都是以浮点数形式进行存储的。

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

## 精度损失

## ----bak----

## 方法

### toString()

```js
num.toString(base)
// 返回 base 进制的'字符串', base = 10

let num = 2
num.toString() // '2'
num.toString(2) // '10'
```

### parseInt()

从左到右，解析到无法解析部分

```js
parseInt('100px') // 100
parseInit('100元') // 100

parseInit('a123') // NaN
```

### parseFloat()

```js
parseFloat('1.2.3') // 1.2
parseFloat('12.5em') // 12.5
```

## Math

内置对象

用于 `Number` 类型，不支持 `BigInt`

### min()

```js
Math.min(1, 2, 3)
```

### max()

```js
Math.max(1, 2, 3)
```

### floor()

向下取舍

```js
Math.floor(3.1) // 3
Math.floor(-1.1) // -2
```

### ceil()

向上取舍

```js
Math.ceil(3.1) // 4
Math.ceil(-1.1) // -1
```

### round()

四舍五入

```js
Math.round(3.1) // 3
Math.round(3.6) // 4
Math.round(-1.1) // -1
```

### trunc()

取整

```js
Math.trunc(3.1) // 3
Math.trunc(-1.1) // -1
```

### random()

```js
Math.random()
// 返回一个 [0, 1) 的随机数

// 拓展
function getRandom(min, max) {
  let range = max - min
  let rand = Math.random()
  return rand * range + min
}

// 取整
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  let range = max - min + 1
  let rand = Math.random()
  return Math.floor(rand * range) + min
}
```

### pow()

求幂

```js
Math.pow(x, n)

Math.pow(2, 3) // 8
```

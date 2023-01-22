# Math

[Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)

内置对象

`Math` 用于 `Number` 类型，它不支持 `BigInt` 。

## min()

```js
Math.min(1, 2, 3)
```

## max()

```js
Math.max(1, 2, 3)
```

## floor()

向下取舍

```js
Math.floor(3.1) // 3
Math.floor(-1.1) // -2
```

## ceil()

向上取舍

```js
Math.ceil(3.1) // 4
Math.ceil(-1.1) // -1
```

## round()

四舍五入

```js
Math.round(3.1) // 3
Math.round(3.6) // 4
Math.round(-1.1) // -1
```

## trunc()

取整

```js
Math.trunc(3.1) // 3
Math.trunc(-1.1) // -1
```

## random()

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

## pow()

求幂

```js
Math.pow(x, n)

Math.pow(2, 3) // 8
```

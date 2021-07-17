# Lodash

[Lodash](https://lodash.com/)

## random

```bash
yarn add lodash.random
```

```js
random([(lower = 0)], [(upper = 1)], [floating])

random(0, 5)
random(1.2, 5.2)
// 两个数之间的随机数，两个整数就随机整数，有浮点数就随机浮点数

random(5)
// 一个数表示 该数到0之间

random(5, true)
// 第三个参数指定随机数为浮点数
```

## throttle

节流函数

```bash
yarn add lodash.throttle
```

```js
throttle(func, wait, options)

let options = {
  leading: true,
  trailing: true
}

// leading：指定调用在节流开始前
// trailing：指定调用在节流结束后
```

简易版

```js
// 每创建一个计时器，结束时执行一次，并清除掉计时器，同时只会有一个计划任务岑在
export const throttle = (func, wait) => {
  let timer

  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func()
      }, wait)
    }
  }
}
```

## debounce

防抖函数

```bash
yarn add lodash.debounce
```

```js
debounce(func, wait, options)

let options = {
  leading: false,
  trailing: true,
  maxWait: 10000
}

// leading：指定调用在节流开始前
// trailing：指定调用在节流结束后
```

简易版

```js
// 调用时，如果有计时器，就把他清掉，再建一个计时器，计时器读完就会执行一次
export const debounce = (func, wait) => {
  let timer

  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(func, wait)
  }
}
```

## chunk

数组切片

将数组按 size 分页

```js
_.chunk(array, [(size = 1)])

_.chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]
```

简易版

```js
function chunk(array, size = 1) {
  let tmp = [...array]
  let result = []
  while (tmp.length) {
    result.push(tmp.splice(0, size))
  }
  return result
}
```

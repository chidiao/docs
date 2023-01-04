# Function

## 基础

无论函数是如何创建的，`函数都是一个值` 。

```js
// 函数声明
function sayHi() {
  console.log('Hi')
}

// 函数表达式
let sayHi = function () {
  console.log('Hi')
}

// 箭头函数(表达式)
let sayHi = () => {
  console.log('Hi')
}

// sayHi 变量，是一个值
// sayHi() 函数调用，函数执行
// let fn = sayHi 赋值，将函数赋值给一个新变量
// let res = sayHi() 函数调用，执行并取结果进行赋值
```

Rest 剩余参数

`(...restName)` ，实际由扩展运算符 + 数组名称构成

用来接收任意数量的参数，接收的是一个数组，且只能放在参数的最后一位

```js
function sumAll(...args) {
  let sum = 0
  for (let arg of args) sum += arg

  return sum
}
```

## call()

`func.call(context, ...args)`

使用给定的 `this` 和参数来调用一个函数

参数以列表的形式接收

```js
let xm = {
  name: 'xiaoming',
  say(word, who) {
    console.log(`${this.name} say ${word} to ${who}`)
  }
}

let xh = {
  name: 'xiaohong'
}

xm.say('hello', 'me')
xm.say.call(xh, 'hello', 'me')
```

## apply()

`func.apply(context, args)`

唯一的不同就是，参数以数组的形式接收

```js
xm.say.apply(xh, ['hello', 'me'])
```

## bind()

`func.bind(context, ...args)`

唯一的不同就是，它创建一个函数，而不是直接调用

可以接收参数，但是没啥作用，会覆盖新参数，而不是作为默认参数被新参数覆盖

```js
let mySay = xm.say.bind(xh)
mySay('hello', 'me')
```

# Function

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

// sayHi 是一个值
// sayHi() 是函数调用
// let fun = sayHi 函数赋值
// let fun = sayHi() 则是函数调用，并赋值其结果
```

## Rest

剩余参数

`...变量名`

其实就是 `扩展运算符` + `数组变量名`

用来接收任意数量的参数，接收的是一个数组，且只能放在参数的最后一位

```js
function sumAll(...args) {
  let sum = 0
  for (let arg of args) sum += arg

  return sum
}
```

## setTimeout()

定时器，执行一次

第一个参数应该是 `函数` ，而不是 `函数调用`

`sayHi` 是可以的，而不是 `sayHi()` 。

```js
// 函数及其参数
let timerId = setTimeout(sayHi, 1000)
let timerId = setTimeout(sayHi, 1000, 'Hello', 'John')

// 字符串代码块，JS会自动创建一个函数
let timerId = setTimeout("console.log('Hello')", 1000)

// 箭头函数总是更好用
let timerId = setTimeout(() => {
  sayHi('Hello', 'John')
  console.log('Hello')
}, 1000)

// 清除定时器
clearTimeout(timerId)

// 零延时，尽快执行，在任务队列完成时调用
setTimeout(func, 0)
setTimeout(func)
```

## setInterval()

计时器，周期性执行

```js
let timerId = setInterval(() => {
  console.log('Hello')
}, 1000)

clearInterval(timerId)
```

## call()

`func.call(context, ...args)`

函数的方法，还是调用这个函数，只是改变了 this

```js
let xiaoming = {
  name: 'xiaoming',
  say(word, who) {
    console.log(`${this.name} say ${word} to ${who}`)
  }
}

let xiaohong = {
  name: 'xiaohong'
}

xiaoming.say.call(xiaohong, 'hello', 'xiaoming')
```

## apply()

`func.apply(context, args)`

唯一的不同就是，参数是一个数组

```js
xiaoming.say.apply(xiaohong, ['hello', 'xiaoming'])
```

## bind()

`func.bind(context, ...args)`

唯一的不同就是，它创建一个函数，而不是直接调用

如果绑定了参数，那么传入的新参数会被覆盖而不是作为默认值

```js
let mySay = xiaoming.say.bind(xiaohong)
mySay('hello', 'xiaoming')
```

## 递归

函数通过调用自身来解决问题，这就是递归。

简单来说就是，`函数自己调用自己` 。

```js
递归思想
将一个未知问题转换为一个已解决的问题来实现

递归条件
1.子问题必须与原问题'相同'，且更为简单
2.不能无限递归，必须有个'出口'

两个要素
1.递归公式(等价关系式)
2.结束条件
```

```js
// 阶乘
function pow(x, n) {
  if (n == 1) {
    return x
  } else {
    return pow(x, n - 1)
  }
}
```

## 闭包

闭包是指一个函数可以记住其外部变量并可访问这些变量。

外部变量还包括其外部函数的参数

```js
function createCounter() {
  let count = 0

  function counter() {
    count++
    console.log(count)
  }

  return counter
}

let counter = createCounter()
// 每次调用都会创建一个新的词法环境，用来存储变量
// 函数总是可以记住并访问这个词法环境里的变量
```

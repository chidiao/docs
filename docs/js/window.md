# Window

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

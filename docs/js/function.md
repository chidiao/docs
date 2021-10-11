# Function

```js
// rest参数只能放最后
function sum(...args) {
  console.log(args)
}
```

## setTimeout

```js
let id = setTimeout(func, [delay])

clearTimeout(id)
```

**零延时**

[事件循环](https://zh.javascript.info/event-loop)

[阮一峰](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

```js
setTimeout(func, 0)
setTimeout(func)
```

## setInterval

```js
let id = setInterval(func, [delay])

clearInterval(id)
```

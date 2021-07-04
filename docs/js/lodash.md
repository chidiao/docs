# lodash

[lodash](https://www.lodashjs.com/)

[github](https://github.com/lodash/lodash)

## 数组

### chunk

数组切片

将数组按 size 分页

```js
_.chunk(array, [size=1])

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
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
  return result;
}
```



## 函数

### debounce

```js
_.debounce(func, [wait=0], [options={}])
```



简易版

```js
function debounce(fn, wait) {
  let timer;
  return function() {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
  }
}
```



### throttle

```js
_.throttle(func, [wait=0], [options={}])
```



简易版

```js
function throttle(fn, wait) {
  let timeout;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn()
      }, wait)
    }
  }
}
```


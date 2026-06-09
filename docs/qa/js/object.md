# Object

## 数组去重

```js
// 方法1：使用 Set
function uniqueArray(arr) {
  return [...new Set(arr)]
}

// 方法2：使用 filter + indexOf
function uniqueArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

// 方法3：使用 reduce + includes
function uniqueArray(arr) {
  return arr.reduce((prev, cur) => {
    if (!prev.includes(cur)) prev.push(cur)
    return prev
  }, [])
}
```

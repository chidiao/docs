# 数组

```js
Array.from('hello') // ['h','e','l','l','o']
Array.from(new Set([1, 2])) // [1,2]
```

## 遍历

## 排序

```js
let arr = [3, 30, 1]

arr.sort() // [1, 3, 30] 默认按字符串排序

arr.sort((a, b) => a - b) // [1, 3, 30] 升序
arr.sort((a, b) => b - a) // [30, 3, 1] 降序
```

## 去重

```js
// 1. Set（最佳实践）
function unique(arr) {
  return [...new Set(arr)]
}

// 2. filter + indexOf（不推荐大数据量）
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

// 3. reduce + includes
function unique(arr) {
  return arr.reduce((prev, cur) => {
    if (!prev.includes(cur)) prev.push(cur)
    return prev
  }, [])
}
```

## 判断数组

```js
Object.prototype.toString.call(obj).slice(8, -1) === 'Array'

obj.__proto__ === Array.prototype

Array.isArray(obj)

obj instanceof Array
```

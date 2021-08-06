# Function

### 节流

```js
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime
  return function () {
    const context = this,
      args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}
```

### 防抖

```js
const debounce = (fn, ms = 0) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
```

### 深拷贝

```js
const deepClone = (obj) => {
  if (obj === null) return null
  let clone = Object.assign({}, obj)
  Object.keys(clone).forEach((key) => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]))
  if (Array.isArray(obj)) {
    clone.length = obj.length
    return Array.from(clone)
  }
  return clone
}
```

### URL

```js
// 对象转URLQuery
const objectToQueryString = (queryParameters) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = queryString.length === 0 ? '?' : '&'
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : ''
        return queryString
      }, '')
    : ''
}

// URLQuery转对象
const queryStringToObject = (url) =>
  [...new URLSearchParams(url.split('?')[1])].reduce((a, [k, v]) => ((a[k] = v), a), {})
```

### 数组

```js
// 数组切片
const arrayChunk(array, size = 1) {
  let _array = [...array]
  let result = []
  while (_array.length) {
    result.push(_array.splice(0, size))
  }
  return result
}
```

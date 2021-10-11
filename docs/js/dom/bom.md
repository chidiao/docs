# BOM

浏览器对象模型

## location

**href**

完整 URL

```js
location.href

location.href = 'http://www.baidu.com'
// 可修改，进行跳转
```

**search**

URL 参数

```js
location.search

// 基本操作
let href = 'https://example.com/?name=Jonathan&age=18'
location.search // '?name=Jonathan&age=18'
location.search.substring(1) // 'name=Jonathan&age=18'

// 现代方法
let params = new URLSearchParams(location.search.substring(1))
let name = params.get('name')
let age = params.get('age')

// 现代方法
let params = new URL(location).searchParams
let name = params.get('name')
let age = params.get('age')
```

**方法**

```js
// 跳转，有历史记录
location.assign(url)

// 跳转(替换)，无历史记录
location.replace(url)

// 刷新，可能从缓存加载
location.reload()

// 刷新，强制从服务器加载
location.reload(true)
```

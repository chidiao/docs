# BOM

浏览器对象模型

Browser Object Model

## navigator

`window.navigator` ：只读属性，返回一个 [Navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator) 对象，获取应用程序的相关信息

`navigator.userAgent` ：浏览器信息

`navigator.platform` ： 平台信息

## location

`window.location` ：只读属性，返回一个 [Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location) 对象，包换文档当前位置的信息

### 属性

**href**

```js
// 完整链接
let url = location.href

// 可以跳转
location.href = 'http://www.baidu.com'
```

**search**

获取 URL 参数

```js
// 基本操作
location.href = 'https://example.com/?name=Jonathan&age=18'
location.search // '?name=Jonathan&age=18'
location.search.substring(1) // 'name=Jonathan&age=18'

// 现代方法
let params = new URLSearchParams(location.search)
let name = params.get('name')
let age = params.get('age')

// 现代方法
let params = new URL(location).searchParams
let name = params.get('name')
let age = params.get('age')
```

### 方法

```js
// 跳转页面
location.assign(url)

// 刷新页面：无参数！
location.reload()

// Firefox强制从服务器加载(非缓存)：不是标准
location.reload(true)

// 替换页面：不保存历史
location.replace(url)

// 其他：弹窗
window.open(url)
```

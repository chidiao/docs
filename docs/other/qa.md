### 同源策略

同源是指"协议+域名+端口"三者相同，同源策略主要是来防止**CSRF**攻击的

AJAX 请求不能发送

### 跨域

浏览器有同源策略限制，

发送跨域请求，克服 AJAX 只能同源使用的限制

JSONP 跨域

CORS

CORS 需要浏览器和服务器同时支持，现代浏览器都支持

整个 CORS 通信过程，都是浏览器自动完成，浏览器发出 CORS，会在头信息之中，增加一个`Origin`字段。

如果`Origin`不在许可范围内，服务器会返回一个正常的 HTTP 回应，浏览器发现，这个回应的头信息没有包含`Access-Control-Allow-Origin`字段，就知道出错了，从而抛出一个错误。

如果`Origin`在许可范围内，返回的相应包含`Access-Control-Allow-Origin`等等。

### H5C3 新特性

canvas

video audio

sessionStorage localStorage

语义化标签

自定义属性

媒介查询

2D3D 转换

圆角、阴影、渐变

### http 状态码

| HTTP Status Code | Reason       |                                        |
| ---------------- | ------------ | -------------------------------------- |
| 400              | Bad Request  | 请求报文存在语法错误                   |
| 401              | Unauthorized | 需要认证信息                           |
| 403              | Forbidden    |                                        |
| 404              | Not Found    | 找不到请求的资源，可能是请求的地址错误 |

### Ajax、Axios、Fetch

Ajax 异步的 JavaScript 和 XMLHttpRequest，特性：异步，局部刷新页面，它是异步请求一类技术的统称。

Axios 基于 Promise 的网络请求库，基于 XHR 进行二次封装的工具库，是 Ajax 的封装和实现。

Fetch 新的获取资源的浏览器接口 等同于 XHR，提供了许多相同功能，并且更具扩展性和高效性。

Axios 和 Fetch 都属与 Ajax 的范畴，一个传统 (XHR)，一个现代的实现。

### ES6

[ES6](https://juejin.cn/post/6995334897065787422)

let/cosnt

扩展运算符

模板字符串

箭头函数

Promise

class

解构赋值

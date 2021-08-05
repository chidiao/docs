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

### http状态码

| HTTP Status Code | Reason       |                                        |
| ---------------- | ------------ | -------------------------------------- |
| 400              | Bad Request  | 请求报文存在语法错误                   |
| 401              | Unauthorized | 需要认证信息                           |
| 403              | Forbidden    |                                        |
| 404              | Not Found    | 找不到请求的资源，可能是请求的地址错误 |


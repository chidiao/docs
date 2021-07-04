### HTTP状态码

### 同源策略

同源是指"协议+域名+端口"三者相同，同源策略主要是来防止**CSRF**攻击的

AJAX请求不能发送

### 跨域

浏览器有同源策略限制，

发送跨域请求，克服AJAX只能同源使用的限制

JSONP跨域

CORS

CORS需要浏览器和服务器同时支持，现代浏览器都支持

整个CORS通信过程，都是浏览器自动完成，浏览器发出CORS，会在头信息之中，增加一个`Origin`字段。

如果`Origin`不在许可范围内，服务器会返回一个正常的HTTP回应，浏览器发现，这个回应的头信息没有包含`Access-Control-Allow-Origin`字段，就知道出错了，从而抛出一个错误。

如果`Origin`在许可范围内，返回的相应包含`Access-Control-Allow-Origin`等等。



### H5C3新特性

canvas

video audio

sessionStorage localStorage

语义化标签

自定义属性



媒介查询

2D3D转换

圆角、阴影、渐变

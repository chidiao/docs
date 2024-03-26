# HTTP

### 状态码

| status | statusText            | info                                     |
| ------ | --------------------- | ---------------------------------------- |
| 2XX    | Success               | 成功状态码                               |
| 200    | OK                    | 成功                                     |
| 4XX    | Client Error          | 客户端错误状态码                         |
| 400    | Bad Request           | 请求报文存在语法错误                     |
| 401    | Unauthorized          | 需要认证信息                             |
| 403    | Forbidden             | 被服务端拒绝，不被允许，没有权限等       |
| 404    | Not Found             | 无法找到请求的资源，可能是请求的地址错误 |
| 405    | Method Not Allowed    | 请求方式被拒绝                           |
| 5XX    | Server Error          | 服务器错误状态码                         |
| 500    | Internal Server Error | 服务端错误                               |
| 502    | Bad Gateway           | 服务器或者代理相应无效                   |
| 503    | Service Unavailable   | 无法处理请求，超负载或停机维护           |

### Ajax

- Ajax 异步的 JavaScript 和 XMLHttpRequest，特性：异步，局部刷新页面，它是异步请求一类技术的统称。
- Axios 基于 Promise 的网络请求库，基于 XHR 进行二次封装的工具库，是 Ajax 的封装和实现。
- Fetch 新的获取资源的浏览器接口 等同于 XHR，提供了许多相同功能，并且更具扩展性和高效性。
- Axios 和 Fetch 都属与 Ajax 的范畴，一个传统 (XHR)，一个现代的实现。

## GET/POST

| 区别 | Get                                           | Post                                       |
| ---- | --------------------------------------------- | ------------------------------------------ |
| 作用 | 获取资源                                      | 提交资源                                   |
| 参数 | 暴露在 `URL` 中，只接受 `ASCII 字符` 数据类型 | 包含在 `request body` 中，数据类型不受限制 |
| 长度 | 2k                                            | 不受限制                                   |
| 缓存 | 浏览器主动缓存                                | 不缓存，除非手动设置                       |

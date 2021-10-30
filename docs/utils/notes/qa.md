# QA

## 闭包

定义：闭包是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回(寿命终结)了之后。

关键词：嵌套、返回函数、词法环境

## 递归

简单理解：递归就是函数**自己调用自己**

关键词：**套娃**、**递归深度**

```js
关键步骤
1.写出递归公式(等价关系式)
2.找到结束条件

递归条件
1.子问题必须与原问题'相同'，且更为简单
2.不能无限递归，必须有个'出口'

递归思想
将一个未知问题转换为一个已解决的问题来实现
```

```js
// 阶乘
function pow(x, n) {
  if (n == 1) {
    return x
  } else {
    return pow(x, n - 1)
  }
}
```

## 存储

问题：cookie、localStorage、sessionStorage 的区别？

**生命周期：**

cookie：可设置过期时间，默认浏览器关闭后过期

localStorage：除非手动清除，否则永久保留

sessionStorage： 当前标签页有效，关闭标签/浏览器就会清除

**存储大小：**

cookie：4KB 左右

localStorage/sessionStorage：5MB+

**网络请求：**

cookie：每次 HTTP 请求都会携带 cookie 在请求头里

localStorage/sessionStorage：仅客户端存储

## 跨域

- 同源策略

  同源是指"协议+域名+端口"三者相同，同源策略主要是来防止**CSRF**攻击的

  AJAX 请求不能发送

- 生产环境跨域

  ```js
  // vue.config.js
  module.exports = {
    devServer: {
      port: 8080,
      proxy: {
        '/api': {
          target: 'https://m.maoyan.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }

  // http.js
  const baseURL = process.env.NODE_ENV == 'development' ? '/api' : 'https://m.maoyan.com'
  ```

- CORS

CORS 是一个 W3C 标准，全称**跨域资源共享**

CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 除外。

整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与同源的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

- Jsonp

## ES6

[ES6](https://juejin.cn/post/6995334897065787422)

let/cosnt

扩展运算符

模板字符串

箭头函数

Promise

class

解构赋值

## H5C3

canvas

video audio

sessionStorage localStorage

语义化标签

自定义属性

媒介查询

2D3D 转换

圆角、阴影、渐变

## Http

| 状态码 | 原因         | 详情                                   |
| ------ | ------------ | -------------------------------------- |
| 400    | Bad Request  | 请求报文存在语法错误                   |
| 401    | Unauthorized | 需要认证信息                           |
| 403    | Forbidden    |                                        |
| 404    | Not Found    | 找不到请求的资源，可能是请求的地址错误 |

## Ajax

- Ajax 异步的 JavaScript 和 XMLHttpRequest，特性：异步，局部刷新页面，它是异步请求一类技术的统称。

- Axios 基于 Promise 的网络请求库，基于 XHR 进行二次封装的工具库，是 Ajax 的封装和实现。

- Fetch 新的获取资源的浏览器接口 等同于 XHR，提供了许多相同功能，并且更具扩展性和高效性。

- Axios 和 Fetch 都属与 Ajax 的范畴，一个传统 (XHR)，一个现代的实现。

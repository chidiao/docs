# JavaScript

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

## 闭包

- **定义**：闭包是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回(寿命终结)了之后。

- **关键词**：嵌套、返回函数、变量、词法环境

```js
function createCounter() {
  let count = 0

  function counter() {
    count++
    console.log(count)
  }

  return counter
}

let counter1 = createCounter()
let counter2 = createCounter()

// 每一个 counter 函数都有一个 count 变量与它维护一个独立的词法环境
```

- **缺点**：内存泄漏，页面不关闭，变量就一直在，不能被垃圾回收机制回收或者手动清除。

- **应用**：私有变量、防抖、节流

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

## Http

### 状态码

| 状态码 | 原因                  | 详情                                     |
| ------ | --------------------- | ---------------------------------------- |
| 2XX    | Success               | 成功状态码                               |
| 200    | OK                    | 成功                                     |
|        |                       |                                          |
| 4XX    | Client Error          | 客户端错误状态码                         |
| 400    | Bad Request           | 请求报文存在语法错误                     |
| 401    | Unauthorized          | 需要认证信息                             |
| 403    | Forbidden             | 被服务端拒绝，不被允许，没有权限等       |
| 404    | Not Found             | 无法找到请求的资源，可能是请求的地址错误 |
| 405    | Method Not Allowed    | 请求方式被拒绝                           |
|        |                       |                                          |
| 5XX    | Server Error          | 服务器错误状态码                         |
| 500    | Internal Server Error | 服务端错误                               |
| 502    | Bad Gateway           | 服务器或者代理相应无效                   |
| 503    | Service Unavailable   | 无法处理请求，超负载或停机维护           |

### Ajax

- Ajax 异步的 JavaScript 和 XMLHttpRequest，特性：异步，局部刷新页面，它是异步请求一类技术的统称。
- Axios 基于 Promise 的网络请求库，基于 XHR 进行二次封装的工具库，是 Ajax 的封装和实现。
- Fetch 新的获取资源的浏览器接口 等同于 XHR，提供了许多相同功能，并且更具扩展性和高效性。
- Axios 和 Fetch 都属与 Ajax 的范畴，一个传统 (XHR)，一个现代的实现。

### Get/Post

| 区别 | Get                                           | Post                                       |
| ---- | --------------------------------------------- | ------------------------------------------ |
| 作用 | 获取资源                                      | 提交资源                                   |
| 参数 | 暴露在 `URL` 中，只接受 `ASCII 字符` 数据类型 | 包含在 `request body` 中，数据类型不受限制 |
| 长度 | 2k                                            | 不受限制                                   |
| 缓存 | 浏览器主动缓存                                | 不缓存，除非手动设置                       |



## ES6

```js
// 扩展运算符
let arr = [...arr1, ...arr2, ...arr3]
let obj = {
  ...res.data
}

// 解构赋值
let { count } = this.data

// 模板字符串
let str = `name: ${obj.name}`

// 箭头函数

// 同名简写
let obj = {
  name,
  age
}

// Promise

// class
```

- **变量**：`let` 、`const`

|         | 作用域                   | 变量提升 | 重复声明 | 特别                   |
| ------- | ------------------------ | -------- | -------- | ---------------------- |
| `var`   | 全局作用域 或 函数作用域 | ✔        | ✔        |                        |
| `let`   | 块级作用域               | ✖        | ✖        |                        |
| `const` | 块级作用域               | ✖        | ✖        | 必须有初始值，不可修改 |

```js
// 变量提升
console.log(a) // undefined
console.log(b) // ReferenceError
var a = 1
let b = 2
```

- **存储**：`localStorage` 、`sessionStorage`

|                  | 生命周期                                | 存储大小 | 网络请求                                 |
| ---------------- | --------------------------------------- | -------- | ---------------------------------------- |
| `cookie`         | 可设置过期时间，默认浏览器关闭后过期    | 4KB 左右 | 每次 HTTP 请求都会携带 cookie 在请求头里 |
| `localStorage`   | 除非手动清除，否则永久保留              | 5MB+     | 仅客户端存储                             |
| `sessionStorage` | 当前标签页有效，关闭标签/浏览器就会清除 | 5MB+     | 仅客户端存储                             |

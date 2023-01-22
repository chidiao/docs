# 异步编程

## 单线程

JavaScript 语言和执行环境是**单线程**。即同一时间，只能处理一个任务。

如果当前正在执行的任务尚未执行完成，它就会**阻塞**其他正在排队的任务。

为了解决这个问题，JS 在设计之初，将任务分成了两类：同步任务、异步任务。

## 同步和异步

同步任务：在**主线程**上排队执行的任务。只有前一个任务执行完毕，才能执行下一个任务。

异步任务：不进入主线程，而是进入**任务队列**的任务，该任务不会阻塞后面的任务执行。只有**任务队列**通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

## 事件循环机制

- 同步任务：进入主线程后，立即执行。
- 异步任务：会先进入 Event Table，等时间到了之后，再进入 Event Queue，进行排队。
- 主线程任务执行完毕：此时主线程处于空闲状态，于是会去读取 Event Queue 中的任务队列，如果有任务，则进入到主线程去执行。

## Ajax

Ajax：Asynchronous Javascript And XML（异步 JavaScript 和 XML）。

## 同源和跨域

同源策略是一个重要的安全策略，主要用来防止 XSS、CSRF 等攻击。

所谓同源是指：域名，协议，端口三者完全相同。

不同源之间的访问请求就叫做跨域。

### 跨域限制

- 无法读取 Storage

- 无法操作 DOM

- 无法发送 AJAX

### 如何跨域

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

## Promise

回调函数：把函数 A 传给另一个函数 B 调用，那么函数 A 就是回调函数。

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise **是一个对象**，它可以获取异步操作的消息。

- 解决**回调地狱**的问题(层层嵌套的回调函数)。
- 语法简洁、可读性强，便于后期维护。
- 简洁的 API，使得管理异步操作更加容易。

创建一个 promise 对象，promise 有三种状态：

- 初始化：pending
- 成功：fulfilled
- 失败：rejected

```js
let p = new Promise((resolve, reject) => {
  // pending
  console.log('同步代码')

  // 异步代码
  if (s) {
    // fulfilled
    console.log('成功')
    resolve(data)
  } else {
    // rejected
    console.log('失败')
    reject(data)
  }
})

p.then(
  (res) => {
    // pending => fulfilled 时触发
    console.log(res, 'success')
  },
  (err) => {
    // pending => rejected 时触发
    console.log(err, 'fail')
  }
)
```

处理 reject 的两种写法

```js
let p = new Promise((resolve, reject) => {})

p.then(
  (res) => {},
  (err) => {}
)

p.then((res) => {}).catch((err) => {})
```

`catch()` 可以被 `then()` 的第二个参数截获而自己捕获不到，就近原则。

总是推荐使用 `catch()` 进行捕获，而不是 `then()` 的第二个参数。

`catch()` 可以捕获到 `then()` 的第一个参数里的异常，而 `then()` 的第二个参数捕获不到。

## Promise 方法

实例方法：

- promise.then()：获取异步任务的正常结果。
- promise.catch()：获取异步任务的异常结果。
- promise.finaly()：异步任务无论成功与否，都会执行。

静态方法：

- Promise.resolve()
- Promise.reject()

- Promise.all()：并发处理多个异步任务，所有都成功，才算成功(resolve)；一个失败，整体失败(reject)。
- Promise.race()
- Promise.allSettled()

并发请求：

```js
function getUser() {
  return http.get('/user')
}

function getRole() {
  return http.get('/role')
}

Promise.all([getUser(), getRole()]).then((res) => {
  let user = res[0]
  let role = res[1]
})
```

## Async Await

async/await 是在 ES8(即 ES 2017）中引入的新语法，是另外一种异步编程解决方案。

- async 的返回值是 Promise 实例对象。
- await 可以得到异步结果。

我们在使用 Promise、async...await、Generator 的时候，返回的都是 Promise 的实例。

如果直接使用 Promise，则需要通过 then 来进行链式调用；如果使用 async...await、Generator，写起来更像同步的代码。

```js
async function init() {
  try {
    let data = await getData()
  } catch (e) {
    console.log(e)
  }
}
```

## 宏任务和微任务

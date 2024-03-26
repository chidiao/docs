# Axios

[Axios](https://axios-http.com/)

Axios 是一个基于 promise 的网络请求库

```sh
yarn add axios
```

## 基本用法

::: code-group

```js [promise]
axios
  .get('/user?id=123')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .then(() => {
    // always
  })
```

```js [async]
async function getUser() {
  try {
    let res = await axios.get('/user?id=123')
    console.log(res)
  } catch (err) {
    console.log(err)
  }
  // always
}
```

:::

## GET

```js
axios.get(url, config)

axios.get('/user?id=123')
```

## POST

```js
axios.post(url, data, config)

axios.post('/login', {
  username: 'admin',
  password: '123456'
})
```

## 并发请求

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

## 请求配置

[所有配置](https://axios-http.com/zh/docs/req_config)

```js
let config = {
  url: '/user',
  method: 'get',
  baseURL: 'http://chidiao.xin/',
  timeout: 1000,
  responseType: 'json',

  // 自定义请求头
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  // 与请求一起发送的 URL 参数
  params: {
    id: 123
  },

  // 作为请求体被发送的数据
  data: {
    username: 'admin',
    password: '123456'
  }
}
```

## 响应结构

```js
let response = {
  data: {}, // 服务器提供的响应
  status: 200, // 服务器响应的 HTTP 状态码
  statusText: 'OK', // 服务器响应的 HTTP 状态信息
  headers: {}, // 服务器响应头
  config: {}, // axios 请求的配置信息
  request: {} // 生成此响应的请求
}
```

## 创建实例

全局默认配置

```js
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
```

创建实例

```js
import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.example.com'
})

export default http
```

修改实例配置

```js
http.defaults.headers.common['Authorization'] = AUTH_TOKEN
```

## 拦截器

请求拦截器

```js
http.interceptors.request.use(
  (req) => {
    // 处理 请求数据
    return req
  },
  (err) => {
    // 处理 请求错误
    return Promise.reject(err)
  }
)
```

响应拦截器

```js
http.interceptors.response.use(
  (res) => {
    // 处理 响应数据
    return res
  },
  (err) => {
    // 处理 响应错误
    if (err.response) {
      // 请求成功响应，状态码超出 2xx 的范围
      let { status, statusText, data } = err.response
    } else if (err.request) {
      // 请求成功发起，但没有收到响应
    } else {
      // 发送请求失败
    }

    return Promise.reject(err)
  }
)
```

代码示例

```js
import axios from 'axios'

// 创建实例
const http = axios.create({
  baseURL
})

// 请求拦截器
http.interceptors.request.use(
  (req) => {
    let token = store.state.token
    if (token) {
      req.headers.Authorization = 'Bearer ' + token
      req.headers.token = token
    } else {
      req.headers.Authorization = ''
      req.headers.token = ''
    }

    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response) {
      let { status, statusText } = err.response
      if (status == 500) {
        message.error(`${status}：${statusText}`)
      } else {
        message.error(`${status}：${statusText}`)
      }
    }

    return Promise.reject(err)
  }
)

export default http
```

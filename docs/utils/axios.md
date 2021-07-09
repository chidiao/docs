# Axios

[Axios](https://axios-http.com/zh/)

基于 `promise` 的网络请求库

## 开始

```bash
yarn add axios
```

基本语法

```js
// promise用法
axios.get('/data').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

// async/await用法
async function getData() {
  try {
    const res = await axios.get('/data')
    console.log(res)
  } catch (err) {
    console.log(err)
    console.log(err.response)
  }
}
```

### get()

```js
// 简写
axios.get('/user/16')
axios.get('/user?id=16')

// 完整语法
axios.get(url, config)
axios.get('/user', {
  params: {
    id: 16
  }
})
```

### post()

```js
// 完整语法
axios.post(url, data, config)
axios.post('/user', {
  username: 'john',
  password: '123456'
})
```

### catch()

```js
axios.get().catch(err => {
  if (err.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(err.response)
  } else if (err.request) {
    // 请求已经成功发起，但没有收到响应
    console.log(err.request)
  } else {
    // 发送请求时出了点问题
    console.log(err.message)
  }
  console.log(err.config)
})
```


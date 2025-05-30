# 登录

## login()

```js
uni.login({
  success: (res) => {
    const { code } = res
    console.log(code)
  },
  fail: (err) => {}
})
```

`login()` 获取到的 `code` 为小程序临时登录凭证，有效期 5 分钟。

后端需要通过 `appid` 、`secret` 和 `code` 调用微信接口来获取 `openid` 和 `session_key` 。

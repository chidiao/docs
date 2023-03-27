# 登录

```js
uni
  .login({
    provider: 'weixin'
  })
  .then((loginRes) => {
    const { code } = loginRes

    http
      .post('/login', {
        code: code
      })
      .then((res) => {
        console.log(res)
      })
  })
```

### openid

用户在当前小程序的唯一标识

`code` 用户登录凭证(5 分钟)，使用 `code` 换取 `openid` 、`unionid` 、`session_key` 等

### unionid

用户在微信开放平台帐号下的唯一标识

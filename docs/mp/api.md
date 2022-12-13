# 接口

## 登录

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
        msg('登录成功')
      })
  })
```

### openid

用户在当前小程序的唯一标识

`code` 用户登录凭证(5 分钟)，使用 `code` 换取 `openid` 、`unionid` 、`session_key` 等

### unionid

用户在微信开放平台帐号下的唯一标识

## 支付

微信支付

一个参数，格式是对象。`orderInfo`

```js
const orderInfo = {
  appid: 'wx499********7c70e',
  noncestr: 'c5sEwbaNPiXAF3iv',
  package: 'Sign=WXPay',
  partnerid: '148*****52',
  prepayid: 'wx202254********************fbe90000',
  timestamp: 1597935292,
  sign: 'A842B45937F6EFF60DEC7A2EAA52D5A0'
}

uni
  .requestPayment({
    provider: 'wxpay',
    orderInfo: orderInfo
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
```

微信小程序支付

多个参数，来源于 `orderInfo`

```js
uni
  .requestPayment({
    provider: 'wxpay',
    timeStamp: String(Date.now()),
    nonceStr: 'A1B2C3D4E5',
    package: 'prepay_id=wx20180101abcdefg',
    signType: 'MD5',
    paySign: ''
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
```

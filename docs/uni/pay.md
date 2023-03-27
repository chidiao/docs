# 支付

[payment](https://uniapp.dcloud.net.cn/api/plugins/payment.html)

## 微信支付

`orderInfo` 是对象类型。

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

## 微信小程序支付

小程序支付接口的参数需要从 `orderInfo` 解构出来。

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

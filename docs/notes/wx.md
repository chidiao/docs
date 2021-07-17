# 微信开发

## 获取 openid

### 网页授权

[网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

```js
const SCOPE = 'snsapi_base'
// 静默授权，获取openId

const SCOPE = 'snsapi_userinfo'
// 需要手动同意，获取openId和用户基本信息
```

第一步，同意授权，获取 code

```js
// 引导跳转页面
const oauth2 =
  'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'

const APPID = ''
const REDIRECT_URI = ''
const SCOPE = ''
const JUMP_URI = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=STATE#wechat_redirect`

window.location.href = JUMP_URI
```

第二步，从回跳的url里提取code，传给后端换取openId和用户信息

...

### 小程序


# 插件

## uniui

[uniui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

## uView

[uView2.0](https://www.uviewui.com/components/install.html)

::: code-group

```js [main.js]
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
```

```scss [uni.scss]
@import '@/uni_modules/uview-ui/theme.scss';
```

```vue [App.vue]
<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
</style>
```

```json [pages.json]
// uni_modules 已经不需要再配置 easycom 了
{
  "easycom": {
    "^u-(.*)": "@/uni_modules/uview-ui/components/u-$1/u-$1.vue"
  }
}
```

:::

## luch

[luchRequest](https://www.quanzhan.co/luch-request/)

::: code-group

```js [main.js]
import http from '@/api/http'
Vue.prototype.$http = http
```

```js [http.js]
import Request from '@/uni_modules/uview-ui/libs/luch-request'

// 创建实例
const http = new Request({
  baseURL: '',
  dataType: 'json'
})

export default http
```

```js [修改配置]
// 修改配置
http.setConfig((config) => {
  config.baseURL = ''
  config.dataType = 'json'

  return config
})
```

```js [请求拦截器]
// 请求拦截器
http.interceptors.request.use(
  (req) => {
    req.header.token = token

    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)
```

```js [响应拦截器]
// 响应拦截器
http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)
```

:::

## uQRCode

[uQRCode](https://uqrcode.cn/doc)

## 开源项目

[niushop](https://gitee.com/niushop_team/niushop_b2c_v5_dev)

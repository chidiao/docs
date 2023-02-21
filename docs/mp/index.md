# uni-app

## 路径

[引用](https://uniapp.dcloud.net.cn/tutorial/page-script.html)

```js
// 绝对路径，@指向项目根目录
import uView from '@/utils/uview'

// 相对路径
import uView from './utils/uview'

// js 不支持 '/' 开头的路径
```

## promise

进行了封装，数据格式需要注意

```js
// options
uni.request({
  url,
  success: (res) => {
    console.log(res)
  },
  fail: (err) => {
    console.log(err)
  }
})

// vue2，无法使用 catch
uni.request({ url }).then((data) => {
  let [err, res] = data
  console.log(res)
})

// vue3
uni
  .request({ url })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
```

## 分包

```json [pages.json]
{
  "pages": [],
  "subPackages": [
    {
      "root": "page_sub",
      "pages": []
    }
  ]
}
```

## uView

[快速搭建](https://www.uviewui.com/components/install.html)

::: code-group

```js [main.js]
import uView from '@/utils/uview'
Vue.use(uView)
```

```scss [uni.scss]
@import '@/utils/uview/theme.scss';
```

```vue [App.vue]
<style lang="scss">
@import '@/utils/uview/index.scss';
</style>
```

```json [pages.json]
{
  "easycom": {
    "^u-(.*)": "@/utils/uview/components/u-$1/u-$1.vue"
  },
  "pages": []
}
```

:::

## luch

[luch-request](https://www.quanzhan.co/luch-request/)

::: code-group

```js [main.js]
import http from '@/utils/http'
Vue.prototype.$http = http
```

```js [http.js]
import Request from '@/utils/luch-request'
import Request from '@/utils/uview/libs/luch-request'

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

# uniapp

## 变量

状态栏高度：H5 为 0，App 有状态栏高度，小程序有固定高度。

顶距：App 和小程序为 0，H5 为 NavBar 高度。

底距：App 和小程序为 0，H5 为 TabBar 高度。

```scss
.box {
  // 状态栏高度
  height: var(--status-bar-height);
  // 内容到顶部距离
  height: var(--window-top);
  // 内容到底部距离
  height: var(--window-bottom);
}
```

## 路径

[引用](https://uniapp.dcloud.net.cn/tutorial/page-script.html)

```js
// 绝对路径，@指向项目根目录
import uView from '@/utils/uview'

// 相对路径
import uView from './utils/uview'

// js 不支持 '/' 开头的路径
```

## 分包

小程序，总包不超过 `20M` ，分包不超过 `2M`

```json [pages.json]
{
  "pages": [],
  "subPackages": [
    {
      "root": "pages/shop",
      "pages": [
        {
          "path": "index"
        }
      ]
    }
  ]
}
```

## promise

[api](https://uniapp.dcloud.net.cn/api/)

`promise` 返回的数据格式很奇葩，需要注意。

::: code-group

```js [vue2]
getData().then((data) => {
  let [err, res] = data
  console.log(res)
  console.log(err)
})
```

```js [vue3]
getData()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
```

```js [main.js]
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0])
        } else {
          resolve(res[1])
        }
      })
    })
  }
})
```

:::

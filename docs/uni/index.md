# uniapp

## CSS

- 变量值都是 `px` 。
- 状态栏：H5 为 0，APP 为状态栏高度，小程序固定高度。自定义导航栏时需要该值。
- 顶距：APP 和小程序为 0，H5 为 `navBar` 高度。
- 底距：APP 和小程序为 0，H5 为 `tabBar` 高度。
- 内容区域：APP 和小程序的内容区域就是除去 `navBar` 和 `tabBar` 之外的区域，由于 H5 是模拟出来的，因此 `navBar` 和 `tabBar` 也在内容区域内，真实的内容区域需要顶距和底距进行计算。

```scss
:root {
  // 状态栏高度
  height: var(--status-bar-height);
  // 内容区域到顶部的距离
  top: var(--window-top);
  // 内容区域到底部的距离
  bottom: var(--window-bottom);
}

.status-bar {
  width: 100%;
  height: var(--status-bar-height);
}

.backup {
  position: fixed;
  bottom: calc(var(--window-bottom) + 24px);
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

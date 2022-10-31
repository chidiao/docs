# Storage

## Cookie

## LocalStorage

`localStorage` 特点：

- 同源(域/端口/协议)的所有标签页和窗口共享数据
- 数据不过期，浏览器/系统重启依然保留

**用法**

键和值都必须是 `字符串`

```js
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()

localStorage.key(index)
localStorage.length
```

## SessionStorage

`sessionStorage` 很少被使用，因为存在诸多限制：

- 只存储于当前浏览器标签页
- 不同标签的相同页面，存储也不同
- 刷新页面存储保留，关闭/重新打开标签页不会保留

**用法**

`sessionStorage` 与 `localStorage` 语法完全相同

## 总结

|                  | 生命周期                                | 存储大小 | 网络请求                                 |
| ---------------- | --------------------------------------- | -------- | ---------------------------------------- |
| `cookie`         | 可设置过期时间，默认浏览器关闭后过期    | 4KB 左右 | 每次 HTTP 请求都会携带 cookie 在请求头里 |
| `localStorage`   | 除非手动清除，否则永久保留              | 5MB+     | 仅客户端存储                             |
| `sessionStorage` | 当前标签页有效，关闭标签/浏览器就会清除 | 5MB+     | 仅客户端存储                             |

## 易用

[js-cookie](https://github.com/js-cookie/js-cookie)

[store.js](https://github.com/marcuswestin/store.js)

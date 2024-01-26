# Clipboard

## clipboard.js

[clipboard.js](https://clipboardjs.com/)

```sh
yarn add clipboard
```

基本使用

```js
import Clipboard from 'clipboard'

let clipboard = new ClipboardJS('.btn', {
  // 字符串，复制字符串
  text: (trigger) => {
    let str = trigger.dataset.text
    return str
  },
  // element，复制元素的字符串
  target: (trigger) => {
    let el = document.querySelector('#el')
    return el
  }
})

// 事件
clipboard.on('success', (e) => {
  let { action, text, trigger } = e
})

clipboard.on('error', (e) => {
  let { action, text, trigger } = e
})

// 销毁
clipboard.destroy()
```

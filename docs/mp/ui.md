# 界面

## showToast()

```js
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 1500,
  mask: false
})

wx.hideToast()
```

## showLoading()

```js
wx.showLoading({
  title: '加载中...',
  mask: false
})

wx.hideLoading()
```

## showModal()

```js
wx.showModal({
  title: '提示',
  content: '这是一个模态弹窗'
}).then((res) => {
  if (res.confirm) {
    console.log('确定')
  } else if (res.cancel) {
    console.log('取消')
  }
})
```

## showActionSheet()

```js
wx.showActionSheet({
  itemList: ['A', 'B', 'C']
})
  .then((res) => {
    console.log(res.tapIndex)
  })
  .catch((err) => {
    console.log(err.errMsg)
  })
```

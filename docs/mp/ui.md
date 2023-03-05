# 界面

## showToast()

```js
uni.showToast({
  title: '成功!',
  icon: 'none',
  mask: false,
  duration: 1500
})

uni.hideToast()
```

## showLoading()

```js
uni.showLoading({
  title: '加载中...',
  mask: false
})

uni.hideLoading()
```

## showModal()

::: code-group

```js [base]
uni
  .showModal({
    title: '提示',
    content: '这是一个模态弹窗!'
  })
  .then((res) => {
    if (res.confirm) {
      console.log('点击确定')
    } else if (res.cancel) {
      console.log('点击取消')
    }
  })
```

```js [more]
uni.showModal({
  // 确定
  confirmText: '确定',
  confirmColor: 'blue',
  // 取消
  showCancel: true,
  cancelText: '取消',
  cancelColor: 'red',
  // 可编辑
  editable: true,
  placeholderText: '请输入'
})
```

:::

## showActionSheet()

```js
uni
  .showActionSheet({
    title: '标题',
    itemList: ['A', 'B', 'C']
  })
  .then((res) => {
    console.log(res.tapIndex)
  })
```

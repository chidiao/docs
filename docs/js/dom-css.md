# 样式

### 修改类

```js
// 完整的className，全部类名
el.className = 'flex flex-col flex-wrap'

// 控制单个类名
el.classList.add('class')

el.classList.remove('class')

el.classList.toggle('class')

el.classList.contains('class')
```



### 修改样式

`el.style` 属性是一个对象

```js
// 修改
el.style.backgroundColor = 'red'
el.style.zIndex = '99'
el.style.fontSize = '14px'

// 重置
el.style.display = 'none'
el.style.display = ''

// 完全重写
el.style.cssText = 'color: red; font-size: 14px; line-height: 20px;'
```


# 自定义属性

## 基本用法

```css
:root {
  --color: pink;
  --bg-color: white;
}

.box {
  color: var(--color, #000);
  background: var(--bg-color, #fff);
}
```



## js

```js
el.style.getPropertyValue('--color')

el.style.setProperty('--color', newColor)
```


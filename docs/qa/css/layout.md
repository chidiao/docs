# Layout

## 居中

- flex

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- absolute

```css
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

- grid

```css
.parent {
  display: grid;
  /* 简写 */
  place-items: center;

  /* 分别设置 */
  justify-items: center;
  align-items: center;
}
```

- inline 元素：文本、图片等

```css
.parent {
  width: 300px;
  height: 200px;
  text-align: center;
  line-height: 200px; /* 和高度一致 */
}
```

## 响应式设计

### 媒体查询

基于断点，不同屏幕尺寸设置不同样式

- `@media`
- 栅格系统
- tailwind 断点类

### 弹性布局

尺寸不固定，自适应

- 百分比
- vw/vh
- flex/grid

### 相对单位

- 设置根字体大小，并使用 `rem` 单位，使元素等比缩放
- `clamp()`

### 图片

`srcset` 加载不同尺寸的图片源

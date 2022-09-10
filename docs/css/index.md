# CSS

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

- [You need to know](https://lhammer.cn/You-need-to-know-css/#/zh-cn/)

### ellipsis

文本截断

```scss
.text-cut {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.text-cut3 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

### 视差滚动

- background-attachment

- transform: translate3D

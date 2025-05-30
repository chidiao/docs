# Tips

## image 底部间隙

小程序 `<image>` 默认是行内元素，受到字体行高的影响。字体行高通常比字体实际高度稍大，同理。

```scss
image {
  display: block;
}
```

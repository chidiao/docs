# filter

滤镜通常用于调整图像，背景和边框的渲染

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

## 滤镜函数

### blur()

```scss
.box {
  filter: blur(5px);
  filter: blur(0);
}

// 高斯模糊
// 长度，不接受百分比
// 默认：0
```



### contrast()

```scss
.box {
  filter: contrast(200%);
  filter: contrast(1);
}

// 对比度
// 范围不限
// 默认：1
```



### grayscale()

```scss
.box {
  filter: grayscale(100%);
}

// 灰度
// 范围：0-1
// 默认：0
```



### sepia()

```scss
.box {
  filter: sepia(100%);
}

// 深褐色
// 范围：0-1
// 默认：0
```



### invert()

```scss
.box {
  filter: invert(100%);
}

// 图像反转
// 范围：0-1
// 默认：0
```



### opacity()

```scss
.box {
  filter: opacity(50%);
}

// 透明度
// 与 opacity 相似，不同在于通过 filter 实现，部分浏览器会提供硬件加速
```



### saturate()

```scss
.box {
  filter: saturate(200%);
}

// 饱和度
// 范围不限
// 默认：1
```



### drop-shadow()

```scss
// 阴影
// 待完善
```



### hue-rotate()

```scss
.box {
  filter: hue-rotate(90deg);
}

// 色相旋转
// 范围不限
// 默认：0deg
```



## 复合函数

```scss
.box {
  filter: contrast(175%) brightness(3%);
}

// 你可以组合多个函数
```


# filter

滤镜

```scss
// 给元素添加滤镜效果
.box {
  filter: blur(4px);
}

// 给元素背景添加滤镜效果
// 为了看到效果，元素必须有一定的透明度
.box {
  background: rgba(255, 255, 255, 0.4)
  backdrop-filter: blur(4px);
}
```

# 滤镜函数

- [所有滤镜](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function)
- 对比度
- 色调
- 反色
- 饱和度
- 棕褐色

## blur()

- 高斯模糊

```scss
.box {
  filter: blur(4px);
}

// 参数为长度(模糊半径)
```

## brightness()

- 亮度

```scss
.box {
  // 全黑效果
  filter: brightness(0);
  filter: brightness(2);
}

// 参数为数值或百分比，大于等于 0
```

## grayscale()

- 灰度

```scss
.box {
  // 无效果
  filter: grayscale(0);
  filter: grayscale(1);
}

// 参数为数值或百分比，范围 0 ~ 1
```

## opacity()

- 透明度

```scss
.box {
  // 透明
  opacity: 0.4;
  // 透明(硬件加速)
  filter: opacity(0.4);
}

// 参数为数值或百分比，范围 0 ~ 1
// 部分浏览器会提供硬件加速
```

## drop-shadow()

- 投影

```scss
.box {
  filter: drop-shadow(4px 4px 4px pink);
}

// 参数：偏移、偏移、模糊半径、颜色
```

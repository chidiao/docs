# CSS

## 盒子模型

盒子模型包括四部分 `margin` 、 `border` 、 `padding` 、 `content` ，CSS 通这些属性将所有元素(标签)描述为一个个盒子，来决定盒子的大小、位置、属性等。

```scss
.box {
  box-sizing: content-box; // 标准盒模型
  box-sizing: border-box;
}
```

## CSS3

- **圆角**： `border-radius`

- **阴影**： `box-shadow`

- **动画**： `transition` 、`transform` 、`animation`

- **渐变**： `linear-gradient()` 、`radial-gradient()`

- **滤镜**： `filter()`

- **布局**： `flex` 、`grid`

- **盒模型**： `box-sizing`

- **媒体查询**： `@media`

## Position

`top` 、`left` 、`right` 、`bottom` 、`z-index` 只对定位元素有效

除了 `static` 都是定位元素

- static 静态

- relative 相对定位

- absolute 绝对定位

- fixed 固定定位

- sticky 粘性定位

## 应用

- 图片居中

- 布局方式

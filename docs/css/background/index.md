# Background

<script setup>
import BackgroundPosition from './BackgroundPosition.vue'
import BackgroundPosition2 from './BackgroundPosition2.vue'
import BackgroundSize from './BackgroundSize.vue'
</script>

`Position` 和 `Size` 写法和顺序是固定的

```scss
.box {
  background: <image> <position> / <size>;
}
```

## Background Image

可以是图片也可以是渐变色

<div class="flex space-x-4">
  <div class="size-32 rounded" style="background-image: linear-gradient(135deg, #17ead9, #6078ea);"></div>
  <div class="size-32 rounded bg-cover" style="background-image: url('https://picsum.photos/id/10/200/300');"></div>
  <div class="size-32 rounded" style="background-image: linear-gradient(135deg, #42e695, #3bb2b8);"></div>
</div>

## Background Position

```scss
.box {
  background-position: <x> <y>;
}
```

<BackgroundPosition />

当值为百分比时，`orgin` 并不是固定的，百分比指定的不仅是容器同时也是图片的位置。

缺省值为 `center` 也就是 `50%`

<BackgroundPosition2 />

值也可以为 3-4 个，分别用来定义起始位置和偏移位置，组合比较复杂。

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)

```scss
.box {
  background-position: <x> <offset> <y> <offset>;
}

// 此时坐标只能是关键字
// 偏移在哪个关键字的后面就是谁的偏移
```

## Background Size

这个值是用来设置背景图片的尺寸的，和容器无关

<BackgroundSize />

## Background Repeat

## Background Color

## Background Clip

用来设置背景的可填充范围

```scss
.box {
  background-clip: border-box; // 默认值
  background-clip: padding-box;
  background-clip: content-box;
  background-clip: text; // 实验性
}
```

<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-[url('https://picsum.photos/id/10/100')]">
    Hello world
  </span>
</div>

```scss
.text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## Background Origin

用来设置背景的起始位置

```scss
.box {
  background-origin: border-box;
  background-origin: padding-box; // 默认值
  background-origin: content-box;
}
```

`clip` 和 `origin`，当区域不相同时的效果

```scss
.box {
  background-clip: border-box;
  background-origin: padding-box;
  background-position: left top;
  background-repeat: repeat;
}
```

<div
  class="size-64 p-16 border-dotted border-[32px] border-indigo-100
        bg-[url('https://picsum.photos/id/10/100')] bg-clip-border bg-origin-padding"
></div>

## Background Attachment

```scss
.box {
  background-attachment: fixed;
  background-attachment: local;
  background-attachment: scroll; // 默认值
}

// bg-fixed 基于视口固定，有视差效果
// bg-local 基于视口滚动，相对容器也滚动
// bg-scroll 基于视口滚动，相对容器固定
```

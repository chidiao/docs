# Background

```scss
.box {
  background: <position> / <size>;
  // <size> 只能跟在 <position> 后边，并以 / 分隔

  background: <...args>, <...args>, <...args> <color>;
  // 如果有多个背景，可用 逗号 分隔
  // <color> 只在最后一层最后位置定义，有且只有一个
}
```

## Image

```scss
.box {
  background-image: <url>;
  background-image: url(...);
  background-image: <gradient>;
  background-image: linear-gradient(...);
}
```

## Clip

```scss
.box {
  background-clip: <keyword>;
  background-clip: border-box; // 默认值
  background-clip: padding-box;
  background-clip: content-box;
  background-clip: text;
}

// 指定背景范围，背景所能显示的区域
// 关键词：border-box padding-box content-box (text)

.box {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

// 实验功能
```

## Origin

```scss
.box {
  background-origin: <keyword>;
  background-origin: border-box;
  background-origin: padding-box; // 默认值
  background-origin: content-box;
}

// 指定源点位置，供 <position> 定位
// 关键词：border-box padding-box content-box
```

## Position

```scss
.box {
  background-position: <x> <y>;
  background-position: left top;
  background-position: center;
}

// 坐标 <x, y>
// 可选值：关键词、长度、百分比
// 关键词：top bottom left right center
// 缺省值：center(50%)
```

```scss
.box {
  background-position: <x> <offset> <y> <offset>;
  background-position: left 10% top 10%;
  background-position: left 10% top; // <x> 偏移
  background-position: left top 10%; // <y> 偏移
}

// 偏移 <offset>
// 此时坐标只能是关键词，且不能比偏移值个数少
// 可选值：长度、百分比
// 可缺省：<offset> 在谁后边就是谁的偏移
```

## Size

```scss
.box {
  background-size: <keyword>;
  background-size: contain;
  background-size: cover;
}

// 关键词：使用关键词时只有一个参数
// 可选值：contain cover
```

```scss
.box {
  background-size: <width> <height>;
  background-size: 100% 100%;
  background-size: 100px auto;
}

// 可选值：长度、百分比
// 缺省值：auto(保持缩放比例)
```

## Attachment

```scss
.box {
  background-attachment: <keyword>;
  background-attachment: scroll; // 默认值
  background-attachment: local;
  background-attachment: fixed;
}

// 关键词： scroll fixed local

// scroll：背景固定在元素上(height)，元素内滚，背景不动，元素位移，背景跟随
// local：背景固定在元素内容上(scrollHeight)，元素内滚，背景滚动，元素位移，背景跟随
// fixed：背景固定在视口上，元素内滚或元素位移，背景都不动，但背景只能通过元素区域可视
```

## Repeat

```scss
.box {
  background-repeat: <keyword>;
}

// 关键词：repeat-x repeat-y repeat space round no-repeat

// space: 保持比例的重复，能塞几个塞几个，多余的空间均匀留白
// round：可以拉伸的重复，能赛几个赛几个，多余的空间分给背景让其拉伸
```

```scss
.box {
  background-repeat: <keyword> <keyword>;
}

// 关键词：repeat space round no-repeat
```

## Color

```scss
.box {
  background-color: <color>;
  background-color: transparent;
}
```

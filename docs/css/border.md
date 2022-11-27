# Border

## Border

```scss
.box {
  border: 1px solid red;
  border-top: 1px solid red;
  border-right: 1px solid red;
}
```

## Width

```scss
// 简写
.box {
  border-width: 1px;
  border-width: 1px 2px;
}

// 单独
.box {
  border-top-width: 1px;
  border-right-width: 1px;
}
```

## Style

```scss
// 简写
.box {
  border-style: none; // 默认值
  border-style: dashed solid;
}

// 单独
.box {
  border-top-style: solid;
  border-right-style: solid;
}

// none 是默认值，所以只指定 width 和 color 也是无效的
// none => 宽度0，优先度最低，如果有其他重叠边框，显示这个边框
// hidden => 宽度0，有限度最高，如果有其他重叠边框，都不显示

// solid 实线
// double 双实线
// dashed 方虚线
// dotted 圆点

// groove 雕刻
// ridge 浮雕
// inset 内陷
// outset 突出
```

## Color

```scss
// 简写
.box {
  border-color: currentcolor; // 默认值
  border-color: blue pink;
}

// 单独
.box {
  border-top-color: red;
  border-right-color: red;
}
```

## Radius

圆角可以理解为在四个角，按一圆点画圆实现

单值，宽高相同，画圆

```scss
// 简写
.box {
  border-radius: 10px;
  border-radius: 11px 12px 13px 14px;
}

// 单独
.box {
  border-top-left-radius: 11px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 14px;
}
```

双值，宽高不同，画椭圆

```scss
// 简写
.box {
  border-radius: 10px / 20px;
  border-radius: 11px 12px 13px 14px / 21px 22px 23px 24px;
}

// 单独
.box {
  border-top-left-radius: 11px / 21px;
  border-top-right-radius: 12px / 22px;
  border-bottom-right-radius: 13px / 23px;
  border-bottom-left-radius: 14px / 24px;
}
```

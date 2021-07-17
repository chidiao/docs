# CSS

## 未归档

### box-shadow

```scss
.box {
  box-shadow: inset 10px 10px 5px 5px red;
}

// 参数：inset? && <length>{2,4} && <color>?
// inset: 内阴影(可选)
// 偏移：x偏移，y偏移
// 模糊：越大越模糊(可选)
// 扩散：阴影扩散大小(可选)
// 颜色：

// 备注：
// 多规则，用逗号隔开
// 四个长度参数按顺序取值，省略则为默认值
```



### counter

```scss
.box {
  counter-reset: no 0;
}
// 重置计数器no的值为0

.box {
  counter-increment: no 1;
}
// 设置计数器no的步数

// 参数：
// <计数器 ID> [<数值>]
// <数值>可省略，默认0和1
```



## position

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

### static

除了它都是定位元素

```scss
.box {
  position: static;
}

// 默认值
// 文档流布局
// top, right, bottom, left, z-index 无效
```



### relative

定位元素

```scss
.box {
  position: relative;
}

// 文档流布局
// 然后在不改变页面布局的前提下，相对自身文档流位置定位/偏移(原本位置空间留白)
```



### absolute

定位元素

```scss
.box {
  position: absolute;
}

// 脱离文档流，没有留白(位置)
// 相当于该元素不存在
// 相对最近的非 static 定位元素祖先进行定位/偏移
```



### fixed

定位元素

```scss
.box {
  position: fixed;
}

// 脱离文档流，没有留白(位置)
// 相对 viewport 进行定位/偏移
```



### sticky

定位元素

```scss
.box {
  position: sticky;
}

// 文档流布局

// 粘性定位可以被认为是相对定位和固定定位的混合
// 元素在跨越特定阈值前为相对定位，之后为固定定位

// 须指定 top, right, bottom, top 四个阈值其中之一，才可生效，否则等同于相对定位
```



## other

### top/bottom

```scss
.box {
  top: 0;
  bottom: 0;
}

// top优先，bottom忽略

// height: auto/未指定 => top/bottom同时生效

// top: auto; => top忽略，bottom生效
```



### left/right

```scss
.box {
  left: 0;
  right: 0;
}
```



### z-index

```scss
.box {
  z-index: auto;
}

// 堆叠层级
// 仅对对位元素有效，也就是 static 无效
```


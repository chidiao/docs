# Flex Item

## flex

```scss
.box {
  flex: <grow> <shrink> <basis>;
  flex: 0 1 auto;
}
```

关键词

```scss
// 默认值，不扩展，可压缩
.flex-initial {
  flex: initial;
  flex: 0 1 auto;
}

// 自由伸缩，内容优先
.flex-auto {
  flex: auto;
  flex: 1 1 auto;
}

// 完全固定，不伸缩
.flex-none {
  flex: none;
  flex: 0 0 auto;
}
```

最常用

```scss
// 可扩展，可压缩，扩展比例为1
.flex-1 {
  flex: 1;
  flex: 1 1 0;
}

// 比例为2
.flex-2 {
  flex: 2;
  flex: 2 2 0;
}
```

### grow

```scss
.box {
  flex-grow: <grow>;
}
```

### shrink

```scss
.box {
  flex-shrink: <shrink>;
}
```

### basis

该属性用于定义 弹性项目的初始大小

子元素的拉伸和压缩行为是基于容器元素的大小和 `<basis>` 大小计算后得到的剩余空间(可能为负数) 来进行的

```scss
.box {
  flex-basis: <basis>;
}

.box {
  // 固定值的优先级要高于auto
  flex-basis: 100px;
  flex-basis: 50%;
  // auto表示由元素width和height决定
  flex-basis: auto;
}
```

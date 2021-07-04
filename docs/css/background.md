# background

## background

```scss
.box {
  background: <position> / <bg-size>;
}

// 缩写规则
// <bg-size> 只能紧接着 <position> 出现，以“/”分割
// <bg-color> 永远只能在最后一层，且最后一个属性定义，整个元素只有一个背景颜色
```



### bg-image

```scss
.box {
  background-image: none;
  background-image: linear-gradient(to bottom, #091E3A, #2F80ED);
  background-image: url('xxx.png');
}

// 渲染层级
// 用户 => border => image1 => image2 ... => color
```



### bg-color

```scss
.box {
  background-color: transparent;
}

// 多背景规则时
// <bg-color> 永远只能在最后一层，且最后一个属性定义，整个元素只有一个背景颜色
```



### bg-position

```scss
.box {
  background-position: x y;
  background-position: 0% 0%;
}

// <长度>: 偏移指定长度，缺省值为50%|center
// <百分比>: 偏移相对于容器背景区的百分比，缺省值为50%|center
// <关键词>: top bottom left right center，缺省值为50%|center


.box {
  background-position: right 35% bottom 45%;
}

// ...
```



### bg-size

```scss
.box {
  background-size: x y;
  background-size: auto auto;
}

// <长度>: 指定长度，缺省值为auto
// <百分比>: 相对于容器背景区的百分比，缺省值为auto
// <auto>: 保持缩放比例
// <关键词>: cover contain
```



### bg-repeat

```scss
.box {
  background-repeat: <单值>;
}

// <关键字>: repeat-x repeat-y repeat space round no-repeat


.box {
  background-repeat: x y;
}

// <关键字>: repeat space round no-repeat
```



## other

### bg-attachment

```scss
.box {
  background-attachment: scroll;
  background-attachment: fixed;
  background-attachment: local;
}

// scroll: 默认，背景吸附于元素的可视区域，会跟随元素，元素内容滚动背景不动
// fixed: 背景吸附于浏览器窗口的可视区域，总是不动，但只通过元素呈现(可视)
// local: 背景吸附于元素的内容区域，会跟随元素，元素内容滚动背景滚动

// 例子：
// 一个 200*200 的容器，内容大小为 200*600 ，有滚动条可以卷动内容
// scroll 背景容器大小 200*200 贴附于 200*200 的可视区域，类似于绝对定位在可视区域
// local 背景容器大小 200*600 贴附于 200*600 的内容区域，
// fixed 背景贴附于整个浏览器可视区域，背景永远股东，这个 200*200 的容器就像一个窗户，只有通过他才可以看到后边的背景
```



### bg-origin

```scss
.box {
  background-origin: border-box;
  background-origin: padding-box;
  background-origin: content-box;
}

// 源点：告诉<bg-position>坐标原点是哪里
// 默认：padding-box
```



### bg-clip

```scss
.box {
  background-clip: border-box;
  background-clip: padding-box;
  background-clip: content-box;
  background-clip: text;
}

// 裁剪：背景显示区域是哪里
// 默认：border-box

// 实验性功能
.box {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```


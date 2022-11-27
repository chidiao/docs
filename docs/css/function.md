# Function

## url()

引用资源

```scss
.box {
  background: url('http://chidiao.xin/icon.png');
  background: url('./imgs/icon.png');
}

// 单双引号无感，可以使用相对地址，相对于css而非html
```

## attr()

属性

```scss
.box::after {
  content: attr(data-text) '';
}

// 理论上可以用于任何属性(实验性)，但目前只支持 content
```

## var()

自定义属性

```scss
.box {
  --color: pink;

  color: var(--color);
  color: var(--color, red, blue);
}

// 第一个参数为自定义属性名
// 第二个参数为回退值/默认值(可设置任意个，但好像没有意义)
```

## calc()

执行计算

```scss
.box {
  width: calc(100% - 80px);
  width: calc(calc(100% - 80px) / 2);
  width: calc((100% - 80px) / 2);
}

// 函数内可连续计算 1 + 2 + 3
// 嵌套函数等效于括号
```

```scss
.box {
  --gap: 24;
  --gap-px: 24px;

  width: calc(var(--gap) * 2px);
  width: calc(var(--gap-px) * 2);
}

// 确保计算结果符合预期
```

## clamp()

取值范围

```scss
.box {
  font-size: clamp(1rem, 20px, 2rem);
}

// 三个参数：最小值，首选值，最大值
// 首选值小于最小值取最小值，首选值大于最大值取最大值，否则取首选值
```

## min()

最小值

## max()

最大值

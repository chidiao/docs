# 安全区

### 基础样式

```scss
.safe-area-top {
  padding-top: env(safe-area-inset-top);
}

.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

.safe-area-left {
  padding-left: env(safe-area-inset-left);
}

.safe-area-right {
  padding-right: env(safe-area-inset-right);
}
```

### 兼容性

```scss
.element {
  padding-bottom: constant(safe-area-inset-bottom); // ios低版本
  padding-bottom: env(safe-area-inset-bottom); // ios和android高版本
}
```

- 后声明优先(覆盖)，高版本会生效第二行
- 低版本，第二行不识别，只会生效第一行

### env()

可能需要配置这个

```html
<meta name="viewport" content="... viewport-fit=cover" />
```

```scss
.element {
  env(safe-area-inset-top);
  env(safe-area-inset-top, 20px); // 带默认值
}
```

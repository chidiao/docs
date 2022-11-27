# Text

## Overflow

```scss
.box {
  text-overflow: clip; // 默认值
  text-overflow: ellipsis;
  text-overflow: fade;
  text-overflow: <string>;
}

// 需要配合“溢出”使用
.box {
  overflow: hidden;
  white-space: nowrap;
}
```

## Ellipsis

文本截断

```scss
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ellipsis-3 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

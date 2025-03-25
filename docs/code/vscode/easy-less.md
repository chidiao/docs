## EasyLess

[easy-less](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

```json
{
  "less.compile": {
    "compress": false, // 默认不压缩
    "sourceMap": false, // 默认不生成
    "out": true // 是否生成同名css文件，a.less => a.css
  }
}
```

关闭自动生成，然后可以在 `less` 文件里通过注释的方式单独指定

```json
{
  "less.compile": {
    "out": false
  }
}
```

```less
// out: "style.css", compress: true, sourceMap: false

.box {
  ...;
}
```

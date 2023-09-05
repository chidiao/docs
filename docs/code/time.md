# Time

## 时间戳

[时间戳转换](https://tool.lu/timestamp/)

Unix 时间戳是从 `1970-01-01 00:00:00` 开始所经过的秒数。

时间戳具有普遍的跨平台和跨语言性质，因为它们是一种标准化的时间表示方式。

### Dayjs

```js
// 13位，毫秒
let timestamp = 1318781876406
dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')

// 10位，秒
let timestamp = 1318781876
dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
dayjs(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
```

### JavaScript

```js
//
```

### Dart

```dart
//
```

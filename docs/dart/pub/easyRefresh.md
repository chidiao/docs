# EasyRefresh

[github](https://github.com/xuelongqy/flutter_easy_refresh)

- 容器有高度约束
- child 为可滚动容器

```dart
EasyRefresh(
  onRefresh: () async {
    // refresh
  },
  onLoad: () async {
    // loadmore
  },
  child: ListView(),
);
```

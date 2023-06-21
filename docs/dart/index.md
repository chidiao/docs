# index

```dart
class User {
  List likes;

  User(this.likes = const []);
}
```

在 Dart 中，通过 [] 创建的空数组不是一个常量对象，而是一个可变对象，所以不能将其用作类成员变量的默认值。这个问题可以通过使用 const [] 来解决，因为 const [] 是一个常量对象，可以用作类成员变量的默认值。

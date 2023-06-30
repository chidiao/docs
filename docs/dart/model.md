# Model

数据处理过程

`String json` => `Map<String, dynamic> json` => `Model`

## json

### jsonDecode()

用于将 JSON 字符串解码为对应的 Dart 对象。

接受一个包含 JSON 数据的字符串作为参数，返回一个解码后的 Dart 对象。

通常是 `Map<String, dynamic>` 或 `List<dynamic>` 。

```dart
String jsonString = '{"name": "John", "age": 30}';

Map<String, dynamic> jsonMap = jsonDecode(jsonString);

String name = jsonMap['name'];
int age = jsonMap['age'];
```

### jsonEncode()

用于将 Dart 对象编码为 JSON 字符串。

接受一个 Dart 对象作为参数，返回一个包含 JSON 数据的字符串。

字符串通常用于传输、存储或与其他系统进行交互。

```dart
Map<String, dynamic> person = {
  'name': 'John',
  'age': 30,
};

String jsonString = jsonEncode(person);
```

::: info

json.decode() 和 jsonDecode() 是同一个函数。

json.decode() 存在于早期版本。jsonDecode() 适应于新版本引入的更统一的命名规范。

新项目建议使用 jsonDecode() 和 jsonEncode() 。

:::

## Model

[quicktype](https://app.quicktype.io/)

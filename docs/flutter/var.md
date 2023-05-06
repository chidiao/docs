# 变量

```dart
var name = 'Bob';
```

所有变量引用的都是对象，每个对象都是一个类的实例，所有类都继承于 `Object` 类。(null除外)

Dart 是强类型语言，指定类型是可选的，因为 Dart 可以进行类型推断。

```dart
final name = 'Bob';
final String nickname = 'Bobby';

const count = 6;
const int doubleCount = 12;
```

final 只能赋值一次，const 是一个编译时常量，const 也属于 final 。

## Numbers

Dart 支持两种 Number 类型：int 和 double ，num 表示两者都可以。

```dart
int x = 6;

double y = 3.14;

num z;
```

## Strings

```dart
String msg = 'Hello World!';
```

## bool

## Lists

## Sets

## Maps

## Symbols
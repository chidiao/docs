# Class

## 构造函数

### 默认构造函数

::: code-group

```dart [简写]
class Star {
  late String name;
  late int age;

  Star(this.name, this.age);

  void sing() {
    print('sing');
  }
}
```

```dart [默认]
class Star {
  late String name;
  late int age;

  Star(String name, int age) {
    this.name = name;
    this.age = age;
  }

  void sing() {
    print('sing');
  }
}
```

:::

### 命名构造函数

```dart
class Star {
  late String name;
  late int age;

  Star() {
    print('Star');
  }

  Star.Kun() {
    print('Kun');
  }
}
```

## 属性和方法

### getter 和 setter

计算属性！

```dart
class Star {
  late String firstName;
  late String lastName;

  Star(this.firstName, this.lastName);

  String get fullName {
    return '$firstName $lastName';
  }

  void set fullName(String fullName) {
    List<String> names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}
```

### 私有属性和方法

外部无法访问这些私有属性和方法，只有类里边可以相互调用。

```dart
class Star {
  late bool _isBlack;

  Star(this._isBlack);

  void _jump() {
    print('jump inside');
  }
}
```

### 静态属性和方法

静态方法只能访问静态属性和静态方法，因为没有实例化

非静态方法可以访问所有属性和方法

访问静态属性和方法不需要加 `this`

因为 `this` 指向的是类创建的实例对象，而不是类本身

```dart
class Star {
  static String song = '鸡你太美';

  static void sing() {
    print(song);
  }
}

Star.sing();
```

## 继承

### 构造函数

::: code-group

```dart [简写]
class Kun extends Star {
  late bool isBlack;

  Kun(super.name, super.age, this.isBlack);
}
```

```dart [默认]
class Kun extends Star {
  late bool isBlack;

  Kun(String name, int age, bool isBlack) : super(name, age) {
    this.isBlack = isBlack;
  }
}
```

:::

### 覆写和调用

```dart
class Kun extends Star {
  late bool isBlack;

  Kun(super.name, super.age, this.isBlack);

  @override
  void sing() {
    print('sing a song');
  }

  void ctrl() {
    super.sing();
    print('jump rap ball');
  }
}
```

### 抽象类

抽象类中没有方法体的方法就是抽象方法

抽象类的抽象方法需要子类去实现

```dart
// 抽象类
abstract class Bird {
  fly();
}

// 继承
class Eagle extends Bird {
  @override
  fly() {
    print('我是鹰，我是鸟类，我需要飞行!');
  }
}

// 接口
class Plane implements Bird {
  @override
  fly() {
    print('我是飞机，我需要飞行，但我不是鸟类');
  }
}
```

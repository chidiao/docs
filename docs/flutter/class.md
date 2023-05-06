# 类

## 类和默认构造函数

```dart
class Star {
  late String name;
  late String song;

  Star(String name, String song) {
    this.name = name;
    this.song = song;
  }

  void sing() {
    print('${this.song}');
  }
}

Star kun = new Star('Kun', '鸡你太美');
```

## 默认构造函数简写

```dart
class Star {
  late String name;
  late String song;

  Star(this.name, this.song);

  void sing() {
    print('${this.song}');
  }
}
```

## 命名构造函数

```dart
class Star {
  late String name;
  late String song;

  Star(this.name, this.song);

  Star.ikun(String name, String song) {
    this.name = name;
    this.song = song;
    print('我是ikun!')
  }

  void sing() {
    print('${this.song}');
  }
}

Star ikun = new Star.ikun('iKun', '鸡你太美');
```

## 模块化和私有属性

私有属性只有模块化的类才私有

::: code-group

```dart [main]
import 'lib/Star.dart';

void main() {
  Star kun = new Star('Kun');

  kun._name;	// error
}
```

```dart [Star]
class Star {
  late String _name;

  Star(this._name);
}
```

:::

## getter 和 setter

(计算属性)

```dart
class Rect {
  late num width;
  late num height;

  Rect(this.width, this.height);

  get area {
    return this.width * this.height;
  }

  set areaHeight(value) {
    this.height = value;
  }
}

Rect rect = new Rect(5, 6);
rect.areaHeight = 7;
print(a.area);
```

## 静态属性和静态方法

静态方法只能访问静态属性和静态方法

非静态方法全部都能访问

访问静态属性和方法不要加 `this`

`this` 指向该类创建的实例对象

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

```dart
class Kun extends Star {
  late String ball;

  Kun(String name, String ball) : super(name) {
    this.ball = ball;
  }

  void play() {
    print(this.ball);
  }
}
```

简写

```dart
class Kun extends Star {
  late String ball;

  Kun(super.name, String ball);

  void play() {
    print(this.ball);
  }
}
```

覆写和调用

```dart
class Kun extends Star {
  Kun(super.name, super.song);
  
  @override
  void sing() {
    print('不唱了');
  }
  
  void ctrl() {
    super.sing();
  }
}
```

## 抽象类

定义标准，约束子类。

抽象类定义抽象方法，抽象类不能被实例化。

子类必须覆写抽象方法。

```dart
abstract class Star {
  sing();
  
  jump();
}

class Kun extends Star {
  @override
  void sing() {
    print('sing');
  }
  
  @override
  void jump() {
    print('jump');
  }
}
```

## 多态接口和mixins

```js
class Star {}

typeof Star // function
```

# Class

类，用于创建对象的可扩展的程序代码模板

为对象提供了：

- `成员变量` 的初始值
- `成员方法` 的实现

```js
class Star {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sing() {
    console.log('唱')
  }
}

let cxk = new Star('蔡徐坤')
cxk.sing()
```

## 原型

对象有一个特殊的隐藏属性 `[[Prototype]]` ，它是一个对象或 `null` ，这就是 `原型` 。

只能通过特殊方法进行访问，如 `__proto__`

```js
console.log(cxk.__proto__)
```

类有一个属性 `prototype` ，这个属性的值和类的实例对象的 `__proto__` 的值是同一个东西。

这个东西也叫做 `原型对象`

```js
console.log(cxk.__proto__ === Kun.prototype) // true
```

原型对象有 `原型方法` 和 `constructor` 两部分组成。

`constructor` 又指向了这个 `类或构造函数`

```js
console.log(Kun.prototype.constructor === Kun) // true
```

## 继承

```js
class Star {
  constructor(name) {
    this.name = name
  }

  sing() {
    console.log('唱')
  }
}

class Kun extends Star {
  dance() {
    console.log('跳')
  }
}

let cxk = new Kun('蔡徐坤')
```

### super

扩展父类的变量和方法

```js
class Kun extends Star {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  show() {
    super.sing()
    console.log('结束')
  }
}
```

## 原型链

```js
// cxk.__proto__ => Kun.prototype
// Kun.prototype.__proto__ => Star.prototype
// Star.prototype.__proto__ => Object.prototype
// Object.prototype.__proto__ => null
```

## 构造函数

```js
function Star(name) {
  this.name = name
}

Star.prototype.sing = function () {
  console.log('唱')
}

let cxk = new Star('蔡徐坤')
```

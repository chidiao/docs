# Class

`ES6` 中创建 '类' `更高级` 的语法

需求：创建许多相同类型的对象

目的：实现可复用的对象创建代码

```js
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    alert(this.name)
  }
}
```

## 继承

## 构造函数

`ES5` 中创建 '类' 的方法

```js
function User(name) {
  this.name = name
}

User.prototype.sayHi = function () {
  alert(this.name)
}
```

### 差异

`Class` 创建的函数具有特殊的内部标记 `[[IsClassConstructor]]: true`

|          | Function | Class                 |
| -------- | -------- | --------------------- |
| new      |          | 必须通过 `new` 来调用 |
| 类方法   | 可枚举   | 不可枚举              |
| strict   |          | 总是执行严格模式      |
| 变量提升 | 可提升   | 不可提升              |

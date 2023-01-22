# JavaScript

**Any application that can be written in JavaScript, will eventually be written in JavaScript.**

**任何可以用 JavaScript 来写的应用，最终都将用 JavaScript 来写。**

## ES5

### 严格模式

## ES6

ES 的全称是 ECMAScript，它是由 ECMA 国际标准化组织 制定的一套**脚本语言的标准化规范**。

**ES6 实际上是一个泛指，泛指 ES 2015 及后续的版本**。

ES6 新特性：

- [变量](./var)
- 扩展运算符
- 解构赋值
- 模板字符串
- 箭头函数
- 对象属性同名简写
- [本地存储](./storage)
- [Promise](./async)
- [Class](./class)

## 进阶

- [递归](./function)
- [闭包](./function)
- [垃圾回收]()

### 随手记

对象只能用 `for in`

能用 `for of` 的对象叫做可迭代对象。

有索引又有 `length` 的又叫做类数组对象。

### 数组去重

```js
// set
let set = new Set(arr)
let result = Array.from(set)

// includes
let result = []
arr.forEach((item) => {
  if (!result.includes(item)) {
    result.push(item)
  }
})

// filter
let result = arr.filter((item, index) => {
  return arr.indexOf(item) == index
})
```

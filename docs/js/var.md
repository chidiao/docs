# 变量

## 全局污染

var 声明的变量会挂载在 window 对象上，而 let 和 const 声明的变量不会。

这一特性容易造成 window 全局变量的污染。

```js
var a = 'a'
console.log(window.a) // => a

var innerHeight = 100 // 直接覆盖原本属性
```

## 变量提升

先使用，再声明。

var 声明的变量存在变量提升，let 和 const 声明的变量不存在变量提升。

```js
console.log(a) // => undefined
var a = 'a'

console.log(b) // Error
let b = 'b'
```

## 作用域

var 声明不存在块级作用域，而是函数作用域，let 和 const 声明存在块级作用域。

```js
{
  var a = 'a'
  let b = 'b'
  const c = 'c'
}

console.log(a) // => a
console.log(b) // Error
console.log(c) // Error

console.log(window.a) // => a
```

## 重复声明

同一作用域下，var 可以重复声明变量，let 和 const 不能重复声明变量。

所以，使用 let/const 声明的变量，不会造成全局污染。

## 声明常量

const：一旦声明必须赋值；声明后不能被修改。

- 如果用 const 声明基本数据类型，则无法被修改。
- 如果用 const 声明引用数据类型，这里的“无法被修改”指的是**不能改变内存地址的引用**；但对象里的内容是可以被修改的。

```js
const a // Error

const a = 'a'
```

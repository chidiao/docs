# 类型检测

## typeof

运算符，返回数据类型

```js
typeof 18 // 'number'

typeof 10n // 'bigint'

typeof 'hello' // 'string'

typeof true // 'boolean'

typeof undefined // 'undefined'

typeof Symbol('id') // 'symbol'
```

特殊情况

```js
typeof null // 'object'
// [JS错误]，结果是错误的，为了兼容性而被保留

typeof alert // 'function'
// [JS错误]，结果是错误的，JS并没有'function'类型，预期结果应该为'object'
// 错误，但是好用

typeof x
// typeof x => 是一个运算符，并不是一个函数
// typeof(x) => ()只是包裹表达式，并省略了空格，不推荐
```

## instanceof

运算符，用于类检测，返回 Boolean

```js
obj instanceof Class
// 检查一个对象是否属于某个类

let arr = [1, 2, 3]
arr instanceof Array // true
arr instanceof Object // true
```

## toString()

Object.prototype.toString.call()

更高级的 `typeof`

```js
typeof [] // 'object'
Object.prototype.toString.call([]) // '[object Array]'

typeof null // 'object'
Object.prototype.toString.call(null) // '[object Null]'
```

## isArray()

Array.isArray()

检测是否为数组

```js
Array.isArray([]) // true
Array.isArray({}) // false
```

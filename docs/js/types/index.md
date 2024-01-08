# Types

## 基本数据类型

`JavaScript` 中有 8 种基本数据类型，7 种原始数据类型，1 种引用数据类型(复杂数据类型)。

### Number

数字。包括整数和浮点数。

### BigInt

任意长度的整数。

### String

[String](/ts/types/string)

字符串。

### Boolean

`true` 和 `false`

```ts
let isDone: boolean = false
```

### null

无、空、值未知。

`null` 是独立的类型，`null` 也是其唯一的值。

```js
typeof null // 'object'
```

### undefined

未被赋值。

`undefined` 是独立的类型，`undefined` 也是其唯一的值。

```js
let x // 声明但未被赋值
typeof x // 'undefined'
```

### Symbol

唯一标识符。

### Object

对象。

## 类型检测

### typeof

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

### instanceof

运算符，用于类检测，返回 Boolean

```js
obj instanceof Class
// 检查一个对象是否属于某个类

let arr = [1, 2, 3]
arr instanceof Array // true
arr instanceof Object // true
```

### toString()

Object.prototype.toString.call()

更高级的 `typeof`

```js
typeof [] // 'object'
Object.prototype.toString.call([]) // '[object Array]'

typeof null // 'object'
Object.prototype.toString.call(null) // '[object Null]'
```

### Array.isArray()

检测是否为数组

```js
typeof [] // 'object'
Array.isArray([]) // true
Array.isArray({}) // false
```

## 类型转换

显示转换：`String()` 、`Number()` 、`Boolean()`

```js
let str = String(value)
let num = Number(value)
let bl = Boolean(value)
```

数字类型

```js
// Number() 是严格的，它只容忍首尾空白字符
let num = Number(' 100 ') // 100
let num = Number('100px') // NaN

// parse() 容忍首位空白字符，并且转换到不能转换为止
let num = parseInt('100px') // 100
let num = parseFloat('12.5em') // 12.5
let num = parseInt('12.3') // 12
let num = parseFloat('12.3.4') // 12.3

let num = parseInt('a123') // NaN，首位就停止了
```

### Array.from()

将类数组转换成数组

```js
Array.from(item)

// 数组去重
let set = new Set(arr)
let _arr = Array.from(set)
```

### split()/join()

将字符串拆分成数组

```js
// 按分隔符拆分
let str = 'a, b, c'
let arr = str.split(', ')
// ['a', 'b', 'c']

// 按字符拆分
let str = 'boy'
let arr = str.split()
// ['b', 'o', 'y']
```

将数组拼接成字符串

```js
let arr = ['a', 'b', 'c']
let str = arr.join('+')
// 'a+b+c'
```

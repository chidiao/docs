# 数据类型

## 8 种数据类型

```js
// ==========================================
// 基本类型（Primitive Types）- 7 种
// ==========================================
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (ES6)
// 7. BigInt (ES2020)

// ==========================================
// 引用类型（Reference Types）- 1 种
// ==========================================
// 8. Object（包含 Array、Function、Date、RegExp 等）
```

## 1️⃣ Number（数字）

```js
// 特殊数值
let infinity = Infinity // 无穷大
let negativeInfinity = -Infinity
let notANumber = NaN // 非数字
let negativeZero = -0

// 数字范围
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// NaN 特殊
console.log(typeof NaN) //  "number"

// NaN 是唯一一个不等于自身的值
console.log(NaN === NaN) //  false
console.log(NaN !== NaN) //  true
```

## 2️⃣ String（字符串）

```js
// 三种定义方式
let str1 = '单引号'
let str2 = '双引号'
let str3 = `模板字符串` // ES6

// 模板字符串特性
let name = '张三'
let age = 25
let message = `我叫 ${name}，今年 ${age} 岁`

// 字符串不可变性
let str = 'hello'
str[0] = 'H' // 不会改变
console.log(str) // "hello"（字符串不可变）
```

## 3️⃣ Boolean（布尔值）

```js
let isActive = true
let isLoggedIn = false

// 真值（Truthy）和假值（Falsy）
// ❌ 假值（Falsy）：false、0、''、null、undefined、NaN
// ✅ 真值（Truthy）：其他所有值

if (0) console.log('不会执行') // 0 是 falsy
if ('hello') console.log('执行') // 非空字符串是 truthy
if ([]) console.log('执行') // 数组是 truthy
if ({}) console.log('执行') // 对象是 truthy
```

## 4️⃣ Undefined

```js
// 变量声明了但未赋值

// 访问对象不存在的属性

// 函数没有返回值
```

## 5️⃣ Null

```js
// 表示"空值"或"没有对象"

// typeof null 的历史遗留问题
console.log(typeof null) // "object"
```

## 6️⃣ Symbol（ES6）

问题：对象属性名冲突

特性：唯一且不可变

1. **每个 Symbol 都是唯一的** → 永远不会冲突
2. **作为属性名时不会被意外覆盖**
3. **默认不可枚举** → 不会被 for...in 遍历到

```js
// 唯一性
Symbol('id') === Symbol('id') // false

// 保证不冲突，防止意外覆盖
const id = Symbol('id')
const id2 = Symbol('id')
obj[id] = 1
obj[id2] = 2

console.log(obj[id], obj[id2]) // 1 2
```

## 7️⃣ BigInt（ES2020）

问题：`Number` 类型的安全整数范围限制

```js
// Number 的限制
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// 超过安全范围会丢失精度
console.log(9007199254740991 + 1) // 9007199254740992 ✅
console.log(9007199254740992 + 1) // 9007199254740992 ❌（精度丢失！）

// 实际应用场景
// 1. 数据库中的大整数 ID（如 MongoDB 的 ObjectId）
// 2. 时间戳（毫秒级，可能超过安全范围）
// 3. 加密货币的金额（如比特币最小单位聪）
// 4. 科学计算中的大整数
```

## 8️⃣ Object（对象）

### 包装类型

基本类型本身不是对象，但访问其属性/方法时，JS 会临时创建对应包装对象

```js
'hello'.length // 5

// 实际过程：
// 1. 临时创建 String('hello') 对象
// 2. 调用该对象的 length 属性
// 3. 销毁临时对象
```

## typeof

```js
// 基本类型
console.log(typeof 42) // "number"
console.log(typeof 'hello') // "string"
console.log(typeof true) // "boolean"
console.log(typeof undefined) // "undefined"
console.log(typeof Symbol()) // "symbol"
console.log(typeof 1n) // "bigint"

// 引用类型
// 局限性：无法区分对象类型
console.log(typeof {}) // "object"
console.log(typeof []) // "object"
console.log(typeof null) // "object"
console.log(typeof new Date()) // "object"
console.log(typeof /abc/) // "object"
console.log(typeof new Map()) // "object"

// 特殊：函数
// 局限性：无法区分函数和类
console.log(typeof function () {}) // "function"
console.log(typeof class MyClass {}) // "function"
console.log(typeof (() => {})) // "function"
```

陷阱

```js
console.log(typeof null) // "object"（JavaScript 的 Bug）
console.log(null instanceof Object) // false（说明 null 不是对象）

console.log(typeof NaN) // "number"
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true

console.log(typeof []) // "object"
console.log(Array.isArray([])) // true
console.log([] instanceof Array) // true

console.log(typeof function () {}) // "function"
console.log(typeof class MyClass {}) // "function"
```

### instanceof

检测原型链

```js
class Animal {}
class Dog extends Animal {}

let dog = new Dog()
console.log(dog instanceof Dog) // true
console.log(dog instanceof Animal) // true
console.log(dog instanceof Object) // true

// 基本类型
console.log(42 instanceof Number) // false
console.log(new Number(42) instanceof Number) // true
```

### Object.prototype.toString.call()

最准确

```js
console.log(Object.prototype.toString()) // "[object Object]"
// 调用者是 Object.prototype

function getType(value) {
  return Object.prototype.toString.call(value)
}

console.log(getType(42)) // "[object Number]"

function typeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
```

### constructor

构造函数

```js
console.log((42).constructor === Number) // true
console.log('hello'.constructor === String) // true
console.log(true.constructor === Boolean) // true
console.log([].constructor === Array) // true
console.log({}.constructor === Object) // true

// null 和 undefined 没有 constructor
// console.log(null.constructor);  // ❌ TypeError
// console.log(undefined.constructor); // ❌ TypeError
```

### Array.isArray()

```js
console.log(Array.isArray([])) // true
console.log(Array.isArray({})) // false
```

### Number.isNaN() 和 isNaN()

```js
// isNaN()（全局函数）- 会先转换为Number
console.log(isNaN(NaN)) // true
console.log(isNaN('hello')) // true（'hello' 转成 NaN）
console.log(isNaN('123')) // false（'123' 转成 123）
console.log(isNaN(undefined)) // true（undefined 转成 NaN）

// Number.isNaN()（ES6）- 不会转换，只有值是NaN是才返回true
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('hello')) // false（'hello' 不是 NaN）
console.log(Number.isNaN('123')) // false
console.log(Number.isNaN(undefined)) // false
```

# 数据类型

## 有哪些数据类型？

一共有8种数据类型

基本类型7种：`number`、`bigint`、`string`、`boolean`、`undefined`、`null`、`symbol`

引用类型1种：`object`

::: info

区分核心：基本类型存在栈内存，引用类型存在堆内存

:::

### 数据类型的特性

`bigint` 解决 `number` 即存在大小上限，又存在精度不足的问题。适用于科技计算/金融计算等高数值和高敏感的场景。

```js
NaN === NaN // false
NaN == NaN // false
Number.isNaN(NaN) // true
```

`Symbol` 是 ES6 引入的**唯一且不可变**的基本类型

```js
Symbol('id') === Symbol('id') // false

const id = Symbol('id')

const obj = { [id]: 'value' }

obj[id]
```

## 如何判断数据类型？

### typeof

判断基本类型和函数

```js
typeof null // object
typeof fn // function
```

### instanceof

无法判断基本类型

```js
fn instanceof Object // true
```

### Object.prototype.toString.call()

所有类型最准确

```js
Object.prototype.toString.call([]) // '[object Array]'
Object.prototype.toString.call(null) // '[object Null]'
```

## 如何判断是否数组？

```js
// 最优
Array.isArray(arr)

// 全能
Object.prototype.toString.call(arr) === '[object Array]'

// 不推荐
arr instanceof Array
```

## 包装类型

基本类型本身不是对象，但访问其属性/方法时，JS 会临时创建对应包装对象

```js
'hello'.length // 5

// 实际过程：
// 1. 临时创建 String('hello') 对象
// 2. 调用该对象的 length 属性
// 3. 销毁临时对象
```

## 浅拷贝和深拷贝

**浅拷贝**：只拷贝第一层，嵌套对象仍共享引用

**深拷贝**：完全拷贝所有层级，与原数据独立

```js
// 浅拷贝方法
{...obj}
Object.assign({}, obj)
[...arr]
Array.from(arr)

// 方法1：JSON（有局限：无法拷贝函数、undefined、Symbol、循环引用）
JSON.parse(JSON.stringify(obj))

// 方法2：递归
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj

  const clone = Array.isArray(obj) ? [] : {}

  Object.keys(obj).forEach(key => {
    clone[key] = deepClone(obj[key])
  })

  return clone
}

// 对比
// 过滤掉原型链上的属性
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    clone[key] = deepClone(obj[key])
  }
}

// 只返回自有属性
Object.keys(obj).forEach(key => {
  clone[key] = deepClone(obj[key])
})

// 方法3：ES2022，原生支持
const clone = structuredClone(obj)
```

## `Map` 和 `Object` 的区别

```js
// 区别
// 对象：key只能用字符串和symbol
// Map：key可以是任意类型
```

## `Set` 和 `Array` 的区别

`Set` 是 ES6 引入的**值不重复**的集合

```js
// 基本用法
let set = new Set([1, 2, 2, 3, 3, 3])
set.add(4)
set.has(2)
set.delete(3)
set.size

// 区别
// 数组：有序、可重复、索引访问
// Set：无序、去重

// 数据去重
const a = [...new Set(arr)]

Array.from(new Set(arr))
```

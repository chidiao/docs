# 数据类型

`JavaScript` 一共有 8 种 基本的数据类型

7 种原始类型：`number`，`bigint`，`string`，`boolean`，`symbol`，`null`， `undefined`

1 种引用类型：`object`

基本数据类型，也称为原始类型，而 `object` 为复杂数据类型

## 7 种原始类型

### Number

数值

### BigInt

`ES10` 才加入的新类型

### String

字符串

### Boolean

布尔型

### Symbol

用于创建对象的唯一标识符

### "null"

独立的类型，值只有 `null`

`null` 表示 “无”，“空” 或 “值未知”

### "undefined"

独立的类型，值只有 `undefined`

`undefined` 表示未被赋值，虽然它可以被赋值给变量，但是不建议这样做

## 1 种引用类型

### Object

对象

## typeof

```js
typeof x
typeof(x)

typeof null	//	=>	object
//	官方承认的'typeof'的错误，为了兼容而被保留，历史遗留问题

typeof alert	//	=>	function
//	函数隶属于'object'类型，但被typeof特殊标识为'function'类型
//	技术不正确，但却非常好用，属于历史遗留问题


```

## 显示转换

### Number()

很严格，不是数字 就是 `NaN`

```js
Number('324')	//	324
Number('324abc')	//	NaN
Number('')	//	0
```

### parseInt()

不严格，转换到不能转换的地方停下

```js
parseInt('32a3')	//	32
```

### String()

### Boolean()

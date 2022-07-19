# Object

## 开始

```js
let user = {
  name: 'sunya',
  age: 27
}

// 访问属性
user.name
user['name']

let key = name
user[key]

// 删除属性
delete user.age
```

### for...in

```js
for (let key in object) {
  console.log(key)
  console.log(object[key])
  // do something
}
```

## 方法

### Object.assign()

克隆与合并

将多个对象的属性合并到一个目标对象内

```js
// 语法
Object.assign(dest, [src1, src2, src3...])

//	浅拷贝
let clone = Object.assign({}, obj)

// 合并
let merge = Object.assign(dest, obj1, obj2)
```

## 迭代

### Object.keys()

返回所有键 key 的数组

### Object.values()

返回所有值 value 的数组

### Object.entries()

返回所有键值对 [key, value] 的数组

```js
let user = {
  name: 'john',
  age: 20
}

Object.keys(user) //	=>	['name', 'age']
Object.values(user) //	=>	['john', 20]
Object.entries(user) //	=>	[['name', 'john'], ['age', 20]]
```

## 拓展

### Object.fromEntries()

如果我们想要对对象使用数组才有的方法，只要先通过迭代将对象转换为数组，对数据进行处理后，再将结果转换为对象即可

```js
let count = {
  apple: 1,
  banana: 2,
  orange: 3
}

let doubleCount = Object.fromEntries(
  Object.entries(count).map((entry) => [entry[0], entry[1] * 2])
  //	将对象转换为 [key, value] 数组，再使用数组方法，再将结果数组转换为对象
  //	1.=>	{ apple: 1, ... }
  //	2.=>	[ ['apple', 1], ... ]
  //	3.=>	[ ['apple', 2], ... ]
  //	4.=>	{ apple: 2, ... }
)
```

## 可选链

如果可选链 `?.` 前面的值为 `undefined` 或 `null` 则停止运算直接返回 `undefined`

`?.` 表示前面的值为可选值，可有可无

```js
let user = {}

alert(user.address.street) //	=>	Error	×

alert(user.address?.street) //	=>	undefined	√
```

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

## 赋值

**赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址”，换句话说就是对该对象的“引用”。**

### 浅拷贝

```js
let clone = Object.assign({}, user)

let clone = { ...user }
```

## 垃圾回收

[垃圾回收](https://zh.javascript.info/garbage-collection)

## 可选链

```js
user?.name

// 可读不可写
```

## 方法

### Object.assign()

```js
Object.assign(target, ...sources)
// 将所有可枚举属性 从一个或多个源对象 分配到目标对象
// 相同属性(key)，会被后边的对象覆盖，按顺序
// 返回目标对象
```

### Object.keys()

返回一个包含所有 key 的数组

顺序与手动遍历一致

```js
Object.keys(obj)
// => [key, key, key]
```

### Object.values()

返回一个包含所有 value 的数组

顺序与手动遍历一致

```js
Object.values(obj)
// => [value, vlalue, value]
```

### Object.entries()

```js
Object.entries(obj)
// => [[key, value], [key, value], [key, value]]

for (let [key, val] of Object.entries(obj)) {
  console.log(key)
  console.log(val)
}
```

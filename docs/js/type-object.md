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


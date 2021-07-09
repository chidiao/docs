# object

## 循环

### for...in

```js
for (let key in obj) {
  // key
  // obj[key]
  // do something
}
```



## 引用/克隆

**对象“通过引用的形式”被存储和拷贝**

**变量存储的不是对象自身，而是该对象的“内存地址”，换句话说就是一个对该对象的“引用”。**

**当一个对象变量被拷贝 —— 引用则被拷贝，而该对象并没有被复制。**

### Object.assign()

```js
Object.assign(dest, [src1, src2, src3...])
// dest 目标对象 新对象
// copy 来源

let user = {
  name: 'john',
  age: 30
}

let test = user
// 引用 两者 指向 同一内存对象

let clone = Object.assign({}, user)
// 将内存对象 克隆到一个新的对象 相同属性会被覆盖

// 若克隆的属性 是对象。该属性仍为 引用。需要深层克隆。
```



## 可选链

`?.` 检查左边部分是否为 `null/undefined`，如果不是则继续运算。

```js
obj?.prop
obj?.[prop]
obj?.func()
```


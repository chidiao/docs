# Set

值的集合。没有键，且值不可重复。

## 基操

```js
// 创建
// 可传入一个'可迭代对象'，通常是数组
let set = new Set()
let set = new Set(arr)

// 修改
set.add(val)
set.delete(val)
set.has(val)
set.clear()

// size
set.size
```

## 迭代

```js
// 结果是可迭代对象
set.keys() // => { val, val... }
set.values() // => { val, val... }
set.entries() // => { [val, val], [val, val]... }

// for of
for (let val fo set) {
  console.log(val)
}

// forEach
set.forEach((val, valAgain, set) => {
  console.log(val)
})

// Set 所有重复的结果和参数都是为了兼容 Map
// 在需要的时候两者可以相互替代
```

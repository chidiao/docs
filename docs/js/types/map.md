# Map

键值对的集合。和对象基本一样，但是，它可以使用任何类型的键。

## 基操

```js
// 创建
let map = new Map()

// 修改
map.set(key, val)
map.get(key)
map.has(key)
map.delete(key)
map.clear()

// 链式调用
map.set(key, val).set(...).set(...)

// size
map.size
```

## 迭代

```js
map.keys() // => { key, key... }
map.values() // => { val, val... }
map.entries() // => { [key, val], [key, val]... }

// for of
for (let val of map.values()) {
  console.log(val)
}
```


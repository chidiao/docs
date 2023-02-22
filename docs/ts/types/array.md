# Array

数组是一种特殊的对象，适用于存储和管理有序的数据项。

```ts
let list: number[] = [1, 2, 3]

let list: Array<number> = [1, 2, 3]
```

## pop()/push()

在末端增加/删除元素

```js
arr.push(4)
arr.push(4, 5, 6)
// 可以增加多个，并返回数组长度

arr.pop()
// 只能删除一个，并返回该元素
```

## shift()/unshift()

在首端增加/删除元素

`pop/push` 速度和性能总是优于 `shift/unshift`

```js
arr.unshift(4)
arr.unshift(4, 5, 6)
// 可以增加多个，并返回数组长度

arr.shift()
// 只能删除一个，并返回该元素
```

## splice()

从开始位置，删除指定个数，并插入新元素，修改原数组

```js
arr.splice(startIndex, delCount, ...item)
// 返回被删除的部分

// 只删除
arr.splice(startIndex, delCount)

// 只插入
arr.splice(startIndex, 0, ...item)
```

## slice()

截取新数组，不修改原数组

包括 `startIndex` 不包括 `endIndex`

```js
arr.slice(startIndex, endIndex)
// 返回被截取的部分

// 浅拷贝
arr.slice()
```

## concat()

合并数组

产生新的副本，所有源都不会修改

```js
arr.concat(arr1, arr2, arr3)

a.concat(b, c, d)
// a,b,c,d 都不会修改，产生新的副本
```

## map()

数组转换，将数组元素进行修改，产生新的副本，不修改原数组

```js
arr.map((item, index, array) => {
  return {
    ...item,
    isNew: true
  }
})
```

## sort()

数组排序

修改原数组

传入一个方法，返回 `true` 则交换元素，否则则不交换

```js
arr.sort(fn)

arr.sort((a, b) => {
  return truthy / falsy
})

// 从小到大
arr.sort((a, b) => a - b)

// 从大到小
arr.sort((a, b) => b - a)
```

## reverse()

倒序

```js
arr.reverse()
```

## indexOf()/lastIndexOf()

搜索/查询 请使用严格相等 `===` ，避免 布尔型值。

```js
arr.indexOf(item)
arr.indexOf(item, from)

// 存在，返回索引值
// 不存在，返回 -1
```

## findIndex()/findLastIndex()

查索引

```js
arr.findIndex()
arr.findLastIndex()
```

## includes()

是否包含，返回 `true/false`

搜索/查询 请使用严格相等 `===` ，避免 布尔型值。

```js
arr.includes(item)
arr.includes(item, from)
```

## every()

是否所有元素都满足条件

```js
arr.every((item, index, array) => {
  return truthy / falsy
})
```

## some()

是否有元素满足条件

```js
arr.some((item, index, array) => {
  return truthy / falsy
})
```

## find()

查找数组中第一个符合条件的元素，停止迭代并返回该元素

```js
arr.find((item, index, array) => {
  return truthy / falsy
})
```

## filter()

查找数组中符合条件的元素，返回一个新数组，产生副本

```js
arr.filter((item, index, array) => {
  return truthy / falsy
})
```

## for

遍历数组最古老的方式

效率最高，性能最好，兼容最好

元素可读，可写，可修改原数组

`for` 作为循环语句，并不是专为遍历数组的，它的起点，范围，梯度，索引都是可以修改的，而且可以通过 `break` 跳出循环，这些都是数组专用的遍历方法所不具备的。

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

let arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  arr[i] *= 2
}
// [2, 4, 6]
```

## for..of

更简单，更现代，只能访问元素，不能访问索引值

元素只读，不可写，无法修改原数组

```js
for (let item of arr) {
  console.log(item)
}

let arr = [1, 2, 3]
for (let item of arr) {
  item *= 2
}
// [1, 2, 3]
```

## for..in

继承自对象的方法，最好别用

## forEach()

遍历，为每个元素运行一个函数

元素只读，不可写，无法修改原数组

```js
arr.forEach((item, index, array) => {
  console.log(item)
})
```

## reduce()

接力赛，根据数组计算单个结果

将每一项的计算结果搬运到下一项并进行下一次的计算

```js
arr.reduce(
  (accumulator, item, index, array) => {
    return item
  },
  [initial]
)

// accumulator 上一项的结果 或 初始值
// item 当前元素
// return 返回最终结果

// 求和
arr.reduce((sum, item) => {
  return sum + item
}, 0)

// 反向
arr.reduceRight()
```

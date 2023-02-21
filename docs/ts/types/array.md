# Array

数组是一种特殊的对象，适用于存储和管理有序的数据项。

```ts
let list: number[] = [1, 2, 3]

let list: Array<number> = [1, 2, 3]
```

## pop/push

在末端增加/删除元素

```js
arr.push(4)
arr.push(4, 5, 6)
// 可以增加多个，并返回数组长度

arr.pop()
// 只能删除一个，并返回该元素
```

## shift/unshift

在首端增加/删除元素

`pop/push` 速度和性能总是优于 `shift/unshift`

```js
arr.unshift(4)
arr.unshift(4, 5, 6)
// 可以增加多个，并返回数组长度

arr.shift()
// 只能删除一个，并返回该元素
```

## splice

从开始位置，删除指定个数，并插入新元素，修改源数组

```js
arr.splice(startIndex, delCount, ...item)
// 返回被删除的部分

// 只删除
arr.splice(startIndex, delCount)

// 只插入
arr.splice(startIndex, 0, ...item)
```

## slice

截取新数组，不修改原数组

包括 `startIndex` 不包括 `endIndex`

```js
arr.slice(startIndex, endIndex)
// 返回被截取的部分

// 浅拷贝
arr.slice()
```

## concat

合并数组

产生新的副本，所有源都不会修改

```js
arr.concat(arr1, arr2, arr3)

a.concat(b, c, d)
// a,b,c,d 都不会修改，产生新的副本
```

## 改

### map()

数组转换，改变每个数组元素，产生一个新的数组副本

```js
arr.map((item, index, array) => {
  return { ...item }
  //	返回一个改造过的新元素
})

//	==>	newArr
//	==>	新的数组副本，不会影响原来的数组
```

### sort(fn)

数组排序，修改原数组

```js
arr.sort()

arr.sort((a, b) => {
  return truthy / falsy
  //	=>	truthy，替换
  //	=>	falsy，不替换
})

// 从小到大
arr.sort((a, b) => a - b)

//	从大到小
arr.sort((a, b) => b - a)
```

### reverse()

倒序

```js
arr.reverse()
```

## 查

### indexOf()

查索引，返回索引或 `-1`

```js
arr.indexOf(item)
arr.indexOf(item, fromIndex)
arr.lastIndexOf(item, fromIndex)

//	=>	index/-1
```

### includes()

查是否包含

```js
arr.includes(item)
arr.includes(item, fromIndex)

//	=>	true/false
```

### find()

查找数组中 `第一个` 符合条件的元素，停止迭代并返回该元素

查元素

```js
arr.find((item, index, array) => {
  return truthy / falsy
})

//	=>	item/undefined
```

查索引

```js
arr.findIndex()
arr.findLastIndex()

arr.findIndex((item, index, array) => {
  return truthy / falsy
})

//	=>	index/-1
```

### filter()

查找数组中符合条件的元素，返回一个新数组，产生副本

```js
arr.filter((item, index, array) => {
  return truthy / falsy
})

//	=>	newArr/[]
```

## 判断

### Array.isArray()

是否数组

```js
Array.isArray([]) //	true
Array.isArray({}) //	false
```

### every()

是否所有都满足

```js
arr.every((item, index, array) => {
  return truthy / falsy
})

//	=>	true/false
```

### some()

是否部分满足

```js
arr.some((item, index, array) => {
  return truthy / falsy
})

//	=>	true/false
```

## 遍历

### forEach()

为每个数组元素都运行一个函数

```js
arr.forEach((item, index, array) => {
  //	do something
})

// => undefined
```

### reduce()

接力赛

为每个数组元素进行运算，每一个运算结果，传递给下一个元素作为参数进行运算，最终获得一个最终结果

```js
arr.reduce(
  (prev, cur, index, array) => {
    return prev + cur
  },
  [initial]
)

//	prev	前项结果 或 初始值
//	cur	当前元素
//	=>	最终结果

//	求和
arr.reduce((sum, item) => sum + item, 0)

// 从右向左
arr.reduceRight()
```

## 其他

### Array.from()

将类数组转化为数组

```js
Array.from()

let set = new Set()
let arr = Array.from(set)
```

### str.split()

将字符串拆成数组

```js
//	按分隔符拆分
let str = 'a, b, c'
let arr = str.split(', ')
//	=>	['a', 'b', 'c']

//	拆成单个字符
let str = 'boy'
let arr = str.split()
//	=>	['b', 'o', 'y']
```

### arr.join()

将数组拼接成字符串

```
let arr = ['a', 'b', 'c']
let str = arr.join('+')
//	=> 'a+b+c'
```

## for

遍历数组最古老的方式

效率最高，性能最好，兼容最好

元素可读，可写，可修改源数组

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

元素只读，不可写，无法修改源数组

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

## forEach

遍历，为每个元素运行一个函数

元素只读，不可写，无法修改源数组

```js
arr.forEach((item, index, array) => {
  console.log(item)
})
```

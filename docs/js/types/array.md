# Array

**数组是一种特殊的对象，适用于存储和管理有序的数据项。**

## 增删

### 队列

`pop/push` 在数组末尾添加删除元素

`shift/unshift` 在数组开头添加删除元素

`pop/push` 性能和速度都要优于 `shift/unshift`

```js
let arr = [1, 2, 3]

arr.pop()
//	取出并返回最后一个数组元素
//	=>	item

arr.push(4)
arr.push(4, 5, 6)
//	在数组末端添加元素
//	=>	arr.length
```

### splice()

截取了再插入新内容，修改原数组

```js
arr.splice(index, delCount, ...item)

//	位置
//	删除个数
//	插入元素

//	=>	被删除的部分(数组)
//	不产生副本，原数组被修改

//	只裁剪
arr.splice(index, delCount)

//	只插入
arr.splice(index, 0, ...item)
```

### slice()

简单截取，获取副本，不修改原数组

```js
arr.slice(start, end)
//	=>	被截取的副本(数组)
//	=>	产生副本，不修改原数组

//	浅拷贝
arr.slice()
```

### concat()

合并数组，新的副本

```js
arr.concat(arr1, arr2, arr3)

//	=>	newArr
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

### for

最古老而又最经典的方法

效率最高，性能最好

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

### for..of

更现代更简单的方法

```js
for (let item of arr) {
  console.log(item)
}
```

### for..in

继承自对象的方法，可用但不建议

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

# Array

## queue

### pop

取出并返回数组的最后一个元素

```js
let arr = [1, 2, 3]

arr.pop()
// 取出并返回数组的最后一个元素 3
```

### push

在数组末端添加元素

```js
let arr = [1, 2, 3]

arr.push(0)
// 返回数组长度 4

arr.push(3, 6, 9)
// 添加多个元素
```

### shift/unshift

功能与 `pop/push` 类似，作用于数组首端元素

`pop/push` 运行快，性能好，`shift/unshift` 运行慢

## 增删

### splice()

```js
arr.splice(index, deleteCount, ...item)

// 位置
// 删除个数
// 插入元素

// => 被裁剪数组，不产生副本，原数组被裁剪
```

### slice()

```js
arr.slice(start, end)

// 数组裁剪
// => 被裁剪数组，产生副本，原数组不变
```

### concat()

```js
arr.concat(arr1, arr2, arr3)

// 合并数组
// => newArr，产生副本，新的数组
```

## 经典

### for

**古老而又经典的遍历方法**

```js
for (let i = 0; i < arr.length; i++) {
  // do something
}
```

### for..of

**现代而又简练的遍历方法**

```js
for (let item of arr) {
  // do something
}
```

### for..in

遍历对象的方法，循环会遍历对象的所有属性

可以，但并不适用于数组

## 遍历

### forEach()

**让数组的每个元素都运行一个函数**

```js
arr.forEach((item, index, array) => {
  // do something
})

// => undefined
```

### map()

**改变数组的每个元素，产生一个新数组**

```js
arr.map((item, index, array) => {
  return { ...item }
  // 返回一个改造过的新元素
})

// => newArr
// 返回结果为一个新的数组副本，不会影响到原来的数组
```

### reduce()

**为每个元素进行计算，每一个元素的计算结果，搬运给下一个元素作为参数进行计算，最终累计结果为一个最终值**

```js
arr.reduce(
  (prev, cur, index, array) => {
    return prev + cur
    // 返回一次计算结果
  },
  [initial]
)

// prev 前项结果 或 初始值
// cur 当前元素
// => 最终值

// 求和运算
arr.reduce((sum, item) => sum + item, 0)

// 反方向
arr.reduceRight(() => {})
```

## 筛选

### find()

**查找数组中第一个符合条件的项，停止迭代并返回该元素**

```js
arr.find((item, index, array) => {
  return truthy / falsy
})
// => item || undefined

arr.findIndex((item, index, array) => {
  return truthy / falsy
})
// => index || -1
```

### filter()

**筛选处数组中符合条件的项，返回一个新数组**

```js
arr.filter((item, index, array) => {
  return truthy / falsy
})
// => newArr || []
```

## 判断

### every()

**是否数组所有元素都满足条件**

```js
arr.every((item, index, array) => {
  return truthy / falsy
  // filter
})

// => true || false
```

### some()

**是否数组中有元素满足条件**

```js
arr.some((item, index, array) => {
  return truthy / falsy
  // filter
})

// => true || false
```

## 排序

### sort()

**排序，修改数组本身，并返回结果**

```js
arr.sort()
// 默认按照词典顺序进行排序

arr.sort((a, b) => {
  return truthy / falsy
  // => truthy, 替换
  // => falsy, 不替换
})

// 比较函数
function compare(a, b) {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

// 从小到大
arr.sort((a, b) => a - b)

// 从大到小
arr.sort((a, b) => b - a)
```

### reverse()

**反序**

```js
arr.reverse()
```

## 应用

### 数组去重

- `new Set`

  ```js
  let set = new Set(arr)
  let result = Array.from(set)

  // Set 值的集合，每个值只出现一次
  ```

- `indexOf/include`

  ```js
  let result = []

  arr.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item)
    }
  })

  arr.forEach((item) => {
    if (!result.include(item)) {
      result.push(item)
    }
  })
  ```

- `filter`

  ```js
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  ```

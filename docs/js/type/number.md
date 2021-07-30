# Number

## 方法

### 转换

```js
parseInt(str, base)
parseFloat(str, base)
// str => num

num.toString(base)
// num => str

// base：进制，默认10
```

### 舍入

```js
num.toFixed(2)
// 四舍五入
// 3.1415 => 3.14

num.toPrecision(2)
// 3.1415 => 3.1
```

## Math

### 舍入

**Math.floor**

```js
Math.floor(num)
// 向下舍入，向下取整
// 3.1 => 3
// -1.1 => -2
```

**Math.ceil**

```js
Math.ceil(num)
// 向上舍入，向上取整
// 3.1 => 4
// -1.1 => -1
```

**Math.round**

```js
Math.round(num)
// 就近取整，四舍五入
// 3.1 => 3
// 3.6 => 4
```

**Math.trunc**

```js
Math.trunc(num)
// 直接取整
// 3.1 => 3
// 3.6 => 3
```

### 随机数

**Math.random**

```js
Math.random()
// => 一个大于等于0小于1的浮点数

// 拓展
function getRandom(min, max) {
  let range = max - min
  let rand = Math.random()
  return rand * range + min
}

// 包含最小最大值
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  let range = max - min + 1
  let rand = Math.random()
  return Math.floor(rand * range) + min
}
```

### 数学运算

```js
Math.abs(x)
// => 绝对值

Math.pow(x, y)
// => x^y

Math.max(x, y, z...)
// => max

Math.min(x, y, z...)
// => min
```

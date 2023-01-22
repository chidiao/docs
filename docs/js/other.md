# 其他

## 递归

函数通过调用自身来解决问题，这就是递归。

简单来说就是，`函数自己调用自己` 。

```js
递归思想
将一个未知问题转换为一个已解决的问题来实现

递归条件
1.子问题必须与原问题'相同'，且更为简单
2.不能无限递归，必须有个'出口'

两个要素
1.递归公式(等价关系式)
2.结束条件
```

```js
// 阶乘
function pow(x, n) {
  if (n == 1) {
    return x
  } else {
    return pow(x, n - 1)
  }
}
```

## 闭包

闭包是指一个函数可以记住其外部变量并可访问这些变量。

外部变量还包括其外部函数的参数

```js
function createCounter() {
  let count = 0

  function counter() {
    count++
    console.log(count)
  }

  return counter
}

let counter = createCounter()
// 每次调用都会创建一个新的词法环境，用来存储变量
// 函数总是可以记住并访问这个词法环境里的变量
```

## ES6

```js
// 扩展运算符
let arr = [...arr1, ...arr2, ...arr3]
let obj = {
  ...res.data
}

// 解构赋值
let { count } = this.data

// 模板字符串
let str = `name: ${obj.name}`

// 箭头函数

// 同名简写
let obj = {
  name,
  age
}

// Promise

// class
```

- **变量**：`let` 、`const`

|         | 作用域                   | 变量提升 | 重复声明 | 特别                   |
| ------- | ------------------------ | -------- | -------- | ---------------------- |
| `var`   | 全局作用域 或 函数作用域 | ✔        | ✔        |                        |
| `let`   | 块级作用域               | ✖        | ✖        |                        |
| `const` | 块级作用域               | ✖        | ✖        | 必须有初始值，不可修改 |

```js
// 变量提升
console.log(a) // undefined
console.log(b) // ReferenceError
var a = 1
let b = 2
```

- **存储**：`localStorage` 、`sessionStorage`

|                  | 生命周期                                | 存储大小 | 网络请求                                 |
| ---------------- | --------------------------------------- | -------- | ---------------------------------------- |
| `cookie`         | 可设置过期时间，默认浏览器关闭后过期    | 4KB 左右 | 每次 HTTP 请求都会携带 cookie 在请求头里 |
| `localStorage`   | 除非手动清除，否则永久保留              | 5MB+     | 仅客户端存储                             |
| `sessionStorage` | 当前标签页有效，关闭标签/浏览器就会清除 | 5MB+     | 仅客户端存储                             |

# Array

## 数组去重

- new Set()

  ```js
  let set = new Set(arr)
  let result = Array.from(set)

  // Set 值的集合，每个值只出现一次
  ```

- 遍历

  ```js
  let result = []

  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  ```

- 筛选

  ```js
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  ```

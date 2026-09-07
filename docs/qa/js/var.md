# 变量：var、let、const

## 作用域（Scope）

`var` - 函数作用域

`var` 声明的变量只在**函数内部**有效，在函数外部无法访问。

`let` 和 `const` - 块级作用域

`let` 和 `const` 声明的变量在**块级作用域**（`{}`）内有效，包括 `if`、`for`、`while` 等语句块。

```js
function testVar() {
  if (true) {
    var x = 10
  }

  console.log(x) // 10（在函数内可访问，因为if不是函数）
}

function testLet() {
  if (true) {
    let a = 10
    const b = 20
    console.log(a) // 10（在块内可访问）
    console.log(b) // 20
  }

  // ❌ 在块外无法访问
  // console.log(a); // ReferenceError: a is not defined
  // console.log(b); // ReferenceError: b is not defined
}
```

## 变量提升（Hoisting）

`var` - 会提升

`var` 声明的变量会被提升到作用域顶部，但**初始化**保持在原位置，值为 `undefined`。

`let` 和 `const` - 会提升但不初始化

`let` 和 `const` 也会被提升，但存在**暂时性死区**（TDZ），在声明前访问会报错。

### 暂时性死区

TDZ（暂时性死区） 是指 `let` 和 `const` 声明的变量，从进入作用域到声明语句执行之间的这段时间区域。在这个区域内访问变量会抛出 ReferenceError。

```js
{
  console.log(a)
  // ❌ ReferenceError: Cannot access 'a' before initialization
  // TDZ 报错（变量存在但未初始化）

  let a = 1
}

{
  console.log(b)
  // ❌ ReferenceError: b is not defined
  // 未声明报错（变量根本不存在）
}
```

TDZ 是整个块级作用域的概念，所有 `let/const` 变量共享一个 TDZ。每次执行到一个变量声明，就把这个变量从 TDZ 中释放。当最后一个变量释放完，TDZ 才算彻底结束。

```js
{
  // ==========================================
  // TDZ：整个块级作用域（从 { 开始）
  // 状态：a(🔒), b(🔒), c(🔒) 全部锁定
  // ==========================================

  // 执行到第一个声明
  let a = 1 // a 释放 ✅
  // 状态：a(✅), b(🔒), c(🔒)
  // ⚠️ TDZ 还在继续，因为 b 和 c 还锁着

  // 执行到第二个声明
  let b = 2 // b 释放 ✅
  // 状态：a(✅), b(✅), c(🔒)
  // ⚠️ TDZ 还在继续，因为 c 还锁着

  // 执行到第三个声明
  let c = 3 // c 释放 ✅
  // 状态：a(✅), b(✅), c(✅)
  // 🎉 TDZ 结束！（最后一个变量释放了）
}
```

## 重复声明（Re-declaration）

在同一个作用域中

`var` - 允许重复声明

`let` 和 `const` - 不允许重复声明

## 初始化赋值

`var` - 可以不初始化

声明时可以不赋值，默认为 `undefined`。

`let` - 可以不初始化

声明时可以不赋值，默认为 `undefined`。

`const` - 必须初始化

声明时必须赋值，且赋值后不能改变。

## 全局作用域的行为

`var` - 成为全局对象的属性

在浏览器中，`var` 声明的全局变量会成为 `window` 对象的属性。

`let` 和 `const` - 不会成为全局对象的属性

`let` 和 `const` 声明的全局变量不会挂载到 `window` 对象上。

## 循环中的差异

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i) // 输出 5 个 5
  }, 100)
}
// 因为 i 是函数作用域，所有回调共享同一个 i

for (let j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j) // 输出 0, 1, 2, 3, 4
  }, 100)
}
// 每次迭代都会创建新的块级作用域，j 的值被保留
```

## 最佳实践建议

1. **优先使用 `const`** - 默认使用 `const`，除非确定变量会重新赋值
2. **需要重新赋值时使用 `let`** - 如计数器、累加器等
3. **避免使用 `var`** - 除非维护旧代码
4. **永远不要使用 `var`** 在 `for` 循环中

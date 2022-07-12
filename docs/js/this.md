# this

`function` ：函数

作为对象属性的函数被称为 `方法`

`this` 的值是在代码运行时计算出来的，它取决于代码上下文

## 默认绑定

函数的独立调用 `this => window`

```js
function test() {
  console.log(this)
}

test() // this => window
```

## 隐式绑定

谁调用就指向谁

```js
let obj = {
  foo() {
    console.log(this)
  }
}

obj.foo() // this => obj
```

## 显式绑定

### call

### apply

### bind

## new 绑定

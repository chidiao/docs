# this

## 默认绑定

函数独立调用时，`this` 指向全局对象（浏览器：`window`，Node.js：`global`）

```js
// 严格模式下，this 指向 undefined

function test() {
  console.log(this)
}

test()
// 浏览器（非严格）：window
// Node.js（非严格）：global
// 严格模式：undefined
```

```js
const obj = {
  name: 'obj',
  method: function () {
    console.log(this) // 指向 obj

    function inner() {
      console.log(this) // 指向全局对象！
    }
    inner()
  }
}

obj.method()
// 输出：obj，然后 window（非严格）
// 原因：inner 是独立调用，不是 obj.inner()
```

## 隐式绑定

作为对象方法调用时，`this` 指向**调用该方法的对象**

```js
const person = {
  name: '张三',
  sayName: function () {
    console.log(this.name)
  }
}

person.sayName() // '张三'
// 调用者是 person，所以 this = person

const group = {
  name: '小组',
  person: person
}

group.person.sayName() // '张三'
// 调用者是 person（最后一个点前面的对象）
```

隐式丢失

```js
const person = {
  name: '李四',
  sayName: function () {
    console.log(this.name)
  }
}

// 情况 1：赋值给变量
const say = person.sayName
say() // undefined（独立调用，this = window）
// 相当于：const say = function() { console.log(this.name) }

// 情况 2：作为回调函数
setTimeout(person.sayName, 1000) // undefined（1秒后输出）
// setTimeout 内部是独立调用

// 情况 3：事件监听
// button.addEventListener('click', person.sayName);
// 点击时 this 指向 button（DOM 元素的特殊行为）
```

## 显示绑定

使用 `call()`、`apply()`、`bind()` 强制指定 `this`

```js
function sayName(gender, age) {
  console.log(this.name + ', ' + gender + ', ' + age)
}

const person = { name: '张三' }

// call()：立即调用，参数逐一传入
sayName.call(person, '男', 18)

// apply()：立即调用，参数以数组传入
sayName.apply(person, ['男', 18])

// bind()：返回新函数，不立即执行
const personSayName = sayName.bind(person)
personSayName()
```

## new 绑定

使用 `new` 调用函数时，`this` 指向新创建的对象

## 箭头函数绑定

箭头函数不绑定 `this`，继承**定义时**外层作用域的 `this`

```js
const obj = {
  name: 'obj',
  normal: function () {
    console.log(this.name) // 'obj'
  },
  arrow: () => {
    console.log(this.name) // undefined
  }
}

obj.normal() // 'obj'
obj.arrow() // undefined
```

```js
const obj = {
  name: 'obj',
  normal: function () {
    setTimeout(function () {
      console.log(this.name) // undefined
    }, 1000)
  },
  arrow: function () {
    setTimeout(() => {
      console.log(this.name) // 'obj'
    }, 1000)
  }
}

obj.normal() // undefined
obj.arrow() // 'obj'
```

## 绑定优先级

```
new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定
```

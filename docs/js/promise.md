# Promise

```js
let p = new Promise((resolve, reject) => {
  // executor
})
```

三种状态：

1. pending

2. fulfilled

3. rejected



## 方法

### then()

两个参数：

1. 是一个函数

2. 还是一个函数

```js
p.then(res => {
  // pending => fulfilled
  console.log('resolve的结果', res)
}, err => {
  // pending => rejected
  console.log('reject的结果', err)
})
```

实例状态发生改变时才会触发 `then()` 里的方法



```js
let t = p.then(res => {
  return 123
})

t.then(res => {
  console.log(res) // pending => fulfilled
})
```

`then()` 的返回值又是一个 `promise` 

`then()` 里通过 return 可以改变新实例的状态，代码出错就是另一种状态了



### catch()

```js
p.catch(err => {
  console.log('reject的结果', err)
  console.log('或者代码出错Error', err)
})
```

`catch()` 可以被 `then()` 的第二个参数截获而自己捕获不到，就近原则

总是推荐使用 `catch()` 进行捕获

`catch()` 可以捕获到 `then()` 的第一个参数里的异常，而 `then()` 的第二个参数捕获不到


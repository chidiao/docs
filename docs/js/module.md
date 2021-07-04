# 模块化

## export

### 具名导出

**单独导出**

```js
// 导出
export let name = 'John'

export let age = 20

export function sayHi() {
  console.log('Hi')
}

// 导入
import { name, age, sayHi } from './user.js'
```



**统一导出**

```js
// 导出
let name = 'John'

let age = 20

function sayHi() {
  console.log('Hi')
}

export { name, age, sayHi }

// 导入
import { name, age, sayHi } from './user.js'
```



### 默认导出

```js
// 导出
export default let site = 'chidiao.xin'

// 导入
import baseUrl from './site.js'
```



### 混合使用

```js
// 导出
export { name, age, sayHi as default }

// 导入
import myFun, { name, age } from './user.js'
```



## import

### 合并

所有导出打包为一个对象

```js
import * as user from './user.js'

user.sayHi()
```



### 别名

```js
import { name as cname } from './user.js'
```



## nodejs❓

```js
// 导出
module.exports = hello

module.exports = {
  hello,
  greet
}

// 导入
const hello = require('./hello')
const { hello, greet } = require('./hello')
```



```js
// 导出
exports.hello = hello

exports.greet = greet
```


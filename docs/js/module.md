# Module

## ES6

### export

```js
// 声明并导出
export let name = 'John'
export let age = 20
export function sayHi() {
  console.log('Hello~')
}

// 声明和导出分开
let name = 'John'
let age = 20
function sayHi() {
  console.log('Hello~')
}

export { name, age, sayHi }

// 更名
export { name as userName }
```

### import

```js
// 明确导入(按需导入)，有利于打包工具进行tree-shaking
import { name, age, sayHi } from 'john.js'

// 通通导入(全部导入)
import * as john from 'john.js'

// 更名
import { name as userName } from 'john.js'
```

### default

每个文件模块只能有一个 `export default`

`export default decreaseAction`

`default` 是一种特殊的系统变量，将 `decreaseAction` 变量赋值给这个特殊的系统变量，并将其导出

因此它后边可以跟变量但不能跟声明，所以跟 `let` `const` 等都会报错

```js
// 可以不命名，因为只有一个
export default {}

// 正确
let name = 'John'
export default name

// 错误
export default let name = 'John'
```

## Node.js

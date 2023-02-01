# React

```js
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<h1>Hello, world!</h1>)
```

## ---bak---

## create-react-app

```bash
yarn create react-app my-app

yarn add @craco/craco
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
}
```

## 其他

```jsx
<Button onClick={() => this.handleClick()}>按钮</Button>

// 这是个函数体，函数(引用)。没有参数。
this.handleClick

// 这是个自执行函数，函数被调用，直接被调用，不需要触发 click 事件。
this.handleClick()

// 这是个函数体，函数(匿名)。可以带参数。
() => this.handleClick()

// onClick 的值应该是一个匿名函数或者函数引用。
```

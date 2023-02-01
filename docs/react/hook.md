# 函数组件

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

let el = <Wlecome name="John" />
```

# Hook

### useState

```jsx
const [count, setCount] = useState(0)
```

### useEffect

```jsx
useEffect(() => {
  console.log('useEffect = componentDidMount || componentDidUpdate')
})

useEffect(() => {
  console.log('只在count变化时触发')
}, [count])
```

会在每次 `渲染之后` 执行，不用再去考虑是 `挂载` 还是 `更新`

`useEffect` 是异步的，React 保证了每次运行 effect 的同时，DOM 都已经更新完毕

### useContext

```jsx

```

### useReducer

```jsx
function reducer(state, action) {
  switch (action) {
    case 'add':
      return count + 1
    case: 'sub':
      return count - 1
    default:
      return count
  }
}

const [state, dispatch] = useReducer(reducer, initialState)

dispatch('add')
dispatch('sub')
```

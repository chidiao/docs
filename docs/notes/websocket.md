# websocket

```js
let ws = new WebSocket('ws://localhost:8080/ws')
```



事件

```js
ws.addEventListener('open', e => {
  console.log(e)
})

ws.addEventListener('message', e => {
  console.log(e)
})

ws.addEventListener('error', e => {
  console.log(e)
})

ws.addEventListener('close', e => {
  console.log(e)
})
```



方法

```js
ws.send('hello world')

ws.close()
```


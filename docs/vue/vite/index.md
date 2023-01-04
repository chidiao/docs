# Vite

[vite](https://cn.vitejs.dev/)

```sh
yarn create vite
```

## 开始

vue@2

```js
const app = new Vue({
  el: '#app',
  router,
  store,
  pinia,
  render: (h) => h(App)
})
```

vue@3

```js
const app = createApp(App)
app.use(router)
app.use(store)
app.use(pinia)
app.mount('#app')
```

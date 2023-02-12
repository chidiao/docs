# 开始

## 构建项目

[Vite 构建项目](../utils/vite#vue)

::: code-group

```bash [vite]
yarn create vite
```

```bash [vuecli]
yarn global add @vue/cli
vue --version

vue create [name]
```

:::

## main.js

::: code-group

```js [vue3]
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(store)
app.mount('#app')
```

```js [vue2]
const app = new Vue({
  el: '#app',
  router,
  pinia,
  store,
  render: (h) => h(App)
})
```

:::

## 组件

- [Naive UI](https://www.naiveui.com/)

- [Ant Design Vue](https://2x.antdv.com/docs/vue/introduce-cn)

- [Balm UI](https://next-material.balmjs.com/)

- [Arco Design](https://arco.design/vue)

## 插件

- [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

::: code-group

```js [vue.config.js]
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(
      new PrerenderSPAPlugin({
        // Required
        staticDir: path.join(__dirname, 'dist'),
        // Required
        routes: ['/home', '/about'],
        renderer: new Renderer({
          renderAfterDocumentEvent: 'prerender'
        })
      })
    )
  }
}
```

```js [main.js]
new Vue({
  mounted() {
    document.dispatchEvent(new Event('prerender'))
  }
})
```

:::

- [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

- [vue-i18n](https://github.com/kazupon/vue-i18n)

- [vue-clipboard2](https://github.com/Inndy/vue-clipboard2)

- [vxe-table](https://github.com/x-extends/vxe-table)

- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)

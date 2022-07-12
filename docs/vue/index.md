# 开始

```bash
# vite
yarn create vite
```

```bash
# vuecli
yarn global add @vue/cli
vue --version

vue create my-app
```

## UI

- [Naive UI](https://www.naiveui.com/)

- [Ant Design Vue](https://2x.antdv.com/docs/vue/introduce-cn)

- [Balm UI](https://next-material.balmjs.com/)

- [Arco Design](https://arco.design/vue)

## 插件

- [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

  ```js
  // vue.config.js
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

  // main.js
  new Vue({
    mounted() {
      document.dispatchEvent(new Event('prerender'))
    }
  })
  ```

- [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

- [vue-i18n](https://github.com/kazupon/vue-i18n)

- [vue-clipboard2](https://github.com/Inndy/vue-clipboard2)

- [vxe-table](https://github.com/x-extends/vxe-table)

- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)

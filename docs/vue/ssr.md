# Vue SSR

## Prerendering

**预渲染**

[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

```bash
npm i prerender-spa-plugin
```

```js
// vue.config.js
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.plugins.push(
      new PrerenderSPAPlugin({
        // Required
        staticDir: path.join(__dirname, 'dist'),
        // Required
        routes: ['/home', '/about'],
        renderer: new Renderer({
          renderAfterDocumentEvent: 'prerender',
        })
      })
    )
  }
};
```

```js
// main.js
new Vue({
  mounted() {
    document.dispatchEvent(new Event('prerender'))
  }
})
```



## SSR

[Vue SSR 指南](https://ssr.vuejs.org/zh/)
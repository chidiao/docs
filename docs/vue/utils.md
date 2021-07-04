# utils

## Antd

```bash
npm i ant-design-vue
```

```js
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd)
```



## VueI18n

[github](https://github.com/kazupon/vue-i18n)

```bash
npm i vue-i18n
```

```js
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: {
      msg: '你好世界'
    },
    en: {
      msg: 'hello world'
    }
  }
})

new Vue({
  i18n,
})
```

```html
<div>{{ $t('msg') }}</div>
```



## Clickoutside

[clickoutside.js](https://cdn.jsdelivr.net/npm/view-design@4.3.2/src/directives/clickoutside.js)

```js
import Clickoutside from ...
Vue.directive('clickoutside', Clickoutside)
```



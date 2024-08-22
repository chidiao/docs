# Nuxt

[nuxt](https://nuxt.com/docs/getting-started/installation)

```sh
npx nuxi@latest init <app>
```

脚手架创建失败可以打开命令行提供的链接手动下载

```sh
https://raw.githubusercontent.com/nuxt/starter/templates/templates/v3.json
```

```json
{
  "name": "v3",
  "defaultDir": "nuxt-app",
  "url": "https://nuxt.com",
  "tar": "https://codeload.github.com/nuxt/starter/tar.gz/refs/heads/v3"
}
```

## Start

```sh
yarn add @nuxt/ui @nuxtjs/i18n nuxt-svgo
```

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n', 'nuxt-svgo'],
  colorMode: {
    preference: 'light'
  },
  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  }
})
```

### ui

[ui](https://ui.nuxt.com/getting-started/installation)

```js
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light'
  }
})
```

### i18n

[i18n](https://i18n.nuxtjs.org/docs/getting-started)

```js
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n']
})
```

### svgo

修改默认导入，否则是按 `iconfont` 处理的，带有默认样式

```js
export default defineNuxtConfig({
  modules: ['nuxt-svgo'],
  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  }
})
```

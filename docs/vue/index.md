# 开始

## Vite

```bash
yarn create vite

yarn add vue-router@4 vuex@4

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
yarn tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Vue CLI

```bash
yarn global add @vue/cli
yarn global upgrade --latest @vue/cli

vue --version
```

```bash
vue create my-app

yarn add vue-router@4 vuex@4

yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
yarn tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
```

## 风格指南

[风格指南](https://v3.cn.vuejs.org/style-guide/)

### 命名

目录名用小写 `/system`

组件名使用大驼峰 `/system/TodoList.vue`

index 就用小写 `/system/index.vue`

## 生态

[Varlet](https://varlet.gitee.io/varlet-ui)





[scui](https://lolicode.gitee.io/scui-doc/)

[cash](https://github.com/fabiospampinato/cash)

[xgplayer](http://v2.h5player.bytedance.com/)

[notiflix](https://www.notiflix.com/)

[any-rule](https://any86.github.io/any-rule/)



[50pro](https://github.com/bradtraversy/50projects50days)

[muiplayer](https://muiplayer.gitee.io/zh/)

[daisyui](https://daisyui.com/)


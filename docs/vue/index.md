# 开始

## vue-cli

### 开始

```bash
npm i @vue/cli -g
npm update @vue/cli -g

vue create my-app
```

## vite

### 开始

```bash
yarn create @vitejs/app my-app

yarn add vue-router@4
yarn add vuex@4
```

### 配置

**tailwindcss**

```bash
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 -D
yarn tailwindcss init -p
```

```js
{
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
```

## 语法规范

### 命名

路由目录用小写 `/system`

组件页面用大驼峰 `/system/User.vue`

index 就用小写 `/system/index.vue`

### 语法

变量名还是不要简写了，维护/阅读体验不好

✅ `v-for="(item, index) in list" :key="index"`

❎ `v-for="(i, k) in list" :key="k"`




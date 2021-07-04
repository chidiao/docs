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


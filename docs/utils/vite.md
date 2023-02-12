# Vite

[https://cn.vitejs.dev](https://cn.vitejs.dev/)

## Vue

::: code-group

```bash [bash]
yarn create vite

yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

```js [tailwind.config.cjs]
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

```css [style.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```json [.prettierrc]
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

:::

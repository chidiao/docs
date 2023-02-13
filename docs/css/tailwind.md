# Tailwind

[https://tailwindcss.com](https://tailwindcss.com/docs/installation)

## Tailwind CLI

::: code-group

```bash [init]
yarn add -D tailwindcss

yarn tailwindcss init
```

```js [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

```css [input.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash [script]
tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

:::

## 组件

[Tailkit](https://www.tailwind-kit.com/)

[Meraki](https://merakiui.com/)

[MyNaui](https://mynaui.com/)

[Flowbite](https://flowbite.com/)

[DaisyUI](https://daisyui.com/)

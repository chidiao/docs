# Tailwind

[https://tailwindcss.com](https://tailwindcss.com/docs/installation)

## Tailwind CLI

1. init

   ```bash
   yarn add -D tailwindcss

   yarn tailwindcss init
   ```

2. tailwind.config.js

   ```js
   module.exports = {
     content: ['./src/**/*.{html,js}'],
     theme: {
       extend: {}
     },
     plugins: []
   }
   ```

3. src/input.css

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. script

   ```bash
   tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

## Components

[Tailkit](https://www.tailwind-kit.com/)

[Meraki](https://merakiui.com/)

[MyNaui](https://mynaui.com/)

[Flowbite](https://flowbite.com/)

## Plugins

[DaisyUI](https://daisyui.com/)

# Tailwind CSS

[docs](https://tailwindcss.com/docs/installation)

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
   yarn tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

## Components

[Tail-kit](https://www.tailwind-kit.com/components)

[Meraki UI](https://merakiui.com/#main)

[Tails](https://devdojo.com/tails/app)

[kutty](https://kutty.netlify.app/components)

[Flowbite](https://flowbite.com/)

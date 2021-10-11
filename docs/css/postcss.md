# PostCSS

## PostCSS

```bash
yarn add postcss postcss-cli -D
```

**postcss.config.js**

```js
module.exports = {
  plugins: [require('autoprefixer')]
}
```

## PostCSS CLI

```bash
yarn add postcss postcss-cli -D
```

```bash
postcss input.css -o output.css -w
postcss src/css -d dist/css -w
```

## Rem

```bash
yarn add postcss postcss-pxtorem -D
```

```js
// postcss.config.js
module.exports = {
  plugins: 
}
```


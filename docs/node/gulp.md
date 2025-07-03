# Gulp

## 教程

### 安装

```sh
yarn add gulp -D
```

### 配置

创建配置文件 `gulpfile.js`

创建任务

```js
// 必须调用回调cb()来告知并结束任务
export const test = (cb) => {
  cb()
}

// async/await/promise 可以监听到结束
// return stream 可以监听到结束
```

调用任务

```sh
yarn gulp test
```

## 任务

### CSS

处理 `less`

::: code-group

```js [gulpfile.mjs]
import { src, dest, watch } from 'gulp'
import less from 'gulp-less'
import postcss from 'gulp-postcss'

export const handleLess = () => {
  return src('src/style/style.less').pipe(less()).pipe(postcss()).pipe(dest('dist/css'))
}

export const watchLess = () => {
  watch('src/style/**/*.less', handleLess)
}
```

```js [postcss.config.mjs]
export default {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    cssnano: {}
  }
}
```

```less [style/style.less]
@import 'a.less';
@import 'b.less';
@import 'c.less';
```

:::

使用 `postcss` ，配置 `postcss.config.mjs`

```js
import { src, dest, watch } from 'gulp'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// 显式传入插件
const plugins = [autoprefixer(), cssnano()]
export const handleStyle = () => {
  return src('src/style/**/*.css').pipe(postcss(plugins)).pipe(dest('dist/css'))
}

// 依赖配置文件
export const handleStyle = () => {
  return src('src/style/**/*.css').pipe(postcss()).pipe(dest('dist/css'))
}

export const watchStyle = () => {
  watch('src/style/**/*.css', handleStyle)
}
```

热更新

```js
import browserSync from 'browser-sync'
const bs = browserSync.create()

export const dev = () => {
  return src('src/style/**/*.css').pipe(dest('dist/css')).pipe(bs.stream())
}
```

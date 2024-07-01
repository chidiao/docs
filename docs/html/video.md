# Video

## video

基础用法，以及降级处理

```html
<video src="video.mp4">
  <div>不支持 video 的浏览器中，会显示标签里的内容</div>
</video>
```

多个视频源，按顺序读取，直到第一个支持的格式，类似于字体

需要提供 `url` 和 `type` 视频类型

```html
<video>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

属性

`loop` ：循环播放

`autoplay` ：自动播放

`muted` ：静音

`controls` ：显示控制栏

`poster` ：预览图

`playsinline` ：行内播放，而不是全屏

### 自动播放

如果不静音，自动播放会受限，部分浏览器不允许

```html
<video autoplay muted></video>
```

## xgplayer

[xgplayer](https://github.com/bytedance/xgplayer)

```sh
yarn add xgplayer
```

```html
<div ref="xg"></div>
```

```js
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'

let player = new Player({
  el: xg.value,
  url: 'xx.mp4',
  fluid: true,
  playsinline: true
})
```

常用配置

```js
const config = {
  fluid: true, // 流式布局
  playsinline: true // 行内播放
}
```

自定义 icons

播放按钮分中心和控制栏两处，而且需要注意导入svg的格式

```js
import playBtn from '@/assets/svg/play.svg?raw'

const config = {
  icons: {
    startPlay: playBtn
  }
}
```

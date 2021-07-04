# canvas

[教程](https://www.runoob.com/w3cnote/html5-canvas-intro.html)



```html
<canvas id="cs" width="300" height="300"></canvas>
```

可以使用 `css` 属性来设置宽高，但是如宽高属性和初始比例不一致，他会出现扭曲

建议永远不要使用 `css` 属性来设置 `<canvas>` 的宽高。



## 开始

```js
let canvas = document.getElementById('cs')
let ctx = canvas.getContext('2d')
```



## 绘制

### 矩形

```js
ctx.rect(x, y, width, height)
ctx.fill()
ctx.stroke()

ctx.fillRect(x, y, width, height)

ctx.strokeRect(x, y, width, height)

ctx.clearRect(x, y, width, height)
```



### 样式

```js
ctx.fillStyle = 'red'
ctx.strokeStyle = 'red'
```



### 绘制

```js
ctx.fill()
ctx.stroke()
```



### 图像

```js
let img = document.getElementById('img')

let img = new Image()
img.src = 'xxx.png'
img.onload = () => {
  ctx.drawImage(img, 0, 0)
}

ctx.drawImage(img, x, y, width, height)
ctx.drwaImage(img, sx, sy, swidth, sheight, x, y, width, height)
```


# Transition

## CSS

动画过程

```html
<Transition>
  <!-- 元素插入之前/隐藏 -->
  <div class="xx-enter-from xx-enter-active"><div>

  <!-- 元素插入后，动画过渡期间 -->
  <div class="xx-enter-active xx-enter-to"><div>

  <!-- 动画过渡完毕 -->
  <div class=""><div>

  <!-- 动画过渡前 -->
  <div class="xx-leave-from xx-leave-active"><div>

  <!-- 动画过渡期间 -->
  <div class="xx-leave-active xx-leave-to"><div>

  <!-- 动画过渡完毕，元素被移除/隐藏 -->
  <div class=""><div>
</Transition>
```

```scss
// 动画前添加，动画后移除，应用于整个动画周期
// 用来控制 transition：时间，延迟，曲线等
.xx-enter-active,
.xx-leave-active {
  transition: all 0.3s;
}

// 只用来控制状态
.xx-enter-from,
.xx-leave-to {
  opacity: 0;
}

.xx-enter-to,
.xx-leave-from {
  opacity: 1;
}
```

### Transition

## css 动画

[animista](https://animista.net/)

[animate.css](https://animate.style/)

### transition

```html
<Transition name="t"></Transition>
```

```scss
.t-enter-active,
.t-leave-active {
  transition: all 0.5s;
}

.t-enter-from,
.t-leave-to {
  opacity: 0;
}
```

### animation

[animista](https://animista.net/) 这里可以定制你的动画

```html
<Transition name="a"></Transition>
```

```scss
.a-enter-active {
  animation: fade-in 0.5s;
}

.a-leave-active {
  animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

### class

[animate.css](https://animate.style/) 第三方动画库

需要提供一进一出两个 `class` ，当然也可以像上边一样 `reverse` 。

```html
<Transition enter-active-class="slide-in" leave-active-class="slide-out"></Transition>

<Transition
  enter-active-class="animate__animated animate__tada"
  leave-active-class="animate__animated animate__bounceOutRight"
></Transition>
```

## js 动画

[gsap](https://gsap.com/)

[anime.js](https://animejs.com/)

[motion](https://motion.dev/)

### 钩子函数

通过钩子函数来调用动画

可以选择性的关闭 `css` (推荐)

关闭 `css` 后，回调函数 `enter` 和 `leave` 的回调函数 `done` 就是必须的

```html
<Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" :css="false"></Transition>
```

```js
import gsap from 'gsap'

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}
```

## 其他参数

### 出现时过渡

初次渲染时

```html
<Transition appear></Transition>
```

### 元素间过渡

条件渲染时，元素互斥

```html
<Transition>
  <div v-if="active == 1"></div>
  <div v-else-if="active == 2"></div>
  <div v-else></div>
</Transition>
```

动态组件，元素互斥

```html
<Transition name="fade" mode="out-in">
  <component :is="activeComponent"></component>
</Transition>
```

### 过渡模式

两互斥元素，一个离场，一个入场的过渡效果

离场动画结束后再执行入场动画，或者相反

```html
<Transition mode="out-in"></Transition>
```

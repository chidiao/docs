# GSAP

## ScrollTrigger



## --bak--

## Main

### from/to

```js
gsap.from(targets, options)

const options = {
  // 时间
  delay: 0,
  duration: 0.5,

  // 缓动
  ease: 'none',

  // 重复
  repeat: 0,
  repeatDelay: 0,

  // 间隔
  stagger: 0.1,

  // 悠悠
  yoyo: false,
  yoyoEase: false,

  // 帧动画
  keyframes: [opt, opt, ...],

  // 生命周期
  onStart: () => {},
  onComplete: () => {},
  onRepeat: () => {},
}
```

### timeline

```js
let tl = gsap.timeline(options)

tl.from(targets, options, time)

tl.add(tl1).add(tl2)...

// time
// 3，时间线开始3s后
// +=1，时间线结束(上一个动画)后1s
// -=1，时间线结束(上一个动画)前1s
```

## Utils

### toArray()

```js
let targets = gsap.utils.toArray('.class')
```

[article](https://css-tricks.com/tips-for-writing-animation-code-efficiently/)

```js
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.box').forEach((box) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      toggleActions: 'restart none none none',
      start: 'top 95%',
      markers: true
    }
  })

  tl.to(box, {
    duration: 3,
    opacity: 0.1
  })
})
```

## Plugins

### ScrollTrigger

[api](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

```js
gsap.registerPlugin(ScrollTrigger)
```

```js
const options = {
  scrollTrigger: targets,

  scrollTrigger: {
    // 触发器
    trigger: targets,
    endTrigger: targets,

    // 标记
    markers: true,

    // 触发位置
    start: 'top bottom',
    end: 'bottom top',

    // 切换动作
    toggleActions: 'play none none none',

    // 切换class
    toggleClass: 'active',
    toggleClass: {
      targets: '.target',
      className: 'active'
    },

    // 进度跟随滚动条
    scrub: true,
    scrub: 3, // 开始结束的过度时间

    // 钉住
    pin: true,
    pin: '.other',
    pinSpacing: false
  }
}

// 触发位置
// ...

// 触发动作
// 时机：onEnter onLeave onEnterBack onLeaveBack
// 动作：play, pause, resume, reset, restart, complete, reverse, none

// create
ScrollTrigger.create(options)
```

# ScrollTrigger

## 开始

```bash
npm i gsap
```

```js
import { gsap, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

gsap.to('.box', {
  scrollTrigger: {
    trigger: '.box'
  },
  x: 200,
  duration: 2
})
```

## 参数

### trigger

触发器对象，参数为 选择器 String 或 对应的 Element

### toggleActions

四个生命周期其对应的状态

**onEnter**，**onLeave**，**onEnterBack**，**onLeaveBack**

**play**，**pause**，**resume**，**reset**，**restart**，**complete**，**reverse**，**none**

```js
export default = {
  toggleActions: 'play none none none'
}
```

### toggleClass

只要元素进入区间内就会加上指定类名，离开区间就会移除类名

```js
export default = {
  toggleClass: 'active',
  toggleClass: {
    targets: '.target',
    className: 'active'
  }
}
```

### invalidateOnRefresh

刷新或页面尺寸变动后重新计算

```js
export default = {
  invalidateOnRefresh: true
}
```

## 生命周期

```js
export default = {
  onEnter: () => {},
  onEnterBack: () => {},
  onLeave: () => {},
  onLeaveBack: () => {}
}
```

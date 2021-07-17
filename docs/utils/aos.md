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

触发器对象，参数为 选择器String 或 对应的 Element



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


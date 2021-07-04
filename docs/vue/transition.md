# 过渡动画

## transition

**六个状态**

- `v-enter-from`
- `v-enter-active`
- `v-enter-to`
- `v-leave-from`
- `v-leave-active`
- `v-leave-to`

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的过渡时间和缓动曲

### 默认类名

```html
<transition name="fade">
  <p v-if="show">hello</p>
</transition>
```

```scss
.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.5s;
}

// .fade-enter-to, .fade-leave-from { opacity: 1; }
```



### 自定义类名

- `enter-from-class`
- `enter-active-class`
- `enter-to-class`
- `leave-from-class`
- `leave-active-class`
- `leave-to-class`

[animate.css](https://animate.style/)

```html
<transition
  enter-active-class="animate__animated animate__tada"
  leave-active-class="animate__animated animate__bounceOutRight"
>
  <p v-if="show">hello</p>
</transition>
```



### JavaScript钩子

[钩子](https://v3.cn.vuejs.org/guide/transitions-enterleave.html#javascript-%E9%92%A9%E5%AD%90)

```html
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
  :css="false"
>
  <!-- ... -->
</transition>
```



当只用 JavaScript 过渡的时候，在 enter 和 leave 钩中必须使用 done 进行回调

添加 `:css="false"`，也会让 Vue 会跳过 CSS 的检测，提高性能

```js
let methods = {
  enter(el, done) {
    gsap.to(el, {
      duration: 1,
      scaleX: 1.5,
      scaleY: 0.7,
      opacity: 1,
      x: 150,
      ease: 'elastic.inOut(2.5, 1)',
      onComplete: done
    })
  },
}
```



### 初始渲染

```html
<transition appear>
  <!-- ... -->
</transition>
```



### 过渡模式

多元素交替过渡

- `in-out`: 新元素先进行过渡，完成之后当前元素过渡离开。
- `out-in`: 当前元素先进行过渡，完成之后新元素过渡进入。

```html
<transition mode="out-in">
  <p v-if="show">on</p>
  <p v-else>off</p>
</transition>
```



## transition-group

```html
<transition-group name="list" tag="p">
  <span v-for="item in items" :key="item" class="list-item">
    {{ item }}
  </span>
</transition-group>
```



### 排序过渡

- `v-move`

```scss
.list-move {
  transition: all 0.3s;
}
```



## 状态过渡
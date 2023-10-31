# TransitionGroup

和 `Transition` 用法基本一致，可以被渲染为一个容器，并为子元素提供动画

```html
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">{{ item }}</li>
</TransitionGroup>
```

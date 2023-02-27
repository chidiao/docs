# Swiper

[demos](https://swiperjs.com/demos)

```sh
yarn add swiper
```



## --bak--

[Swiper](https://swiperjs.com/)

[vue-awesome-swiper](https://github.surmon.me/vue-awesome-swiper/)



## swiper@5.x

[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)



### 安装

```bash
npm i swiper@5.x vue-awesome-swiper
```

**全局注册**

```js
// main.js
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
```

**局部注册**

```js
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
```



### 组件

```html
<swiper ref="mySwiper" :options="swiperOptions">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
```



### 指令

```html
<div v-swiper:mySwiper="swiperOption">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <div class="swiper-pagination"></div>
</div>
```



## 通用

### 结构

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <!-- 如果需要分页器 -->
  <div class="swiper-pagination"></div>

  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- 如果需要滚动条 -->
  <div class="swiper-scrollbar"></div>
</div>
```



### 配置

```js
const swiperOption = {
  // 方向
  direction: 'horizontal | vertical',

  // 高度
  // 高度为slide高度，auto可使容器自适应
  height : window.innerHeight,
  autoHeight: true,

  // 页码
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletElement: 'span',
    bulletClass: "bullet",
    bulletActiveClass: "bullet-active",
  },
}
```



### 事件

```js
const swiperOption = {
  on: {
    slideChangeTransitionStart: function() {
      // 切换开始
    },
    slideChangeTransitionEnd: function() {
      // 切换结束
    },
    eventName: function() {
      console.log(this.activeIndex)
      // this 指向 swiper实例
    },
    eventName: () => {
      console.log(this.swiperName.activeIndex)
      // this 指向 vue 实例
    }
  }
}
```



### 方法

```js
// 切换
swiperName.slideTo(index, speed)
```



# Swiper

## vue-awesome-swiper

[vue-awesome-swiper](https://github.surmon.me/vue-awesome-swiper/)

### 安装

```bash
npm install swiper@5.x vue-awesome-swiper
```

```js
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
```



### 使用

```html
<swiper class="swiper" ref="mySwiper" :options="options">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>

  <div class="swiper-pagination" slot="pagination"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
</swiper>
```



```js
export default {
  data() {
    return {
      options: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
```


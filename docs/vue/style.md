# Style

###

## class

```html
<div class="active text-danger"></div>
```

**对象语法**

```html
<div :class="classObject"></div>

<div :class="{ active: isActive, 'text-danger': hasError }"></div>
```

```js
let classObject = {
  active: true,
  'text-danger': false
}

let isActive = true
let hasError = false

// 对象语法
// 键是类名，值是变量
```

**数组语法**

```html
<div :class="classArray"></div>
```

```js
let classArray = [activeClass, errorClass, isActive ? 'active' : '', classObject]

// 数组语法
// 数组元素：类名的变量，返回类名的表达式，对象语法
```

## style

**对象语法**

```html
<div :style="styleObject"></div>

<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
let styleObject = {
  color: 'red',
  fontSize: '13px'
}

// 对象语法
```

**数组对象**

```html
<div :style="styleArray"></div>

<div :style="[baseStyles, overridingStyles]"></div>
```

```js
let styleArray = [styleObject]

// 数组对象
// 数组元素：对象语法值
```

## transition

### 单元素过渡

单个节点，多个节点切换(只激活一个)

内置组件 `<transition>`

```html
<transition name="[name]" mode="[mode]" appear>
  <!-- el -->
</transition>
```

**过渡 class**：

- `.[name]-enter-from`

- `.[name]-enter-active`

- `.[name]-enter-to`

- `.[name]-leave-from`

- `.[name]-leave-active`

- `.[name]-leave-to`

**过渡 mode**：

- `in-out` 先过渡新元素，再过渡旧元素 ❌

- `out-in` 先过渡旧元素，再过渡新元素 ✔️

**自定义 class：**

- `enter-from-class`

- `enter-active-class`

- `enter-to-class`

- `leave-from-class`

- `leave-active-class`

- `leave-to-class`

```html
<transition
  name="[name]"
  enter-active-class="animate__animated animate__tada"
  leave-active-class="animate__animated animate__bounceOutRight"
>
  <!-- el -->
</transition>
```

**过渡时间：**

```html
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

**钩子函数：**

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
  <!-- el -->
</transition>
```

```js
let methods = {
  beforeEnter(el) {
    // ...
  },
  // 配合css的时候done可选
  // 只是用js的时候必须使用done进行回调
  enter(el, done) {
    done()
  },
  leave(el, done) {
    done()
  }
}
```

### 列表过渡

内置组件 `<transition-group>`

```html
<transition-group name="[name]" tag="p">
  <span v-for="item in items" :key="item" class="list-item"> {{ item }} </span>
</transition-group>
```

```css
.list-item {
  transition: all 0.8s ease;
}

.[name]-enter-from,
.[name]-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.[name]-move {
  transition: transform 0.8s ease;
}
```

### 状态过渡

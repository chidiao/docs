# 修饰符

## 事件修饰符

```html
<button @click.stop="handle">阻止冒泡</button>

<button @click.prevent="handle">阻止默认行为</button>

<button @click.self="handle">event.target是自己时才触发</button>

<button @click.once="handle">只触发一次</button>

<div @click.capture="handle">捕获</div>

<div @scroll.passive="onScroll">scroll lazy</div>

<btn @click.native>自定义组件的原生事件</btn>
```

## 按键修饰符

```html
<input @keyup.enter="keyEnter" />
```

## 鼠标修饰符

```html
<input @keyup.left="mouseLeft" />
```

## 表单修饰符

```html
<input type="text" v-model.lazy="value" />
<p>光标离开时更新，change事件触发更新，而不是input</p>

<input type="text" v-model.trim="value" />
<p>过滤首空格字符字符，不过滤中间空格字符</p>

<input type="number" v-model.number="age" />
<p>转换为数值类型，若不能则返回原值</p>
```

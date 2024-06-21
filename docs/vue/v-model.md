# v-model

### 新的语法糖

```html
<MyComp v-model="model" v-model:title="title" />
```

```js
// 默认
const model = defineModel()

// 命名或多个
const title = defineModel('title')
```

### 旧版本实现

```js
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
```

### vue2 的写法

默认且唯一，有且只能有一个 v-model

::: code-group

```html [App]
<MyComp v-model="model" />
```

```js [Comp]
export default {
  props: ['value'],
  emits: ['input']
}
```

:::

vue2 的另类实现

::: code-group

```html [App]
<MyComp :name.sync="name" />
```

```js [Comp]
export default {
  props: ['name'],
  emits: ['update:name'],
  methods: {
    changeParent() {
      this.$emit('update:name', newName)
    }
  }
}
```

:::

# 组合API

## 响应式

```js
let count = ref(0)

let state = reactive({
  count: 0
})

// 将响应式对象转换为普通对象
toRefs(state)
```



## 计算监听

### computed

```js
// 可读
let count = ref(1)
let double = computed(() => count.value * 2)

// 可读可写
let count = ref(1)
let double = computed({
  get: () => count.value * 2,
  set: val => {
    count.value = val / 2
  }
})
```



### watch

```js
// 监听 reactive：数据源为 getter 函数
let state = reactive({ count: 0 })
watch(() => state.count, (newVal, oldVal) => {
  console.log(newVal)
})

// 监听 ref：直接监听
let count = ref(0)
watch(count, (newVal, oldVal) => {
  console.log(newVal)
})

// 监听多个数据源
watch([foo, bar], (newVal, oldVal) => {
  console.log(newVal[0])
})

watch([foo, bar], ([foo, bar], [oldFoo, oldBar]) => {
  console.log(foo)
})
```



## setup

```js
// props 是响应式的无法直接解构
export default {
  setup(props, context) {
    let { title } = toRefs(props)
  }
}

// context 可以直接解构
export default {
  setup(props, { attrs, slots, emit }) {
    console.log(emit)
  }
}

// 执行 setup 时，组件实例尚未被创建。因此，只能访问这4个属性
```



### 提供注入

```js
// 提供
export default {
  setup() {
    // 保持响应
    let user = ref('john')
    let geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
    
    provide('user', user)
    provide('geolocation', geolocation)
    
    // 提供更新方法
    function update(name) {
      user.value = name
    }
    provide('update', update)
  }
}

// 注入
export default {
  setup() {
    let user = inject('user', 'nobody')
    let geolocation = inject('geolocation')
    let update = inject('update')
  }
}
```



如果注入方需要改变提供方提供的数据，则修改数据的方法在提供方内定义，并将该方法一并提供给注入方。
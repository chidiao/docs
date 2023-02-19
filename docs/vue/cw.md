# computed 和 watch

## computed

计算属性

模板中插入表达式方便但可读性差，因此使用计算属性来描述依赖响应式状态的复杂逻辑。

- 计算属性是基于其响应式依赖所产生的派生值。依赖发生变化时，根据表达式计算出结果。
- 计算属性基于其响应式依赖被缓存，只有依赖发生变化时，才重新进行计算。
- 计算属性的返回值应该被视为只读的，不应该被修改，setter 应该是更新其依赖从而触发更新。
- 计算 属性 getter 应只做计算而没有任何其他的副作用。

### getter

::: code-group

```js [setup]
import { computed } from 'vue'

let fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})
```

```js [option]
export default {
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
```

:::

### setter

::: code-group

```js [setup]
import { computed } from 'vue'

let fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(val) {
    ;[firstName.value, lastName.value] = val.spilt(' ')
  }
})
```

```js [option]
export default {
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(val) {
        ;[this.firstName, this.lastName] = val.spilt(' ')
      }
    }
  }
}
```

:::

## watch

侦听器

执行副作用

::: code-group

```js [setup]
import { ref, watch } from 'vue'

let question = ref('')
watch(question, (newVal, oldVal) => {
  getAnswer()
})
```

```js [option]
export default {
  data() {
    return {
      question: ''
    }
  },
  watch: {
    question(newVal, oldVal) {
      this.getAnswer()
    }
  }
}
```

:::

深层监听

::: code-group

```js [setup]
watch(
  () => user,
  (val) => {
    getInfo()
  },
  { deep: true }
)
```

```js [option]
export default {
  watch: {
    user: {
      handler(val) {
        this.getInfo()
      },
      deep: true
    }
  }
}
```

:::

即时监听

::: code-group

```js [setup]
watch(
  question,
  (val) => {
    getAnswer()
  },
  { immediate: true }
)
```

```js [option]
export default {
  watch: {
    question: {
      handler(val) {
        this.getInfo()
      },
      immediate: true
    }
  }
}
```

:::

回调时机

回调默认是在 DOM 更新前调用的，也可以设置为 DOM 更新后调用。

::: code-group

```js [setup]
watch(user, callback, {
  flush: 'post'
})
```

```js [option]
export default {
  watch: {
    user: {
      handler() {},
      flush: 'post'
    }
  }
}
```

:::

## watchEffect

watch 需要指定侦听的依赖

watchEffect 会自动收集跟踪回调的依赖

```js
// 手动
watch(
  id,
  () => {
    getList(id.value).then((res) => {
      list.vlue = res.data.list
    })
  },
  { immediate: true }
)

// 即时且自动
watchEffect(() => {
  getList(id.value).then((res) => {
    list.vlue = res.data.list
  })
})
```

## 总结

计算属性：复杂表达式

侦听器：addEventListener

副作用：？

计算属性：不要在 getter 中做异步请求或者更新 DOM。

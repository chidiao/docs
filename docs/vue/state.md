# 响应式状态

## Computed

模板中可以使用表达式，这很方便，但是当处理逻辑过于复杂，直接在模板使用表达式就不方便阅读和维护了，因此需要将它们抽离出来。

计算属性指数据(`响应式依赖`)通过计算函数(`表达式`)计算得到的数据

计算属性值会基于其响应式依赖被缓存，只有依赖更新才会重新计算

### getter

```vue
<script>
export default {
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<script setup>
import { computed } from 'vue'
const fullName = computed(() => {
  return firstName + ' ' + lastName
})
</script>
```

### setter

```vue
<script>
export default {
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(val) {
        ;[this.firstName, this.lastName] = val.split(' ')
      }
    }
  }
}
</script>

<script setup>
import { computed } from 'vue'
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(val) {
    ;[firstName.value, lastName.value] = val.split(' ')
  }
})
</script>
```

## Watch

计算属性是衍生值/派生值，应只做计算，而不应该有任何副作用(异步请求或更改 DOM)

我们可以使用 `监听器` 在状态变化时执行一些副作用

```vue
<script>
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
</script>

<script setup>
import { ref, watch } from 'vue'
const question = ref('')
watch(question, (newVal, oldVal) => {
  getAnswer()
})
</script>
```

### deep

深层监听器

### immediate

立即执行

`watch` 仅当数据源变化时，才会执行回调

`immediate: true` 让创建监听器的时候直接执行一次回调

```vue
<script>
export defautl {
  watch: {
    url: {
      handler(val) {
        fetchData()
      },
      immediate: true
    }
  }
}
</script>

<script setup>
// watch，手动绑定监听对象
fetchData()
watch(url, fetchData)

// watchEffect，立即执行一次，并自动追踪 url.vlaue 作为依赖
watchEffect(async () => {
  const res = await fetch(url.value)
  data.value = await res.json()
})
</script>
```

# Vue

## computed 和 watch

**computed**

计算属性，从一个或多个数据派生新数据。

必须有返回值，模板中可直接使用。

有缓存，依赖不变时直接返回缓存值。

必须是同步函数且有返回值。

**watch**

侦听器，监听特定数据变化并执行副作用。

无返回值，执行回调函数。

无缓存，每次变化都执行。

可以执行异步操作，不需要返回值。

**缓存**

计算属性是访问的时候执行计算，拿到结果，缓存结果。

依赖数据更新时，清除掉缓存标记，不重新计算。访问时有缓存就直接读取，没有缓存就执行计算。

计算属性的缓存是惰性的：依赖变化时只清除缓存标记，不重新计算；真正访问时才判断是否需要执行计算。这样可以避免依赖频繁变化时的无效计算

## watch 和 watchEffect

核心区别是依赖收集方式

两者都支持 flush 和 onCleanup

### watch

需要手动指定要监听的数据，默认懒执行

能拿到新值和旧值，适合需要对比的场景

```js
watch(source, callback, { immediate: false, deep: false })

watch(name, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  fullName.value = newFirst + newLast
})
```

### watchEffect

自动收集回调中用到的响应式数据，立即执行一次

不提供旧值，但代码更简洁

```js
watchEffect(() => {
  fullName.value = firstName.value + lastName.value
})
```

```js
const stop = watchEffect(() => {
  console.log(count.value)
})

// 停止监听
stop()
```

### flush

Vue 的 DOM 更新是异步的。

当你修改响应式数据时，Vue **不会立即更新 DOM**，而是将更新任务推入一个队列，在**下一个事件循环**统一执行。这是性能优化的关键。

```js
watchEffect(
  () => {
    // 数据更新，dom尚未更新
  },
  { flush: 'pre' }
)

// flush: 'pre'（默认）
// count.value = 1  // 不输出
// count.value = 2  // 不输出
// count.value = 3  // 最后只输出一次 3
```

```js
watchEffect(
  () => {
    // 数据更新，dom更新后
  },
  { flush: 'post' }
)

// 效果和 nextTick 一样

// 场景：
// modal show，获取dom尺寸，位置等
// msg list，滚动到dom底部
```

```js
watchEffect(
  () => {
    console.log(count.value)
  },
  { flush: 'sync' }
)

// flush: 'sync' 会失去批处理和性能优化的优势，一般不建议使用
// count.value = 1 // 立即输出 1
// count.value = 2 // 立即输出 2
// count.value = 3 // 立即输出 3
```

### onCleanup

清理副作用

```js
watchEffect(async (onCleanup) => {
  let isActive = true

  // 注册，下一次执行前，调用该回调
  onCleanup(() => {
    isActive = false
  })

  const data = await fetch(`/api/search?q=${keyword.value}`)

  if (isActive) {
    searchResult.value = data
  }
})

// 每次执行，都是一个闭包，isActive 独立
// 每次执行，onCleanup 不会执行，只是注册
// 这次尚未执行完毕，下一次即将执行前，注册的回调会被执行，清理副作用，防止前边的结果覆盖后边的结果
```

## key的作用

标识节点唯一性，能唯一识别每个节点。

# 计算属性

计算属性是基于它们的反应依赖关系缓存的。计算属性只在相关响应式依赖发生改变时它们才会重新求值。

```js
export default = {
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
```



计算属性默认只有 getter，不过在需要时你也可以提供一个 setter

```js
export default = {
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
```


## 响应式原理

### Vue2

递归遍历 data，通过 Object.defineProperty 为每个属性添加 getter/setter

数组通过拦截 7 个变异方法实现（push/pop/shift/unshift/splice/sort/reverse）

缺点：

无法检测属性的添加和删除，需要 $set/$delete

深层次对象需要递归性能较差

### Vue3

Proxy 代理整个对象，可以监听到属性的增加和删除等等

性能好

不兼容ie

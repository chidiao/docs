# 生命周期

## 组件

| 阶段          | 时机                 | 详细                                                                   | 选项钩子        | 组合钩子          |
| ------------- | -------------------- | ---------------------------------------------------------------------- | --------------- | ----------------- |
| setup         | 最先被调用           |                                                                        | 无              | setup()           |
| beforeCreate  | 初始化完成后         | 创建实例，解析 props                                                   | beforeCreate()  | 无                |
| created       | 处理完所有状态信息后 | 处理状态：data、computed、methods、watch                               | created()       | 无                |
| beforeMount   | 挂载之前             | 还未创建 DOM 节点                                                      | beforeMount()   | onBeforeMount()   |
| mounted       | 挂载之后             | DOM 已被创建并插入                                                     | mounted()       | onMounted()       |
| beforeUpdate  | 更新之前             | 数据更新，而 DOM 尚未更新                                              | beforeUpdate()  | onBeforeUpdate()  |
| updated       | 更新之后             | DOM 更新完成                                                           | updated()       | onUpdated()       |
| beforeUnmount | 卸载之前             | 实例正常运行，保有所有功能                                             | beforeUnmount() | onBeforeUnmount() |
| unmounted     | 卸载之后             | 停止工作，可清理一些副作用，计时器、DOM 事件监听器 或 与服务器的连接等 | unmounted()     | onUnmounted()     |

## 特殊

| 阶段          | 时机     | 详细                       | 选项钩子        | 组合钩子          |
| ------------- | -------- | -------------------------- | --------------- | ----------------- |
| activated     | 激活     | `<KeepAlive>` 中被激活     | activated()     | onActivated()     |
| deactivated   | 未激活   | `<KeepAlive>` 中未被激活   | deactivated()   | onDeactivated()   |
| errorCaptured | 捕获错误 | 捕获了后代组件传递的错误时 | errorCaptured() | onErrorCaptured() |

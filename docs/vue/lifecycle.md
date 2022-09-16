# 生命周期

| 钩子            | 周期      | 时机                               | 更多信息                                                     |
| --------------- | --------- | ---------------------------------- | ------------------------------------------------------------ |
| beforeCreate()  | 创建      | 实例初始化完成后立即调用           | 实例初始化完成，`props` 解析之后                             |
| created()       | 创建      | 实例处理完所有状态相关的选项后调用 | `data`、`computed`、`methods`、`watch`                       |
| beforeMount()   | 挂载      | 组件被挂载之前                     | 还没创建 DOM 节点，即将首次执行 DOM 渲染                     |
| mounted()       | 挂载      | 组件被挂载之后                     | DOM 树已经创建并插入父容器中                                 |
| beforeUpdate()  | 更新      | 响应式状态变更，而更新 DOM 之前    |                                                              |
| updated()       | 更新      | 响应式状态变更，而更新 DOM 之后    |                                                              |
| beforeUnmount() | 卸载      | 组件被卸载之前                     | beforeDestroy()，此时，实例依然保有全部功能                  |
| unmounted()     | 卸载      | 组件被卸载之后                     | destroyed()，此时，可清理一些副作用，计时器、DOM 事件监听器 或 与服务器的连接等 |
| activated()     | keepAlive | 活动的组件(显示状态)               | 仅 keepAlive 中有的特殊钩子                                  |
| deactivated()   | keepAlive | 不活动的组件(移除状态)             | 仅 keepAlive 中有的特殊钩子                                  |


# 组件

## 内置组件

### component

```html
<component is="TopNav"></component>
```



### keep-alive

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。

主要用于保留组件状态或避免重新渲染。

`<keep-alive>` 要求同时只有一个子元素被渲染。

```html
<keep-alive>
  <component :is="view"></component>
</keep-alive>

<keep-alive>
  <router-view></router-view>
</keep-alive>

<keep-alive>
  <Cpt-A v-if="..."></Cpt-A>
  <Cpt-B v-if="..."></Cpt-B>
  <Cpt-C v-if="..."></Cpt-C>
</keep-alive>
```



**条件过滤**

`include` 和 `exclude`

有效值：逗号分隔字符串、正则表达式、数组

```html
<keep-alive include="a,b,c"></keep-alive>

<keep-alive :exclude="['a', 'b', 'c']"></keep-alive>
```


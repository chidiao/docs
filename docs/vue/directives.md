# 指令

## v-for

遍历数组

```html
<li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
```

遍历对象

```html
<li v-for="(value, key, index) in object">{{ key }} : {{ value }}</li>
```

## v-cloak

解决模板未渲染完成而导致的页面闪烁问题

`<div>` 不会显示，直到编译结束

```html
<div v-cloak>{{ message }}</div>
```

```css
[v-cloak] {
  display: none;
}
```

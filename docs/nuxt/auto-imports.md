# Auto-imports

## @/components

自动导入此目录中的任何组件

```bash
| components/
--| AppHeader.vue
--| AppFooter.vue
```

```html
<template>
  <AppHeader />
  <AppFotter />
</template>
```

嵌套目录

```bash
| components/
--| mine/
----| Button.vue
----| MineButton.vue √

| components/
--| mine/
----| shop/
------| Card.vue
------| MineShopCard.vue √

# 两种写法均可
# 官方建议使用第二种写法
```

```html
<template>
  <MineButton />
  <MineShopCard />
</template>
```

## @/composables

自动导入此目录中的任何组合选项

```ts
// composables/useFoo.ts
export const useFoo = () => {
  return useState('foo', () => 'bar')
}
```

```ts
// composables/useFoo.ts
export default function () {
  return useState('foo', () => 'bar')
}
```

嵌套目录

```bash
| composables/
--| index.ts
--| more/
----| foo.ts ×
----| bar.ts ×

# Nuxt 不会扫描二级目录
# 可以手动导出，或者修改导入配置
```

```ts
// composables/index.ts
export { foo } from './more/foo'
export { bar } from './more/bar'
```

## @/utils

自动导入此目录中的任何方法和变量

```ts
// utils/index.ts
export const FOO = 'foo'
export const print = () => console.log(FOO)
```

# Grid

## Grid Template

## 应用

### 高度平滑过渡

<Height />

::: details Code
<<< ./height.vue
:::

```scss
.grid {
  display: grid;
  transition: all 0.3s;
  grid-template-rows: 0fr;

  &.show {
    grid-template-rows: 1fr;
  }

  .item {
    min-height: 0;
    overflow: hidden;
  }
}

// 过渡需要从0fr到1fr，0无法过渡
// 子元素需要设置min-height，否则仍然占据空间，导致无效
```

<script setup>
import Height from './height.vue'
</script>

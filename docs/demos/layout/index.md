# Layout

<script setup>
import FlexWrap from './flexWrap.vue'
import Grid from './grid.vue'
</script>

### flex-wrap 经典布局

<div class="my-4 py-4">
  <FlexWrap />
</div>

`gap` 和 `flex-wrap` 不太搭哦，需要处理一下边缘元素的间距

```css
.boxs {
  --gap: 15px;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: var(--gap);
  padding: var(--gap) 0 var(--gap) var(--gap);
}

.box {
  width: calc(25% - var(--gap));
}
```

### grid 经典布局

<div class="my-4 py-4">
  <Grid />
</div>

```css
.boxs {
  --gap: 15px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--gap);
  padding: var(--gap);
}
```

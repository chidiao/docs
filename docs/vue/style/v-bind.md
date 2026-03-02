# v-bind

样式绑定，动态变量

```vue
<script setup>
const color = ref('red')
const theme = ref({
  color: 'red'
})
</script>

<style>
.box {
  color: v-bind(color);
  color: v-bind('theme.color');
}
</style>
```

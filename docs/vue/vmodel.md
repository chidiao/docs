# v-model

```vue
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>
```

```html
<MyBlog v-model:title="title"></MyBlog>
```


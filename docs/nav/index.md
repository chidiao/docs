<script setup>
  import Index from './index.vue'
import NavGroup from './NavGroup.vue'
import { nav } from './navs.ts'
</script>

# 收藏夹

## 下载

<Index />
<NavGroup :links="nav" />

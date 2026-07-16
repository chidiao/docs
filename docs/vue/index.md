# Vue

Vue 基础、组件、样式和生态工具笔记入口。

<script setup>
const features = [
  {
    icon: '🌱',
    title: '响应式基础',
    details: 'ref、reactive、computed、watch 和生命周期。',
    link: '/vue/ref',
    linkText: '查看基础'
  },
  {
    icon: '🔁',
    title: '模板语法',
    details: 'v-for、v-if、常用指令和修饰符。',
    link: '/vue/directives',
    linkText: '查看模板'
  },
  {
    icon: '🧩',
    title: '组件通信',
    details: '组件、Props、Emits、Slot 和 v-model。',
    link: '/vue/components',
    linkText: '查看组件'
  },
  {
    icon: '🎨',
    title: '样式处理',
    details: 'Class & Style、Scoped、v-bind 和过渡动画。',
    link: '/vue/style/',
    linkText: '查看样式'
  },
  {
    icon: '🧭',
    title: 'Router',
    details: 'Vue Router 配置、路由表和常用写法。',
    link: '/vue/utils/router',
    linkText: '查看路由'
  },
  {
    icon: '📦',
    title: '状态管理',
    details: 'Pinia、Vuex 和项目状态管理笔记。',
    link: '/vue/utils/pinia',
    linkText: '查看状态'
  },
  {
    icon: '🌐',
    title: '国际化',
    details: 'i18n 配置和多语言项目实践。',
    link: '/vue/utils/i18n',
    linkText: '查看 i18n'
  },
  {
    icon: '🛠️',
    title: '工程配置',
    details: 'proxy 配置、常见问题和开发经验整理。',
    link: '/vue/proxy',
    linkText: '查看配置'
  },
  {
    icon: '🧰',
    title: 'UI Libs',
    details: '常用 Vue UI 库导航与组件库资源。',
    link: 'https://ui-libs.vercel.app/',
    linkText: '打开资源'
  }
]
</script>

<DocFeatures :features="features" />

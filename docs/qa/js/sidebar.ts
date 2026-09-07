import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'JavaScript',
    items: [
      { text: '闭包', link: '/qa/js/closure' },
      { text: '原型', link: '/qa/js/prototype' },
      { text: '网络', link: '/qa/js/http' },
      { text: '事件循环', link: '/qa/js/eventLoop' },
      { text: '性能', link: '/qa/js/performance' },
      { text: 'this', link: '/qa/js/this' }
    ]
  },
  {
    text: '基础',
    items: [{ text: '变量：var、let、const', link: '/qa/js/var' }]
  },
  {
    text: '类型',
    items: [
      { text: '数据类型', link: '/qa/js/type/' },
      { text: '对象', link: '/qa/js/type/object' },
      { text: '数组', link: '/qa/js/type/array' }
    ]
  }
]

export default sidebar

import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Vue',
    items: [
      { text: '概览', link: '/qa/vue/' },
      { text: 'Vue3', link: '/qa/vue/vue3' },
      { text: 'Router', link: '/qa/vue/router' },
      { text: 'Pinia', link: '/qa/vue/pinia' },
      { text: '通信', link: '/qa/vue/communication' }
    ]
  }
]

export default sidebar

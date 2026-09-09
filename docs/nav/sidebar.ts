import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '导航',
    items: [
      { text: 'Vue 生态', link: '/nav/vue' },
      { text: 'React 生态', link: '/nav/react' },
      { text: '开发工具', link: '/nav/tools' }
    ]
  }
]

export default { '/nav/': sidebar }

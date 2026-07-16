import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Windows',
    items: [
      { text: '开始', link: '/win/' },
      { text: '开发环境', link: '/win/env' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/win/': items
}

export default sidebar

import type { DefaultTheme } from 'vitepress'

export const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Windows',
    items: [
      { text: '开始', link: '/win/' },
      { text: '开发环境', link: '/win/env' }
    ]
  }
]

export default { '/win/': items } satisfies DefaultTheme.Sidebar

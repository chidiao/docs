import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Flutter',
    items: [
      { text: '安装', link: '/flutter/install' },
      { text: '路由', link: '/flutter/route' }
    ]
  },
  {
    text: 'Widgets',
    items: [{ text: 'ListView', link: '/flutter/listview' }]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/flutter/': items
}

export default sidebar

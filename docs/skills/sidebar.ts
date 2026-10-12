import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Skills',
    items: [
      { text: '概览', link: '/skills/' },
      { text: 'Nav & Sidebar 规范', link: '/skills/nav-sidebar/SKILL' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/skills/': items
}

export default sidebar

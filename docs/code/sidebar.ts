import type { DefaultTheme } from 'vitepress'

import { items as win } from '../win/sidebar.ts'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Code',
    items: [
      { text: 'Color', link: '/code/color' },
      { text: 'Time', link: '/code/time' }
    ]
  },
  {
    text: 'Utils',
    items: [
      { text: 'Git', link: '/code/git' },
      { text: 'Config', link: '/code/config/' },
      { text: '收藏夹', link: '/code/favorite' }
    ]
  },
  {
    text: 'IDE',
    items: [
      { text: '概览', link: '/code/ide/' },
      { text: 'VScode', link: '/code/ide/vscode' },
      { text: '常用插件', link: '/code/ide/ext' }
    ]
  },
  ...win
]

const sidebar: DefaultTheme.Sidebar = {
  '/code/': items,
  '/win/': items
}

export default sidebar

import type { DefaultTheme } from 'vitepress'

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
      { text: 'Config', link: '/code/config/' }
    ]
  },
  {
    text: 'IDE',
    items: [
      { text: '总览', link: '/code/ide/' },
      { text: 'VScode', link: '/code/ide/vscode' },
      { text: '常用插件', link: '/nav/ide-plugin' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/code/': items
}

export default sidebar

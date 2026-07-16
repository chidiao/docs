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
      { text: 'Config', link: '/code/config/' },
      { text: 'DST', link: '/code/dst' },
      { text: '收藏夹', link: '/code/favorite' }
    ]
  },
  {
    text: 'Vscode',
    items: [
      { text: '快捷使用', link: '/code/vscode/' },
      { text: '插件', link: '/code/vscode/plugin' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/code/': items
}

export default sidebar

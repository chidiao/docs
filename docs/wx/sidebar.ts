import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: '小程序',
    items: [
      { text: '登录', link: '/wx/login' },
      { text: 'tips', link: '/wx/tips' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/wx/': items
}

export default sidebar

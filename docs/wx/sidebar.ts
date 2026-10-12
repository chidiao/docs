import type { DefaultTheme } from 'vitepress'

export const items: DefaultTheme.SidebarItem[] = [
  {
    text: '小程序',
    items: [
      { text: '登录', link: '/wx/login' },
      { text: 'tips', link: '/wx/tips' }
    ]
  }
]

export default { '/wx/': items } satisfies DefaultTheme.Sidebar

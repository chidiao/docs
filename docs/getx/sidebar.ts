import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'GetX',
    items: [
      { text: 'Start', link: '/getx/' },
      { text: 'Route', link: '/getx/route' },
      { text: 'I18n', link: '/getx/i18n' },
      { text: 'Theme', link: '/getx/theme' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/getx/': items
}

export default sidebar

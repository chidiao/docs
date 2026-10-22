import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Code',
    items: [
      { text: 'Color', link: '/code/color' },
      { text: 'Time', link: '/code/time' },
      { text: 'Git', link: '/code/git' },
      { text: 'Docker', link: '/code/docker/' },
      { text: '宝塔', link: '/code/baota/' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/code/': items
}

export default sidebar

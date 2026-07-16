import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Html',
    items: [
      { text: 'Video', link: '/html/video' },
      { text: 'Label', link: '/html/label' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/html/': items
}

export default sidebar
